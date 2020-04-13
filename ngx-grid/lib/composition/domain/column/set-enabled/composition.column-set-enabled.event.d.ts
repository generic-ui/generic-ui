import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionColumnSetEnabledEvent extends DomainEvent<CompositionId> {
    constructor(aggregateId: CompositionId);
}
