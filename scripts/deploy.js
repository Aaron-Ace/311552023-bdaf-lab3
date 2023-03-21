async function main() {
  const Safe = await ethers.getContractFactory("Safe");

  // Contract deployment
  const safe = await Safe.deploy();

  console.log("Safe contract deployed to:", safe.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

