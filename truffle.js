// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    dev: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    private: {
      host: 'locahost',
      port: 40941,
      network_id: '*' // Ropsten
    }
  }
}
