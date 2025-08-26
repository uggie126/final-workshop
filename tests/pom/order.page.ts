import { Page, expect } from "@playwright/test";
import { SupplierPage } from "./supplier.page";
import { getSupplierName } from "../fixtures/supplier-name";

export class OrderPage {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async loginAsUser(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }


  async selectSupplier() {
    const supplierName = getSupplierName();
    await this.page.getByText(`color_lens${supplierName}`, { exact: true}).click();
  }

  async orderDish() {
    await this.page.getByText('account_circle0euro_symbol1.00').first().click();
    await this.page.getByText('account_circle0euro_symbol1.00', { exact: true }).click();
    await this.page.getByRole('button', { name: '€' }).click();
    await this.page.getByRole('button', { name: '€' }).click();
  }

  async verifyOrderSuccess() {
    const successPopup = this.page.getByRole('alert');
    await expect(successPopup).toBeVisible();

    await successPopup.locator('..').getByText('Close').click();
  }
}