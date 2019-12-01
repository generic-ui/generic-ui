export declare class OriginItemEntity {
    id: string;
    rawData: any;
    private version;
    constructor(id: string, rawData: any, version?: number);
    getData(): any;
    getVersion(): number;
    bumpVersion(): void;
    clone(): OriginItemEntity;
}
