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
│   ├── 231_Multiple_Elements.spec.ts      # Placeholder for multiple elements
│   └── 07_Web_Tables/
│       ├── 232_WebTable_Basic.spec.ts     # Basic web table handling
│       └── 233_WebTabe_Dynamic.spec.ts    # Dynamic web table handling
├── 08_Web_SelectFrames_iframes/
│   ├── 234_Web_Spec.ts                    # Web select basics
│   ├── 235_Select_FramesWeb.spec.ts       # Select and frames
│   ├── 236_Advanced_SelectFrames2.spec.ts # Advanced select and frames
│   ├── 237_Advanced_select_pro.spec.ts    # Advanced select patterns
│   └── 238_Advanced_select_pro_v2.spec.ts # Advanced select v2
├── 09_Frames_IFrames/
│   ├── 239_iframe.spec.ts                 # Single iframe handling
│   ├── 240_Multiple_frames.spec.ts        # Multiple frames
│   └── 241_ifrmae_within_iframe.spec.ts   # Nested iframes
├── 10_Keyboad_Hover_Drag_Drop/
│   ├── 242_Keyboard.spec.ts               # Keyboard interactions
│   ├── 247_Spicejet_hover.spec.ts         # Hover interactions
│   ├── 244_Drag_Drop.spec.ts              # Drag and drop basics
│   ├── 245_Drag_Drop_Advanced_Kanban.spec.ts # Advanced drag and drop (Kanban)
│   └── 246_Right_click.spec.ts            # Right click / context menu
├── 11_JS_Alert/
│   └── 243_Js_Alert.spec.ts               # JavaScript alert handling
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
├── 15_File_Download/
│   └── 254_File_Doenload.spec.ts          # File download handling
├── 16_ScrollToElement/
│   └── 255_Scroll_to_view.spec.ts         # Scroll to element
├── 17_Expect_Assertions/
│   ├── 256_Expec.spec.ts                  # Expect assertion examples
│   ├── 257_URL_Assertion.spec.ts          # URL assertions
│   ├── Expect_Assertions_Cheatsheet.md    # Assertions reference
│   └── More_Expect_Examples.md            # Extended examples
├── 18_Test_Hooks/
│   ├── 258_Test_hook.spec.ts              # Test hooks (beforeEach/afterEach)
│   ├── 259_Grouped_Test.spec.ts           # Grouped test execution
│   ├── 260_Test_Before_After.spec.ts      # Before/After hooks
│   └── 261_Group_Describe.spec.ts         # Nested describe blocks
├── 19_Data_Driven_Testing/
│   ├── 262_DDT_Simple.spec.ts             # DDT with inline data
│   ├── 263_DDT_CSV.spec.ts                # DDT with CSV reader
│   ├── 264_DDT_CSV.spec.ts                # DDT with hooks + CSV
│   ├── 265_DDT_JSON.spec.ts               # DDT with JSON data
│   ├── 266_DDT_FakerJS.spec.ts            # FakerJS data-driven template
│   ├── 267_FakerJS2.spec.ts               # Single user with Faker
│   ├── 268_FakeJS3.spec.ts                # Faker with reusable helper
│   ├── 269_DDT_FakerJS.spec.ts            # Parameterized Faker (5 users)
│   ├── csvReader.ts                       # CSV file reader utility
│   ├── login-data.csv                     # Test data file
│   ├── registration-data.json             # JSON test data file
│   ├── xlsx-reader.ts                     # Excel file reader utility
│   └── yamlReader.ts                      # YAML file reader utility
├── 20_PageObjectModel/
│   ├── 270_Without_POM.spec.ts            # Login test without POM
│   ├── 271_with_POM.spec.ts               # Login test with POM
│   └── LoginPage.ts                       # Page Object Model class
├── 21_Fixture/
│   └── 272_Fixture_placeholder.spec.ts    # Custom fixtures placeholder
├── 22_Misc_Consepts/
│   └── 273_Misc_Concepts_Placeholder.spec.ts # Misc concepts placeholder
├── 23_Advanced_Frame_work/
│   └── 274_Advanced_framework_placeholder.spec.ts # Advanced framework placeholder
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
    ├── Task_14_May/
    │   └── Project#09.spec.ts                  # Shadow DOM, Calendars
    └── Task_19_May/
        ├── Project_10_DD_Testing.spec.ts       # Data-driven registration test
        ├── register_csvReader.ts               # CSV reader for register data
        ├── register.csv                        # Registration test data
        ├── register.json                       # Registration test data (JSON)
        └── users.xlsx                          # Registration test data (Excel)
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

