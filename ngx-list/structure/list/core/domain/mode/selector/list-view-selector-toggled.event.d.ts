import { ListViewId } from '../../list-view.id';
import { ListViewDomainEvent } from '../../list-view.domain-event';
export declare class ListViewSelectorToggledEvent extends ListViewDomainEvent {
    private readonly enabled;
    constructor(schemaId: ListViewId, enabled: boolean);
    isEnabled(): boolean;
}
