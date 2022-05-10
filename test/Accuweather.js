const { expect } = require("chai");
// const { Contract, ethers } = require("ethers");
const Accuweather = artifacts.require('./AccuweatherConsumerContract')


contract("Accuweather", () => {
    const linkContract = "0xa36085F69e2889c224210F603D836748e7dC0088"
    const oracleAddress = "0xfF07C97631Ff3bAb5e5e5660Cdf47AdEd8D4d4Fd"
    const endpoint = "351193"

     //  const oracle = await Contract.deploy(oracleAddress);

//     expect(await weatherContract.getOracleAddress.to.equal(oracleAddress));
//      })   
// });
})