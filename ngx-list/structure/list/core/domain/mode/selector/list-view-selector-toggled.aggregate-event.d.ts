import { DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../../list-view.id';
import { ListViewAggregateEvent } from '../../list-view.aggregate-event';
export declare class ListViewSelectorToggledAggregateEvent extends ListViewAggregateEvent {
    private readonly enabled;
    constructor(listViewId: ListViewId, enabled: boolean);
    toDomainEvent(): DomainEvent<ListViewId>;
}
