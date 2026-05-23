import { test, expect } from "@playwright/test";
import path from "path";
import { reg_readCSV } from "./register_csvReader";

test.describe("register csvReader", () => {
  const QAdata = reg_readCSV(path.join(__dirname, "register.csv"));

  for (const data of QAdata) {
    test(`Register: ${data.firstName} ${data.lastName}`, async ({ page }) => {
      await page.goto(
        "https://app.thetestingacademy.com/playwright/tables/practice.html",
      );

      await page.locator("#first-name").fill(data.firstName);
      await page.locator("#last-name").fill(data.lastName);
    });
  }
});
