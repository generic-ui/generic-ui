export declare class Entity {
    private readonly id;
    private readonly data;
    private readonly version;
    constructor(data: any, id?: string, version?: number);
    getData(): any;
    getUiId(): string;
    getId(): string;
    getVersion(): number;
    equals(entity: Entity): boolean;
    equalsById(id: string): boolean;
}
