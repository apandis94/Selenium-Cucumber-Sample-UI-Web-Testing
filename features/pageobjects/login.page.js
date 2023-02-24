const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#email");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#root > div > div > div > div.css-1w7v3tn > div > button");
  }

  get containtext() {
    return $("#root > div > div > div > div.css-104g6p0 > h2");
  }

  get delay() {
    this.delay(60000);
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  async open() {
    return super.open("login");
    this.delay(60000);
  }

  quit() {
    return super.quit("login");
  }
}

module.exports = new LoginPage();
