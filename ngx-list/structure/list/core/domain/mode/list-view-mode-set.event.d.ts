import { ListViewId } from '../list-view.id';
import { ListViewMode } from './list-view-mode';
import { ListViewDomainEvent } from '../list-view.domain-event';
export declare class ListViewModeSetEvent extends ListViewDomainEvent {
    private readonly mode;
    constructor(schemaId: ListViewId, mode: ListViewMode);
    getTheme(): ListViewMode;
}
//# sourceMappingURL=list-view-mode-set.event.d.ts.map