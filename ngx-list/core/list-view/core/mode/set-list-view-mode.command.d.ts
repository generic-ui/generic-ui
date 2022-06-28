import { ListViewMode } from '../../domain/mode/list-view-mode';
import { ListViewId } from '../list-view.id';
import { ListViewCommand } from '../list-view.command';
export declare class SetListViewModeCommand extends ListViewCommand {
    private readonly mode;
    constructor(listViewId: ListViewId, mode: ListViewMode);
    getMode(): ListViewMode;
}
