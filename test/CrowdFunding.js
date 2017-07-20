var CrowdFunding = artifacts.require("./CrowdFunding.sol");

contract('CrowdFunding', function(accounts) {
  it("Should be able to start and fund a new campaign", function() {

    var beneficiary,goalAmount,numFunders,amountRaised;
    var crowdFunding;
    const expectedGoalAmount = web3.toWei(1000);

    return CrowdFunding.deployed().then(function(instance) {
        crowdFunding = instance;
        return crowdFunding.newCampaign.call(accounts[0],expectedGoalAmount);
    })
    .then(function(value) {
        return crowdFunding.getCampaign(0);
    }).then(function(campaign){
        beneficiary = campaign[0];
        goalAmount = web3.toWei(campaign[1]);
        assert.isTrue(web3.isAddress(beneficiary),'campaign should have a beneficiary');
        assert.equal(goalAmount, expectedGoalAmount, "Goal amount should be set");
    })
    .then(function(campaign) {
         crowdFunding.fundCampaign(0);
      //  (beneficiary,goalAmount,numFunders,amountRaised) = campaign;
      //  assert.equal(goalAmount, expectedGoalAmount, "Goal amount should be set");

    });
  });


});
