const { chromium } = require('playwright');
// const { test, expect } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  // YOUR CODE STARTS
  const page = await browser.newPage();
  await page.goto('https://www.netflix.com');
  // queries "Login" text selector
  await page.click('text="Sign In"');
  await page.type('input[name="userLoginId"]', 'randomname@email.com', {
    delay: 100
  });
  await page.type('input[name="password"]', 'password', {
    delay: 100
  });
  await page.click('button[type="submit"]');

  console.log('errorText: ', await page.textContent('.ui-message-contents'));
  await page.waitForTimeout(1000);

  // await browser.close();
  // YOUR CODE ENDS
})();
