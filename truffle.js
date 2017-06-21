// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    dev: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    test: {
      network_id: 3 // Ropsten
    }

  }
}
