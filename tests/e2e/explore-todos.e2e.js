// Proposed by the AI regression agent after exploring "/todos" in a browser.
const { test, expect } = require('@playwright/test');

const BASE_URL = "http://127.0.0.1:8000";

test("todos page loads", async ({ page }) => {
  const response = await page.goto(BASE_URL + "/todos");
  expect(response && response.status()).toBeLessThan(400);
  await expect(page).toHaveTitle("Todos");
  await expect(page.getByRole('heading', { name: "Todos" }).first()).toBeVisible();
});
