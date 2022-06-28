import { DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../list-view.id';
import { ListViewMode } from '../../domain/mode/list-view-mode';
import { ListViewAggregateEvent } from '../list-view.aggregate-event';
export declare class ListViewModeSetAggregateEvent extends ListViewAggregateEvent {
    private readonly mode;
    constructor(listViewId: ListViewId, mode: ListViewMode);
    toDomainEvent(): DomainEvent<ListViewId>;
}
