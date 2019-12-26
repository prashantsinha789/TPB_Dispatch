import credentialsMock from "../mockFiles/credentialsMock";
import baseMockPage from "../mockFiles/baseMock";

class AddBasePage {
  get addBaseButton() {
    return browser.$(".btn.ml-auto.btn-primary.btn-round");
  }

  get organizationName() {
    return browser.$("#organizationname");
  }

  get transitBillingReference() {
    return browser.$("#billingReference");
  }

  get organizationEmail() {
    return browser.$("#organizationemail");
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

  get primaryEmail() {
    return browser.$("#primaryContactEmail");
  }

  get Password() {
    return browser.$("#password");
  }

  get confirmPassword() {
    return browser.$("#confirmPassword");
  }

  get accountDropdown() {
    return browser.$("//span[text()='Select Account']");
  }

  get selectAll() {
    return browser.$("//span[text()='Select All']");
  }

  get closeDropdown() {
    return browser.$("[name=corporateAccount]");
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get resetBtn() {
    return browser.$("*=Reset");
  }

  get findOrzName() {
    return browser.$("#orgNameFilter");
  }

  get baseAfterCreation() {
    return browser.$("//td[text()='automationTestbase2@yopmail.com']");
  }

  addBase() {
    this.addBaseButton.click();
    this.organizationName.setValue(baseMockPage.orgnizatioName);
    this.transitBillingReference.setValue(baseMockPage.transitBillingRef);
    this.organizationEmail.setValue(baseMockPage.email);
    this.primaryPhone.setValue(baseMockPage.primaryPhone);
    this.firstName.setValue(baseMockPage.fname);
    this.lastName.setValue(baseMockPage.lname);
    this.primaryEmail.setValue(baseMockPage.primaryEmail);
    this.Password.setValue(credentialsMock.password);
    this.confirmPassword.setValue(credentialsMock.password);
    this.accountDropdown.click();
    this.selectAll.click();
    this.closeDropdown.click();
    this.saveBtn.click();
  }

  searchCreatedBase() {
    this.resetBtn.click();
    this.findOrzName.setValue(baseMockPage.searchName);
  }
}

export default new AddBasePage();
