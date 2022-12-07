/// <reference types="node" />
import { Buffer } from "buffer";
export declare class Utils {
    static genId(): number;
    static flatMap(array: any, func: any): any[];
    static hexToInt(hexString: any): any;
    static intToHex(int: any): any;
    static messageToBuffer(message: any): Buffer;
    static bufferToHex(buf: any): string;
}
