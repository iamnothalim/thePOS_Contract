const TestToken = artifacts.require("TestToken");
const ThePos = artifacts.require("ThePos");
const ThePosStaking = artifacts.require("ThePosStaking");

const rewardTokensPerBlock = 10;
const preAmount = 1000;

const deployContracts = async (deployer, network, accounts) => {
  try {
    const TestTokenInstance = await deployer.deploy(TestToken, { from: accounts[0] });
    const ThePosInstance = await deployer.deploy(ThePos, { from: accounts[0] });
    const ThePosStakingInstance = await deployer.deploy(ThePosStaking, ThePosInstance.address, rewardTokensPerBlock, { from: accounts[0] });

    await ThePosInstance.mint(accounts[0], preAmount);
    await ThePosInstance.setContractToOwner(ThePosStakingInstance.address);

    await TestTokenInstance.mint(accounts[1], preAmount);
  } catch (error) {
    console.log("### error deploying contracts", err);
  }
};

module.exports = function (deployer, network, accounts) {
  deployer
    .then(async () => {
      await deployContracts(deployer, network, accounts);
      console.log("### finished deploying contracts");
    })
    .catch((err) => console.log("### error deploying contracts", err));
};
