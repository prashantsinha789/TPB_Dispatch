import accountMock from "../mockFiles/addAccountsMock";
import hamburgerMenuPage from "./hamburgerMenu.page";
class AddAccountPage {
  get addAccountButton() {
    return browser.$("*=Add Account");
  }

  get accountName() {
    return browser.$("#name");
  }

  get tbReferenceTag() {
    return browser.$("#billingReference");
  }

  get email() {
    return browser.$("#accountEmail");
  }

  get doingBusinessAs() {
    return browser.$("#doingBuisnessAs");
  }

  get primaryPhone() {
    return browser.$("#primaryPhone");
  }

  get firstName() {
    return browser.$("#firstName");
  }

  get lastName() {
    return browser.$("#lastName");
  }

  get email2() {
    return browser.$("#primaryContactEmail");
  }

  get addBasePrice() {
    return browser.$('[name="add"]');
  }

  get addOnMileage() {
    return browser.$('[name="addOnMileage"]');
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get searchEmail() {
    return browser.$("#emailFilter");
  }

  get resetBtn() {
    return browser.$("*=Reset");
  }

  get assertText() {
    return browser.$("//td[text()='DummyTestAutomation Account']");
  }

  goToAddAccPage() {
    hamburgerMenuPage.accounts.click();
    browser.pause(2000);
    hamburgerMenuPage.allAccounts.click();
  }

  addAccount() {
    this.addAccountButton.click();
    this.accountName.setValue(accountMock.accountName);
    this.tbReferenceTag.setValue(accountMock.transitBillingRefTag);
    this.email.setValue(accountMock.email);
    this.doingBusinessAs.setValue(accountMock.doingBusinessAs);
    this.primaryPhone.setValue(accountMock.primaryPhone);
    this.firstName.setValue(accountMock.firstName);
    this.lastName.setValue(accountMock.lastName);
    this.email2.setValue(accountMock.email2);
    this.addBasePrice.setValue(accountMock.addBasePrice);
    this.addOnMileage.setValue(accountMock.addOnMileage);
    this.saveBtn.click();
  }

  searchAccount() {
    this.resetBtn.click();
    browser.pause(2000);
    this.searchEmail.setValue(accountMock.email);
  }
}
export default new AddAccountPage();
