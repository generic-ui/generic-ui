import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { ListViewMode } from '../domain/mode/list-view-mode';
import { ListViewModeArchive } from './mode/list-view.mode.archive';
import { ListViewId } from '../core/list-view.id';
import { ListViewSelectorArchive } from './mode/selector/list-view.selector.archive';
export declare class ListViewWarehouse implements Warehouse {
    private readonly listViewModeArchive;
    private readonly listViewSelectorArchive;
    constructor(listViewModeArchive: ListViewModeArchive, listViewSelectorArchive: ListViewSelectorArchive);
    static readonly services: (typeof ListViewModeArchive | typeof ListViewSelectorArchive)[];
    onMode(id: ListViewId): HermesObservable<ListViewMode>;
    onSelector(id: ListViewId): HermesObservable<boolean>;
}
