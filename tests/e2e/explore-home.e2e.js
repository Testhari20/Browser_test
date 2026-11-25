// Proposed by the AI regression agent after exploring "/" in a browser.
const { test, expect } = require('@playwright/test');

const BASE_URL = "http://127.0.0.1:8000";

test("home page loads", async ({ page }) => {
  const response = await page.goto(BASE_URL + "/");
  expect(response && response.status()).toBeLessThan(400);
  await expect(page).toHaveTitle("Home");
  await expect(page.getByRole('heading', { name: "Home" }).first()).toBeVisible();
});
