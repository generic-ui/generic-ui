import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../list-view.id';
import { ListViewMode } from './list-view-mode';
export declare class ListViewModeSetAggregateEvent extends AggregateEvent<ListViewId> {
    private readonly mode;
    constructor(listViewId: ListViewId, mode: ListViewMode);
    toDomainEvent(): DomainEvent<ListViewId>;
}
