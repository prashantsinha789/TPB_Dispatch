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
    return browser.$(".treeview:nth-child(4) > a > span:nth-child(2)");
  }

  get accountsMembers() {
    return browser.$(".menu-open > li:nth-child(1) > a");
  }

  get activityLog() {
    return browser.$(".treeview-menu > li:nth-child(2) span");
  }

  get tripSync() {
    return browser.$(".ng-star-inserted:nth-child(3) > a > span:nth-child(2)");
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
}

export default new Hamburger();
