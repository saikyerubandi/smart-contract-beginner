pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CrowdFunding.sol";

contract TestCrowdFunding {

  function testNewCampaign() {

    CrowdFunding crowdFunding = CrowdFunding(DeployedAddresses.CrowdFunding());
    crowdFunding.newCampaign(msg.sender,100);

    uint expected = 100;
    var (beneficiary,goalAmount,numFunders,amountRaised)  = crowdFunding.getCampaign(0);
    //Assert.typeOf(beneficiary,address);
    Assert.equal(goalAmount,expected,"A new campaign should have a fundingoal");
  }

 function testFundingACampaign() {
   CrowdFunding crowdFunding = CrowdFunding(DeployedAddresses.CrowdFunding());
   crowdFunding.newCampaign(msg.sender,100);
   crowdFunding.fundCampaign(0);
   //log1('msg.sender',msg.sender);
   //log1('msg.value',msg.value);
   uint expected = 100;
   var (beneficiary,goalAmount,numFunders,amountRaised)  = crowdFunding.getCampaign(0);
   //Assert.typeOf(beneficiary,address);
   Assert.equal(amountRaised,msg.value,"A new campaign should have a fundingoal");

 }

}
