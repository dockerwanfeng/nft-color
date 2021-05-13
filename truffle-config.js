require('babel-register');
require('babel-polyfill');

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ganachetestnet: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "5777"
        },
    },
    contracts_directory: './src/contracts/',
    // truffle migrate --reset --network ganachetestnet
    /*contracts_build_directory: './src/abis/',*/
    compilers: {
        solc: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}
