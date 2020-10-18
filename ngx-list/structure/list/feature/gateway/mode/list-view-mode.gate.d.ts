import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewCommandInvoker } from '../../../core/api/list-view.command-invoker';
import { ListViewReadModelRootId } from '../../../core/api/read/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/gate';
export declare class ListViewModeGate extends Gate implements OnChanges {
    private readonly changeDetectorRef;
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly listViewCommandDispatcher;
    mode: ListViewMode;
    modeSelector: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, listViewReadModelRootId: ListViewReadModelRootId, listViewCommandDispatcher: ListViewCommandInvoker);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
