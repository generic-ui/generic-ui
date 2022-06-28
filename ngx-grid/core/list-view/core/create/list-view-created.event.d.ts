import { ListViewId } from '../list-view.id';
import { ListViewDomainEvent } from '../list-view.domain-event';
export declare class ListViewCreatedEvent extends ListViewDomainEvent {
    constructor(aggregateId: ListViewId);
}
