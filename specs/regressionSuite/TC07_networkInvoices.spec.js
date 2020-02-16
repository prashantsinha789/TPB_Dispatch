import loginPage from "../../pageObjects/login.page";
import generateInvoicePage from "../../pageObjects/generateInvoice.page";

describe("Network Invoices", () => {
  it("generate invoices and pay it from invoice page", () => {
    loginPage.openAndLoginAsBaseAdmin();
    generateInvoicePage.goToInvoicePage();
    generateInvoicePage.generateInvoice();
    generateInvoicePage.payInvoice();
  });
});
