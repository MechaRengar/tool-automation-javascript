const puppeteer = require('puppeteer');
require('dotenv').config();

const username = process.env.USER;
const password = process.env.PASS;
const Việt = process.env.Viet;
// const Thuỳ = process.env.Thuy;
(async () => {
  let i = 1;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://m.facebook.com');
  await page.type('#m_login_email', username);
  await page.type('#m_login_password', password);
  await page.click("button[name='login']");
  // đợi trang tải xong
  await page.waitForNavigation();
  await page.goto(`https://m.facebook.com/messages/thread/${Việt}/`);
  while (i < 1001) {
    await page.type('#composerInput', `${i}. trộm vía\n`);
    if (i % 50 == 0) {
      await page.click("button[name='send']");
    }
    i++;
  }
  console.log('Done!');
  await browser.close();
})();
