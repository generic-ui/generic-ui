import { OnChanges } from '@angular/core';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewCommandInvoker } from '../../../core/api/list-view.command-invoker';
import { ListViewReadModelRootId } from '../../../core/api/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class ListViewModeGate extends Gate implements OnChanges {
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly listViewCommandDispatcher;
    mode: ListViewMode;
    modeSelector: boolean;
    constructor(listViewReadModelRootId: ListViewReadModelRootId, listViewCommandDispatcher: ListViewCommandInvoker);
    ngOnChanges(changes: NgChanges<ListViewModeGate>): void;
}
