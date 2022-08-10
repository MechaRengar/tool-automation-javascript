const puppeteer = require('puppeteer');
const fs = require('fs');
const schedule = require('node-schedule');

const gatherNewsItems = async () => {
  //  khởi chạy một trình duyệt
  const browser = await puppeteer.launch();
  //  khởi tạo một trang
  const page = await browser.newPage();
  const newsTitles = await getNewsTitles(page);
  fs.writeFile(
    'newsitems.json',
    JSON.stringify(newsTitles),
    'utf8',
    (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log('created!');
      }
    }
  );
  await browser.close();
}
schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
  gatherNewsItems();
});
async function getNewsTitles(page) {
  await page.goto('https://www.thetimes.co.uk/?region=global');
  return (results = await page.evaluate(() => {
    const allTitles = document.querySelectorAll('.Item-headline a', {
      waitUntil: 'networkidle2',
    });
    return Array.from(allTitles)
      .slice(0, 10)
      .map((title) => {
        let res = {
          title: title.textContent,
          link: title['href'],
        };
        return res;
      });
  }));
}
