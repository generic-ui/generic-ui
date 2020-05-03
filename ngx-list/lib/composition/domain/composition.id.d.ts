import { AggregateId, ReadModelRootId } from '@generic-ui/hermes';
export declare class CompositionId extends AggregateId {
    constructor(id: string);
    toReadModelRootId(): ReadModelRootId;
}
