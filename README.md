# smart-contract-beginner 
Smart Contract examples project with Solidity,Web3js deployed on testrpc or  Metamask using Truffle framework.

## PreReqs
git
nodejs for npm
ethereumjs-testrpc
truffle with webpack 
Meta-mask browser plugin

## Get the examples project
 Clone this project using   
  git clone https://github.com/saikyerubandi/smart-contract-beginner.git
  
## Building and the frontend

1. Cd to smart-contract-beginner 
2. sudo chmod +x startTestrpc.sh
3. ./startTestrpc
4. In another command shell run
    truffle migrate --network dev
5. run 
  webpack-dev-server --hot
5. In the browser go to http://localhost:8080/counter.html 
    
    

## Common Errors

* **Error: Can't resolve '../build/contracts/Counter.json'**

This means you haven't compiled or migrated your contracts yet. Run `truffle migrate --networkd dev` first.
