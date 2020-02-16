class Hamburger {
  get tripsPage() {
    return browser.$("//span[text()='Trips']");
  }

  get fleetMenu() {
    return browser.$("//span[text()='Fleet']");
  }

  get fleetMenuTransport() {
    return browser.$(".menu-open > .ng-star-inserted > a");
  }

  get fleetMenuDriver() {
    return browser.$(".menu-open > li:nth-child(2) > a");
  }

  get fleetMenuVehicle() {
    return browser.$(".menu-open > li:nth-child(3) > a");
  }

  get liveTracking() {
    return browser.$("//span[text()='Live Tracking']");
  }

  get accounts() {
    return browser.$("//span[text()='Accounts']");
  }

  get allAccounts() {
    return browser.$("#accounts");
  }

  get accountsMembers() {
    return browser.$("#members");
  }

  get users() {
    return browser.$("//span[text()='Users']");
  }

  get logs() {
    return browser.$("//span[text()='Logs']");
  }

  get help() {
    return browser.$("//span[text()='Help']");
  }

  get driversCheckout() {
    return browser.$("//span[text()='Driver Checkout']");
  }

  get generateReciept() {
    return browser.$("#GenerateReceipt");
  }

  get driverReciept() {
    return browser.$("#DriverReceipts");
  }

  get priceConfig() {
    return browser.$("#PriceConfiguration");
  }

  get invoice() {
    return browser.$("//span[text()='Invoice']");
  }

  get generateInvoice() {
    return browser.$("#generate");
  }

  clickTransportBase() {
    this.fleetMenu.click();
    this.fleetMenuTransport.click();
  }
}

export default new Hamburger();
