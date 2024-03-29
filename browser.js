const puppeteer = require('puppeteer');

async function startBrowser() {
  let browser;
  try {
    console.log('Opening the browser......');
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--incognito',
        '--single-process',
        '--no-zygote',
      ],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log('Could not create a browser instance => : ', err);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
