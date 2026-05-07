import { test, expect } from "@playwright/test";

test("Select a DropDown Element", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  //clear the selection history
  await page.getByRole("button", { name: "Clear" }).click();
  //enter value
  await page.locator("#employee-search").fill("Kabir.Khan");
  //check for the option below the dropdown'
  await page.locator('td:has-text("Kabir.Khan")').isVisible();
  //click on the checkbox
  await page.getByRole("checkbox", { name: "Select Kabir.Khan" }).click();
  //check the checkbox is clickable
  await page.getByRole("checkbox", { name: "Select Kabir.Khan" }).isChecked();
});
