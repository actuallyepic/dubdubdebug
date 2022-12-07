export declare class RPCServer {
    rpcUrl: any;
    constructor(rpcUrl: any);
    getBlockNumber(): Promise<any>;
    getBlockByNumber(number: any): Promise<any>;
    getFilterLogs(filter: any): Promise<any>;
    call(payload: any): Promise<any>;
}
