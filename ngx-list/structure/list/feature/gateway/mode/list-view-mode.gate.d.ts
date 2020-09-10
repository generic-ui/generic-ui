import { OnChanges, SimpleChanges } from '@angular/core';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewCommandInvoker } from '../../../domain-api/list-view.command-invoker';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/gate';
export declare class ListViewModeGate extends Gate implements OnChanges {
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly listViewCommandDispatcher;
    mode: ListViewMode;
    modeSelector: boolean;
    constructor(listViewReadModelRootId: ListViewReadModelRootId, listViewCommandDispatcher: ListViewCommandInvoker);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
