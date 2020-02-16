import loginPage from "../../pageObjects/login.page";
import generateRecieptPage from "../../pageObjects/generateReciept.page";

describe("Drivers Checkout and Generate Reciept", () => {
  it("Save as a Draft from Generate Reciept and complete it at Drivers Reciept", () => {
    loginPage.openAndLoginAsBaseAdmin();
    generateRecieptPage.goToMenuGenerateReciept();
    generateRecieptPage.setDateAndDriver();
    generateRecieptPage.saveReciept();
  });

  it("Verify Driver Reciept", () => {
    generateRecieptPage.checkDetails();
  });
});
