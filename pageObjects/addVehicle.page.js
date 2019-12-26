import vehicleMock from "../mockFiles/addVehicleMock";

class AddVehiclePage {
  get addVehicleButton() {
    return browser.$("*=Add Vehicle");
  }

  get addTransportBase() {
    return browser.$('[name="transportBase"]');
  }

  get vin() {
    return browser.$('[name="vin"]');
  }

  get vNumber() {
    return browser.$("#carNumber");
  }

  get make() {
    return browser.$('[name="manufacturer"]');
  }

  get manufacture() {
    return browser.$('[name="manufacturerModel"]');
  }

  get year() {
    return browser.$('[name="year"]');
  }

  get seatingCap() {
    return browser.$("[for='passenger-4']");
  }

  get carType() {
    return browser.$('[for="Sedan"]');
  }

  get licenseNumber() {
    return browser.$('[name="licensePlate"]');
  }

  get registrationDate() {
    return browser.$("//input[@placeholder='MM/DD/YYYY']");
  }

  //using this because there is no unique element in registrationDate() and this locator
  get expiryDate() {
    return browser.$(
      "/html/body/div[1]/app/div/app-fleet/app-vehicle-edit/section[2]/form/div/div/div/div[1]/div/div[2]/div/div[4]/div[2]/div/custom-date-picker/div/input"
    );
  }

  get saveBtn() {
    return browser.$("button=Save");
  }

  get resetButton() {
    return browser.$("*=Reset");
  }

  get searchVehicle() {
    return browser.$("#vinFilter");
  }

  addVehicle() {
    this.addVehicleButton.click();
    this.addTransportBase.click();
    this.addTransportBase.selectByVisibleText(vehicleMock.transportBase);
    this.addTransportBase.click();
    this.vin.setValue(vehicleMock.vin);
    this.vNumber.setValue(vehicleMock.carNumber);
    this.make.click();
    this.make.selectByVisibleText(vehicleMock.make);
    this.make.click();
    this.manufacture.click();
    this.manufacture.selectByVisibleText(vehicleMock.manufacturer);
    this.manufacture.click();
    this.year.click();
    this.year.selectByVisibleText(vehicleMock.year);
    this.year.click();
    this.seatingCap.click();
    this.carType.click();
    this.licenseNumber.setValue(vehicleMock.lNo);
    this.registrationDate.click();
    this.registrationDate.setValue(vehicleMock.regDate);
    this.registrationDate.click();
    this.expiryDate.click();
    this.expiryDate.setValue(vehicleMock.expDate);
    this.expiryDate.click();
    this.saveBtn.click();
    browser.pause(3000);
  }

  editVehicle() {
    this.resetButton.click();
    this.searchVehicle.setValue(vehicleMock.lNo);
  }
}

export default new AddVehiclePage();
