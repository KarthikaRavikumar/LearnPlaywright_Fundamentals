import { test, expect } from "@playwright/test";

test("Fill The form and submit the Profile ", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/practice",
  );
  let First_Name = page.getByLabel("First name");
  await First_Name.fill("Karthika");
  let Last_Name = page.getByLabel("Last name");
  await Last_Name.fill("Ramesh");
  let Gender = page.getByLabel("Female");
  await Gender.click();
  //Selecting years of experiance as '7' from dropdown
  await page.getByRole("combobox", { name: "Years of experience" }).click();
  await page.locator("#years-experience").selectOption({ label: "7" }); //used AI for this selector (used only examples solved it myself though)
  //Entering the current Date in the date field
  let CurrentDate = new Date().toLocaleDateString("en-CA"); // Format: YYYY-MM-DD
  await page.getByRole("textbox", { name: "Date" }).fill(CurrentDate);
  //Selecting Profession as Automation Tester
  await page.getByLabel("Automation Tester").click();
  //Selectiong the Automation tools
  await page.getByLabel("Selenium Webdriver").click();
  //Selecting the Areas I have worked with
  await page.getByLabel("Asia").click();
  //Selecting the Selenium Commands I have used
  await page.getByRole("tab", { name: "WebElement Commands" }).click();
  //Uploading an Image file
  const filePath = "/Users/karthi/Downloads/1MB jpeg .jpg";
  await page.getByLabel("Upload Image").click();
  await page.setInputFiles('input[type="file"]', filePath);
  await page.getByRole("button", { name: "Save profile" }).click();
  //Printing the content
  let SubmissionOutput = await page.locator("#submission-output").textContent();
  console.log(SubmissionOutput);
  // Asserting the output
  await expect(page.locator("#submission-output")).toContainText("Karthika");
  await expect(page.locator("#submission-output")).toContainText("Ramesh");
  await expect(page.locator("#submission-output")).toContainText("Female");
  await expect(page.locator("#submission-output")).toContainText("7");
  await expect(page.locator("#submission-output")).toContainText(CurrentDate);
  await expect(page.locator("#submission-output")).toContainText(
    "Automation Tester",
  );
  await expect(page.locator("#submission-output")).toContainText(
    "Selenium Webdriver",
  );
  await expect(page.locator("#submission-output")).toContainText("Asia");
});
