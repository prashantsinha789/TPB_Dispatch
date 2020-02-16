import loginPage from "../../pageObjects/login.page";
import hamburgerMenu from "../../pageObjects/hamburgerMenu.page";
import users from "../../pageObjects/addUser.page";
import assertionRegressionTest from "../../assertionFiles/assertionRegressionTest";
import serverFile from "../../serverFile/userServer";

describe("Add/Login/Delete User from Users", () => {
  browser.call(async () => {
    await serverFile.getTokenAndDeleteUsers();
  });

  it("Add & Edit & Login SuperAdmin from Users", () => {
    loginPage.openAndLoginAsSuperAdmin();
    browser.pause(2500);
    hamburgerMenu.users.click();
    users.addSuperAdmin();
    users.editSuperAdmin();
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.openAndLoginAsCreatedSuperAdmin();
    expect(users.userName.getText()).to.equal(
      assertionRegressionTest.superAdminAssertMsg
    );
  });

  it("Add & Edit & Login BaseAdmin from Users", () => {
    hamburgerMenu.users.click();
    users.addbaseAdmin();
    users.editBaseAdmin();
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.openAndLoginAsCreatedBaseAdmin();
    expect(users.userName.getText()).to.equal(
      assertionRegressionTest.baseAdminAssertMsg
    );
    loginPage.logout.click();
    browser.pause(2000);
  });

  it("Add & Edit & Login Dispatcher from Users", () => {
    loginPage.openAndLoginAsSuperAdmin();
    browser.pause(2500);
    hamburgerMenu.users.click();
    users.addDispatcher();
    users.editDispatcher();
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.openAndLoginAsCreatedDispatcher();
    expect(users.userName.getText()).to.equal(
      assertionRegressionTest.dispatcherAssertMsg
    );
  });
});

