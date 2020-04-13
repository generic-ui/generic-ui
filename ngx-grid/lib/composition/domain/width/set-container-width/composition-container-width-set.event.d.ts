import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
export declare class CompositionContainerWidthSetEvent extends DomainEvent<CompositionId> {
    constructor(compositionId: CompositionId, payload: any);
}
