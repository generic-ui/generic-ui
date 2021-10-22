import { ReadModelRootId } from '@generic-ui/hermes';
import { CompositionId } from './composition.id';
export declare class CompositionReadModelRootId extends ReadModelRootId {
    constructor(id: string);
    toAggregateId(): CompositionId;
}
