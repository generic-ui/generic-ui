import { CompositionId } from '../../../api/global/composition.id';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionContainerWidthSetEvent extends CompositionDomainEvent {
    constructor(compositionId: CompositionId, payload: any);
}
