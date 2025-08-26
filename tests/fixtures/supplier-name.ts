export let lastCreatedSupplier = "";

export function setSupplierName(name: string) {
  lastCreatedSupplier = name;
}

export function getSupplierName() {
  return lastCreatedSupplier;
}