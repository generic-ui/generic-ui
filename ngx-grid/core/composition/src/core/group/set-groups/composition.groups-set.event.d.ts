import { CompositionId } from '../../../api/global/composition.id';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionGroupsSetEvent extends CompositionDomainEvent {
    constructor(compositionId: CompositionId);
}
