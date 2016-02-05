var mongoose = require('mongoose');

beforeEach(function() {
  mongoose.connect('mongodb://localhost/makers-achievements-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

afterEach(function() {
  mongoose.connect('mongodb://localhost/makers-achievements-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

describe('Profiles/leaderboard Features', function() {
  it('a user can see the leaderboard after submitting an achievement and view their own profile with individual achievements', function() {

    browser.get('http://localhost:8080/#/achievements');

    var signUpLink = element(by.css('a[href*="#/register"]'));

    signUpLink.click();

    var usernameInput = element(by.css('input[name="username"]'));
    var passwordInput = element(by.css('input[name="password"]'));
    var signUpForm = element(by.css('form'));

    usernameInput.sendKeys('test user');
    passwordInput.sendKeys('epicpassword');
    signUpForm.submit();

    var header = element(by.css('header'));
    var createAchievementLink = header.element(by.css('a[href*="#/achievements/new"]'));

    createAchievementLink.click();

    var achievementTitleInput = element(by.css('input[name="title"]'));
    var achievementCriteriaInput = element(by.css('textarea[name="criteria"]'));
    var newAchievementForm = element(by.css('form'));

    achievementTitleInput.sendKeys('Create an achievement for the app');
    achievementCriteriaInput.sendKeys('This is where a user should write criteria');
    newAchievementForm.submit();

    var achievementsList = element.all(by.repeater('achievement in ctrl.achievements'));
    var viewAchievementLink = achievementsList.get(0).element(by.css('a[href*="#/achievements/"]'));

    viewAchievementLink.click();

    var createSubmissionLink = element(by.css('a[href*="/submissions/new"]'));

    createSubmissionLink.click();

    expect(browser.getCurrentUrl()).toContain('/submissions/new');

    var submissionLinkInput = element(by.css('input[name="link"]'));
    var submissionCommentInput = element(by.css('textarea[name="comment"]'));
    var newSubmissionForm = element(by.css('form'));

    submissionLinkInput.sendKeys('A link to the relevant code or example');
    submissionCommentInput.sendKeys('A comment about the submission');
    newSubmissionForm.submit();

    var achievementSubmissionsList = element.all(by.repeater('submission in ctrl.achievement.submissions'));

    expect(browser.getCurrentUrl()).toContain('/achievements/');
    expect(achievementSubmissionsList.count()).toEqual(1);
    expect(achievementSubmissionsList.get(0).getText()).toEqual('test user');

    var viewLeaderboardLink = element(by.css('.navbar-brand'));

    viewLeaderboardLink.click();

    var leaderboardList = element.all(by.repeater('user in ctrl.users'));

    expect(browser.getCurrentUrl()).toContain('#/');
    expect(leaderboardList.count()).toEqual(1);
    expect(leaderboardList.get(0).getText()).toContain('test user');

    var viewProfileLink = leaderboardList.get(0).element(by.css('a[href*="#/users/"]'));

    viewProfileLink.click();

    var trophyCabinetList = element.all(by.repeater('submission in ctrl.user.submissions'));

    expect(browser.getCurrentUrl()).toContain('#/users/');
    expect(trophyCabinetList.count()).toEqual(1);
    expect(trophyCabinetList.get(0).getText()).toContain('Create an achievement for the app');

  });
});
