import { DomainEventType, MultiDomainEventHandler } from '@generic-ui/hermes';
import { SortToggledEvent } from '../../../../../structure/sorting/src/core/toggle/sort-toggled.event';
import { CompositionDispatcher } from '../../composition.dispatcher';
import { SortOrderSetEvent } from '../../../../../structure/sorting/src/core/order/sort-order-set.event';
import { CompositionId } from '../../../api/global/composition.id';
export declare type CompositionChangeSortStatusEventType = SortToggledEvent | SortOrderSetEvent;
export declare class CompositionChangeSortStatusEventHandler implements MultiDomainEventHandler<CompositionId, CompositionChangeSortStatusEventType> {
    private readonly compositionDispatcher;
    constructor(compositionDispatcher: CompositionDispatcher);
    static readonly services: (typeof CompositionDispatcher)[];
    forEvents(): Array<DomainEventType<CompositionChangeSortStatusEventType>>;
    handle(event: CompositionChangeSortStatusEventType): void;
}
