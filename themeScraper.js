const scraperObject = {
  async scraper(browser, req, res) {
    let page = await browser.newPage();
    await page.goto(req.query.site);
    let screenshot = await page
      .screenshot({ encoding: 'base64' })
      .then(function (data) {
        let base64Encode = `data:image/png;base64,${data}`;
        return base64Encode;
      });
    let themeInfo = await page.evaluate(() =>
      window.BOOMR?.themeName && window.BOOMR?.themeVersion
        ? {
            themeName: window.BOOMR.themeName,
            themeVersion: window.BOOMR.themeVersion,
			title: document.title

          }
        : {title: document.title}
    );
    const response = (themeInfo?.themeName && themeInfo?.themeVersion)
      ? {
          ...themeInfo,
          urlFull: req.query.site,
          fullUrl: req.query.site.replace(/^https?:\/\//, '').replace(/\/$/, ''),
          message: 'success',
          status: 1,
		  img: screenshot
        }
      : {
		  title: themeInfo.title,
          message: "Sorry, It's not a shopify store or no theme detected",
          status: 0,
		  img: screenshot
        };

    res.json(response);
  },
};

module.exports = scraperObject;
