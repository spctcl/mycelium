import React from 'react'
import { Container, Spacer, Table, Text, Card} from '@nextui-org/react'
// import Form from './api/form'
import DeviceData from '../components/DeviceData'
import oracleABI from '../contracts/oracle_abi.json' assert { type: 'json' };
import { useState } from "react";
import { ethers } from 'ethers';


function Data() { 

  const provider = new ethers.providers.InfuraProvider("kovan", process.env.NEXT_PUBLIC_ENV_LOCAL_KOVAN_API_KEY);
  console.log("infura provider: ", provider);

  let wallet = ethers.Wallet.fromMnemonic(process.env.NEXT_PUBLIC_ENV_LOCAL_OWNER_WALLET_MNEMONIC);
  wallet = wallet.connect(provider);

  const oracleContract = new ethers.Contract(process.env.NEXT_PUBLIC_ENV_LOCAL_ORACLE_CONTRACT_ADDRESS, oracleABI, wallet);
  
  const [ oracleData, setOracleData ] = useState();

  const getOracleData = async () => {
    const data = await oracleContract.getData();
    setOracleData({value: data[0], unit: data[1]});
    console.log("oracleData: ", oracleData);
  }

  return (
  <Container>
   <DeviceData data={oracleData != undefined ? oracleData : ""} />
  </Container>
)
  }
  
  export default Data