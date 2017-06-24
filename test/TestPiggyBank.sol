pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/PiggyBank.sol";

contract TestPiggyBank {

  function testNewAccountHasZeroBalance() {
    PiggyBank piggyBank = new PiggyBank();

    uint expected = 0;

    Assert.equal(piggyBank.checkBalance(), expected, "A new piggy account should start with zero balance");
  }

  function testDepositCanbeWithdrawn() {
    PiggyBank piggyBank = new PiggyBank();

    piggyBank.deposit(123);

    Assert.equal(piggyBank.withdraw(123), true, "A new piggy account should start with zero balance");

  }

}
