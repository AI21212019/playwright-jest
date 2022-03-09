// const { chromium } = require('playwright');
// const { test, expect } = require('@playwright/test');
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
beforeAll(async () => {
  browser = await chromium.launch({
    headless: false
  });
});
afterAll(async () => {
  await browser.close();
});

let page: Page;
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

test('login error', async () => {
  // const browser = await chromium.launch({
  //   headless: false
  // });

  // // YOUR CODE STARTS
  // const page = await browser.newPage();
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
  expect(await page.textContent('.ui-message-contents')).not.toBe('');
  expect(await page.textContent('.ui-message-contents')).toBe(
    "Sorry, we can't find an account with this email address. Please try again or create a new account."
  );
  await page.waitForTimeout(1000);

  await browser.close();
  // YOUR CODE ENDS
});
export {};
