import loginPage from "../../pageObjects/login.page";
import hamburgerMenu from "../../pageObjects/hamburgerMenu.page";
import users from "../../pageObjects/addUser.page";


describe("Add/Login/Delete User from Users", () => {
  it("Add & Edit & Login SuperAdmin from Users", () => {
    loginPage.openAndLoginAsSuperAdmin();
    browser.pause(2500);
    hamburgerMenu.users.click();
    users.addSuperAdmin();
    users.editSuperAdmin();
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.openAndLoginAsCreatedSuperAdmin();
    expect(users.userName.getText()).to.equal("Welcome, Tony Stark");
  });

  it("Add & Edit & Login BaseAdmin from Users", () => {
    users.addbaseAdmin();
    users.editBaseAdmin();
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.openAndLoginAsCreatedBaseAdmin();
    expect(users.userName.getText()).to.equal("Welcome, IM Groot");
  });

  it("Add & Edit & Login Dispatcher from Users", () => {
    users.addDispatcher();
    users.editDispatcher();
    loginPage.logout.click();
    browser.pause(3000);
    loginPage.openAndLoginAsCreatedDispatcher();
    expect(users.userName.getText()).to.equal("Welcome, Tom Riddle");
  });

  it("Delete SuperAdmin, Base & Dispatcher from Users", async () => {});
});
