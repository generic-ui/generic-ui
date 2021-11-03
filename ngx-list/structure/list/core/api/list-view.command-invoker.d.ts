import { CommandInvoker } from '@generic-ui/hermes';
import { ListViewDispatcher } from '../domain/list-view.dispatcher';
import { ListViewReadModelRootId } from './list-view.read-model-root-id';
import { ListViewMode } from '../domain/mode/list-view-mode';
import * as i0 from "@angular/core";
export declare class ListViewCommandInvoker implements CommandInvoker {
    private readonly listViewDispatcher;
    constructor(listViewDispatcher: ListViewDispatcher);
    create(listViewReadModelRootId?: ListViewReadModelRootId): void;
    setMode(mode: ListViewMode, listViewReadModelRootId?: ListViewReadModelRootId): void;
    toggleSelector(enabled: boolean, listViewReadModelRootId?: ListViewReadModelRootId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewCommandInvoker>;
}
//# sourceMappingURL=list-view.command-invoker.d.ts.map