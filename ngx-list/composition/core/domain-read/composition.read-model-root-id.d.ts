import { ReadModelRootId } from '@generic-ui/hermes';
import { CompositionId } from '../api/composition.id';
export declare class CompositionReadModelRootId extends ReadModelRootId {
    constructor(id: string);
    toAggregateId(): CompositionId;
}
