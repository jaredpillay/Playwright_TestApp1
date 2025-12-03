# Playwright_TestApp1

## Overview
This is a mini project focused on automating web applications using Playwright. The project demonstrates end-to-end testing practices including test automation, assertions, reporting, and debugging capabilities.

### Test Suites

1. **To-do App Test** (`todo.spec.js`) - Automated testing of TodoMVC application
   - Tag: `@sanity`
   - Adds 3 todos, marks them as completed, and clears completed items
   - Verifies todo visibility and removal

2. **Web CV Test** (`webcvtest.spec.js`) - Automated testing of personal portfolio website
   - Tag: `@inspect`
   - Tests navigation through portfolio pages (Home, About, Skills, Work, Education, Contact)
   - Tests dark/light mode toggle
   - Tests LinkedIn social link

## What We've Done So Far

1. ✅ **Installed Playwright and created tests** - Set up Playwright framework with test files
2. ✅ **Automated to-do app interactions** - Created comprehensive test that:
   - Adds 3 todos (Buy Groceries, Go for walk, Code)
   - Marks 2 items as completed
   - Clears completed todos
   - Verifies todos are visible in the list
   - Confirms completed todos are removed
3. ✅ **Implemented test tagging** - Added `@sanity` tag to tests for selective test execution with `--grep`
4. ✅ **Added proper assertions** - Implemented multiple assertions to verify test outcomes:
   - `toContainText()` to verify todos exist
   - `not.toContainText()` to verify deleted todos are gone
5. ✅ **Code cleanup and optimization** - Refactored test code:
   - Fixed spelling errors ("Goceries" → "Groceries")
   - Removed redundant clicks and unnecessary actions
   - Stored selectors in variables for reusability
   - Added descriptive comments for test sections
   - Improved code readability and maintainability
6. ✅ **Generated HTML reports** - Configured Playwright to generate HTML test reports
7. 🔄 **In Progress** - Screenshots, videos on failure, debug mode, and trace mode

## Learning Resource
This project is based on the Playwright tutorial: [Playwright Complete Tutorial - YouTube](https://www.youtube.com/watch?v=5wSztvWhx14)

## Mini Project — To-do App Automation

### Project Goals (measurable)

1. Install Playwright and create tests
2. Automate adding 3 todos, mark 1 as completed, delete
3. Generate Playwright HTML report and open it
4. Add assertions and check failure in report
5. Take screenshots and video on failure and attach to report
6. Run with interactive ui
7. Run in debug mode
8. Run with trace on