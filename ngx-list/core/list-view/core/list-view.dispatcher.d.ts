import { ListViewId } from './list-view.id';
import { ListViewMode } from '../domain/mode/list-view-mode';
export declare class ListViewDispatcher {
    private readonly commandDispatcher;
    create(listViewId: ListViewId): void;
    setMode(mode: ListViewMode, listViewId: ListViewId): void;
    toggleSelector(enabled: boolean, listViewId: ListViewId): void;
}
