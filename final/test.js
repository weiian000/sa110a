const puppeteer = require('puppeteer');

(async () => {

  // 開啟 browser
  const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized']
  });
  // 新增分頁
  const page = await browser.newPage();
  
  await page.goto(`http://127.0.0.1:8000`);
  await page.waitForTimeout(3000);
  await page.click('a[href="/signup"]');//按下create account
  await page.waitForTimeout(3000);
  await page.type('input[name ="username"]','aaa')//輸入aaa
  await page.waitForTimeout(2000);
  await page.type('input[name ="password"]','123')
  await page.waitForTimeout(2000);
  await page.type('input[name ="email"]','123@gmail.com')
  await page.waitForTimeout(3000);
  await page.click('input[value = "signup"]');//點擊超連結
  await page.waitForTimeout(3000);
  await page.click('a[href="/"]');
  await page.waitForTimeout(3000);
  await page.type('input[name ="username"]','aaa')
  await page.waitForTimeout(2000);
  await page.type('input[name ="password"]','123')
  await page.waitForTimeout(2000);
  await page.type('input[name ="email"]','123@gmail.com')
  await page.waitForTimeout(3000);
  await page.click('input[value = "Login"]');
  await page.waitForTimeout(3000);
  await page.click('a[href="/calendar"]');
  await page.waitForTimeout(3000);
  await page.click('button[class = "pre"]');//跳到前一個月份
  await page.waitForTimeout(2000);
  await page.click('button[class = "pre"]');
  await page.waitForTimeout(2000);
  await page.click('button[class = "pre"]');
  await page.waitForTimeout(2000);
  await page.click('button[class = "next"]');
  await page.waitForTimeout(2000);
  await page.click('button[class = "next"]');
  await page.waitForTimeout(2000);
  await page.click('button[class = "next"]');
  await page.waitForTimeout(3000);
  await page.click('a[href="/post/new"]');
  await page.waitForTimeout(3000);
  await page.type('input[name ="title"]','2022/1/13')
  await page.waitForTimeout(3000);
  await page.type('textarea[name ="body"]','祝大家新年快樂')
  await page.waitForTimeout(3000);
  await page.click('input[value = "Create"]');
  await page.waitForTimeout(3000);
  await page.click('a[href="/post/1"]');
  await page.waitForTimeout(3000);
  await page.goBack()
  await page.waitForTimeout(2000);
  await page.click('a[href="/logout"]');
  await page.waitForTimeout(4000);
  await browser.close();//關閉網頁
  




  





})()