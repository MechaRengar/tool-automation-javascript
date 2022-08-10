const puppeteerExtra = require ( 'puppeteer-extra')
const stealthPlugin = require ( 'puppeteer-extra-plugin-stealth')
require('dotenv').config();

(async () => {
    puppeteerExtra.use(stealthPlugin()); 
    const browser = await puppeteerExtra.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    await page.type('[type="email"]', process.env.gmailUsername);
    await page.click('#identifierNext');
    await page.waitForTimeout(1500);
    await page.type('[type="password"', process.env.password);
    await page.click('#passwordNext');
    await page.waitForTimeout(55000);
    await browser.close();
})();