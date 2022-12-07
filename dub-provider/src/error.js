"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRpcError = void 0;
class ProviderRpcError extends Error {
    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
    }
    toString() {
        return `${this.message} (${this.code})`;
    }
}
exports.ProviderRpcError = ProviderRpcError;
