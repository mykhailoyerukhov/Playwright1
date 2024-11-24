const { test, expect } = require('@playwright/test');
const registerPage = require('../pages/register.js');
const loginPage = require('../pages/login.js');
const searchClass = require('../pages/search.js');
const exp = require('constants');
const mainPage = require('../pages/mainpage.js');
const activityPage = require('../pages/activityPage.js');

test('Registration', async ({page}) => {
  // Go to redmine.org
  await page.goto('https://www.redmine.org/');
  const RegisterPage = new registerPage(page) // declare a class
  await RegisterPage.navigate() // Go to Sign in page

  // Fill the fields with the data and click "Submit"
  await RegisterPage.register('wtf', 'qwe123RTY!')
  await RegisterPage.fullName('Mike', 'Yerukhov')
  await RegisterPage.email1('fake@email.com')
  await RegisterPage.submit()
  const submitBtn1 = page.locator('input[name="commit"]')

  // Assertion
  await expect(submitBtn1).toBeVisible();
  
})

test('Logs in', async ({page}) => {

  const LoginPage = new loginPage(page) // Declaring a class

  await LoginPage.navigate() // Go to Login page

  // Fill the fields with valid data
  await LoginPage.toLogin('login2233', 'eztesting123')
  await LoginPage.submitButton()

  // Assertion: The button "My account" is shown on the main page.
  await expect(page.locator('[href="/my/account"]')).toBeInViewport()

})

test('Checks that the search bar shows relevant results', async ({page}) => {

  const SearchClass = new searchClass(page) // Class declaration

  await SearchClass.navigate() // Main page
  await SearchClass.toTypeIntoSearch('project management') // Put a phrase into the search bar
  await page.waitForLoadState('load')

  // Assertion
  await expect(page.locator('a:has-text("Wiki: DeRedmineCodeHighlightingLanguages")')).toBeVisible()

})

test('Checks the "Overview" page is available', async ({page}) => {
  const MainPage = new mainPage(page);

  // Go to redmine.org
  await MainPage.navigate() 

  // Go to Overview page
  await MainPage.clickOnOverview()

  // Assertion
  const urlResponse = await page.goto('https://www.redmine.org/projects/redmine')
  await expect(urlResponse.status()).toBe(200);
  await expect(page.url()).toBe('https://www.redmine.org/projects/redmine')

});

test('Finds a ticket #41785 in the feature section', async ({page}) => {

    const MainPage = new mainPage(page);

    // Go to redmine.org
    await MainPage.navigate()

    // Go to "Overview" tab in the nav bar
    await MainPage.clickOnOverview()
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);

    // Pick "Feature" item in the Issue tracking table.
    const feature =  page.locator('text=Feature').nth(0)
    await feature.click()
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);

    // Find such text '41785' in the Subject field and make an assertion
    const subjectText = await page.locator('td[class="subject"]').nth(1)
    expect(subjectText).toContainText('Add flag in \'Settings\' to apply default issues list view to subtasks')

})

test('Checks users activity of specific user (Go MAEDA), using filters and dropdown menu', async ({page}) => {

  const ActivityPage = new activityPage(page);
  // Go to redmine.org/activity
  await ActivityPage.navigate();

  // Click on "Activity" tab in the nav bar

  // Select User
  await ActivityPage.clickOnSelectUser();

  // Add checkboxes: Wiki, Changeset, News
  await ActivityPage.clickOnWikieditsCheckbox();
  await ActivityPage.clickOnChangesetsCheckbox();
  await ActivityPage.clickOnNewsCheckbox();
  await ActivityPage.clickOnWikieditsCheckbox();

  // Click Apply
  await ActivityPage.clickOnApplyButton()

  // Check and assert
  expect(page.locator('[href="/users/332"]').first()).toHaveText('Go MAEDA')
})

test('Checks downloading redmine, version redmine-5.0.10', async ({ page }) => {
  const MainPage = new mainPage(page);
  await test.step('Open the main page', async () => {
    const MainPage = new mainPage(page);
    await MainPage.navigate()
  });

  await test.step('Go to download page', async () => {
    const MainPage = new mainPage(page);
    await MainPage.clickOnDownload()
  });

  await test.step('Click on download URL', async () => {
    await expect(page.locator('[href="/releases/redmine-5.0.10.zip"]')).toHaveText('redmine-5.0.10.zip')
    await page.locator('[href="/releases/redmine-5.0.10.zip"]').click()
  });



});
