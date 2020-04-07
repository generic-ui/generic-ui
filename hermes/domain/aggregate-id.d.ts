import { ReadModelRootId } from '../read/read-model-root-id';
export declare abstract class AggregateId {
    private readonly uid;
    protected constructor(uid: string);
    abstract toReadModelRootId(): ReadModelRootId;
    toString(): string;
    getId(): string;
    equals(aggregateId: AggregateId): boolean;
}
