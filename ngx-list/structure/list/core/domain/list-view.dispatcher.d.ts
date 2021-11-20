import { CommandDispatcher } from '@generic-ui/hermes';
import { ListViewId } from './list-view.id';
import { ListViewMode } from './mode/list-view-mode';
export declare class ListViewDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    create(listViewId: ListViewId): void;
    setMode(mode: ListViewMode, listViewId: ListViewId): void;
    toggleSelector(enabled: boolean, listViewId: ListViewId): void;
}
