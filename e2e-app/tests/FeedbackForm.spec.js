import { test, expect } from "@playwright/test";

test("Feedback flow works correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(page.locator("text=Thank you for purchasing")).toBeVisible();

  await page.locator('[data-test="leave-feedback"]').click();

  await page.locator('[data-test="name"]').fill("John Doe");
  await page.locator('[data-test="email"]').fill("john@example.com");
  await page.locator('[data-test="message"]').fill("Awesome product!");

  await page.locator('[data-test="submit"]').click();

  await expect(page.locator("text=Thank you for your feedback!")).toBeVisible();
});
