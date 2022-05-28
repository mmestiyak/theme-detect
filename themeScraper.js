const scraperObject = {
	async scraper(browser, url, res){
		let page = await browser.newPage();
		await page.goto(url);
		let themeInfo = await page.evaluate(() => ({themeName: window.BOOMR.themeName, themeVersion: window.BOOMR.themeVersion}))
		// res.json(themeInfo)
		// console.log(res)
		// console.log(res)
		res.json(themeInfo)
		// console.log(themeInfo)

		
	}
}

module.exports = scraperObject;