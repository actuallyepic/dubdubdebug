"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
const events_1 = require("events");
const log_1 = require("./log");
class BaseProvider extends events_1.EventEmitter {
    constructor() {
        super();
        this.isLight = true;
    }
    /**
     * @private Internal js -> native message handler
     */
    postMessage(handler, id, data) {
        let object = {
            id: id,
            name: handler,
            object: data,
            network: this.providerNetwork,
        };
        if (window.lightwallet.postMessage) {
            window.lightwallet.postMessage(object);
        }
        else {
            console.error("postMessage is not available");
        }
    }
    /**
     * @private Internal native result -> js
     */
    sendResponse(id, result) {
        let callback = this.callbacks.get(id);
        (0, log_1.logInpage)(`<== sendResponse id: ${id}, result: ${JSON.stringify(result)}`);
        if (callback) {
            callback(null, result);
            this.callbacks.delete(id);
        }
        else {
            (0, log_1.logInpage)(`callback id: ${id} not found`);
        }
    }
    /**
     * @private Internal native error -> js
     */
    sendError(id, error) {
        (0, log_1.logInpage)(`<== ${id} sendError ${error}`);
        let callback = this.callbacks.get(id);
        if (callback) {
            callback(error instanceof Error ? error : new Error(error), null);
            this.callbacks.delete(id);
        }
    }
}
exports.BaseProvider = BaseProvider;
