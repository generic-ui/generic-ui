import { ListViewId } from '../../list-view.id';
import { ListViewCommand } from '../../list-view.command';
export declare class ToggleListViewSelectorCommand extends ListViewCommand {
    private readonly enabled;
    constructor(listViewId: ListViewId, enabled: boolean);
    isEnabled(): boolean;
}
