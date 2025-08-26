import { test } from "@playwright/test";
import { SupplierPage } from "../pom/supplier.page";
import { setSupplierName } from "../fixtures/supplier-name";

test("Admin can create supplier with dishes", async ({ page }) => {
  const supplierPage = new SupplierPage(page);

  await supplierPage.goto();
  await supplierPage.loginAsAdmin("admin5@sft.com", "admin034");

  const supplierName = "Supplier" + Date.now();
  await supplierPage.createSupplierAndDishes(supplierName);

  await page.getByText(supplierName).isVisible();
  setSupplierName(supplierName);
});