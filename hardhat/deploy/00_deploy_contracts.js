const { ethers } = require("hardhat");

module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  await deploy('MyceliumDataOracle', {
    from: deployer,
    log: true,
  });

    
    // Getting a previously deployed contract
    const yourContract = await ethers.getContract("MyceliumDataOracle", deployer);
    // await yourContract.setData(2, "feet");
    // const data = await yourContract.getData();
    // console.log("data: ", data);
  
    // To take ownership of yourContract using the ownable library uncomment next line and add the 
    // address you want to be the owner. 
    await yourContract.transferOwnership(process.env.ORACLE_CONTRACT_OWNER_ACCT);
    console.log(await yourContract.owner());

    // const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  

};
module.exports.tags = ['MyceliumDataOracle'];

