import oracleABI from './oracle_abi.json' assert { type: 'json' };
import { CeramicClient } from "@ceramicnetwork/http-client";
import { DID } from "dids";
import "dotenv/config";
import { ethers } from "ethers";
import { getResolver } from "key-did-resolver";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { TileDocument } from "@ceramicnetwork/stream-tile";


// In order for this service to work, we need to do the following things in the following order:
// - Create a ceramic client.
// - Authorize that client.
// - Read a Tile document.
// - Parse the document for desired values.
// - Make an RPC transaction call to deployed contract with the previously parsed values.
// - That's all. We now have a basic oracle.

async function main() {
  // Connect to Ceramic node.
  const API_URL = "https://ceramic-clay.3boxlabs.com";

  // Instantiate the Ceramic object.
  const ceramic = new CeramicClient(API_URL);

  // Test resolution.
  let resolvedDid = await resolveDID();
  console.log("resolvedDid: ", resolvedDid);

  const seed = stringToUInt8Array(process.env.DID_KEY);

  console.log("seed", seed);

  await authenticateCeramic(seed, ceramic);
  console.log("ceramic.did.authenticated: ", ceramic.did.authenticated);

  const doc = await loadDocument(ceramic, process.env.DOCUMENT_STREAM_ID);
  console.log("doc: ", doc);
  
  const content = doc.content;
  const deviceId = content.deviceId;
  console.log("deviceId: ", deviceId);

  const unit = content.sensorData[0].unit;
  console.log("unit: ", unit);

  const val = content.sensorData[0].value;
  console.log("val: ", val);

  const provider = new ethers.providers.InfuraProvider("kovan", process.env.KOVAN_API_KEY);
  console.log("infura provider: ", provider);

  let wallet =  new ethers.Wallet.fromMnemonic(process.env.OWNER_WALLET_MNEMONIC);
  console.log("wallet: ", wallet);

  wallet = wallet.connect(provider);
  console.log("wallet: ", wallet);
  console.log("wallet provider: ", wallet.provider);

  const oracleContract = new ethers.Contract(process.env.ORACLE_CONTRACT_ADDRESS, oracleABI, wallet);
  console.log("oracleContract: ", oracleContract);

  const dataVal = ethers.BigNumber.from("10");
  const data = await oracleContract.getData();
  console.log("data: ", data);

  // Oracles are un
  let dataUpdateResult = await oracleContract.setData(ethers.BigNumber.from(val), unit)
  console.log("dataUpdateResult: ", dataUpdateResult);

}

async function authenticateCeramic(seed, ceramic) {
  const provider = new Ed25519Provider(seed);
  const did = new DID({ provider, resolver: getResolver() });
  await did.authenticate();
  ceramic.did = did;
}

async function resolveDID() {
  const did = new DID({ resolver: getResolver() });
  return await did.resolve(process.env.DID_KEY);
}

async function loadDocument(ceramic, id) {
    return await TileDocument.load(ceramic, id);
}

// Utilty function to convert strings to an array buffer.
function stringToUInt8Array(str) {
  var buf = new ArrayBuffer(32);
  var arr = new Uint8Array(buf);
  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

main();