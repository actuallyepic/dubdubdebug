"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EthereumProvider_1 = require("./EthereumProvider");
const log_1 = require("./log");
// Work around for Can't find vairable: Buffer Error (https://stackoverflow.com/questions/48432524/cant-find-variable-buffer)
window.global = window;
window.global.Buffer = global.Buffer || require("buffer").Buffer;
window.ethereum = new EthereumProvider_1.EthereumProvider({
    isMetamask: true,
    chainId: 1,
    rpcUrl: "https://mainnet.infura.io/v3/013805fd6bd24b3c9a464eeb7c05c63b",
});
window.web3 = { currentProvider: window.ethereum };
window.dispatchEvent(new Event("ethereum#initialized"));
window.metamask = window.ethereum;
window.lightwallet = { overlayConfigurations: [] };
window.lightwallet.postMessage = (method, id, params) => {
    const message = { method: method, id: id, params: params };
    const payload = { direction: "from-page-script", message: message };
    (0, log_1.logInpage)(`==> postMessage: ${JSON.stringify(payload)}`);
    window.postMessage(payload, "*");
};
window.addEventListener("message", event => {
    if (event.source === window &&
        event.data &&
        event.data.direction == "from-content-script") {
        const response = event.data.response;
        const id = event.data.id;
        const method = event.data.method;
        (0, log_1.logInpage)(`<== from-content-script: ${event.data.id}`);
        window.ethereum.processLightWalletResponse(response, id, method);
    }
}, false);
