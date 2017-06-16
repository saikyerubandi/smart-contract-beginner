pragma solidity ^0.4.2;

contract Counter {
  uint public value;

  function Counter(){
      value=0;
  }
  function increase() external {
    ++value;
  }

  function decrease() external {
    --value;
  }


}
