import { DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../list-view.id';
import { ListViewAggregateEvent } from '../list-view.aggregate-event';
export declare class ListViewCreatedAggregateEvent extends ListViewAggregateEvent {
    constructor(aggregateId: ListViewId);
    toDomainEvent(): DomainEvent<ListViewId>;
}
