import { CompositionId } from '../../../api/global/composition.id';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionWidthSetEvent extends CompositionDomainEvent {
    constructor(compositionId: CompositionId);
}
