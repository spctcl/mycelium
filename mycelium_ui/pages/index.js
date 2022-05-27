import { Button, Container, Row, Spacer, Textarea } from "@nextui-org/react";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { DID } from "dids";
import { getResolver } from "key-did-resolver";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { ethers } from "ethers";
import oracleABI from "../contracts/oracle_abi.json" assert { type: "json" };
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import OpenWeather from "../components/OpenWeather/OpenWeather";
import DeviceData from "../components/DeviceData";
import Map from "../components/MapViewer/Map";

export default function Home(props) {
  // Authenticate ceramic.
  const API_URL = process.env.NEXT_PUBLIC_ENV_LOCAL_CERAMIC_API;
  const ceramic = new CeramicClient(API_URL);
  const seed = stringToUInt8Array(process.env.NEXT_PUBLIC_ENV_LOCAL_DID_KEY);
  const streamId = process.env.NEXT_PUBLIC_ENV_LOCAL_DOCUMENT_STREAM_ID;

  console.log("oracleABI: ", oracleABI);

  const provider = new ethers.providers.InfuraProvider(
    "kovan",
    process.env.NEXT_PUBLIC_ENV_LOCAL_KOVAN_API_KEY
  );
  console.log("infura provider: ", provider);

  // console.log("mnemonic: ", process.env.NEXT_PUBLIC_ENV_LOCAL_OWNER_WALLET_MNEMONIC)
  let wallet = ethers.Wallet.fromMnemonic(
    process.env.NEXT_PUBLIC_ENV_LOCAL_OWNER_WALLET_MNEMONIC
  );
  wallet = wallet.connect(provider);

  const oracleContract = new ethers.Contract(
    process.env.NEXT_PUBLIC_ENV_LOCAL_ORACLE_CONTRACT_ADDRESS,
    oracleABI,
    wallet
  );

  const [oracleData, setOracleData] = useState();

  const getOracleData = async () => {
    const data = await oracleContract.getData();
    setOracleData({ value: data[0], unit: data[1] });
    console.log("oracleData: ", oracleData);
  };

  // Fetch the oracle data.
  useEffect(() => {
    (async () => {
      await getOracleData();
    })();
  }, [oracleData]);

  const [ceramicData, setCeramicData] = useState();

  const getCeramicData = async () => {
    await authenticateCeramic(seed, ceramic);
    const doc = await loadDocument(ceramic, streamId);
    const content = await doc.content;
    const sensorData = await content.sensorData[0];
    console.log("sensorData: ", sensorData);
    setCeramicData({value: sensorData.value, unit: sensorData.unit});
  };

  console.log("index.js: ceramicData: ", ceramicData);

  // Fetch the Ceramic data.
  useEffect(() => {
    (async () => {
      await getCeramicData();
    })();
  }, [ceramicData]);

  async function authenticateCeramic(seed, ceramic) {
    const provider = new Ed25519Provider(seed);
    const did = new DID({ provider, resolver: getResolver() });
    await did.authenticate();
    ceramic.did = did;
  }

  const loadDocument = async (ceramic, id) => {
    return await TileDocument.load(ceramic, id);
  };

  function stringToUInt8Array(str) {
    var buf = new ArrayBuffer(32);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i);
    }
    return arr;
  }

  return (
    <div className={styles.container}>
      <Container>
        <Spacer y={2} />
        <Map />
        <OpenWeather />
        <Spacer y={4} />
        <DeviceData title={"My Devices"} data={ceramicData != undefined ? ceramicData : ""}/>
        <DeviceData title={"Community Devices"} data={oracleData != undefined ? oracleData : ""} />
      </Container>
    </div>
  );
}
