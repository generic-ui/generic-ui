import { CompositionId } from '../../../api/global/composition.id';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionResizeWidthSetEvent extends CompositionDomainEvent {
    constructor(aggregateId: CompositionId);
}
