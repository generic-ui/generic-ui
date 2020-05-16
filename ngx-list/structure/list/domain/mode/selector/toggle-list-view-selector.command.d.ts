import { Command } from '@generic-ui/hermes';
import { ListViewId } from '../../list-view.id';
export declare class ToggleListViewSelectorCommand extends Command {
    private readonly enabled;
    constructor(listViewId: ListViewId, enabled: boolean);
    iseEnabled(): boolean;
}
