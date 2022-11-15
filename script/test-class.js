let acct = new Account(10000);

describe("Test Results", () => {
  it("Test getNumber()", () => {
    assert.equal(acct.getNumber(), 10000);
  });

  it("Test getBalance() ", () => {
    assert.equal(acct.getBalance(), 0.0);
  });

  it("Test deposit(amount)", () => {
    acct.deposit(100);
    assert.equal(acct.getBalance(), 100);
  });

  it("Test withdraw(amount)", () => {
    acct.withdraw(50);
    assert.equal(acct.getBalance(), 50);
  });

  it("Test toString()", () => {
    assert.equal(acct.toString(), "Account 10000: balance 50");
  });

  it("Test endOfMonth()", () => {
    assert.equal(acct.endOfMonth(), "");
  });
});
