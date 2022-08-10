const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.sendo.vn/dam-om');
  const imgLinks = await page.evaluate(() => {
    let imgElements = document.querySelectorAll('.d7e-9582e2 img');
    imgElements = [...imgElements];
    let imgLinks = imgElements.map(i => i.getAttribute('src'));
    return imgLinks;
});
    console.log(imgLinks);
})();

