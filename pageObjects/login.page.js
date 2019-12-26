import credentials from "../mockFiles/credentialsMock";
import baseMock from "../mockFiles/baseMock";

class LoginPage {
  get username() {
    return browser.$("#inputEmail");
  }

  get password() {
    return browser.$("#inputPassword");
  }

  get loginButton() {
    return browser.$("button=Sign in");
  }

  get forgotPasswordButton() {
    return browser.$("*=Forgot Password?");
  }

  get logout() {
    return browser.$("*=Sign Out");
  }

  get resetPasswd() {
    return browser.$("//a[text()='Forgot Password?']");
  }

  get resetButton() {
    return browser.$("button=Reset Password");
  }

  open() {
    browser.url("https://qa-app.transit-partners.com/");
    browser.pause(500);
    return this.ready;
  }

  login() {
    this.username.setValue(credentials.username);
    this.password.setValue(credentials.password);
    this.loginButton.click();
  }

  loginCreatedSuperUser() {
    this.username.setValue(credentials.createdSuperUser);
    this.password.setValue(credentials.password);
    this.loginButton.click();
  }

  loginCreatedBaseUser() {
    this.username.setValue(credentials.createdBaseUser);
    this.password.setValue(credentials.password);
    this.loginButton.click();
  }

  loginDispatcher() {
    this.username.setValue(credentials.createdDispatcher);
    this.password.setValue(credentials.password);
    this.loginButton.click();
  }

  loginBase() {
    this.username.setValue(credentials.base);
    this.password.setValue(credentials.password);
    this.loginButton.click();
  }
  
  loginCreatedDummyBase() {
    this.username.setValue(baseMock.primaryEmail);
    this.password.setValue(credentials.password);
    this.loginButton.click();
  }

  openAndLoginAsSuperAdmin() {
    this.open();
    this.login();
  }

  openAndLoginAsCreatedSuperAdmin() {
    this.open();
    this.loginCreatedSuperUser();
  }

  openAndLoginAsCreatedBaseAdmin() {
    this.open();
    this.loginCreatedBaseUser();
  }

  openAndLoginAsCreatedDispatcher() {
    this.open();
    this.loginDispatcher();
  }

  openAndLoginAsBase() {
    this.open();
    this.loginBase();
  }

  resetPassword() {
    this.resetPasswd.click();
    this.username.setValue(credentials.username);
    this.resetButton.click();
  }
}

export default new LoginPage();
