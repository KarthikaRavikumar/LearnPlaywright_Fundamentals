# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks/Task_02_May/Project#4TTA_Bank.spec.ts >> TTA Bank Create account
- Location: tests/Tasks/Task_02_May/Project#4TTA_Bank.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "$49,900"
Received: "$49,900.00"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic:
      - status [ref=e9]: Transfer processed successfully.
      - status [ref=e15]: Account created successfully!
    - generic [ref=e16]:
      - complementary [ref=e17]:
        - generic [ref=e18]:
          - img [ref=e19]
          - generic [ref=e22]: TTA Bank
        - navigation [ref=e24]:
          - button "Dashboard" [active] [ref=e25] [cursor=pointer]:
            - img [ref=e26]
            - text: Dashboard
          - button "Transfer Funds" [ref=e31] [cursor=pointer]:
            - img [ref=e32]
            - text: Transfer Funds
          - button "Expense Tracker" [ref=e35] [cursor=pointer]:
            - img [ref=e36]
            - text: Expense Tracker
          - button "Transactions" [ref=e39] [cursor=pointer]:
            - img [ref=e40]
            - text: Transactions
          - button "AI Support" [ref=e44] [cursor=pointer]:
            - img [ref=e45]
            - text: AI Support
          - button "Settings" [ref=e47] [cursor=pointer]:
            - img [ref=e48]
            - text: Settings
        - generic [ref=e51]:
          - generic [ref=e52]:
            - img "User" [ref=e53]
            - generic [ref=e54]:
              - generic [ref=e55]: Karthika
              - generic [ref=e56]: karthika.ramesh@example.com
          - button "Sign Out" [ref=e57] [cursor=pointer]:
            - img [ref=e58]
            - text: Sign Out
      - main [ref=e61]:
        - generic [ref=e62]:
          - heading "Dashboard" [level=1] [ref=e63]
          - button [ref=e65] [cursor=pointer]:
            - img [ref=e66]
        - generic [ref=e71]:
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e74]:
                - generic [ref=e75]:
                  - paragraph [ref=e76]: Total Balance
                  - heading "$49,900.00" [level=3] [ref=e77]
                - img [ref=e79]
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - img [ref=e84]
                  - text: +2.5%
                - generic [ref=e87]: from last month
            - generic [ref=e88]:
              - generic [ref=e89]:
                - generic [ref=e90]:
                  - paragraph [ref=e91]: Monthly Income
                  - heading "$50,000" [level=3] [ref=e92]
                - img [ref=e94]
              - paragraph [ref=e97]: Based on recent activity
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - paragraph [ref=e101]: Monthly Expenses
                  - heading "$415.48" [level=3] [ref=e102]
                - img [ref=e104]
              - paragraph [ref=e107]: Total debit transactions
          - generic [ref=e108]:
            - generic [ref=e109]:
              - heading "Balance History" [level=3] [ref=e110]
              - application [ref=e114]:
                - generic [ref=e125]:
                  - generic [ref=e126]:
                    - generic [ref=e128]: Mon
                    - generic [ref=e130]: Tue
                    - generic [ref=e132]: Wed
                    - generic [ref=e134]: Thu
                    - generic [ref=e136]: Fri
                    - generic [ref=e138]: Sat
                    - generic [ref=e140]: Sun
                  - generic [ref=e141]:
                    - generic [ref=e143]: $0k
                    - generic [ref=e145]: $15k
                    - generic [ref=e147]: $30k
                    - generic [ref=e149]: $45k
                    - generic [ref=e151]: $60k
            - generic [ref=e152]:
              - generic [ref=e153]:
                - heading "Recent Activity" [level=3] [ref=e154]
                - button "View All" [ref=e155] [cursor=pointer]
              - generic [ref=e156]:
                - generic [ref=e157]:
                  - generic [ref=e158]:
                    - img [ref=e160]
                    - generic [ref=e162]:
                      - paragraph [ref=e163]: Transfer to Sarah Smith
                      - paragraph [ref=e164]: 5/11/2026
                  - generic [ref=e165]: "-$100.00"
                - generic [ref=e166]:
                  - generic [ref=e167]:
                    - img [ref=e169]
                    - generic [ref=e171]:
                      - paragraph [ref=e172]: Whole Foods Market
                      - paragraph [ref=e173]: 10/25/2023
                  - generic [ref=e174]: "-$129.99"
                - generic [ref=e175]:
                  - generic [ref=e176]:
                    - img [ref=e178]
                    - generic [ref=e181]:
                      - paragraph [ref=e182]: Opening Deposit
                      - paragraph [ref=e183]: 10/24/2023
                  - generic [ref=e184]: +$50000.00
                - generic [ref=e185]:
                  - generic [ref=e186]:
                    - img [ref=e188]
                    - generic [ref=e190]:
                      - paragraph [ref=e191]: Netflix Subscription
                      - paragraph [ref=e192]: 10/23/2023
                  - generic [ref=e193]: "-$15.99"
              - button "Quick Transfer" [ref=e194] [cursor=pointer]
  - generic [ref=e195]: $0k
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("TTA Bank Create account", async ({ page }) => {
  4  |   await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  5  | 
  6  |   await page.getByRole("button", { name: "Sign Up" }).click();
  7  | 
  8  |   const nameInput = page.getByPlaceholder("John Doe");
  9  | 
  10 |   await nameInput.fill("Karthika");
  11 | 
  12 |   // Correct way to get input field value
  13 |   const enteredName = await nameInput.inputValue();
  14 | 
  15 |   await page
  16 |     .getByPlaceholder("you@example.com")
  17 |     .fill("karthika.ramesh@example.com");
  18 | 
  19 |   await page.getByRole("textbox", { name: "••••••••" }).fill("Password123");
  20 | 
  21 |   await page.getByRole("button", { name: "Create Account" }).click();
  22 | 
  23 |   // Assert using actual displayed username
  24 |   const accountName = await page
  25 |     .locator("span.truncate.text-sm.font-medium.text-white:visible")
  26 |     .textContent();
  27 | 
  28 |   expect(accountName?.trim()).toBe(enteredName);
  29 | 
  30 |   // Validate the amount transfer
  31 |   await page.getByRole("button", { name: "Transfer Funds" }).click();
  32 |   let amount = "100";
  33 |   await page.getByPlaceholder("0.00", { exact: true }).click();
  34 |   await page.getByPlaceholder("0.00", { exact: true }).fill(amount);
  35 |   await page
  36 |     .getByRole("textbox", { name: "e.g. Rent for October" })
  37 |     .fill("Test Transfer");
  38 |   await page.getByRole("button", { name: "Continue" }).click();
  39 |   let displayedAmount = await page
  40 |     .locator("span.text-xl.font-bold.text-slate-800:visible")
  41 |     .textContent();
  42 |   expect(displayedAmount?.trim()).toContain(`$${amount}`);
  43 |   await page.getByRole("button", { name: "Confirm Transfer" }).click();
  44 | 
  45 |   //navigate to dashboard to validate the transfer
  46 |   await page.getByRole("button", { name: "Dashboard" }).click();
  47 |   let total = await page.locator("h3.mt-2.text-3xl.font-bold").textContent();
  48 |   const expectedTotal = 50000 - parseInt(amount);
  49 |   const finalTotal = "$" + Number(expectedTotal).toLocaleString();
> 50 |   expect(total?.trim()).toBe(finalTotal);
     |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  51 | });
  52 | 
```