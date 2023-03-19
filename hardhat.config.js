/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const privatekey = process.env.PRIVATE_KEY;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

module.exports = {
  networks: {
    goerli: {
      url: `${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan:{
      apiKey: `${process.env.ETHERSCAN_KEY}`
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

