var CrowdFunding = artifacts.require("./CrowdFunding.sol");

contract('CrowdFunding', function(accounts) {
  it("Should have a goal amount set", function() {
     var crowdFunding;
     var expectedGoalAmount = 1000;
     var beneficiary,goalAmount,numFunders,amountRaised;
    return CrowdFunding.deployed().then(function(instance) {
        crowdFunding = instance;
      return crowdFunding.newCampaign.call(accounts[0],goalAmount);
    })
    .then(function(value) {
      (beneficiary,goalAmount,numFunders,amountRaised) =  crowdFunding.getCampaign(0);
      assert.equal(goalAmount, expectedGoalAmount, "Goal amount should be set");
    })
    .then(function(value) {

    });
  });

  it("should have value 1,after a increase", function() {
    return CrowdFunding.deployed().then(function(instance) {
      return instance.increase();
    })
  });

});
