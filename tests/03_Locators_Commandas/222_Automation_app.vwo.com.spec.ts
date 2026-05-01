import { test, expect } from "@playwright/test";

test("Locators in VWO app", async ({ page }) => {
  await page.goto("https://app.vwo.com/#/login");

  let emailInput = page.locator("#login-username"); //locating the email input field using id
  let passwordInput = page.locator("#login-password"); //locating the password input field using id
  let loginButton = page.locator("#js-login-btn"); //locating the login button using id

  await emailInput.fill("admin@admin.com");
  await passwordInput.fill("admin123");
  await loginButton.click();

  // Assertion to verify successful login
  await expect(page.locator("#js-notification-box-msg")).toHaveText(
    "Your email, password, IP address or location did not match",
  );
});
