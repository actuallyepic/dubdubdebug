import { BaseProvider } from "./base_provider";
import { IdMapping } from "./id_mapping";
import { RPCServer } from "./rpc";
export declare class EthereumProvider extends BaseProvider {
    idMapping: IdMapping;
    wrapResults: Map<any, any>;
    chainId: any;
    address: string;
    ready: boolean;
    networkVersion: string;
    rpc: RPCServer;
    didEmitConnectAfterSubscription: boolean;
    isMetaMask: boolean;
    constructor(config: any);
    externalDisconnect(): void;
    setAddress(address: any): void;
    setConfig(config: any): void;
    request(payload: any): Promise<unknown>;
    /**
     * @deprecated Listen to "connect" event instead.
     */
    isConnected(): boolean;
    isUnlocked(): Promise<boolean>;
    /**
     * @deprecated Use request({method: "eth_requestAccounts"}) instead.
     */
    enable(): Promise<unknown>;
    /**
     * @deprecated Use request() method instead.
     */
    send(payload: any): {
        jsonrpc: string;
        id: any;
        result: any;
    };
    /**
     * @deprecated Use request() method instead.
     */
    sendAsync(payload: any, callback: any): void;
    /**
     * @private Internal rpc handler
     */
    _request(payload: any, wrapResult?: boolean): Promise<unknown>;
    fillJsonRpcVersion(payload: any): void;
    emitConnect(chainId: any): void;
    emitChainChanged(chainId: any): void;
    eth_accounts(): string[];
    eth_coinbase(): string;
    net_version(): string;
    eth_chainId(): any;
    eth_sign(payload: any): void;
    personal_sign(payload: any): void;
    personal_ecRecover(payload: any): void;
    eth_signTypedData(payload: any, version: any): void;
    eth_sendTransaction(payload: any): void;
    eth_requestAccounts(payload: any): void;
    wallet_watchAsset(payload: any): void;
    wallet_addEthereumChain(payload: any): void;
    wallet_switchEthereumChain(payload: any): void;
    processLightWalletResponse(response: any, id: any, method: any): void;
    /**
     * @private Internal js -> native message handler
     */
    postMessage(method: any, id: any, params: any): void;
    /**
     * @private Internal native result -> js
     */
    sendResponse(id: any, result: any): void;
    /**
     * @private Internal native result -> js
     */
    sendError(id: any, error: any): void;
}
