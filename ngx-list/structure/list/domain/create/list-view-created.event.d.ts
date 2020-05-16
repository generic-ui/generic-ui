import { DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../list-view.id';
export declare class ListViewCreatedEvent extends DomainEvent<ListViewId> {
    constructor(aggregateId: ListViewId);
}
