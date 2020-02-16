import loginPage from "../../pageObjects/login.page";
import addAccountPage from "../../pageObjects/addAccounts.page";
import assertionMessages from "../../assertionFiles/assertionRegressionTest";
import hamburgerMenuPage from "../../pageObjects/hamburgerMenu.page";
import addMemberPage from "../../pageObjects/addMembers.page";
import serverFile from "../../serverFile/accountsServer";

describe("Add Accounts & Members", () => {
  browser.call(async () => {
    await serverFile.getTokenAndDeleteAccount();
  });

  it("Add Account from SuperAdmin", () => {
    loginPage.openAndLoginAsSuperAdmin();
    browser.pause(2500);
    addAccountPage.goToAddAccPage();
    addAccountPage.addAccount();
    addAccountPage.searchAccount();
    expect(addAccountPage.assertText.getText()).to.equal(
      assertionMessages.accountAssertText
    );
  });

  it("Add Members from SuperAdmin", () => {
    hamburgerMenuPage.accountsMembers.click();
    addMemberPage.addMember();
    addMemberPage.searchMember();
    browser.pause(2000);
    expect(addMemberPage.searchedMember.getText()).to.equal(
      assertionMessages.memberSearched
    );
  });
});
