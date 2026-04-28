import { chromium } from "playwright";

async function multiUserTest() {
  //launching the browser
  let browser1 = await chromium.launch({ headless: false });

  //creating admin context
  let adminContext = await browser1.newContext();
  //creating the admin page
  let adminPage = await adminContext.newPage();
  await adminPage.goto("https://app.vwo.com/");
  console.log("Admin logged in");

  //creating a user context
  let userContext = await browser1.newContext();
  //creating the user page
  let userPage = await userContext.newPage();
  await userPage.goto("https://app.vwo.com/");
  console.log("User logged in");

  await adminPage.close();
  await adminContext.close();
  await userPage.close();
  await userContext.close();
  await browser1.close();
}
multiUserTest();
