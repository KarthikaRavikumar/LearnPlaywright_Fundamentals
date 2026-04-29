//creating test for multiple context
// I am using https://www.saucedemo.com/ for this test
import { test, expect, chromium } from "@playwright/test";

test("sauce demo multiple contexts", async () => {
  // Launching the browser
  const browser = await chromium.launch({ headless: false });

  // Creating context for standard_user context
  let std_userContext = await browser.newContext();
  let std_userPage = await std_userContext.newPage();
  await std_userPage.goto("https://www.saucedemo.com/");
  await std_userPage.fill("#user-name", "standard_user");
  await std_userPage.fill("#password", "secret_sauce");
  await std_userPage.click("#login-button");
  await expect(std_userPage.locator(".title")).toHaveText("Products");
  console.log("Standard User logged in");

  // Creating context for locked_out_user context
  let locked_out_userContext = await browser.newContext();
  let locked_out_userPage = await locked_out_userContext.newPage();
  await locked_out_userPage.goto("https://www.saucedemo.com/");
  await locked_out_userPage.fill("#user-name", "locked_out_user");
  await locked_out_userPage.fill("#password", "secret_sauce");
  await locked_out_userPage.click("#login-button");
  await expect(locked_out_userPage.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );
  console.log("Locked Out User attempted to log in");
  locked_out_userContext.close();

  // Creating context for problem_user context
  let problem_userContext = await browser.newContext();
  let problem_userPage = await problem_userContext.newPage();
  await problem_userPage.goto("https://www.saucedemo.com/");
  await problem_userPage.fill("#user-name", "problem_user");
  await problem_userPage.fill("#password", "secret_sauce");
  await problem_userPage.click("#login-button");
  await expect(problem_userPage.locator(".title")).toHaveText("Products");
  console.log("Problem User logged in");

  // Creating context for performance_glitch_user context
  let performance_glitch_userContext = await browser.newContext();
  let performance_glitch_userPage =
    await performance_glitch_userContext.newPage();
  await performance_glitch_userPage.goto("https://www.saucedemo.com/");
  await performance_glitch_userPage.fill(
    "#user-name",
    "performance_glitch_user",
  );
  await performance_glitch_userPage.fill("#password", "secret_sauce");
  await performance_glitch_userPage.click("#login-button");
  await expect(performance_glitch_userPage.locator(".title")).toHaveText(
    "Products",
  );
  console.log("Performance Glitch User logged in");

  //creating context for error_user context
  let error_userContext = await browser.newContext();
  let error_userPage = await error_userContext.newPage();
  await error_userPage.goto("https://www.saucedemo.com/");
  await error_userPage.fill("#user-name", "error_user");
  await error_userPage.fill("#password", "secret_sauce");
  await error_userPage.click("#login-button");
  await expect(error_userPage.locator(".title")).toHaveText("Products");
  console.log("Error User logged in");

  //creating context for visual_user context
  let visual_userContext = await browser.newContext();
  let visual_userPage = await visual_userContext.newPage();
  await visual_userPage.goto("https://www.saucedemo.com/");
  await visual_userPage.fill("#user-name", "visual_user");
  await visual_userPage.fill("#password", "secret_sauce");
  await visual_userPage.click("#login-button");
  await expect(visual_userPage.locator(".title")).toHaveText("Products");
  console.log("Visual User logged in");

  std_userContext.close();
  problem_userContext.close();
  locked_out_userContext.close();
  performance_glitch_userContext.close();
  error_userContext.close();
  visual_userContext.close();
  // Closing the browser
  await browser.close();
});
