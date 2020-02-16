import credentialsMock from "../mockFiles/credentialsMock";
import addUsermock from "../mockFiles/addUserMock"

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
    this.transportBaseFilter.selectByVisibleText(addUsermock.baseName);
    browser.pause(3000);
    this.corporateAccountID.click();
    this.corporateAccountID.selectByVisibleText(credentialsMock.dasboardMock);
  }
}

export default new tripDashboard();
