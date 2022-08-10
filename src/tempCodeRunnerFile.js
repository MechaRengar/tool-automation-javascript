(async () => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto('https://www.sendo.vn/dam-om');
//   const data = await page.evaluate(() => {
//     let products = [];
//     const product_wrapper = document.querySelectorAll('.d7e-9582e2 img');
//     product_wrapper.forEach((prd) => {
//       console.log(prd.alt);
//       console.log(prd.src);
//         products.push({
//           title: prd.getAttribute("alt"),
//           url: prd.getAttribute("src")
//         });
//     });
//     return products;
//   });
//   console.log('🚀 data', data);
//   // writeStream.write(JSON.stringify(...data));
//   // await browser.close();
// })();