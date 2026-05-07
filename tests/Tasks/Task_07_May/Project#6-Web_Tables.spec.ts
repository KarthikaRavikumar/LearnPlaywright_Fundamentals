import { test, expect } from "@playwright/test";

test("Select a DropDown Element", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  //clear the selection history
  await page.getByRole("button", { name: "Clear" }).click();
  //clcikon the button - 'Select Cloud QA'
  await page.getByRole("button", { name: "Select Cloud QA" }).click();
  //Checking the checkbox for 'Select Kabir.Khan'
  await page.getByRole("checkbox", { name: "Select Kabir.Khan" }).check();
  //Submission Validation
  let final = await page.locator("#selected-output");
  expect(final).toContainText("Kabir.Khan");
});
