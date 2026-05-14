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
- Locators (CSS, XPath, Role-based, Text-based)
- Element interactions (click, fill, keyboard input)
- Cookie and storage management
- Real-world test scenarios (SauceDemo, Cura Website)

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
├── 03_Locators_Commandas/
│   ├── 219_Commands.spec.ts               # Basic Playwright commands
│   ├── 220_gotoCommands.spec.ts           # Navigation commands
│   ├── 221_reffer_command.spec.ts         # Referrer and navigation
│   ├── 222_Automation_app.vwo.com.spec.ts # VWO app automation
│   ├── 223_X.Path.spec.ts                 # XPath locator examples
│   ├── 224_GetRole.spec.ts                # GetByRole locator testing
│   ├── 225_CSS_Selector.spec.ts           # CSS selector patterns
│   ├── 226_PressSeqyuentially.spec.ts     # Sequential key press testing
│   ├── 227_cookie.spec.ts                 # Cookie management
│   └── index.html                         # Test HTML file
├── 04_Session_Storage/
│   └── 229_Test_vwo.com.spec.ts           # Session storage and VWO automation
├── 05_Allure_report/
│   └── Allure reporting configuration     # Allure test reporting
├── 06_Multiple_Elements/
│   └── 231_Multiple_Elements.spec.ts       # Placeholder for multiple elements
├── 12_Handle_SVG/
│   ├── 248_SVG_Project.spec.ts            # SVG element interaction on Flipkart
│   └── 249_SVG_Practice.spec.ts           # SVG shape clicking on practice widget
├── 13_ShadowDOM/
│   └── 251_shadow_dom.spec.ts             # Shadow DOM email/password form handling
├── 14_File_upload/
│   ├── 252_File_upload.spec.ts            # Single file upload test
│   ├── 253_Multi_File_Upload.spec.ts      # Multi-file upload with buffers
│   ├── file1.jpg                          # Test fixture image
│   └── file2.jpg                          # Test fixture image
└── Tasks/
    ├── Task_21_april/
    │   ├── Task_Multiple_Context.spec.ts      # Multiple context with SauceDemo
    │   └── Task_Same_context_multile_pages.spec.ts # Multiple pages in single context
    ├── Task_23_april/
    │   └── Project#2_Cura_Website_Automation.spec.ts # Cura website automation
    ├── Task_25_april/
    │   └── Task_get_By_role.spec.ts           # Role-based element selection
    ├── Task_28_april/
    │   └── Error_message_calidation.spec.ts   # Error message validation
    ├── Task_02_May/
    │   └── Advanced test scenarios             # May 2nd task collection
    ├── Task_05_May/
    │   └── Project#5_QA_Profile_Form.spec.ts  # QA Profile form automation
    ├── Task_12_May_Project#8/
    │   └── Task_02.spec.ts                     # Indian states map interaction
    └── Task_14_May/
        └── Project#09.spec.ts                  # Shadow DOM, Calendars
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

### 3. Locators & Commands (`03_Locators_Commandas/`)

- **219_Commands.spec.ts**: Basic Playwright commands
- **220_gotoCommands.spec.ts**: Navigation commands and URL handling
- **221_reffer_command.spec.ts**: Referrer and navigation patterns
- **222_Automation_app.vwo.com.spec.ts**: Real-world automation on VWO app
- **223_X.Path.spec.ts**: XPath locator examples and patterns
- **224_GetRole.spec.ts**: GetByRole locator testing and usage
- **225_CSS_Selector.spec.ts**: CSS selector patterns and best practices
- **226_PressSeqyuentially.spec.ts**: Sequential keyboard key press testing
- **227_cookie.spec.ts**: Cookie management and handling
- **index.html**: Test HTML file for practice

### 4. Real-World Tasks (`Tests/`)

#### Task_21_april/

- **Task_Multiple_Context.spec.ts**: Tests multiple user scenarios on SauceDemo
  - Standard User
  - Locked Out User
  - Problem User
  - Performance Glitch User
  - Error User
  - Visual User

- **Task_Same_context_multile_pages.spec.ts**: Multiple pages within single context

#### Task_23_april/

- **Project#2_Cura_Website_Automation.spec.ts**: Healthcare website (Cura) automation
  - Appointment booking workflows
  - Form validation
  - User interactions

#### Task_25_april/

- **Task_get_By_role.spec.ts**: Comprehensive getByRole locator testing
  - Role-based element selection
  - Accessibility-focused testing
  - Best practices for locators

#### Task_28_april/

- **Error_message_calidation.spec.ts**: Error message validation testing

#### Task_02_May/

- Advanced test scenarios and workflows
- Integration testing patterns

#### Task_05_May/

- **Project#5_QA_Profile_Form.spec.ts**: QA Profile form automation
  - Form filling with various input types
  - Dropdown selection
  - Radio button and checkbox handling
  - Date input handling
  - File upload functionality
  - Form submission and validation

#### Task_12_May_Project#8/

- **Task_02.spec.ts**: Indian states map interaction
  - Iterates through all 36 Indian states on interactive map
  - Console logging for state verification
  - State-specific element targeting

#### Task_14_May/

- **Project#09.spec.ts**: Shadow DOM and keyboard interactions
  - Shadow DOM form filling (name, pizza, tools, password)
  - Keyboard navigation (Tab, type)
  - Click interaction within shadow DOM

### 5. SVG Handling (`12_Handle_SVG/`)

- **248_SVG_Project.spec.ts**: SVG element interaction on Flipkart
  - Locating SVG elements
  - Visibility assertions
  - SVG-based search UI interaction
- **249_SVG_Practice.spec.ts**: SVG shape clicking on practice widget
  - Clicking circle and bar SVG shapes
  - Output text validation

