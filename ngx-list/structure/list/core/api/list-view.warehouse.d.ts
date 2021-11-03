import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { ListViewMode } from '../domain/mode/list-view-mode';
import { ListViewModeArchive } from './mode/list-view.mode.archive';
import { ListViewId } from '../domain/list-view.id';
import { ListViewSelectorArchive } from './mode/selector/list-view.selector.archive';
import * as i0 from "@angular/core";
export declare class ListViewWarehouse implements Warehouse {
    private readonly listViewModeArchive;
    private readonly listViewSelectorArchive;
    constructor(listViewModeArchive: ListViewModeArchive, listViewSelectorArchive: ListViewSelectorArchive);
    onMode(id: ListViewId): HermesObservable<ListViewMode>;
    onSelector(id: ListViewId): HermesObservable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewWarehouse>;
}
//# sourceMappingURL=list-view.warehouse.d.ts.map