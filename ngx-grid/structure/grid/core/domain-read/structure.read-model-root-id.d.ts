import { AggregateId, ReadModelRootId } from '@generic-ui/hermes';
export declare class StructureReadModelRootId extends ReadModelRootId {
    constructor(id: string);
    toAggregateId(): AggregateId;
}
