import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../list-view.id';
export declare class ListViewCreatedAggregateEvent extends AggregateEvent<ListViewId> {
    constructor(aggregateId: ListViewId);
    toDomainEvent(): DomainEvent<ListViewId>;
}
