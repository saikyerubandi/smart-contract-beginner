/*
  A simple CrowdFunding contract.
    Shows the usage of 'payable' function modifier, special variables-
    'msg.sender','msg.value' and events.
  */
pragma solidity ^0.4.2;

/** @title Counter */
contract CrowdFunding {

  struct Funder {
          address addr; //funding address
          uint amount; //funding amount
    }

  struct Campaign {
        address beneficiary; //address holding the amount
        uint goalAmount; //amount to be raised
        uint numFunders; //total number of funders
        uint amountRaised; //amount raised so far
        mapping (uint => Funder) funders;
    }

  mapping (uint => Campaign) campaigns ;
  uint numCampaigns;

  //events that will be fired
  event newCampaignStarted(uint campaignID,uint goal);
  event newFundReceived(uint campaignID,uint numFunders,uint amount);
  event goalReached(uint campaignID);


  function CrowdFunding(){

  }

  function newCampaign( address beneficiary,uint goal){

    //goal cannot not zero
    if(goal <= 0){throw;}

    campaigns[numCampaigns] =  Campaign(beneficiary,goal,0,0);
    newCampaignStarted(numCampaigns,goal);//log the event
    numCampaigns++;

  }

  /**
   *  Note: Struct type Campagin cannot be returned so flatten the structure as multiple returns
  */
  function getCampaign(uint campaignID) constant returns (address benefitiary,uint goalAmount,uint numFunders,uint amountRaised){

    Campaign campaign = campaigns[campaignID];
    return (campaign.beneficiary,campaign.goalAmount,campaign.numFunders,campaign.amountRaised);
  }

  /**
      Note: uses special variables msg.sender for sender's address
      and amount of Wei is retrieved from msg.value.

      without "payable" keyword here, the function will
      automatically reject all Ether/Wei sent to it.
  */
  function fundCampaign(uint campaignID) payable{

      Campaign campaign = campaigns[campaignID];
      campaign.funders[campaign.numFunders++] = Funder(msg.sender,msg.value);
      campaign.amountRaised += msg.value;

      //log events
      newFundReceived(campaignID,campaign.numFunders,msg.value);
      //
      if(checkGoalReached(campaignID)){
        goalReached(campaignID);
      }
  }

  function checkGoalReached(uint campaignID) returns (bool goalReached){
      Campaign campaign = campaigns[campaignID];
      if(campaign.amountRaised<campaign.goalAmount){ return false; }
      return true;
  }


}
