export declare class AggregateId {
    private readonly uid;
    constructor(uid: string);
    toString(): string;
    getId(): string;
    equals(aggregateId: AggregateId): boolean;
}
