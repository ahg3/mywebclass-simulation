// @ts-check
const { test, expect } = require('@playwright/test');

test('Should have MyWebClass.org title', async ({ page }) => {
  // Navigate to the page and wait for it to load.
  await page.goto('http://localhost:3000', { timeout: 10000 });

  // Wait for the page to stabilize and for any animations to complete.
  await page.waitForTimeout(2000);

  // Get the title of the page and check if it contains the expected substring.
  const pageTitle = await page.title();
  await expect(pageTitle).toMatch('MyWebClass.org');
});
