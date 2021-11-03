import { ListViewId } from '../../list-view.id';
import { ListViewCommand } from '../../list-view.command';
export declare class ToggleListViewSelectorCommand extends ListViewCommand {
    private readonly enabled;
    constructor(listViewId: ListViewId, enabled: boolean);
    iseEnabled(): boolean;
}
//# sourceMappingURL=toggle-list-view-selector.command.d.ts.map