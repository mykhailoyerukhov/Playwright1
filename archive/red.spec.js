// @ts-check
const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {
  // Go to redmine.org
  await page.goto('https://www.redmine.org/'); 

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Overview - Redmine/);
});

test('to choose login button', async ({ page }) => {

  // Go to redmine.org
  await page.goto('https://www.redmine.org/'); 

  const signIn = page.locator('[href="/login"]'); // Выбор кнопки Логин
  await signIn.click(); // Кликнуть по кнопке Login
  
  // Проверка что на странице Login через url
  await expect(page).toHaveTitle(/Redmine/);
  await expect(page).toHaveURL('https://www.redmine.org/login');
  
});

test('Login button is enable', async ({page}) => {

  // Go to login page
  await page.goto('https://www.redmine.org/login'); 
    // Input name and username
    const userName = page.locator('input#username'); // Выбор поля Username
    await page.fill('input#username', 'misha123') // Имя пользователя
    await page.fill('input#password', 'qweRTY123!') // Пароль
    await page.locator('input#autologin').click() // Включить опцию Stay logged in
  
    const loginButton = await page.locator('input[id="login-submit"]') // Одна переменная - для локатора кнопки
    const loginButtonisEnabled = await loginButton.isEnabled()  
    const loginButtonisVisible = await loginButton.isVisible()  
    expect(loginButtonisEnabled).toBeTruthy() // Проверка кнопки на доступ
    expect(loginButtonisVisible).toBeTruthy() // Проверка кнопки на видимость
    
    console.log('Кнопка Login - активна')
});