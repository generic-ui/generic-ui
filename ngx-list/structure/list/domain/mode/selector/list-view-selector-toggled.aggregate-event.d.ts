import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../../list-view.id';
export declare class ListViewSelectorToggledAggregateEvent extends AggregateEvent<ListViewId> {
    private readonly enabled;
    constructor(listViewId: ListViewId, enabled: boolean);
    toDomainEvent(): DomainEvent<ListViewId>;
}
