import { ListViewDispatcher } from '../domain/list-view.dispatcher';
import { ListViewReadModelRootId } from './read/list-view.read-model-root-id';
import { ListViewMode } from '../domain/mode/list-view-mode';
export declare class ListViewCommandDispatcher {
    private readonly listViewDispatcher;
    constructor(listViewDispatcher: ListViewDispatcher);
    create(listViewReadModelRootId?: ListViewReadModelRootId): void;
    setMode(mode: ListViewMode, listViewReadModelRootId?: ListViewReadModelRootId): void;
    toggleSelector(enabled: boolean, listViewReadModelRootId?: ListViewReadModelRootId): void;
}
