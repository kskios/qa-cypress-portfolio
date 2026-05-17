# QA Cypress Portfolio Project

> Portuguese version available in README-ptBR.md

> End-to-end test automation portfolio project built with Cypress and JavaScript,  
> following industry best practices for scalable and maintainable test architecture.

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)](https://opensource.org/licenses/MIT)

---

## Project Overview

This project demonstrates practical QA automation skills applied to a realistic e-commerce web application. It covers authentication flows, product interactions, and cart management — scenarios commonly found in production QA environments.

The codebase is structured around the **Page Object Model (POM)** pattern, with fixture-driven test data and custom Cypress commands to promote code reuse and long-term maintainability.

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| [Cypress](https://www.cypress.io/) | Latest | E2E testing framework |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | ES6+ | Primary language |
| [Node.js](https://nodejs.org/) | 18+ | Runtime environment |
| [npm](https://www.npmjs.com/) | Latest | Dependency management |

---

## Test Scenarios

| # | Scenario | Spec File | Result |
|---|----------|-----------|--------|
| 1 | Successful login with valid credentials | `home.cy.js` | Pass |
| 2 | Failed login with invalid credentials | `home.cy.js` | Pass |
| 3 | User logout flow | `home.cy.js` | Pass |
| 4 | Add product to cart | `home.cy.js` | Pass |

---

## Folder Structure

```
qa-cypress-portfolio/
├── cypress/
│   ├── e2e/
│   │   └── home.cy.js          # Test specifications
│   ├── fixtures/
│   │   └── user.json           # Externalized test data
│   ├── pages/
│   │   ├── loginPage.js        # Page Object: Login
│   │   └── productsPage.js     # Page Object: Products
│   ├── screenshots/            # Auto-generated on failure
│   ├── videos/                 # Auto-generated on headless run
│   └── support/
│       └── commands.js         # Custom Cypress commands
├── cypress.config.js
├── package.json
└── README.md
```

---

## Installation

**Prerequisites:** Node.js v18+ and npm installed.

```bash
# Clone the repository
git clone https://github.com/kskios/qa-cypress-portfolio.git

# Navigate to the project directory
cd qa-cypress-portfolio

# Install dependencies
npm install
```

---

## Running Tests

### Interactive Mode

Opens the Cypress Test Runner with a visual interface for real-time test execution and debugging.

```bash
npx cypress open
```

Select **E2E Testing**, choose a browser, and click a spec file to run it.

### Headless Execution

Runs the full test suite via the command line. Recommended for CI/CD pipelines.

```bash
npx cypress run
```

**Optional flags:**

```bash
# Run a specific spec file
npx cypress run --spec "cypress/e2e/home.cy.js"

# Target a specific browser
npx cypress run --browser chrome

# Disable video recording
npx cypress run --config video=false
```

---

## Features

- **Page Object Model** — UI selectors and interactions are decoupled from test logic
- **Custom Commands** — Reusable commands (e.g., `cy.login()`) reduce code duplication
- **Fixtures** — Test data is managed externally in JSON format for easy maintenance
- **Assertions** — Validates UI state, URL changes, and element content
- **Screenshot on Failure** — Cypress automatically captures the screen when a test fails
- **Video Recording** — Full test run recordings are saved for each headless execution
- **Headless Support** — Compatible with CI/CD environments out of the box

---

## Artifacts

After a headless run, the following artifacts are automatically generated:

| Artifact | Location | Trigger |
|----------|----------|---------|
| Screenshots | `cypress/screenshots/` | Test failure |
| Videos | `cypress/videos/` | Every headless run |

These artifacts support root cause analysis and can be shared as test evidence with stakeholders.

---

## Learning Objectives

This project was built to develop and demonstrate the following competencies:

- Setting up and configuring a Cypress project from scratch
- Writing clear, maintainable E2E test cases for real-world scenarios
- Applying the Page Object Model design pattern
- Managing test data through the fixtures layer
- Creating reusable logic with custom Cypress commands
- Validating application behavior with precise assertions
- Preparing a test suite for CI/CD pipeline integration

---

## Future Improvements

| Item | Priority | Description |
|------|----------|-------------|
| CI/CD Pipeline | High | Integrate with GitHub Actions for automated test runs |
| API Testing | High | Add request-level tests using `cy.request()` |
| HTML Reporting | Medium | Integrate Mochawesome for structured test reports |
| Cross-browser Testing | Medium | Expand coverage to Firefox and Edge |
| Accessibility Checks | Medium | Add a11y validation with `cypress-axe` |
| Multi-environment Config | Low | Support staging and production environments via `.env` |
| Docker Support | Low | Containerize the test suite for portability |

---

## Author

**Giovanni Ferreira**  
Junior QA Automation Engineer

[LinkedIn](https://www.linkedin.com/in/giovannibf/?locale=en-US) · [GitHub](https://github.com/kskios) 

---

## License

This project is licensed under the [MIT License](LICENSE).