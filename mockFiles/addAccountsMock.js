class addAccountMock {
  get accountName() {
    return "DummyTestAutomation Account";
  }

  get transitBillingRefTag() {
    return "0007TPB007";
  }

  get email() {
    return "dummyTestAutomation@yopmail.com";
  }

  get doingBusinessAs() {
    return "DUMMYTEST";
  }

  get primaryPhone() {
    return "7776665657";
  }

  get firstName() {
    return "DUMMYT";
  }

  get lastName() {
    return "TESTACCOUNT";
  }

  get email2() {
    return "dymmyAcc@yopmail.com";
  }

  get distanceTo() {
    return "6";
  }

  get basePrice() {
    return "56";
  }

  get mileage() {
    return "4";
  }

  get addBasePrice() {
    return "40";
  }

  get addOnMileage() {
    return "14";
  }

  get apiCallDelete() {
    return "automationtest@yopmail.com"
  }
}

export default new addAccountMock();
