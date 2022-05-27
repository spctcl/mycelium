export default function Authenticate(props) {
    const infuraId = process.env.INFURA_ID;
    
    // Use Clay Testnet.
    const API_URL = 'https://ceramic-clay.3boxlabs.com'
    const ceramic = new CeramicClient(API_URL)

    const authenticate = async () => {
        // console.log("Athenticate...");
        // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        // const threeIDConnect = new ThreeIdConnect();
        // const providerOptions = {
        //     package: WalletConnectProvider,
        //     options: {
        //         infuraId: infuraId
        //     }
        // }
        // const web3Modal = new web3Modal({
        //     walletconnect: {
        //         network: 'mainnet',
        //         cacheProvider: true,
        //         providerOptions: providerOptions
        //     }
        // })
    }

    return (
        <Button onClick={authenticate}>Authenticate</Button>
    )
}