import { CompositionId } from '../composition.id';
import { CompositionDomainEvent } from '../composition.domain-event';
export declare class CompositionCreatedEvent extends CompositionDomainEvent {
    constructor(compositionId: CompositionId);
}
