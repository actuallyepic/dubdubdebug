export declare class IdMapping {
    intIds: Map<any, any>;
    constructor();
    tryIntifyId(payload: any): void;
    tryRestoreId(payload: any): void;
    tryPopId(id: any): any;
}
