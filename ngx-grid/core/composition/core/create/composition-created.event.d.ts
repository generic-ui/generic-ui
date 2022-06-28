import { CompositionId } from '../../api/global/composition.id';
import { CompositionDomainEvent } from '../composition.domain-event';
export declare class CompositionCreatedEvent extends CompositionDomainEvent {
    constructor(compositionId: CompositionId);
}
