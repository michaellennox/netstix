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

describe('Achievements Features', function() {
  it('a user can create an achievement, view a list of achievements then view a specific achievement', function() {
    browser.get('http://localhost:8080/#/achievements');

    var signUpLink = element(by.css('a[href*="#/register"]'));

    signUpLink.click();

    var usernameInput = element(by.css('input[name="username"]'));
    var passwordInput = element(by.css('input[name="password"]'));
    var signUpForm = element(by.css('form'));

    usernameInput.sendKeys('test user');
    passwordInput.sendKeys('epicpassword');
    signUpForm.submit();

    var achievementsList = element.all(by.repeater('achievement in ctrl.achievements'));

    expect(achievementsList.count()).toEqual(0);

    var createAchievementLink = element(by.css('a[href*="#/achievements/new"]'));

    createAchievementLink.click();

    expect(browser.getCurrentUrl()).toContain('#/achievements/new');

    var achievementTitleInput = element(by.css('input[name="title"]'));
    var achievementCriteriaInput = element(by.css('textarea[name="criteria"]'));
    var newAchievementForm = element(by.css('form'));

    achievementTitleInput.sendKeys('Create an achievement for the app');
    achievementCriteriaInput.sendKeys('This is where a user should write criteria');
    newAchievementForm.submit();

    expect(achievementsList.count()).toEqual(1);
    expect(browser.getCurrentUrl()).toContain('#/achievements');
    expect(achievementsList.get(0).getText()).toEqual('Create an achievement for the app');

    var viewAchievementLink = achievementsList.get(0).element(by.css('a[href*="#/achievements/"]'));

    viewAchievementLink.click();

    var achievementTitle = element(by.binding('achievement.title'));
    var achievementCriteria = element(by.binding('achievement.criteria'));

    expect(browser.getCurrentUrl()).toContain('#/achievements/');
    expect(achievementTitle.getText()).toEqual('Create an achievement for the app');
    expect(achievementCriteria.getText()).toEqual('This is where a user should write criteria');
  });
});
