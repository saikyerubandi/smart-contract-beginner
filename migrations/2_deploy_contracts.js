var Counter = artifacts.require("./Counter.sol");
var PiggyBank = artifacts.require("./PiggyBank.sol");

module.exports = function(deployer) {
  deployer.deploy(Counter);
  deployer.deploy(PiggyBank);
};
