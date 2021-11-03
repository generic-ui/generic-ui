export declare class ItemEntity {
    private readonly id;
    private readonly source;
    private readonly position;
    private readonly version;
    constructor(source: any, position: number, id?: string, version?: number);
    getSourceItem(): any;
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
