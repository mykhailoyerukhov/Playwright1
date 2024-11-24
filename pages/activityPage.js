
class activityPage {
    constructor(page) {

        this.page = page;
        this.url = 'https://www.redmine.org/projects/redmine/activity' ;
        // Navigation bar items
        this.overview = '//*/a[contains(text(), "Overview")]';
        this.download = '//*/a[contains(text(), "Download")]';
        this.activity = '//*/a[contains(text(), "Activity")]';
        this.roadmap = '//*/a[contains(text(), "Roadmap")]';
        this.issues = '//*/a[contains(text(), "Issues")]';
        this.news = '//*/a[contains(text(), "News")]';
        this.Wiki = '//*/a[contains(text(), "Wiki")]';
        this.forums = '//*/a[contains(text(), "Forums")]';
        this.repository = '//*/a[contains(text(), "Repository")]';
        // Search
        this.searchbar = '//input[@id="q"]'

        // Activity page
        this.selectUser = '//select[@id="user_id"]'
        this.issuesCheckbox = '//input[@id="show_issues"]'
        this.changesetsCheckbox = '//input[@id="show_changesets"]'
        this.newsCheckbox = '//input[@id="show_news"]'
        this.wikieditsCheckbox = '//input[@id="show_wiki_edits"]'
        this.messagesCheckbox = '//input[@id="show_messages"]'
        this.subprojectsCheckbox = '//input[@id="with_subprojects"]'
        this.applybutton = '//input[@class="button-small"]'
    }

    // Methods

    // MainPage methods
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

    // Methds on Activity Page
    async clickOnSelectUser() {
        await this.page.click(this.selectUser)
    }
    async clickOnIssuesCheckbox() {
        await this.page.click(this.issuesCheckbox)
    }
    async clickOnChangesetsCheckbox() {
        await this.page.click(this.changesetsCheckbox)
    }
    async clickOnNewsCheckbox() {
        await this.page.click(this.newsCheckbox)
    }
    async clickOnWikieditsCheckbox() {
        await this.page.click(this.wikieditsCheckbox)
    }
    async clickOnMessagesCheckbox() {
        await this.page.click(this.messagesCheckbox)
    }
    async clickOnSubprojectsCheckbox() {
        await this.page.click(this.subprojectsCheckbox)
    }
    async clickOnApplyButton() {
        await this.page.click(this.applybutton)
    }

}

module.exports = activityPage