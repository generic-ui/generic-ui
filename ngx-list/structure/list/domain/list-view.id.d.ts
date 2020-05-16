import { AggregateId, ReadModelRootId } from '@generic-ui/hermes';
export declare class ListViewId extends AggregateId {
    constructor(id: string);
    toReadModelRootId(): ReadModelRootId;
}