#### Task_19_May/

- **Project_10_DD_Testing.spec.ts**: Data-driven registration test with CSV
  - Reads user data from `register.csv` via custom `register_csvReader`
  - Dynamically generates tests for each user record
  - Fills registration form (First Name, Last Name, E-Mail, Telephone, Password)
  - Handles newsletter subscription checkbox
  - Submits and validates account creation

### 5. Expect Assertions (`17_Expect_Assertions/`)

- **256_Expec.spec.ts**: Comprehensive expect assertion examples
  - URL, title, visibility, text content assertions
  - Negative assertions with `not`
- **257_URL_Assertion.spec.ts**: URL and navigation assertions
  - `toHaveURL`, `toContain` URL patterns
  - Assertion timing and retry behavior

### 6. Test Hooks (`18_Test_Hooks/`)

- **258_Test_hook.spec.ts**: beforeEach/afterEach hooks
- **259_Grouped_Test.spec.ts**: Test grouping with describe
- **260_Test_Before_After.spec.ts**: Before/After lifecycle
- **261_Group_Describe.spec.ts**: Nested describe blocks for structured suites

### 7. Data-Driven Testing (`19_Data_Driven_Testing/`)

- **262_DDT_Simple.spec.ts**: Data-driven testing with inline data arrays
  - Multiple login scenarios (valid, invalid, empty fields)
  - URL-based assertions after login
- **263_DDT_CSV.spec.ts**: Data-driven testing with external CSV data
  - Reads test data from `login-data.csv` via `csvReader`
  - Iterates over CSV rows to generate test cases
- **264_DDT_CSV.spec.ts**: DDT with CSV + test hooks
  - Combines beforeEach/afterEach with CSV-driven data
  - Console logging of test status in afterEach
- **265_DDT_JSON.spec.ts**: Data-driven testing with JSON data
  - Reads test scenarios from `registration-data.json`
  - Scenarios: valid login, password mismatch, weak password, duplicate email
- **266_DDT_FakerJS.spec.ts**: FakerJS data-driven template
  - Generates random user data with `@faker-js/faker`
  - Submits login form and validates "no match" error
- **267_FakerJS2.spec.ts**: Single user registration with Faker
  - Creates inline Faker fields (firstName, lastName, email, phone, password)
  - Fills complete registration form
- **268_FakeJS3.spec.ts**: Faker with reusable helper
  - Extracts user generation into a reusable `generateUser()` helper
  - Same registration flow with cleaner abstraction
- **269_DDT_FakerJS.spec.ts**: Parameterized Faker (5 iterations)
  - Loops 5 times generating unique users
  - Rotating email domains (gmail, yahoo, outlook, tta.dev, icloud)

#### Data Readers

- **csvReader.ts**: Reads CSV files and returns normalized test data arrays
- **xlsx-reader.ts**: Reads Excel (.xlsx) workbooks via `readXLSX(filePath, sheetName?)`
- **yamlReader.ts**: Reads YAML files via `readYAML(filePath, key?)` with optional key extraction

### 8. SVG Handling (`12_Handle_SVG/`)

- **248_SVG_Project.spec.ts**: SVG element interaction on Flipkart
  - Locating SVG elements
  - Visibility assertions
  - SVG-based search UI interaction
- **249_SVG_Practice.spec.ts**: SVG shape clicking on practice widget
  - Clicking circle and bar SVG shapes
  - Output text validation

### 9. Shadow DOM (`13_ShadowDOM/`)

- **251_shadow_dom.spec.ts**: Shadow DOM form handling
  - Filling email/password in Shadow DOM card
  - Nested Shadow DOM interaction
  - Counter increment within Shadow DOM

### 10. File Upload (`14_File_upload/`)

