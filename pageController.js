const themeScraper = require('./themeScraper');
async function scrapeAll(browserInstance, url){
	let browser;
	try{
		browser = await browserInstance;
		await themeScraper.scraper(browser, url );	
        browser.close()
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance, url) => scrapeAll(browserInstance, url)