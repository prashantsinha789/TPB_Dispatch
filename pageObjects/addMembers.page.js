import addMemberMock from "../mockFiles/addMemberMock";
class AddMembersPage {
  get addMemberBtn() {
    return browser.$("*=Add Member");
  }

  get corporateAcc() {
    return browser.$("#account");
  }

  get medicAid() {
    return browser.$('[name="medicaidId"]');
  }

  get firstname() {
    return browser.$('[name="firstName"]');
  }

  get lastName() {
    return browser.$('[name="lastName"]');
  }

  get phoneNum() {
    return browser.$("#primaryPhone");
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get searchMemberUI() {
    return browser.$("#searchFilter");
  }

  get resetButton() {
      return browser.$("*=Reset")
  }

  get email() {
      return browser.$('[name="email"]');
  }

  get searchedMember() {
      return browser.$("//td[text()='DummyPrashant TestAccount']");
  }

  addMember() {
    this.addMemberBtn.click();
    this.corporateAcc.click();
    browser.pause(2000);
    this.corporateAcc.selectByVisibleText(addMemberMock.corporateAcc);
    this.corporateAcc.click();
    this.medicAid.setValue(addMemberMock.medicAidID);
    this.firstname.setValue(addMemberMock.firstName);
    this.lastName.setValue(addMemberMock.lastName);
    this.phoneNum.setValue(addMemberMock.phone);
    this.email.setValue(addMemberMock.email);
    this.saveBtn.click();
  }

  searchMember() {
      browser.pause(2000);
      this.resetButton.click();
      this.searchMemberUI.setValue(addMemberMock.firstName);
      browser.pause(2000);
  }
}

export default new AddMembersPage();
