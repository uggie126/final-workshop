import { Page } from "@playwright/test";

export class SupplierPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://lunch.devbstaging.com/login-password");
  }

  async loginAsAdmin(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async createSupplierAndDishes(supplierName: string) {
    await this.page.getByText('mode_editLunch Editing').click();
    await this.page.getByText('Start by').click();
    await this.page.locator('a').filter({ hasText: 'adding one.' }).click();

    await this.page.getByRole('combobox', { name: 'Provider Name' }).fill(supplierName);
    await this.page.getByRole('combobox', { name: 'Color' }).click();
    await this.page.locator('a').filter({ hasText: 'Red' }).first().click();

    await this.page.getByRole('spinbutton', { name: 'Price' }).nth(0).fill('1');
    await this.page.getByRole('textbox', { name: 'Selection Name' }).nth(0).fill('Soup');
    await this.page.getByRole('textbox', { name: 'Translation' }).nth(0).fill('Sriuba');

    await this.page.getByText('Pagrindiniai Patiekalai (Main').click();
    await this.page.getByRole('spinbutton', { name: 'Price' }).nth(1).fill('1');
    await this.page.getByRole('textbox', { name: 'Selection Name' }).nth(1).fill('Dish');
    await this.page.getByRole('textbox', { name: 'Translation' }).nth(1).fill('Patiekalas');

    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}