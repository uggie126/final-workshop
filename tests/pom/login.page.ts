import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { name: 'Login' });
}

async goTo() {
        await this.page.goto('https://lunch.devbstaging.com/login-password');
}

async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

async assertRedirectToDashboard() {
            await expect(this.page).toHaveURL((/https:\/\/lunch\.devbstaging\.com\/dishes\/[^/]+\/[^/]+$/));
        }

}
