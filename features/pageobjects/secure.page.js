const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  get flashAlert() {
    return $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-trlcwy > div:nth-child(1) > div > dl > dt");
  }

  get flashAlert2() {
    return $("#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3");
  }
}

module.exports = new SecurePage();
