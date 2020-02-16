import addtripMock from "../mockFiles/tripMock";
class completeTripFuncPage {
  get transportBaseDropdown() {
    return browser.$('[name="corporateAccount"]');
  }

  get todayTrips() {
    return browser.$("*=Today");
  }

  get tripDropdown() {
    return browser.$(".dropdown-toggle.btn.btn-link");
  }

  get completeTrip() {
    return browser.$("*=Complete Offline");
  }

  get selectDriver() {
    return browser.$("[name=driver]");
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get completeTripBtn() {
    return browser.$(".fa.fa-check");
  }

  get completeStatus() {
    return browser.$(".badge.completed.ng-star-inserted");
  }

  completeTipOffline() {
    this.transportBaseDropdown.click();
    this.transportBaseDropdown.selectByVisibleText(addtripMock.corporateAccDropdown);
    this.todayTrips.click();
    browser.pause(3000);
    this.tripDropdown.click();
    browser.pause(2000);
    this.completeTrip.click();
    this.selectDriver.click();
    this.selectDriver.selectByIndex(1);
    this.saveBtn.click();
    browser.pause(2000);
    this.completeTripBtn.click();
  }
}

export default new completeTripFuncPage();
