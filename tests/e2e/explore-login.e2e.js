// Proposed by the AI regression agent after exploring "/login" in a browser.
const { test, expect } = require('@playwright/test');

const BASE_URL = "http://127.0.0.1:8000";

test("login page loads", async ({ page }) => {
  const response = await page.goto(BASE_URL + "/login");
  expect(response && response.status()).toBeLessThan(400);
  await expect(page).toHaveTitle("Login");
  await expect(page.getByRole('heading', { name: "Login" }).first()).toBeVisible();
});
