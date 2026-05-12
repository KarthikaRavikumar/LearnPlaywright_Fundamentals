import { test, expect } from "@playwright/test";

const URL = "https://www.flipkart.com/";

test.describe("SVG Element Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test("locate SVG root and assert visible", async ({ page }) => {
    await page.getByRole("button", { name: "✕" }).click();
    await page.locator("input.nw1UBF.v1zwn25:visible").fill("macmini");
    await page.locator("//button[@type='submit']").click();
    //Click on Low-To-High filter
    await page.getByText("Price -- High to Low", { exact: true }).click();
    let items = page
      .locator(
        '//div[contains(@data-id,"CPU") or contains(@data-id,"MP")]/div/a[2]',
      )
      .allInnerTexts();
    for (let listofitems of await items) {
      console.log(listofitems.trim());
    }

    //getting the prices of the products
    let price = await page
      .locator(
        '//div[contains(@data-id,"CPU") or contains(@data-id,"MP")]/div/a[3]/div/div',
      )
      .allInnerTexts();
    for (let item of await price) {
      let low_price_item = Math.min(
        ...price.map((p) => parseInt(p.replace(/[^0-9]/g, ""))),
      );
      if (parseInt(item.replace(/[^0-9]/g, "")) === low_price_item) {
        console.log("The cheapest MacMini is:", item.trim());
      }
    }
  });
});
