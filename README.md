# Project of testing website redmine.org using Playwright tool

This project is using [Playwright](https://playwright.dev/ )  

## How to install:

You need to have [Node.js](https://nodejs.org/en/download/package-manager) installed on your machine.
Also you need to have [Java](https://www.oracle.com/java/technologies/downloads/?er=221886) installed on your PC. Besides, you need to set environment variables - add new variable `JAVA_HOME` and set path to JAVA into **PATH**. 
Install git client - [git bash](https://git-scm.com/downloads)

Installation of the project

1. Clone the repository:
```
git clone
cd *path to your project*
npm install
npm start
```

2. Install dependencies:

    - Install [Playwright] (https://playwright.dev/ )
        + Install Playwright:
        `npm init playwright@latest`
        + Run Playwright:
        `npx playwright test`
        + Run HTML Test Reports:
        `npx playwright show-report`
        + Run Playwright test in UI mode:
        `npx playwright test --ui`
        + Run Playwright in headed mode:
        `npx playwright test --headed`
        and headless mode:
        `npx playwright test --headless`

        How to update Playwright:
        `npm install -D @playwright/test@latest`

    - Install Allure reports
        + Install dependencies
        `npm install --save-dev allure-playwright allure-commandline`
        + Make sure that `allure-commandline` has installed globally (optional, for more comfortable calls of commands)
        `npm install -g allure-commandline`
        + In `playwright.config.ts` add next configuration:
        ```
        reporter: [
        ['list'], // Стандартный репортер Playwright
        ['allure-playwright'] // Подключение Allure
        ],
        ```
3. How to run:
    - Main info is in the `package.json` with description, all installed components for this projects, and scripts.
    - No additional changes in `playwright.config.js`, unless for installing Allure reports. 
    - All tests are located in the `redmine.spec.js` file.

    - Scripts (all scripts running the same file `redmine.spec.js`):
        + `npm run test:pl` - run tests in an ordinar mode
        + `"test:pl-ui"` - run tests using UI interface
        + `"test:pl-headed"` - run tests in headed mode
        + `"allure:generate"` - generates allure report
        + `"allure:open"` - opens allure report window

    Allure:
    - To remove allure reports and results:
    `Remove-Item -Recurse -Force allure-results`,
    `Remove-Item -Recurse -Force allure-report`. 


