import { CompositionId } from '../../composition.id';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionColumnsSetEvent extends CompositionDomainEvent {
    constructor(compositionId: CompositionId);
}
