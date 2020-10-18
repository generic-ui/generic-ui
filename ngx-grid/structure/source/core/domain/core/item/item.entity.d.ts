export declare class ItemEntity {
    private readonly id;
    private readonly data;
    private readonly position;
    private readonly version;
    constructor(data: any, position: number, id?: string, version?: number);
    getData(): any;
    getUiId(): string;
    getId(): string;
    getVersion(): number;
    getPosition(): number;
    isSelected(): boolean;
    isEven(): boolean;
    isOdd(): boolean;
    equals(entity: ItemEntity): boolean;
    equalsById(id: string): boolean;
}