- **252_File_upload.spec.ts**: Single file upload via `setInputFiles`
  - Uploads file to the-internet.herokuapp.com
  - Asserts uploaded filename
- **253_Multi_File_Upload.spec.ts**: Multi-file upload with in-memory buffers
  - Uploads multiple files (file1.jpg, file2.jpg)
  - PatternFly demo page integration

### 11. File Download (`15_File_Download/`)

- **254_File_Doenload.spec.ts**: File download handling
  - Capturing and validating downloaded files
  - Download path configuration

### 12. Scroll to Element (`16_ScrollToElement/`)

- **255_Scroll_to_view.spec.ts**: Scroll to element interactions
  - Scrolling elements into view
  - Handling lazy-loaded content

### 8. Page Object Model (`20_PageObjectModel/`)

- **270_Without_POM.spec.ts**: Login test without POM pattern
  - All locators and actions written inline in the test
  - Demonstrates code duplication and maintenance challenges
- **271_with_POM.spec.ts**: Login test using POM pattern
  - Delegates all page interactions to `LoginPage` class
  - Combines FakerJS data generation with POM abstraction
- **LoginPage.ts**: Reusable Page Object Model class
  - `goto()`, `login(username, password)`, `checkTitle()` helpers
  - Centralized locators for email, password, and submit button

### 9. Custom Fixtures (`21_Fixture/`)

- **272_Fixture_placeholder.spec.ts**: Placeholder for custom fixtures
  - Skipped/empty test for future fixture-based lessons

### 10. Miscellaneous Concepts (`22_Misc_Consepts/`)

- **273_Misc_Concepts_Placeholder.spec.ts**: Placeholder for misc concepts
  - Skipped test reserved for future topics

### 11. Advanced Framework (`23_Advanced_Frame_work/`)

- **274_Advanced_framework_placeholder.spec.ts**: Placeholder for advanced framework patterns
  - Skipped describe block for future advanced topics

### 12. Web Tables (`06_Multiple_Elements/07_Web_Tables/`)

- **232_WebTable_Basic.spec.ts**: Basic web table handling
  - Table row and cell selection
  - Data extraction from static tables
- **233_WebTabe_Dynamic.spec.ts**: Dynamic web table handling
  - Pagination and dynamic content
  - Searching and filtering table data

### 11. Select & Frames (`08_Web_SelectFrames_iframes/`)

- **234_Web_Spec.ts**: Web select basics
- **235_Select_FramesWeb.spec.ts**: Select dropdowns and frames
- **236_Advanced_SelectFrames2.spec.ts**: Advanced select and frame patterns
- **237_Advanced_select_pro.spec.ts**: Advanced select operations
- **238_Advanced_select_pro_v2.spec.ts**: Advanced select patterns v2

### 12. Frames & IFrames (`09_Frames_IFrames/`)

- **239_iframe.spec.ts**: Single iframe handling
- **240_Multiple_frames.spec.ts**: Multiple frames interaction
- **241_ifrmae_within_iframe.spec.ts**: Nested iframes

### 13. Keyboard, Hover, Drag & Drop (`10_Keyboad_Hover_Drag_Drop/`)

- **242_Keyboard.spec.ts**: Keyboard interactions
- **247_Spicejet_hover.spec.ts**: Hover interactions (Spicejet)
- **244_Drag_Drop.spec.ts**: Drag and drop basics
- **245_Drag_Drop_Advanced_Kanban.spec.ts**: Advanced drag and drop (Kanban board)
- **246_Right_click.spec.ts**: Right click / context menu handling

### 14. JavaScript Alerts (`11_JS_Alert/`)

- **243_Js_Alert.spec.ts**: JavaScript alert, confirm, and prompt handling
  - Accepting and dismissing alerts
  - Reading alert text
  - Handling prompt input

