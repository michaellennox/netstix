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

describe('Submissions Features', function() {
  it('a user can make a submission for a specific achievement', function() {

    browser.get('http://localhost:8080/#/achievements');

    var signUpLink = element(by.css('a[href*="#/register"]'));

    signUpLink.click();

    var usernameInput = element(by.css('input[name="username"]'));
    var passwordInput = element(by.css('input[name="password"]'));
    var signUpForm = element(by.css('form'));

    usernameInput.sendKeys('test user');
    passwordInput.sendKeys('epicpassword');
    signUpForm.submit();

    var createAchievementLink = element(by.css('a[href*="#/achievements/new"]'));

    createAchievementLink.click();

    var achievementTitleInput = element(by.css('input[name="title"]'));
    var achievementCriteriaInput = element(by.css('input[name="criteria"]'));
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
    var submissionCommentInput = element(by.css('input[name="comment"]'));
    var newSubmissionForm = element(by.css('form'));

    submissionLinkInput.sendKeys('A link to the relevant code or example');
    submissionCommentInput.sendKeys('A comment about the submission');
    newSubmissionForm.click();

    var achievementSubmissionsList = element.all(by.repeater('submissions in ctrl.submissions'));

    expect(browser.getCurrentUrl()).toContain('/achievements/:id');
    expect(achievementSubmissionsList.count()).toEqual(1);
    expect(achievementSubmissionsList.get(0).getText()).toEqual('test user');
  });
});
