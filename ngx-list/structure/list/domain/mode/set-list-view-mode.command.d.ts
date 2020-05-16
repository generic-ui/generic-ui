import { Command } from '@generic-ui/hermes';
import { ListViewMode } from './list-view-mode';
import { ListViewId } from '../list-view.id';
export declare class SetListViewModeCommand extends Command {
    private readonly mode;
    constructor(listViewId: ListViewId, mode: ListViewMode);
    getMode(): ListViewMode;
}
