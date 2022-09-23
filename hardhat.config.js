
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require('dotenv').config()

const privateKey = process.env.WALLET_PRIVATE_KEY
const projectId = process.env.VITE_INFURA_PROJECT_ID;
const projectSecret = process.env.INFURA_PROJECT_SECRET;
const etherscanKey = process.env.ETHERSCAN_API_KEY
const alchemyProjectId = process.env.ALCHEMY_PROJECT_ID

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    poly_mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    eth_mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyProjectId}`,
      accounts: [privateKey]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: etherscanKey
  },
  gasReporter: {
    enabled: true
  }
};
