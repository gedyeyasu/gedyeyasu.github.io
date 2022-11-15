class Bank {
  static nextNumber = 0;
  constructor(accounts = []) {
    this._accounts = accounts;
  }

  addAccount(account) {
    this._accounts.push(account);
    nextNumber += 1;
  }
  addSavingsAccount(interest) {
    let savingsaccount = new SavingsAccount(interest);
    this._accounts.push(savingsaccount);
  }
  addCheckingAccount(overdraft) {
    let checkingaccount = new CheckingAccount(overdraft);
    this._accounts.push(checkingaccount);
  }
  addAccount(account) {
    this._accounts.push(account);
  }
  closeAccount(number) {
    this._accounts.filter((account) => account.number !== number);
  }
  accountReport() {
    let report = "";
    this._accounts.forEach((a) => report.concat(a.toString()));
    return report;
  }
}
