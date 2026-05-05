import { test, expect } from "@playwright/test";
// https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage

test("Error message validation", async ({ page }) => {
  await page.goto(
    "https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage",
  );
  await page
    .getByLabel("Business Email", { exact: true })
    .fill("admin@gmail.com");
  await page
    .getByRole("checkbox", { name: /I agree to VWO's Privacy Policy & Terms/i })
    .click();
  await page
    .getByRole("button", { name: "Create a Free Trial Account" })
    .click();
  let error_msg = page.getByText(
    "gmail.com doesn't look like a business domain. Please use your business email.",
  );
  let msg = await error_msg.textContent();
  await expect(msg).toBe(
    "gmail.com doesn't look like a business domain. Please use your business email.",
  );
});
