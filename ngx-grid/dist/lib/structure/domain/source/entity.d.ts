export declare class Entity {
    private readonly id;
    private readonly data;
    constructor(data: any, id?: string);
    getData(): any;
    equals(entity: Entity): boolean;
    equalsById(id: string): boolean;
}
