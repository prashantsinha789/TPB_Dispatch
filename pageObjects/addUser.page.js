import addUsermock from "../mockFiles/addUserMock";
class AddUser {
  get clickAddUser() {
    return browser.$("*=Add User");
  }

  get firstName() {
    return browser.$("[name=firstName]");
  }

  get lastName() {
    return browser.$("[name=lastName]");
  }

  get primaryPhone() {
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

  get role() {
    return browser.$("#role");
  }

  get userRole() {
    return browser.$("[name=role]");
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get searchUser() {
    return browser.$("#searchFilter");
  }

  get edit() {
    return browser.$(".action-button > #dropdownMenuButton");
  }

  get clickEdit() {
    return browser.$("*=Edit");
  }

  get addAltPhone() {
    return browser.$("#alternativePhone");
  }

  get userName() {
    return browser.$("#dropdownMenuButton");
  }

  get organization() {
    return browser.$("#organization");
  }

  addSuperAdmin() {
    this.clickAddUser.click();
    this.firstName.setValue(addUsermock.firstName);
    this.lastName.setValue(addUsermock.lastName);
    this.primaryPhone.setValue(addUsermock.primaryNumber);
    this.email.setValue(addUsermock.email);
    this.password.setValue(addUsermock.password);
    this.confirmPassword.setValue(addUsermock.password);
    this.role.selectByIndex(1);
    this.saveBtn.click();
    this.userRole.selectByIndex(1); //on add user page for searching created user
    this.searchUser.setValue(addUsermock.searchName);
  }

  editSuperAdmin() {
    browser.pause(2000);
    this.edit.click();
    this.clickEdit.click();
    this.addAltPhone.setValue(addUsermock.alternateNumber);
    this.saveBtn.click();
  }

  addbaseAdmin() {
    this.clickAddUser.click();
    this.firstName.setValue(addUsermock.baseFirstName);
    this.lastName.setValue(addUsermock.baseLastName);
    this.primaryPhone.setValue(addUsermock.basePrimaryNumber);
    this.email.setValue(addUsermock.baseEmail);
    this.password.setValue(addUsermock.basePassword);
    this.confirmPassword.setValue(addUsermock.basePassword);
    this.role.selectByIndex(2);
    this.organization.selectByIndex(15);
    browser.pause(1000);
    this.saveBtn.click();
    this.userRole.selectByIndex(2); //on add user page for searching created user
    this.searchUser.setValue(addUsermock.baseSearchName);
  }

  editBaseAdmin() {
    browser.pause(2000);
    this.edit.click();
    this.clickEdit.click();
    this.addAltPhone.setValue(addUsermock.baseAlternateNumber);
    this.saveBtn.click();
  }

  addDispatcher() {
    this.clickAddUser.click();
    this.firstName.setValue(addUsermock.dispatcherFirstName);
    this.lastName.setValue(addUsermock.dispatcherLastName);
    this.primaryPhone.setValue(addUsermock.dispatcherPrimaryNumber);
    this.email.setValue(addUsermock.dispatcherEmail);
    this.password.setValue(addUsermock.dispatcherPassword);
    this.confirmPassword.setValue(addUsermock.dispatcherPassword);
    this.role.selectByIndex(3);
    this.organization.selectByIndex(15);
    browser.pause(1000);
    this.saveBtn.click();
    this.userRole.selectByIndex(3); //on add user page for searching created user
    this.searchUser.setValue(addUsermock.dispatcherSearchName);
  }

  editDispatcher() {
    browser.pause(2000);
    this.edit.click();
    this.clickEdit.click();
    this.addAltPhone.setValue(addUsermock.dispatcherAlternateNumbers);
    this.saveBtn.click();
  }
}

export default new AddUser();
