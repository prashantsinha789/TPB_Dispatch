import loginPage from "../../pageObjects/login.page";
import addTrip from "../../pageObjects/addTripFunc.page";
import hamburgerMenuPage from "../../pageObjects/hamburgerMenu.page";
import completetripPage from "../../pageObjects/completeTripFunc.page";
import assertionMessages from "../../assertionFiles/assertionRegressionTest";

describe("Add-Edit-Details Trip from SuperAdmin", () => {
  it("Add Trip Details and verify it on dashboard", () => {
    loginPage.openAndLoginAsSuperAdmin();
    browser.pause(2500);
    addTrip.addTripSuperAdmin();
    addTrip.selectAndEditTrip();
    addTrip.seeDetailedTrip();
    browser.pause(7000);
    expect(addTrip.notes.getText()).to.equal(assertionMessages.addTripAssert);
    addTrip.hideDetails.click();
  });

  it("Complete Created Trip from Base", () => {
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.openAndLoginAsBase();
    browser.pause(2500);
    hamburgerMenuPage.tripsPage.click();
    completetripPage.completeTipOffline();
    expect(completetripPage.completeStatus.getText()).to.equal(assertionMessages.completedAssert);
  });
});
