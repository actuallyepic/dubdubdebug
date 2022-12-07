(function() {
    var config = {
        ethereum: {
            address: "0x9d8a62f656a8d1615c1294fd71e9cfb3e4855a4f",
            chainId: 1,
            rpcUrl: "https://cloudflare-eth.com"
        }
    };

    trustwallet.ethereum = new trustwallet.Provider(config);


    trustwallet.postMessage = (jsonString) => {
        webkit.messageHandlers._tw_.postMessage(jsonString)
    };

    window.ethereum = trustwallet.ethereum;
})();