import { DomainEventType, MultiDomainEventHandler } from '@generic-ui/hermes';
import { SortToggledEvent } from '../../../../../structure/sorting/domain/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { SortOrderSetEvent } from '../../../../../structure/sorting/domain/order/sort-order-set.event';
import { CompositionId } from '../../composition.id';
export declare type CompositionChangeSortStatusEventType = SortToggledEvent | SortOrderSetEvent;
export declare class CompositionChangeSortStatusEventHandler implements MultiDomainEventHandler<CompositionId, CompositionChangeSortStatusEventType> {
    private compositionDispatcher;
    constructor(compositionDispatcher: CompositionDispatcher);
    forEvents(): Array<DomainEventType<CompositionChangeSortStatusEventType>>;
    handle(event: CompositionChangeSortStatusEventType): void;
}
