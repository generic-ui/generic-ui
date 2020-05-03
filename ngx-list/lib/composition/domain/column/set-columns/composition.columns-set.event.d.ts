import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionColumnsSetEvent extends DomainEvent<CompositionId> {
    constructor(compositionId: CompositionId);
}
