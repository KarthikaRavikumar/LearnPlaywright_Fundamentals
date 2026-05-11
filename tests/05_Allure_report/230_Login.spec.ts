import { test, expect } from "@playwright/test";
import * as allure from "allure-js-commons";

test("Verify the login works", async ({ page }) => {
  await allure.epic("VWO Login Tests");
  await allure.description("Verify that the login is page works");
  await allure.feature("Essential features");
  await allure.story("Authentication");

  await page.goto("https://app.vwo.com/#login");
  await page.waitForTimeout(2000);

  await page.fill("#login-username", "opg73@singleuseemail.site");
  await page.fill("#login-password", "Wingify@4321");
  await page.waitForTimeout(1500);

  await page.click("#js-login-btn");
  await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
  await expect(page).toHaveTitle("Login - VWO");
});

//npm install --save-dev @playwright/test allure-playwright
//In the `playwright.config.ts add this line``["allure-playwright"]]`
//npm i allure-commandline -- netime runner
//to see report -  npx allure serve allure-results/
