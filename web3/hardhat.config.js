require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    defaultNetwork: "sepolia",
    networks: {
      hardhat: {},
      sepolia: {
        url: "https://sepolia.rpc.thirdweb.com",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
