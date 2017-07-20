var Counter = artifacts.require("./Counter.sol");
var PiggyBank = artifacts.require("./PiggyBank.sol");
var CrowdFunding = artifacts.require("./CrowdFunding.sol");


module.exports = function(deployer) {
  deployer.deploy(Counter);
  deployer.deploy(PiggyBank);
  deployer.deploy(CrowdFunding);
};
