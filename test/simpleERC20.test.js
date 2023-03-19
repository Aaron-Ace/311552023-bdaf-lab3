const { expect } = require("chai");

describe("SimpleERC20", function () {
  it("Should deposit and withdraw tokens", async function () {
    const SimpleERC20 = await ethers.getContractFactory("SimpleERC20");
    const simpleERC20 = await SimpleERC20.deploy("SimpleERC20", "SIM");

    await simpleERC20.deployed();

    const [alice, bob] = await ethers.getSigners();

    await simpleERC20.connect(alice).deposit(2000);

    expect(await simpleERC20.balanceOf(alice.address)).to.equal(2000);

    await simpleERC20.connect(alice).withdraw(500);

    expect(await simpleERC20.balanceOf(alice.address)).to.equal(1500);
  });
});

