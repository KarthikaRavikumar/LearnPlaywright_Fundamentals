import { test, expect } from "@playwright/test";

test("TTA Bank Create account", async ({ page }) => {
  await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

  await page.getByRole("button", { name: "Sign Up" }).click();

  const nameInput = page.getByPlaceholder("John Doe");

  await nameInput.fill("Karthika");

  // Correct way to get input field value
  const enteredName = await nameInput.inputValue();

  await page
    .getByPlaceholder("you@example.com")
    .fill("karthika.ramesh@example.com");

  await page.getByRole("textbox", { name: "••••••••" }).fill("Password123");

  await page.getByRole("button", { name: "Create Account" }).click();

  // Assert using actual displayed username
  const accountName = await page
    .locator("span.truncate.text-sm.font-medium.text-white:visible")
    .textContent();

  expect(accountName?.trim()).toBe(enteredName);

  // Validate the amount transfer
  await page.getByRole("button", { name: "Transfer Funds" }).click();
  let amount = "100";
  await page.getByPlaceholder("0.00", { exact: true }).click();
  await page.getByPlaceholder("0.00", { exact: true }).fill(amount);
  await page
    .getByRole("textbox", { name: "e.g. Rent for October" })
    .fill("Test Transfer");
  await page.getByRole("button", { name: "Continue" }).click();
  let displayedAmount = await page
    .locator("span.text-xl.font-bold.text-slate-800:visible")
    .textContent();
  expect(displayedAmount?.trim()).toContain(`$${amount}`);
  await page.getByRole("button", { name: "Confirm Transfer" }).click();

  //navigate to dashboard to validate the transfer
  await page.getByRole("button", { name: "Dashboard" }).click();
  let total = await page.locator("h3.mt-2.text-3xl.font-bold").textContent();
  const expectedTotal = 50000 - parseInt(amount);
  const finalTotal =
    "$" +
    Number(expectedTotal).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  expect(total?.trim()).toBe(finalTotal);

  page.close();
});
