/*
  A simple CrowdSource contract.
    Shows the usage of 'payable' function modifier, special variables-
    'msg.sender','msg.value' and events.
  */
pragma solidity ^0.4.2;

/** @title Counter */
contract CrowdSource {

  struct Funder {
          address addr; //funding address
          uint amount; //funding amount
    }

  struct Campaign {
        address beneficiary; //address holding the amount
        uint fundingGoal; //amount to be raised
        uint numFunders; //total number of funders
        uint amount; //amount raised so far
        mapping (uint => Funder) funders;
    }

  mapping (uint => Campaign) campaigns ;
  uint numCampaigns;

  //events that will be fired
  event newCampaignStarted(uint campaignID,uint goal);
  event newFundReceived(uint campaignID,uint numFunders,uint amount);
  event goalReached(uint campaignID);


  function CrowdSource(){

  }

  function newCampaign( address beneficiary,uint goal) returns (uint campaignID){
    campaignID = numCampaigns++;
    campaigns[campaignID] =  Campaign(beneficiary,goal,0,0);

    //log the event
    newCampaignStarted(campaignID,goal);

      return campaignID;
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
      campaign.amount += msg.value;

      //log events
      newFundReceived(campaignID,campaign.numFunders,msg.value);
      //
      if(checkGoalReached(campaignID)){
        goalReached(campaignID);
      }
  }

  function checkGoalReached(uint campaignID) returns (bool goalReached){
      Campaign campaign = campaigns[campaignID];
      if(campaign.amount>=campaign.fundingGoal){
        return true;
      }
      return false;
  }


}
