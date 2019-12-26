import credentialsMock from "../mockFiles/credentialsMock";

class tripDashboard {
    
  get resetButton() {
    return browser.$("*=Reset");
  }

  get transportBaseFilter() {
    return browser.$("[name='transportBase']");
  }

  get corporateAccountID() {
    return browser.$("[name='corporateAccount']");
  }

  selectFilter() {
    browser.pause(3000);
    this.resetButton.click();
    this.transportBaseFilter.selectByIndex(15);
    browser.pause(3000);
    this.corporateAccountID.click();
    this.corporateAccountID.selectByVisibleText(credentialsMock.dasboardMock);
  }
}

export default new tripDashboard();
