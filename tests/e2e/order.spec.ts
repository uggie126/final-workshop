import { test } from "@playwright/test";
import { OrderPage } from "../pom/order.page";
import { getSupplierName } from "../fixtures/supplier-name";

test.skip("User can order from the supplier created by admin", async ({ page }) => {
  const supplierName = getSupplierName();
  const orderPage = new OrderPage(page);

  await orderPage.goto("https://lunch.devbstaging.com/login-password");
  await orderPage.loginAsUser("ugne.kalantaite@sft.com", "student421");

  const supplierUrl = `https://lunch.devbstaging.com/dishes/${encodeURIComponent(supplierName)}`;
  await orderPage.goto(supplierUrl);

  await orderPage.selectSupplier();

  await orderPage.orderDish();
  await orderPage.verifyOrderSuccess();
});