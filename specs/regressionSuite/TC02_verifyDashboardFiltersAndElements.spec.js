import loginPage from "../../pageObjects/login.page";
import tripdashboard from "../../pageObjects/tripDashboard.page";

describe("Add/Login/Delete User from Users", () => {
  it("Add & Edit & Login SuperAdmin from Users", () => {
    loginPage.openAndLoginAsSuperAdmin();
    browser.pause(2500);
    tripdashboard.selectFilter();
    loginPage.logout.click();
    browser.pause(3000);
  });

  it("Reset Password for User", () => {
    loginPage.openAndLoginAsSuperAdmin();
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.resetPassword();
  });
});