### 6. Shadow DOM (`13_ShadowDOM/`)

- **251_shadow_dom.spec.ts**: Shadow DOM form handling
  - Filling email/password in Shadow DOM card
  - Nested Shadow DOM interaction
  - Counter increment within Shadow DOM

### 7. File Upload (`14_File_upload/`)

- **252_File_upload.spec.ts**: Single file upload via `setInputFiles`
  - Uploads file to the-internet.herokuapp.com
  - Asserts uploaded filename
- **253_Multi_File_Upload.spec.ts**: Multi-file upload with in-memory buffers
  - Uploads multiple files (file1.jpg, file2.jpg)
  - PatternFly demo page integration

### 8. Session Storage & Advanced Features

#### 04_Session_Storage/

- **229_Test_vwo.com.spec.ts**: Session storage and local storage management
  - Session state persistence
  - VWO app automation
  - Storage-based testing patterns

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
  baseURL: "https://www.saucedemo.com/",
});
```

**Option 3: In page.goto()**

```typescript
await page.goto("/"); // Uses baseURL if configured
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

### Locators & Commands

- Element locators (CSS, XPath, Text, Role)
- Navigation commands (goto, back, forward, reload)
- Interaction commands (click, fill, type, select)
- Assertion and validation

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

1. Start with `01_Basics/` tests for fundamentals
2. Move to `02_first_test/` for core concepts (contexts, pages)
3. Practice with `03_Locators_Commandas/` for locators, commands, and interactions
4. Explore `04_Session_Storage/` for state management and storage handling
5. Apply with `Tests/Task_21_april/` for real-world SauceDemo scenarios
6. Advance with `Tests/Task_23_april/` for complex application automation
7. Master locators with `Tests/Task_25_april/` for role-based element selection
8. Validate with `Tests/Task_28_april/` for error handling
9. Build forms with `Tests/Task_05_May/` for comprehensive form testing
10. Handle SVG elements with `12_Handle_SVG/` for graphical element interaction
11. Master Shadow DOM with `13_ShadowDOM/` for traversing encapsulated components
12. Test file uploads with `14_File_upload/` for single and multi-file scenarios
13. Combine Shadow DOM with keyboard interactions in `Tests/Task_14_May/`
14. Use custom TTA reports for detailed test analytics and monitoring

## 💡 Tips

- Use `--headed` flag to see browser interactions
- Use `--debug` for step-by-step debugging
- Use `--ui` for interactive test exploration
- Check `playwright.config.ts` for global settings
- Each context is independent - great for multi-user testing

## � Test Reports

### Available Reporters

This project includes three powerful reporting systems:

#### 1. **Custom TTA Reporter** ⭐ (New!)

Advanced real-time test execution report with rich analytics:

- Real-time test status updates
- Beautiful HTML dashboard with test statistics
- Pass/Fail breakdown with detailed metrics
- Step-by-step test execution logs
- Screenshot gallery with modal preview
- Video playback support (on failures)
- Trace viewer integration
- Filter by status and priority
- Historical test tracking

**View Report:**

```bash
open tta-report/index.html
```

#### 2. **Playwright HTML Reporter** (Default)

Standard Playwright reporter with detailed test information:

```bash
npx playwright show-report
```

#### 3. **Allure Reporter**

Advanced reporting with detailed analytics:

```bash
allure serve allure-results
```

### Report Locations

- **TTA Custom Report**: `tta-report/index.html`
- **Playwright Report**: `playwright-report/index.html`
- **Allure Results**: `allure-results/`

## �🐛 Debugging

### Enable debug mode

```bash
npx playwright test --debug
```

### View test reports

```bash
npx playwright show-report
```

### View TTA Report

```bash
open tta-report/index.html
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

## 🆕 Recent Updates (May 2026)

### Latest Update (May 14, 2026)

- **Date**: May 14, 2026
- **Status**: ✅ Completed
- **Updates**:
  - Added **06_Multiple_Elements**: Placeholder for multiple element handling tests
  - Added **12_Handle_SVG**: SVG element interaction (Flipkart search, shape clicking)
  - Added **13_ShadowDOM**: Shadow DOM traversal and form filling
  - Added **14_File_upload**: Single and multi-file upload tests with fixtures
  - Added **Task_14_May/Project#09**: Shadow DOM and keyboard interaction test
  - Task_12_May_Project#8: Enhanced with console logging for state verification
  - Custom TTA reporter improvements
  - README updated with new test categories and project structure

### Custom TTA Reporter Implementation

- **Date**: May 11, 2026
- **Status**: ✅ Completed
- **Features Added**:
  - Real-time test execution reporting
  - Interactive HTML dashboard with analytics
  - Screenshots gallery with modal preview
  - Video playback for failed tests
  - Trace viewer integration
  - Test history tracking
  - Advanced filtering and search capabilities

### Configuration Changes

- Added custom TTA reporter to `playwright.config.ts`
- Enabled screenshot capture on test failures
- Enabled video recording for failed tests
- Maintained compatibility with existing reporters (HTML, Allure)

### New Test Categories

- **04_Session_Storage**: Session and local storage management tests
- **05_Allure_report**: Allure reporting configuration
- **Task_02_May**: Advanced testing scenarios
- **07_Web_Tables**: Web table automation and handling
- **12_Handle_SVG**: SVG element interaction and testing
- **Task_12_May**: May 12th test scenarios

## 🤝 Contributing

Feel free to add more test examples and improvements to this learning repository!

## 📄 License

This repository is open for educational purposes.

---

**Happy Learning! 🎉**

For questions or issues, refer to the [Playwright Documentation](https://playwright.dev/)
