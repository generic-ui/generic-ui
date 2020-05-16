import { DomainEvent } from '@generic-ui/hermes';
import { ListViewId } from '../../list-view.id';
export declare class ListViewSelectorToggledEvent extends DomainEvent<ListViewId> {
    private readonly enabled;
    constructor(schemaId: ListViewId, enabled: boolean);
    isEnabled(): boolean;
}
