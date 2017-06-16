// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import Counter_artifacts from '../../build/contracts/Counter.json'

var Counter = contract(Counter_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the Counter abstraction for use.
    Counter.setProvider(web3.currentProvider);
    self.getCurrent();
  },
  getCurrent: function(){
    var self = this;
    var counter;
    Counter.deployed().then(function(instance){
      counter = instance;
      return counter.value();
    }).then(function(value){
        console.log(value.valueOf());
        var currentValue_element = document.getElementById("currentValue");
        currentValue_element.innerHTML = value.valueOf();
    }).catch(function(e){
       console.log(e);
    })
  },
  increase: function() {
    var self = this;
    var counter;
    var account = web3.eth.accounts[0];
    Counter.deployed().then(function(instance) {
      counter = instance;
      return counter.increase({from: account });
    }).then(function(value) {
        self.getCurrent();
    }).catch(function(e) {
      console.log(e);
    });
  },
  decrease: function() {
    var self = this;
    var counter;
    var account = web3.eth.accounts[0];

    Counter.deployed().then(function(instance) {
      counter = instance;
      return counter.decrease({from: account});

    }).then(function(value) {
        self.getCurrent();
    }).catch(function(e) {
      console.log(e);
    });
  }
};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MyBank, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  App.start();
});
