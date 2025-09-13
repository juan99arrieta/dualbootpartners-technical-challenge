# 🚀 Cypress + Cucumber (BDD) + POM + Allure Reports

This project contains **end-to-end automated tests** for the **Demoblaze e-commerce application**.  

The automation framework was built using **Cypress**, following the **BDD approach with Cucumber** and the **Page Object Model (POM)** design pattern to ensure the code is modular, maintainable, and easy to read.  

Test results are generated with **Allure Reports**, providing detailed and professional reporting of each execution, including screenshots and logs for failed tests.  

---


> ⚠️ **Disclaimer**  
> Two test scenarios under the **Checkout feature** are intentionally designed to fail.  
> The Demoblaze application does not support these specific functionalities (updating product quantities in the cart and checking out with an empty cart).  
>  
> These scenarios were included to demonstrate how the framework handles **expected exceptions** and how Cypress combined with Allure generates **detailed failure reports with screenshots**.  
> This showcases the robustness of the test framework when dealing with negative paths or unsupported features in real applications.
---

### 🔧 What I implemented
- Project setup using **Yarn** as package manager.  
- End-to-end test automation with **Cypress**.  
- **BDD with Cucumber** integration (`.feature` files + step definitions).  
- **Page Object Model (POM)** for clean and reusable code.  
- **Automated flows for:**  
  - Login and Signup validation.  
  - Category validation (Phones, Laptops, Monitors).  
  - Add to Cart & Checkout process with confirmation validation.  
  - Negative scenarios (checkout without products, invalid login).  
  - Dynamic validations (updating cart total after changing quantity).  
  - Profile simulation via Contact modal.  
- Assertions for URLs, UI elements, cart calculations, and confirmation messages.  
- **Allure Reports** integration to generate detailed test execution reports.  

---

### 📂 Project Structure

cypress  
----└── e2e  
--------├── features  
--------└── step_definitions  
----├── fixtures   
----├── pages   
----└── support    
.cypress-cucumber-preprocessorrc.json   
cypress.config.js   
jsconfig.json   
package.json   
yarn.lock   
readme.md 

### 📜 Available Scripts

The following scripts are defined in the `package.json` and can be executed with **Yarn**:

| Script | Command | Description |
|--------|---------|-------------|
| **cypress:runner** | `yarn run cypress:runner` | Opens the interactive Cypress Test Runner in Chrome for E2E testing. |
| **cypress:execution** | `yarn run cypress:execution` | Runs all feature files located in `cypress/e2e/features/*`. |
| **cypress:execution-tags** | `yarn run cypress:execution-tags` | Runs tests filtered by tags (e.g., `@mobile`). |
| **cypress:execution-allure** | `yarn run cypress:execution-allure` | Runs tests with **Allure reporting** enabled. |
| **allure:clear** | `yarn run allure:clear` | Cleans up previous Allure results, reports, and Cypress screenshots. |
| **allure:report** | `yarn run allure:report` | Generates a new **Allure report** in the `allure-report` folder. |
| **allure:history** | `yarn run allure:history` | Preserves report history across executions by moving history data. |

---

### 📂 Test Artifacts

When running tests through the **command line** (`cypress:execution`, `cypress:execution-tags`, or `cypress:execution-allure`), Cypress will automatically generate:  

- A `videos/` folder containing execution recordings for each spec.  
- A `screenshots/` folder that stores screenshots **only when a test fails**, helping with debugging.  

---  
### ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   Download the project or clone it from repository  
2. **Install Dependencies**
   ```bash
   yarn install
3. **Run Cypress in interactive mode**
   ```bash
   yarn run cypress:runner
4. **Run tests in headless mode (all feature files)**
   ```bash
   yarn run cypress:execution
5. **Run tests with Allure Reports enabled**
   ```bash
   yarn run cypress:execution-allure
6. **Generate the Allure Report after execution**
   ```bash
   yarn run allure:report
7. **Open Allure web application**
   ```bash
   yarn allure open
---