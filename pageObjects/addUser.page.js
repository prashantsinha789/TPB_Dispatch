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
    this.firstName.setValue("Tony");
    this.lastName.setValue("Stark");
    this.primaryPhone.setValue("7892252478");
    this.email.setValue("sinha.prashant7891@gmail.com");
    this.password.setValue("Sinha@7891");
    this.confirmPassword.setValue("Sinha@7891");
    this.role.selectByIndex(1);
    this.saveBtn.click();
    this.userRole.selectByIndex(1); //on add user page for searching created user
    this.searchUser.setValue("Tony");
  }

  editSuperAdmin() {
    browser.pause(2000);
    this.edit.click();
    this.clickEdit.click();
    this.addAltPhone.setValue("8787987899");
    this.saveBtn.click();
  }

  addbaseAdmin() {
    this.clickAddUser.click();
    this.firstName.setValue("IM");
    this.lastName.setValue("Groot");
    this.primaryPhone.setValue("8798798796");
    this.email.setValue("imgroot@yopmail.com");
    this.password.setValue("Sinha@7891");
    this.confirmPassword.setValue("Sinha@7891");
    this.role.selectByIndex(2);
    this.organization.selectByIndex(15);
    browser.pause(1000);
    this.saveBtn.click();
    this.userRole.selectByIndex(2); //on add user page for searching created user
    this.searchUser.setValue("Groot");
  }

  editBaseAdmin() {
    browser.pause(2000);
    this.edit.click();
    this.clickEdit.click();
    this.addAltPhone.setValue("8745987899");
    this.saveBtn.click();
  }

  addDispatcher() {
    this.clickAddUser.click();
    this.firstName.setValue("Tom");
    this.lastName.setValue("Riddle");
    this.primaryPhone.setValue("8765876545");
    this.email.setValue("tomriddle@yopmail.com");
    this.password.setValue("Sinha@7891");
    this.confirmPassword.setValue("Sinha@7891");
    this.role.selectByIndex(3);
    this.organization.selectByIndex(15);
    browser.pause(1000);
    this.saveBtn.click();
    this.userRole.selectByIndex(3); //on add user page for searching created user
    this.searchUser.setValue("Riddle");
  }

  editDispatcher() {
    browser.pause(2000);
    this.edit.click();
    this.clickEdit.click();
    this.addAltPhone.setValue("2345677653");
    this.saveBtn.click();
  }
}

export default new AddUser();
