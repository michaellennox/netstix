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

describe('User Authentication', function() {
  it('a user can sign up, sign out and sign in', function() {
    browser.get('http://localhost:8080/#/achievements');

    var signUpLink = element(by.css('a[href*="#/register"]'));
    var signInLink = element(by.css('a[href*="#/login"]'));
    var signOutButton = element();

    expect(signUpLink.isDisplayed()).toBeTruthy();
    expect(signInLink.isDisplayed()).toBeTruthy();
    expect(signOutButton.isDisplayed()).toBeFalsy();

    signUpLink.click();

    expect(browser.getCurrentUrl()).toContain('#/register');

    var usernameInput = element(by.css('input[name="username"]'));
    var passwordInput = element(by.css('input[name="password"]'));
    var signUpForm = element(by.css('form'));

    usernameInput.sendKeys('test user');
    passwordInput.sendKeys('epicpassword');
    signUpForm.submit();

    expect(browser.getCurrentUrl()).toContain('#/achievements');
    expect(signUpLink.isDisplayed()).toBeFalsy();
    expect(signInLink.isDisplayed()).toBeFalsy();
    expect(signOutButton.isDisplayed()).toBeTruthy();

    signOutButton.click();

    var statusNotification = element(by.css('.alert-success'))

    expect(statusNotification.getText()).toEqual('Signed out successfully!');
    expect(browser.getCurrentUrl()).toContain('#/achievements');
    expect(signOutButton.isDisplayed()).toBeFalsy();

    signInLink.click();

    expect(browser.getCurrentUrl()).toContain('#/login');

    var signInForm = element(by.css('form'));

    usernameInput.sendKeys('test user');
    passwordInput.sendKeys('epicpassword');
    signInForm.submit();

    expect(browser.getCurrentUrl()).toContain('#/register');
    expect(signUpLink.isDisplayed()).toBeFalsy();
    expect(signInLink.isDisplayed()).toBeFalsy();
    expect(signOutButton.isDisplayed()).toBeTruthy();
  })
})
