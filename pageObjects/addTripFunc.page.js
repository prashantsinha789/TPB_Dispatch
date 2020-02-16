import addtripMock from "../mockFiles/tripMock";
class AddTripFuncPage {
  get addTripButton() {
    return browser.$("*=Add Trips");
  }

  get transportBaseDropdown() {
    return browser.$('[name="transportBase"]');
  }

  get corporateAccDorpdown() {
    return browser.$("[name=corporateAcc]");
  }

  get newCheckbox() {
    return browser.$("[name=cust]");
  }

  get medicID() {
    return browser.$("[name=medicaidId]");
  }

  get firstName() {
    return browser.$("[name=firstName]");
  }

  get lastName() {
    return browser.$("[name=lastName]");
  }

  get email() {
    return browser.$("#email");
  }

  get phoneNumber() {
    return browser.$("#phone");
  }

  get tripTypeDropdown() {
    return browser.$("[name=tripType]");
  }

  get willCall() {
    return browser.$("//span[text()='Will Call']");
  }

  get pickupLocation() {
    return browser.$("#pickupLocation");
  }

  get destinationLocation() {
    return browser.$("#destinationLocation");
  }

  get pickupPhone() {
    return browser.$("#pickupPhone");
  }

  get selectMember() {
    return browser.$("*=3");
  }

  get selectCar() {
    return browser.$(".sedan");
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get corporateAccDd() {
    return browser.$("[name=corporateAccount]");
  }

  get resetBtn() {
    return browser.$("*=Reset");
  }

  get todayTrips() {
    return browser.$("*=Today");
  }

  get tripDropdown() {
    return browser.$(".dropdown-toggle.btn.btn-link");
  }

  get editTripOption() {
    return browser.$("*=Edit Trip");
  }

  get destinationPhone() {
    return browser.$("#destinationPhone");
  }

  get showDetailed() {
    return browser.$("*=Show Detail");
  }

  get addNotes() {
    return browser.$('[name="newNote"]');
  }

  get notes() {
    return browser.$("//p[text()='Test Trip Added']");
  }

  get addNoteBtn() {
    return browser.$("button=Add Note");
  }

  get hideDetails() {
    return browser.$("*=Hide Detail");
  }

  get unAssignedTrip() {
    return browser.$("//h3[text()='Unassigned']");
  }

  addTripSuperAdmin() {
    this.addTripButton.click();
    browser.pause(2000);
    this.transportBaseDropdown.selectByIndex(5);
    browser.pause(2000);
    this.corporateAccDorpdown.click();
    this.corporateAccDorpdown.selectByVisibleText(
      addtripMock.corporateAccDropdown
    );
    this.newCheckbox.click();
    this.medicID.setValue(addtripMock.medicaidID);
    this.firstName.setValue(addtripMock.firstName);
    this.lastName.setValue(addtripMock.lastName);
    this.email.setValue(addtripMock.email);
    this.phoneNumber.setValue(addtripMock.phoneNumber);
    this.pickupLocation.setValue(addtripMock.pickupLocation);
    this.destinationLocation.setValue(addtripMock.destination);
    this.pickupPhone.setValue(addtripMock.phnNum);
    browser.pause(2000);
    this.tripTypeDropdown.selectByIndex(3);
    this.willCall.click();
    this.selectCar.click();
    this.saveBtn.click();
    browser.pause(7000);
  }

  selectAndEditTrip() {
    browser.pause(2000);
    this.resetBtn.click();
    this.unAssignedTrip.click();
    browser.pause(1000);
    this.transportBaseDropdown.selectByIndex(5);
    this.todayTrips.click();
    browser.pause(2000);
    this.tripDropdown.click();
    this.editTripOption.click();
    this.destinationPhone.setValue(addtripMock.DestPhone);
    this.saveBtn.click();
  }

  seeDetailedTrip() {
    browser.pause(2000);
    this.tripDropdown.click();
    this.showDetailed.click();
    this.addNotes.setValue(addtripMock.addNotes);
    this.addNoteBtn.click();
  }
}

export default new AddTripFuncPage();
