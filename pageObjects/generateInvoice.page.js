import networkInvoiceMock from "../mockFiles/networkInvoiceMock";
import hamburgerMenuPage from "../pageObjects/hamburgerMenu.page";

class GenerateInvoicePage {
  get selectAccount() {
    return browser.$('[name="sortOrder"]');
  }

  get fromDate() {
    return browser.$('[name="from-date"]');
  }

  get closeCal() {
    return browser.$(".input-group-text");
  }

  get selectInvoices() {
    return browser.$("#customControlAutosizing0");
  }

  get clickDownloadButton() {
    return browser.$(".fa.fa-download");
  }

  get selectDropdown() {
    return browser.$(".fa.fa-ellipsis-v");
  }

  get selectPay() {
    return browser.$(".fa.fa-credit-card");
  }

  get paymentMethod() {
    return browser.$('[name="paymentMode"]');
  }

  get recieptNumber() {
    return browser.$('[name="paymentRefrenceNumber"]');
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  generateInvoice() {
    browser.pause(2000);
    this.selectAccount.selectByVisibleText(networkInvoiceMock.selectAcc);
    this.fromDate.setValue(networkInvoiceMock.fromDate);
    this.closeCal.click();
    this.selectInvoices.click();
    this.clickDownloadButton.click();
  }

  payInvoice() {
    browser.pause(2000);
    this.selectDropdown.click();
    this.selectPay.click();
    browser.pause(2000);
    this.paymentMethod.selectByVisibleText(networkInvoiceMock.paymentMethod);
    this.recieptNumber.setValue(networkInvoiceMock.recieptNumber);
    this.saveBtn.click();
  }

  goToInvoicePage() {
    hamburgerMenuPage.invoice.click();
    browser.pause(2000);
    hamburgerMenuPage.generateInvoice.click();
  }
}

export default new GenerateInvoicePage();
