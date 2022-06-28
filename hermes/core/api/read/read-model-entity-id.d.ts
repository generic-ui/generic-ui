/**
 * @deprecated
 */
export declare class ReadModelEntityId {
    private readonly uid;
    protected constructor(uid: string);
    toString(): string;
    getId(): string;
    equals(entityId: ReadModelEntityId): boolean;
}
