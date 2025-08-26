import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/login.page";
import { users } from "../fixtures/users";

test.describe("Login flows", () => {
  test("Admin can login and see dashboard", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(users.admin.email, users.admin.password);

    await loginPage.assertRedirectToDashboard();
  });

  test("Simple user can login and see dishes", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(users.simple.username, users.simple.password);

    await loginPage.assertRedirectToDashboard();
  });
});