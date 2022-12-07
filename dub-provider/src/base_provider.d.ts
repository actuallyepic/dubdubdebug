/// <reference types="node" />
import { EventEmitter } from "events";
export declare class BaseProvider extends EventEmitter {
    providerNetwork: any;
    callbacks: any;
    isLight: boolean;
    constructor();
    /**
     * @private Internal js -> native message handler
     */
    postMessage(handler: any, id: any, data: any): void;
    /**
     * @private Internal native result -> js
     */
    sendResponse(id: any, result: any): void;
    /**
     * @private Internal native error -> js
     */
    sendError(id: any, error: any): void;
}
