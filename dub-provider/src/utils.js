"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const buffer_1 = require("buffer");
class Utils {
    static genId() {
        return new Date().getTime() + Math.floor(Math.random() * 1000);
    }
    static flatMap(array, func) {
        return [].concat(...array.map(func));
    }
    static hexToInt(hexString) {
        if (hexString === undefined || hexString === null) {
            return hexString;
        }
        return Number.parseInt(hexString, 16);
    }
    static intToHex(int) {
        if (int === undefined || int === null) {
            return int;
        }
        let hexString = int.toString(16);
        return "0x" + hexString;
    }
    // message: Bytes | string
    static messageToBuffer(message) {
        var buffer = buffer_1.Buffer.from([]);
        try {
            if (typeof message === "string") {
                buffer = buffer_1.Buffer.from(message.replace("0x", ""), "hex");
            }
            else {
                buffer = buffer_1.Buffer.from(message);
            }
        }
        catch (err) {
            console.log(`messageToBuffer error: ${err}`);
        }
        return buffer;
    }
    static bufferToHex(buf) {
        return "0x" + buffer_1.Buffer.from(buf).toString("hex");
    }
}
exports.Utils = Utils;
