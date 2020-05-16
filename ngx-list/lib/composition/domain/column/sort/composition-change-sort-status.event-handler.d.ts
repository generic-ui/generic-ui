import { DomainEventHandler } from '@generic-ui/hermes';
import { SortToggledEvent } from '../../../../structure/domain/structure/sort/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { SortOrderSetEvent } from '../../../../structure/domain/structure/sort/order/sort-order-set.event';
import { CompositionId } from '../../composition.id';
export declare type CompositionChangeSortStatusEventType = SortToggledEvent | SortOrderSetEvent;
export declare class CompositionChangeSortStatusEventHandler extends DomainEventHandler<CompositionId, CompositionChangeSortStatusEventType> {
    private compositionDispatcher;
    constructor(compositionDispatcher: CompositionDispatcher);
    handle(event: CompositionChangeSortStatusEventType): void;
}
