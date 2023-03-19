const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract with account: ${deployer.address}`);

  const SimpleERC20 = await ethers.getContractFactory("SimpleERC20");
  const name = "SimpleERC20";
  const symbol = "ETH";

  const simpleERC20 = await SimpleERC20.deploy(name, symbol);
  await simpleERC20.deployed();

  console.log(`Contract address: ${simpleERC20.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

