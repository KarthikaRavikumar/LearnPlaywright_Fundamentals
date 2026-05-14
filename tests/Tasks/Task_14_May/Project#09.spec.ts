import { test, expect } from "@playwright/test";

test.describe("Project #9: Project#9 - Shadow DOM, Calendars", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://selectorshub.com/xpath-practice-page/");
  });
  test("Shadow DOM Handling", async ({ page }) => {
    await page.locator("#kils").fill("John Doe");
    await page.locator("#pizza").fill("Margherita");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.type("Playwright");
    await page.keyboard.press("Tab");
    await page.keyboard.type("password123");
    await page
      .locator("//*[@id='content']/div[2]/div/div[2]/div/div[3]/div[2]/div/a")
      .click();
    await page.waitForTimeout(5000);
  });
});
