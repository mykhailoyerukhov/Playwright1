// Classes

class loginPage {
    constructor(page)  {
        this.page = page;
        this.url = 'https://www.redmine.org/login'

        this.usernameField = 'input#username'
        this.passwordField = 'input#password'

        this.submitButtonField = 'input#login-submit'
    }
    async navigate() {
        await this.page.goto(this.url)
    }

    async toLogin(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
    }

    async submitButton() {
        await this.page.click(this.submitButtonField)
    }
}
module.exports = loginPage;