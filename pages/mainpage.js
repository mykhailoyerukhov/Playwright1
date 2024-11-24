
class mainPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.redmine.org' ;
        this.overview = '//*/a[contains(text(), "Overview")]';
        this.download = '//*/a[contains(text(), "Download")]';
        this.activity = '//*/a[contains(text(), "Activity")]';
        this.roadmap = '//*/a[contains(text(), "Roadmap")]';
        this.issues = '//*/a[contains(text(), "Issues")]';
        this.news = '//*/a[contains(text(), "News")]';
        this.Wiki = '//*/a[contains(text(), "Wiki")]';
        this.forums = '//*/a[contains(text(), "Forums")]';
        this.repository = '//*/a[contains(text(), "Repository")]';

        this.searchbar = '//input[@id="q"]'
    }

    async navigate() {
        await this.page.goto(this.url)
    }

    async clickOnOverview() {
        await this.page.click(this.overview)
    }
    async clickOnDownload() {
        await this.page.click(this.download)
    }
   async clickOnActivity() {
        await this.page.click(this.activity)
    }
    async clickOnRoadmap() {
        await this.page.click(this.roadmap)
    }
    async clickOnIssues() {
        await this.page.click(this.issues)
    }
    async clickOnNews() {
        await this.page.click(this.news)
    }
    async clickOnWiki() {
        await this.page.click(this.Wiki)
    }
    async clickOnForums() {
        await this.page.click(this.forums)
    }
    async clickOnRepository() {
        await this.page.click(this.repository)
    }
    async clickOnSearchBar() {
        await this.page.click(this.searchbar)
    }


}

module.exports = mainPage