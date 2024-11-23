const { test, expect } = require('@playwright/test');
const registerPage = require('../pages/register.js');
const loginPage = require('../pages/login.js');
const searchClass = require('../pages/search.js');

test('To register on a website', async ({page}) => {
  // Go to redmine.org
  await page.goto('https://www.redmine.org/');

  const RegisterPage = new registerPage(page) // Объявление класса

  await RegisterPage.navigate()

  await RegisterPage.register('wtf', 'qwe123RTY!')
  await RegisterPage.fullName('Mike', 'Yerukhov')
  await RegisterPage.email1('fake@email.com')
  await RegisterPage.submit()

})

test('to log in', async ({page}) => {
  const LoginPage = new loginPage(page)

  await LoginPage.navigate()
  await LoginPage.toLogin('fake@company.com', 'qwe123RTY!')
  await LoginPage.submitButton()
})

test('search enginer search correct results', async ({page}) => {

  const SearchClass = new searchClass(page)

  await SearchClass.navigate()
  await SearchClass.toTypeIntoSearch('help')

  await page.waitForLoadState('load')
})

test('Chech Overview is visible', async ({page}) => {
  // Go to redmine.org
  await page.goto('https://www.redmine.org/'); 

  // Go to Overview
  const overViewBtn = page.locator('[href="/projects/redmine"]')
  await overViewBtn.click()

});

test('#41785 in the feature section can be found', async ({page}) => {
    // Go to redmine.org
    await page.goto('https://www.redmine.org/'); 

    // Go to Overview
    const overViewBtn =  page.locator('[href="/projects/redmine"]')
    await overViewBtn.click()
    // Pick "Feature" item in the Issue tracking table.
    const feature =  page.locator('a[href="/projects/redmine/issues?set_filter=1&tracker_id=2"]').nth(0)
    await feature.click()

    // Find a record #41785 and compare the title
    const numberOfTicket = await page.locator('a[href="/issues/41785"]').filter( {hasText: '41785' } );
    expect(numberOfTicket).toHaveText('41785')

    // Find the Subject field and make an assertion
    const subjectText = await page.locator('a[href="/issues/41785"]').nth(1)
    expect(subjectText).toContainText('Add flag in \'Settings\' to apply default issues list view to subtasks')
})




test('checks users activity of a user Go MAEDA, using filters and dropdown menu', async ({page}) => {
  // Go to redmine.org
  await page.goto('https://www.redmine.org/'); 
  // Click on Activity item in menu bar
  await page.locator('//a[contains(text(), "Activity")]').click()

  // Pick a user - Go MAEDA, click on checkboxes "Messages", "Issues", click on Apply button

  await page.locator('//select[@id="user_id"]').click()
  await page.selectOption('//select[@id="user_id"]', '')
})

