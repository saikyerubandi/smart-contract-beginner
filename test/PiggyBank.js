var PiggyBank = artifacts.require("./PiggyBank.sol");

contract('PiggyBank', function(accounts) {
  it("should have initial value set to zero", function() {
    return PiggyBank.deployed().then(function(instance) {
      return instance.checkBalance.call(accounts[0]);
    }).then(function(value) {
      assert.equal(value.valueOf(), 0, "new account should start with zero balance");
    });
  });
  it("should be able to deposit and withdraw", function() {
    var piggyBank;
    var depositAmt;

    return PiggyBank.deployed().then(function(instance) {
      piggyBank = instance;
      depositAmt = 25;
      return piggyBank.deposit(depositAmt);
    }).then(function(value) {
        return piggyBank.checkBalance.call(accounts[0]);
    }).then(function(value){
        assert.equal(value.valueOf(),depositAmt,"balance amount doesnot match the deposit")
    }).then(function(value){
        return piggyBank.withdraw(depositAmt);
    }).then(function(value){
        return piggyBank.checkBalance.call(accounts[0]);
    }).then(function(value){
        assert.equal(value.valueOf(),0,"balance amount is not correct after withdrawal")
    })
  });

});
