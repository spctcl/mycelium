import { Button, Container, Row, Spacer, Textarea } from '@nextui-org/react';
import { ethers } from 'ethers';
import oracleABI from '../contracts/oracle_abi.json' assert { type: 'json' };
import styles from '../styles/Home.module.css'
import { useState } from "react";
import OpenWeather from '../components/OpenWeather/OpenWeather';
import DeviceData from '../components/DeviceData';
import Map from '../components/MapViewer/Map';

export default function Home(props) {
  console.log("oracleABI: ", oracleABI);

  const provider = new ethers.providers.InfuraProvider("kovan", process.env.NEXT_PUBLIC_ENV_LOCAL_KOVAN_API_KEY);
  console.log("infura provider: ", provider);


  // console.log("mnemonic: ", process.env.NEXT_PUBLIC_ENV_LOCAL_OWNER_WALLET_MNEMONIC)
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
    <div className={styles.container}>
      <Container>
            <Spacer y={2} />
          <Map />
          <OpenWeather />
            <Spacer y={4} />
          <DeviceData data={oracleData != undefined ? oracleData : ""} />
      </Container>
    </div>
    
  )
}