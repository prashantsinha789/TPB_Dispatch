import addDriverMock from "../mockFiles/addDriverMock";
import hamburgerMenuPage from "../pageObjects/hamburgerMenu.page";

class DriverVehicleIntegrationPage {
  get resetButton() {
    return browser.$("*=Reset");
  }

  get searchDriver() {
    return browser.$("#nameFilter");
  }

  get clickDropdown() {
    return browser.$(".fa.fa-ellipsis-v");
  }

  get editBtn() {
    return browser.$(".fa.fa-edit");
  }

  get editVehicleDetails() {
    return browser.$(
      "/html/body/div/app/div/app-fleet/app-driver-details/section[2]/div[1]/div[1]/div[3]/div[1]/div/button"
    );
  }

  get owner() {
    return browser.$('[name="owner"]');
  }

  get selectVehicle() {
    return browser.$('[name="assignedVehicle"]');
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get availableDriver() {
    return browser.$(".ml-5.available");
  }

  get availableAssertion() {
    return browser.$(".badge.available");
  }

  get associatedDrivers() {
    return browser.$("*=Associate Drivers");
  }

  get selectAllButton() {
    return browser.$("button=Select All");
  }

  get searchBase() {
    return browser.$("#nameFilter");
  }

  get baseDropdown() {
    return browser.$(".fa.fa-ellipsis-v");
  }

  addVehicleToDriver() {
    this.resetButton.click();
    this.searchDriver.setValue(addDriverMock.driverFirstName);
    browser.pause(2000);
    this.clickDropdown.click();
    this.editBtn.click();
    browser.pause(2000);
    this.editVehicleDetails.click(); //clicking Edit On Details Page
    browser.pause(2000);
    this.owner.click();
    this.selectVehicle.click();
    this.selectVehicle.selectByVisibleText(addDriverMock.selectDriver);
    this.saveBtn.click();
    browser.pause(2000);
    browser.back();
  }

  setDriverAvailable() {
    this.resetButton.click();
    this.searchDriver.setValue(addDriverMock.driverFirstName);
    browser.pause(2000);
    this.clickDropdown.click();
    this.availableDriver.click();
  }

  integrateDriverWithBase() {
    hamburgerMenuPage.accounts.click();
    browser.pause(2000);
    hamburgerMenuPage.allAccounts.click();
    this.resetButton.click();
    this.searchBase.setValue(addDriverMock.searchBase);
    browser.pause(2000);
    this.baseDropdown.click();
    this.associatedDrivers.click();
    this.selectAllButton.click();
    this.saveBtn.click();
  }
}

export default new DriverVehicleIntegrationPage();
