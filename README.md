# Learn Playwright Fundamentals

A comprehensive learning repository for **Playwright Testing Framework** with practical examples and test cases.

## 📋 Overview

This repository contains structured learning materials and test examples covering:
- Browser automation basics
- Page navigation and interactions
- Multiple browser contexts
- Multiple pages handling
- Test annotations
- Context reuse strategies
- Real-world test scenarios (SauceDemo)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/KarthikaRavikumar/LearnPlaywright_Fundamentals.git

# Navigate to the project directory
cd LearnPlaywright_Fundamentals

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 📁 Project Structure

```
tests/
├── 01_Basics/
│   ├── lab_209.spec.ts                    # Basic Playwright setup
│   └── lab_210_Test_annotations.spec.ts   # Test annotations (skip, only, etc.)
├── 02_first_test/
│   ├── 211_first_running_test.spec.ts     # Your first test
│   ├── 212_Browsercontaxt_pages.ts        # Browser context & pages
│   ├── 213_multiple_context.spec.ts       # Multiple browser contexts
│   ├── 214_multiple_page.spec.ts          # Multiple pages in context
│   ├── 215_test_pw.spec.ts                # Playwright test API
│   ├── 216_manual_context.spec.ts         # Manual context creation
│   ├── 217_manual_context_options.spec.ts # Context with custom options
│   └── 218_context_reuse.spec.ts          # Context reuse patterns
└── 01_Task_21/
    ├── Task_Multiple_Context.spec.ts      # Multiple context with SauceDemo
    └── Task_Same_context_multile_pages.spec.ts # Multiple pages in single context
```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run a specific test file
```bash
npx playwright test tests/02_first_test/213_multiple_context.spec.ts
```

### Run tests with debug mode
```bash
npx playwright test --debug
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run TypeScript files directly (without test framework)
```bash
npx ts-node tests/02_first_test/213_multiple_context.spec.ts
```

## 📝 Test Categories

### 1. Basic Tests (`01_Basics/`)
- Setup and configuration
- Test annotations (skip, only, fixme, slow)

### 2. First Tests (`02_first_test/`)
- Simple page navigation
- Browser and context concepts
- Multiple contexts and pages
- Manual context creation with options
- Context reuse patterns

### 3. Real-World Tasks (`01_Task_21/`)
- **Task_Multiple_Context.spec.ts**: Tests multiple user scenarios on SauceDemo
  - Standard User
  - Locked Out User
  - Problem User
  - Performance Glitch User
  - Error User
  - Visual User

- **Task_Same_context_multile_pages.spec.ts**: Multiple pages within single context

## ⚙️ Configuration

The project uses `playwright.config.ts` for global configuration:

```typescript
// Set baseURL for all tests
use: {
  baseURL: 'https://www.saucedemo.com/', // Can be configured per test
}
```

### Using baseURL in Multiple Contexts

**Option 1: In playwright.config.ts**
```typescript
use: {
  baseURL: 'https://www.saucedemo.com/',
}
```

**Option 2: In test context**
```typescript
const context = await browser.newContext({ 
  baseURL: 'https://www.saucedemo.com/' 
});
```

**Option 3: In page.goto()**
```typescript
await page.goto('/'); // Uses baseURL if configured
```

## 🔑 Key Concepts Covered

### Browser Contexts
- Creating multiple independent browser contexts
- Context isolation
- Cookie/storage management per context
- Parallel user simulation

### Multiple Pages
- Creating multiple pages within a context
- Page navigation
- Handling multiple pages simultaneously

### Test Annotations
- `@skip` - Skip tests
- `@only` - Run only this test
- `@fixme` - Mark as needs fixing
- `@slow` - Mark as slow test

### Context Options
- Custom user agents
- Viewport settings
- Device emulation
- Network interception

## 📊 Example: Multiple Contexts

```typescript
import { test, expect, chromium } from "@playwright/test";

test("multiple contexts", async () => {
  const browser = await chromium.launch({ headless: false });
  
  // Context 1
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://www.saucedemo.com/");
  
  // Context 2 (independent session)
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://www.saucedemo.com/");
  
  // Both contexts run independently
  
  await context1.close();
  await context2.close();
  await browser.close();
});
```

## 🛠️ Dependencies

- `@playwright/test` - Playwright Test Framework
- `playwright` - Playwright Core
- `typescript` - TypeScript support
- `ts-node` - Run TypeScript directly

## 📖 Useful Resources

- [Playwright Official Documentation](https://playwright.dev/)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [SauceDemo Application](https://www.saucedemo.com/)

## 🎯 Learning Path

1. Start with `01_Basics/` tests
2. Move to `02_first_test/` for core concepts
3. Practice with `01_Task_21/` real-world scenarios
4. Experiment with different configurations and options

## 💡 Tips

- Use `--headed` flag to see browser interactions
- Use `--debug` for step-by-step debugging
- Use `--ui` for interactive test exploration
- Check `playwright.config.ts` for global settings
- Each context is independent - great for multi-user testing

## 🐛 Debugging

### Enable debug mode
```bash
npx playwright test --debug
```

### View test reports
```bash
npx playwright show-report
```

### Enable verbose logging
```bash
DEBUG=pw:api npx playwright test
```

## 📝 Notes

- Tests are written in TypeScript
- Playwright handles browser and context management
- Each test file follows the `.spec.ts` naming convention
- Tests can be run in parallel or sequentially

## 🤝 Contributing

Feel free to add more test examples and improvements to this learning repository!

## 📄 License

This repository is open for educational purposes.

---

**Happy Learning! 🎉**

For questions or issues, refer to the [Playwright Documentation](https://playwright.dev/)
