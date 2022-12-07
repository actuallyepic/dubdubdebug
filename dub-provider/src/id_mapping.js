"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapping = void 0;
const utils_1 = require("./utils");
class IdMapping {
    constructor() {
        this.intIds = new Map();
    }
    tryIntifyId(payload) {
        if (!payload.id) {
            payload.id = utils_1.Utils.genId();
            return;
        }
        if (typeof payload.id !== "number") {
            let newId = utils_1.Utils.genId();
            this.intIds.set(newId, payload.id);
            payload.id = newId;
        }
    }
    tryRestoreId(payload) {
        let id = this.tryPopId(payload.id);
        if (id) {
            payload.id = id;
        }
    }
    tryPopId(id) {
        let originId = this.intIds.get(id);
        if (originId) {
            this.intIds.delete(id);
        }
        return originId;
    }
}
exports.IdMapping = IdMapping;
