import { ListViewId } from '../list-view.id';
import { ListViewMode } from '../../domain/mode/list-view-mode';
import { ListViewDomainEvent } from '../list-view.domain-event';
export declare class ListViewModeSetEvent extends ListViewDomainEvent {
    private readonly mode;
    constructor(schemaId: ListViewId, mode: ListViewMode);
    getTheme(): ListViewMode;
}
