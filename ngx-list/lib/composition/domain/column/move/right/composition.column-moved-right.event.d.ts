import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../composition.id';
export declare class CompositionColumnMovedRightEvent extends DomainEvent<CompositionId> {
    constructor(aggregateId: CompositionId);
}
