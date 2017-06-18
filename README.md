# smart-contract-beginner 
Smart Contract examples project with Solidity,Web3js deployed on testrpc or  Metamask using Truffle framework.

## PreReqs
git,nodejs with npm,ethereumjs-testrpc,truffle with webpack,Meta-mask browser plugin

## Get the examples project
 Clone this project using   
  git clone https://github.com/saikyerubandi/smart-contract-beginner.git
  
## Building and the frontend with testrpc

1. Cd to smart-contract-beginner 
2. sudo chmod +x startTestrpc.sh
3. run 
   ./startTestrpc
4. In another command shell run
    truffle migrate --network dev
5. run 
    webpack-dev-server --hot
6. In the browser go to http://localhost:8080/counter.html 
     
    

## Common Errors

1, * **Error: Can't resolve '../build/contracts/Counter.json'**

This means you haven't compiled or migrated your contracts yet. Run `truffle migrate --networkd dev` first.

2, * **Error: Counter has not been deployed to detected network (network/artifact mismatch)    at counter.js:37030
    Make sure Metamask browser plugin is turned off as the App is deployed on testrpc.

## Building and the frontend with Metamask

1, Stop testrpc 

2, Log in or create a new account in MetaMask browser plugin. 

3, Switch Metamask to Ethereum test network (Ropsten Testnet at this time)

4, Paste the code in examples like contracts\Solidity.sol in a online solidity compiler like https://ethereum.github.io/browser-solidity/ 

5, Compile 

6, Press Create button to push contract in Ethereum Test

7, Metamask should intercept this call to create and prompt to accept/reject/reset this transaction.

8, Accept the transaction

9, Wait for the create transaction to be mined in Ethereum Testnet

10, Once the transaction is mined copy the Contract address and replace in build/contracts/Counter.json as the value of address field 
  "networks": {
    "1": {
      "events": {},
      "links": {},
      "address": "0xa067b3f11f05ccfa5b7623432effe62e8cd9552b",
      "updated_at": 1497817047868
    }
11, Stop and start webpack-dev-server --hot

12, Now your contract frontend should be connected to Ethereum Testnet using Metamask.
