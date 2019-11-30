class getCredentialsMock {
  get username() {
    return "prashantsinha789@gmail.com";
  }

  get password() {
    return "Sinha@7891";
  }

  get createdSuperUser() {
    return "sinha.prashant7891@gmail.com";
  }

  get createdBaseUser() {
    return "imgroot@yopmail.com";
  }

  get createdDispatcher() {
    return "tomriddle@yopmail.com";
  }
}

export default new getCredentialsMock();
