//creating test for multiple Pages in the same context
// I am using https://www.saucedemo.com/ for this test
import { test, expect, chromium } from "@playwright/test";

test("sauce demo multiple pages in same context", async () => {
  // Launching the browser
  const browser = await chromium.launch({ headless: false });
  let std_userContext = await browser.newContext();

  // Creating page for Login

  let login_page = await std_userContext.newPage();
  await login_page.goto("https://www.saucedemo.com/");
  await login_page.fill("#user-name", "standard_user");
  await login_page.fill("#password", "secret_sauce");
  await login_page.click("#login-button");
  await expect(login_page.locator(".title")).toHaveText("Products");
  console.log("Standard User logged in");

  // creating page for products
  let Products_page = await std_userContext.newPage();
  await Products_page.goto("https://www.saucedemo.com/inventory.html");
  await expect(Products_page.locator(".title")).toHaveText("Products");
  console.log("Products page opened");

  //adding product to cart
  await Products_page.click("#add-to-cart-sauce-labs-backpack");
  console.log("Product added to cart");

  // creating page for cart
  let cart_page = await std_userContext.newPage();
  await cart_page.goto("https://www.saucedemo.com/cart.html");
  await expect(cart_page.locator(".title")).toHaveText("Your Cart");
  console.log("Cart page opened");
});
