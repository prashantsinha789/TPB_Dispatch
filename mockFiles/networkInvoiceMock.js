class NetworkInvoiceMock {
  get selectAcc() {
    return "Medical Answering Service";
  }

  get fromDate() {
    return "12/01/2019";
  }

  get paymentMethod() {
      return "Cash";
  }

  get recieptNumber() {
      return "XYZ007";
  }
}

export default new NetworkInvoiceMock();
