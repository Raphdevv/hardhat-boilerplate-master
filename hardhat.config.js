require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_API_KEY = "AT7JswqpD3bVPCIJYXc4u3C0BlnUHUuo";

const GOERLI_PRIVATE_KEY = "b5ac16e9fb0797c87e8040c32d5b0f456c12ae18d7d5deab4e9f8174909a7248";


module.exports = {
  solidity: "0.7.3",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};