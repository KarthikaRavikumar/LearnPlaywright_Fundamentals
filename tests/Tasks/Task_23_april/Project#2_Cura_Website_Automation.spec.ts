import { test, expect } from "@playwright/test";

test("Project#2 - Cura Website Automation", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/#summary");
  // Click on the "Make Appointment" button
  let makeAppointmentButton = page.locator("#btn-make-appointment");
  await makeAppointmentButton.click();

  // fill in the form
  await page.fill("#txt-username", "John Doe");
  await page.fill("#txt-password", "ThisIsNotAPassword");
  await page.click("#btn-login");

  //validating the appointment page URL
  expect(page.url()).toBe(
    "https://katalon-demo-cura.herokuapp.com/#appointment",
  );
});
