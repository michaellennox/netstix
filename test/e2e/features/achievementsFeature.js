describe('Achievements Features', function() {
  it('a user is able to create a new achievement', function() {
    browser.get('http://localhost:8080/#/achievements');

    var achievementsList = element.all(by.repeater('achievement in ctrl.achievements'));

    expect(achievementsList).toEqual([]);

    var createAchievementLink = element(by.css('a[href*="#/achievements/new"]'));

    createAchievementLink.click();

    expect(browser.getCurrentUrl()).toContain('#/achievements/new');

    var achievementTitleInput = element(by.css('input[name="title"]'));
    var achievementCriteriaInput = element(by.css('input[name="criteria"]'));
    var newAchievementForm = element(by.css('form'));

    achievementTitleInput.sendKeys('Create an achievement for the app');
    achievementCriteriaInput.sendKeys('This is where a user should write criteria');
    newAchievementForm.submit();

    expect(browser.getCurrentUrl()).toContain('#/achievements');
    expect(achievementsList.get(0).getText()).toEqual('Create an achievement for the app');
  });
});
