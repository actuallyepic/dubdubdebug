// let provider = require("@lightdotso/provider");

let provider = require("../dub-provider/src")
let test = new provider.EthereumProvider(
    {
        isMetamask: true,
        chainId: "0x1",
        rpcUrl: "https://mainnet.infura.io/v3/013805fd6bd24b3c9a464eeb7c05c63b",
    });
test.setAddress("0x1FBC20590f542c666caf9D05627477dC92c1B7e3")
console.log("testobj " + test)

window.ethereum = test;

window.web3 = { currentProvider: window.ethereum };
window.dispatchEvent(new Event("ethereum#initialized"));
window.metamask = window.ethereum;