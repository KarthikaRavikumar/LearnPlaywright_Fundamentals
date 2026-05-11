# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks/Task_02_May/Project#4TTA_Bank.spec.ts >> TTA Bank Create account
- Location: tests/Tasks/Task_02_May/Project#4TTA_Bank.spec.ts:3:5

# Error details

```
Error: locator.click: SyntaxError: Failed to execute 'querySelectorAll' on 'Document': 'input.block.w-full.rounded-lg.border.border-slate-300.bg-white.p-3.pl-8.text-slate-900.focus:border-blue-500.focus:ring-blue-500' is not a valid selector.
    at query (<anonymous>:5261:41)
    at <anonymous>:5271:7
    at SelectorEvaluatorImpl._cached (<anonymous>:5048:20)
    at SelectorEvaluatorImpl._queryCSS (<anonymous>:5258:17)
    at SelectorEvaluatorImpl._querySimple (<anonymous>:5138:19)
    at <anonymous>:5086:29
    at SelectorEvaluatorImpl._cached (<anonymous>:5048:20)
    at SelectorEvaluatorImpl.query (<anonymous>:5079:19)
    at Object.query (<anonymous>:5293:44)
    at <anonymous>:5251:21
Call log:
  - waiting for locator('input.block.w-full.rounded-lg.border.border-slate-300.bg-white.p-3.pl-8.text-slate-900.focus:border-blue-500.focus:ring-blue-500')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - status [ref=e9]: Account created successfully!
    - generic [ref=e10]:
      - complementary [ref=e11]:
        - generic [ref=e12]:
          - img [ref=e13]
          - generic [ref=e16]: TTA Bank
        - navigation [ref=e18]:
          - button "Dashboard" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - text: Dashboard
          - button "Transfer Funds" [active] [ref=e25] [cursor=pointer]:
            - img [ref=e26]
            - text: Transfer Funds
          - button "Expense Tracker" [ref=e29] [cursor=pointer]:
            - img [ref=e30]
            - text: Expense Tracker
          - button "Transactions" [ref=e33] [cursor=pointer]:
            - img [ref=e34]
            - text: Transactions
          - button "AI Support" [ref=e38] [cursor=pointer]:
            - img [ref=e39]
            - text: AI Support
          - button "Settings" [ref=e41] [cursor=pointer]:
            - img [ref=e42]
            - text: Settings
        - generic [ref=e45]:
          - generic [ref=e46]:
            - img "User" [ref=e47]
            - generic [ref=e48]:
              - generic [ref=e49]: Karthika
              - generic [ref=e50]: karthika.ramesh@example.com
          - button "Sign Out" [ref=e51] [cursor=pointer]:
            - img [ref=e52]
            - text: Sign Out
      - main [ref=e55]:
        - generic [ref=e56]:
          - heading "Transfer Funds" [level=1] [ref=e57]
          - button [ref=e59] [cursor=pointer]:
            - img [ref=e60]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - button "Transfer Money" [ref=e67] [cursor=pointer]
            - button "Manage Beneficiaries" [ref=e68] [cursor=pointer]
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]: From Account
              - combobox [ref=e73]:
                - 'option "Savings Account - 9938 (Available: $35,000)" [selected]'
                - 'option "Current Account - 8821 (Available: $15,000)"'
            - img [ref=e76]
            - generic [ref=e78]:
              - generic [ref=e79]: To Beneficiary
              - generic [ref=e80]:
                - combobox [ref=e81]:
                  - option "Sarah Smith (Chase) - 1234567890" [selected]
                  - option "Landlord (Wells Fargo) - 0987654321"
                - button "Add New Beneficiary" [ref=e82] [cursor=pointer]:
                  - img [ref=e83]
            - generic [ref=e84]:
              - generic [ref=e85]: Amount
              - generic [ref=e86]:
                - generic:
                  - generic: $
                - spinbutton [ref=e87]
              - paragraph [ref=e88]: "Max available: $35,000"
            - generic [ref=e89]:
              - generic [ref=e90]: Note (Optional)
              - textbox "e.g. Rent for October" [ref=e91]
            - button "Continue" [ref=e92] [cursor=pointer]
  - generic [ref=e93]: $0k
```