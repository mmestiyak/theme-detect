const browserObject = require('./browser');
const themeScraper = require('./themeScraper');

module.exports = async (req, res) => {
  //Start the browser and create a browser instance
  let browserInstance = browserObject.startBrowser();
  let browser;
  
  try {
    browser = await browserInstance;
    await themeScraper.scraper(browser, req, res);
    browser.close();
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err);
  }
};
