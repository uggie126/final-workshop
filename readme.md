# Lunch Ordering App - Playwright E2E Tests

This repository contains end-to-end (E2E) tests for the Lunch Ordering web application, built using [Playwright](https://playwright.dev/).  
The tests cover workflows for both *Admin* and *User* roles, including supplier creation, supplier and dish creating, and ordering as a user (not completed).

---

## Table of Contents
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Project Structure](#project-structure)  
- [Running Tests](#running-tests)  
- [Test Scenarios](#test-scenarios)  
- [Notes](#notes)  
- [Contact](#contact)  

---

## Prerequisites
- Node.js >= 18  
- npm or yarn  
- Playwright installed (npm install @playwright/test or yarn add @playwright/test)  

---

## Installation
1. Clone the repository:
```bash
git clone https://github.com/uggie126/final-workshop.git
cd final-workshop

2. npm install

3. npx playwright install

To run tests: 
npx playwright test

## Test Scenarios

Admin Flow (supplier.spec.ts)

1. Login as Admin

2. Navigate to the menu editor page

3. Create a new supplier with a unique name

4. Add multiple dishes with translations

5. Save the supplier and dishes

User Flow (order.spec.ts) [not completed]

1. Login as User

2. Navigate to supplier's menu page (dynamic URL)

3. Select the supplier

4. Order dishes

5. Verify success popup