### 15. Session Storage & Advanced Features

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
- `@faker-js/faker` - Fake data generation for data-driven tests
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
10. Handle web tables with `06_Multiple_Elements/07_Web_Tables/` for table automation
11. Practice select dropdowns and frames with `08_Web_SelectFrames_iframes/`
12. Master iframes with `09_Frames_IFrames/` for nested frame handling
13. Learn keyboard, hover, drag & drop with `10_Keyboad_Hover_Drag_Drop/`
14. Handle JavaScript alerts with `11_JS_Alert/`
15. Handle SVG elements with `12_Handle_SVG/` for graphical element interaction
16. Master Shadow DOM with `13_ShadowDOM/` for traversing encapsulated components
17. Test file uploads with `14_File_upload/` for single and multi-file scenarios
18. Test file downloads with `15_File_Download/` for download handling
19. Scroll to elements with `16_ScrollToElement/` for lazy-loaded content
20. Combine Shadow DOM with keyboard interactions in `Tests/Task_14_May/`
21. Use custom TTA reports for detailed test analytics and monitoring
22. Master expect assertions with `17_Expect_Assertions/` for URL, text, and visibility checks
23. Structure tests with hooks in `18_Test_Hooks/` using beforeEach/afterEach/describe
24. Implement data-driven testing with `19_Data_Driven_Testing/` using inline data, CSV, JSON, and hooks
25. Build a complete data-driven registration flow in `Tests/Task_19_May/` with CSV reader
26. Use FakerJS for generating realistic fake data in `19_Data_Driven_Testing/` (266-269)
27. Adopt the Page Object Model pattern with `20_PageObjectModel/` for maintainable tests
28. Explore custom fixtures with `21_Fixture/` for reusable test setup
29. Dive into miscellaneous concepts with `22_Misc_Consepts/`
30. Build an advanced framework with `23_Advanced_Frame_work/`

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

### Latest Update (May 30, 2026)

- **Date**: May 30, 2026
- **Status**: ✅ Completed
- **Updates**:
  - Reformatted password fill step in `266_DDT_FakerJS.spec.ts`
  - Removed `waitForTimeout(5000)` from `266_DDT_FakerJS.spec.ts` for faster test execution
  - Generated latest TTA test reports (May 30)

### Latest Update (May 25, 2026)

- **Date**: May 25, 2026
- **Status**: ✅ Completed
- **Updates**:
  - Added **DDT with JSON** (`265_DDT_JSON.spec.ts`) — data-driven login tests from JSON
  - Added **FakerJS integration** (266–269) — fake data generation with `@faker-js/faker`
  - Added **xlsx-reader.ts** and **yamlReader.ts** — Excel and YAML test data readers
  - Added **20_PageObjectModel/** — POM pattern examples (`LoginPage.ts`, with/without POM)
  - Added **21_Fixture/**, **22_Misc_Consepts/**, **23_Advanced_Frame_work/** — placeholder directories for upcoming topics
  - Updated `package.json` with `@faker-js/faker` dependency
  - README updated with new test categories, data readers, POM section, and learning path entries

### Latest Update (May 23, 2026)

- **Date**: May 23, 2026
- **Status**: ✅ Completed
- **Updates**:
  - Added **17_Expect_Assertions**: URL, text, and visibility assertions (2 test files + cheatsheets)
  - Added **18_Test_Hooks**: Test lifecycle hooks (beforeEach, afterEach, describe grouping)
  - Added **19_Data_Driven_Testing**: Data-driven testing with inline data, CSV reader, and hooks (3 test files)
  - Added **Task_19_May/Project_10_DD_Testing**: CSV-driven registration form test with `register_csvReader`
  - README updated with all new test categories and learning path entries

### Latest Update (May 18, 2026)

- **Date**: May 18, 2026
- **Status**: ✅ Completed
- **Updates**:
  - Moved **07_Web_Tables** into `06_Multiple_Elements/` directory
  - Added **08_Web_SelectFrames_iframes**: Select dropdowns and frame handling (5 test files)
  - Added **09_Frames_IFrames**: Single, multiple, and nested iframe handling (3 test files)
  - Added **10_Keyboad_Hover_Drag_Drop**: Keyboard, hover, drag & drop, right click (5 test files)
  - Added **11_JS_Alert**: JavaScript alert, confirm, and prompt handling
  - Added **15_File_Download**: File download handling and validation
  - Added **16_ScrollToElement**: Scroll to element interactions
  - README updated with new test categories, project structure, and learning path

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
