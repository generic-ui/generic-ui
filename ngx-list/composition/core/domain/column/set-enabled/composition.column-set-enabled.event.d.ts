import { CompositionId } from '../../../api/composition.id';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionColumnSetEnabledEvent extends CompositionDomainEvent {
    constructor(aggregateId: CompositionId);
}
