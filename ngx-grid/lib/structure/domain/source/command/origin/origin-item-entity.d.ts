export declare class OriginItemEntity {
    id: string;
    rawData: any;
    private version;
    private position;
    constructor(id: string, rawData: any, position: number, version?: number);
    getData(): any;
    getVersion(): number;
    getPosition(): number;
    bumpVersion(): void;
    setPosition(position: number): void;
    clone(): OriginItemEntity;
}
