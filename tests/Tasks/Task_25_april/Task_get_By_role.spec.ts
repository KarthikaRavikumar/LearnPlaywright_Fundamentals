// Validate app.vwo.com using get by role locator
import { test, expect } from "@playwright/test";

test("Validate app.vwo.com login error message", async ({ page }) => {
  await page.goto("https://app.vwo.com/");
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("admin13@admin.com");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  let alt_msg = await page.getByText(
    "Your email, password, IP address or location did not match",
  );
  await expect(alt_msg).toHaveText(
    "Your email, password, IP address or location did not match",
  );
});
