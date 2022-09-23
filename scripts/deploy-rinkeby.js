const hre = require("hardhat");
// npx hardhat verify --network rinkeby {contract address} "arg1" "arg2" "argn"

const baseURI = process.env.BASE_URI
const hiddenURI = process.env.HIDDEN_URI
const withdrawAddress = process.env.WITHDRAW_ALL_ADDRESS

async function main() {
  const LightReel = await hre.ethers.getContractFactory("LightReel");
  const nft = await LightReel.deploy(baseURI, hiddenURI, withdrawAddress);
  await nft.deployed();

  console.log("LightReel NFT contract deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
