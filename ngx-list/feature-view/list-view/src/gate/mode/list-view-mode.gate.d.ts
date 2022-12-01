import { OnChanges } from '@angular/core';
import { ListViewMode } from '../../../../../core/list-view/src/domain/mode/list-view-mode';
import { ListViewPublisher } from '../../../../../core/list-view/src/api/list-view.publisher';
import { ListViewReadModelRootId } from '../../../../../core/list-view/src/api/global/list-view.read-model-root-id';
import { Gate } from '../../../../../feature/common/src/cdk/component/lib/src/gate';
import { NgChanges } from '../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare class ListViewModeGate extends Gate implements OnChanges {
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly listViewCommandDispatcher;
    mode: ListViewMode;
    modeSelector: boolean;
    constructor(listViewReadModelRootId: ListViewReadModelRootId, listViewCommandDispatcher: ListViewPublisher);
    ngOnChanges(changes: NgChanges<ListViewModeGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewModeGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewModeGate, "gui-list-view[mode]", never, { "mode": "mode"; "modeSelector": "modeSelector"; }, {}, never, never, false, never>;
}
