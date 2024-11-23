// Classes

class registerPage {
    constructor(page)  {
        this.page = page;
        this.usernameField = 'input#user_login'
        this.passwordField = 'input#user_password'
        this.passwordConfirmation = 'input#user_password_confirmation'
        this.url = 'https://www.redmine.org/account/register'

        this.firstName = 'input#user_firstname'
        this.LastName = 'input#user_lastname'

        this.emailField = 'input#user_mail'
        this.loginButton = 'input[name="commit"]'
    }
    async navigate() {
        await this.page.goto(this.url)
    }

    async register(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.fill(this.passwordConfirmation, password);
    }

    async fullName(name, surname) {
        await this.page.fill(this.firstName, name)
        await this.page.fill(this.LastName, surname)
    }

    async email1(someEmail) {
        await this.page.fill(this.emailField, someEmail)
    }
    async submit() {
        await this.page.click(this.loginButton)
    }
}
module.exports = registerPage;