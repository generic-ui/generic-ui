import { OnChanges } from '@angular/core';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewCommandInvoker } from '../../../core/api/list-view.command-invoker';
import { ListViewReadModelRootId } from '../../../core/api/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class ListViewModeGate extends Gate implements OnChanges {
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly listViewCommandDispatcher;
    mode: ListViewMode;
    modeSelector: boolean;
    constructor(listViewReadModelRootId: ListViewReadModelRootId, listViewCommandDispatcher: ListViewCommandInvoker);
    ngOnChanges(changes: NgChanges<ListViewModeGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewModeGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewModeGate, "gui-list-view[mode]", never, { "mode": "mode"; "modeSelector": "modeSelector"; }, {}, never>;
}
//# sourceMappingURL=list-view-mode.gate.d.ts.map