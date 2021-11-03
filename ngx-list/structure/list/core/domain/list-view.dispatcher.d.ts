import { CommandDispatcher } from '@generic-ui/hermes';
import { ListViewId } from './list-view.id';
import { ListViewMode } from './mode/list-view-mode';
import * as i0 from "@angular/core";
export declare class ListViewDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    create(listViewId: ListViewId): void;
    setMode(mode: ListViewMode, listViewId: ListViewId): void;
    toggleSelector(enabled: boolean, listViewId: ListViewId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewDispatcher>;
}
//# sourceMappingURL=list-view.dispatcher.d.ts.map