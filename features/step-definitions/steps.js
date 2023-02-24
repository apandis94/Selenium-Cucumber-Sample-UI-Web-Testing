const { Given, Then, When, Before } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

const pages = {
  login: LoginPage,
};

describe("Web Element", () => {
  Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    await expect(LoginPage.containtext).toBeExisting();
  });

  When("user input username : {string} and input pass : {string}", async (username, password) => {
    await LoginPage.login(username, password);
  });

  When(/^I should see notification message saying gagal (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert2).toBeExisting();
    await expect(SecurePage.flashAlert2).toHaveTextContaining(message);
  });

  When(/^I should see notification message saying sukses (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
  });

  Then(/^Quit Browser$/, () => {
    LoginPage.quit();
  });
});
