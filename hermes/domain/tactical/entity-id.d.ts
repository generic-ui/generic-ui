export declare abstract class EntityId {
    private readonly uid;
    protected constructor(uid: string);
    toString(): string;
    getId(): string;
    equals(entityId: EntityId): boolean;
}
