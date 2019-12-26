import driverMockPage from "../mockFiles/addDriverMock";
import credentialsMock from "../mockFiles/credentialsMock";
class AddDriverPage {
  get addDriverButton() {
    return browser.$(".btn.btn-primary.btn-round.ng-star-inserted");
  }

  get transportBase() {
    return browser.$("#transportBase");
  }

  get firstName() {
    return browser.$('[name="firstName"]');
  }

  get lastName() {
    return browser.$('[name="lastName"]');
  }

  get phoneNum() {
    return browser.$("#primaryPhone");
  }

  get email() {
    return browser.$("#email");
  }

  get password() {
    return browser.$("#password");
  }

  get confirmPassword() {
    return browser.$("#confirmPassword");
  }

  get licenseNumber() {
    return browser.$('[name="licenseNumber"]');
  }

  get expiryDate() {
    return browser.$("//input[@placeholder='MM/DD/YYYY']");
  }

  get selectState() {
    return browser.$('[name="licenseState"]');
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  addDriver() {
    this.addDriverButton.click();
    this.transportBase.click();
    this.transportBase.selectByVisibleText(driverMockPage.transportBaseName);
    this.transportBase.click();
    this.firstName.setValue(driverMockPage.driverFirstName);
    this.lastName.setValue(driverMockPage.driverLastName);
    this.phoneNum.setValue(driverMockPage.phoneNumber);
    this.email.setValue(driverMockPage.email);
    this.password.setValue(credentialsMock.password);
    this.confirmPassword.setValue(credentialsMock.password);
    this.licenseNumber.setValue(driverMockPage.licenseNumber);
    this.expiryDate.setValue(driverMockPage.expiry);
    this.selectState.click();
    this.selectState.selectByVisibleText(driverMockPage.state);
    this.selectState.click();
    this.saveBtn.click();
    browser.pause(2000);
  }
}

export default new AddDriverPage();
