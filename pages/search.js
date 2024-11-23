class searchClass {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.redmine.org/'

        this.searchField = '//input[@name="q"][@id="q"]'
    }

    async navigate() {
        await this.page.goto(this.url)
    }
    async toTypeIntoSearch(value) {
        await this.page.fill(this.searchField, value)
        await this.page.locator(this.searchField).press('Enter')

    }


}
module.exports = searchClass;