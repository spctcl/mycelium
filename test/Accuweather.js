const { expect } = require("chai");
// const { Contract, ethers } = require("ethers");
const Accuweather = artifacts.require('./AccuweatherConsumerContract')


contract("Accuweather", () => {
    const contractAddress = '0xa620438eda8456ec52d6c15ed883582276103437'
    const linkContract = "0xa36085F69e2889c224210F603D836748e7dC0088"
    const oracleAddress = "0xfF07C97631Ff3bAb5e5e5660Cdf47AdEd8D4d4Fd"
    const endpoint = "351193"

    const myContract = await hre.ethers.getContractAt("MyContract", contractAddress);
     //  const oracle = await Contract.deploy(oracleAddress);

//     expect(await weatherContract.getOracleAddress.to.equal(oracleAddress));
//      })   
// });
})