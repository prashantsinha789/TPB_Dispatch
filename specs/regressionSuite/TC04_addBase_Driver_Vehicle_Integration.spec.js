import hamburgerMenuPage from "../../pageObjects/hamburgerMenu.page";
import loginPage from "../../pageObjects/login.page";
import addbasePage from "../../pageObjects/addBase.page";
import adddriverPage from "../../pageObjects/addDriver.page";
import addVehiclePage from "../../pageObjects/addVehicle.page";
import addBasePage from "../../pageObjects/addBase.page";
import assertionSanityTest from "../../assertionFiles/assertionRegressionTest";
import integrationDriverVehicle from "../../pageObjects/driverVehicleIntegration.page";
import driverServerFile from "../../serverFile/driverServer";
import vehicleServerFile from "../../serverFile/vehicleServer";
import baseServerFile from "../../serverFile/baseServer";

describe("Add Base,Driver,Vehicle & Integrate it to each other", () => {
  browser.call(async () => {
    await driverServerFile.getTokenAndDeleteDriver();
    await vehicleServerFile.getTokenAndDeleteVehicle();
    await baseServerFile.getTokenAndDeleteBase();
  });

  it("Add Base from SuperAdmin", () => {
    loginPage.openAndLoginAsSuperAdmin();
    browser.pause(2500);
    hamburgerMenuPage.clickTransportBase();
    addbasePage.addBase();
    addBasePage.searchCreatedBase();
    expect(addBasePage.baseAfterCreation.getText()).to.equal(
      assertionSanityTest.baseAssert
    );
  });

  it("Add Driver from SuperAdmin", () => {
    hamburgerMenuPage.fleetMenuDriver.click();
    adddriverPage.addDriver();
  });

  it("Add Vehicle from Super Admin", () => {
    hamburgerMenuPage.fleetMenuVehicle.click();
    addVehiclePage.addVehicle();
    addVehiclePage.editVehicle();
  });

  it("Integrate Vehicle and Driver", () => {
    hamburgerMenuPage.fleetMenuDriver.click();
    integrationDriverVehicle.addVehicleToDriver();
    integrationDriverVehicle.setDriverAvailable();
    expect(integrationDriverVehicle.availableAssertion.getText()).to.equal(
      assertionSanityTest.driverIntegrationAssert
    );
    loginPage.logout.click();
    browser.pause(3000);
  });

  it("Assign Drivers to the Test Base created by SuperAdmin", () => {
    loginPage.loginCreatedDummyBase();
    integrationDriverVehicle.integrateDriverWithBase();
    browser.pause(5000);
  });
});
