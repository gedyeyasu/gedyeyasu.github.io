// require("account.js");
class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  set addInterest(interest) {
    super.setBalance((this._interest / 100) * super.getBalance());
  }
  toString() {
    return "Savings Account " + this._number + ": balance " + this._balance;
  }
}
