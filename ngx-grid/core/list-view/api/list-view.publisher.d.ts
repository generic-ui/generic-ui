import { Publisher } from '@generic-ui/hermes';
import { ListViewDispatcher } from '../core/list-view.dispatcher';
import { ListViewReadModelRootId } from './global/list-view.read-model-root-id';
import { ListViewMode } from '../domain/mode/list-view-mode';
export declare class ListViewPublisher implements Publisher {
    private readonly listViewDispatcher;
    constructor(listViewDispatcher: ListViewDispatcher);
    static readonly services: readonly [typeof ListViewDispatcher];
    create(listViewReadModelRootId?: ListViewReadModelRootId): void;
    setMode(mode: ListViewMode, listViewReadModelRootId?: ListViewReadModelRootId): void;
    toggleSelector(enabled: boolean, listViewReadModelRootId?: ListViewReadModelRootId): void;
}
