var Counter = artifacts.require("./Counter.sol");

contract('Counter', function(accounts) {
  it("should have initial value set to zero", function() {
    return Counter.deployed().then(function(instance) {
      return instance.value.call(accounts[0]);
    }).then(function(value) {
      assert.equal(value.valueOf(), 0, "Initial counter value should be zero");
    });
  });
  it("should have value 1,after a increase", function() {
    return Counter.deployed().then(function(instance) {
      return instance.increase();
    })
  });

});
