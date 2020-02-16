import hamburgerMenuPage from "../pageObjects/hamburgerMenu.page";
import driverCheckoutMock from "../mockFiles/driversCheckoutMock";

class GenerateRecieptPage {
  get driverName() {
    return browser.$('[name="driver"]');
  }

  get fromDate() {
    return browser.$('[name="from-date"]');
  }

  get selectReciept() {
    return browser.$("#customControlAutosizing0");
  }

  get closeCal() {
    return browser.$(".input-group-text");
  }

  get saveButton() {
    return browser.$(".fa.fa-bookmark");
  }

  get clickDropdown() {
    return browser.$(".fa.fa-ellipsis-v");
  }

  get selectEdit() {
    return browser.$(".fa.fa-edit");
  }

  get completeAndDownload() {
    return browser.$(".fa.fa-download");
  }

  get detailsButton() {
    return browser.$(".fa.fa-list");
  }

  setDateAndDriver() {
    this.driverName.click();
    browser.pause(1500);
    this.driverName.selectByVisibleText(driverCheckoutMock.drivername);
    this.driverName.click();
    browser.pause(1500);
    this.fromDate.click();
    this.fromDate.setValue(driverCheckoutMock.fromDate);
    this.closeCal.click();
    browser.pause(1500);
    this.selectReciept.click();
  }

  saveReciept() {
    this.saveButton.click();
    this.clickDropdown.click();
    this.selectEdit.click();
    browser.pause(3000);
    this.completeAndDownload.click();
  }

  goToMenuGenerateReciept() {
    hamburgerMenuPage.driversCheckout.click();
    browser.pause(2000);
    hamburgerMenuPage.generateReciept.click();
  }

  checkDetails() {
    this.clickDropdown.click();
    this.detailsButton.click();
  }
}

export default new GenerateRecieptPage();
