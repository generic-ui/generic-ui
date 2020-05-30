import { ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../domain-api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
export declare class ListViewContainerModeSelectComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly listViewReadModelRootId;
    private readonly listViewModeRepository;
    options: any[];
    listContainerMode: ListViewMode;
    constructor(changeDetectorRef: ChangeDetectorRef, listViewReadModelRootId: ListViewReadModelRootId, listViewModeRepository: ListViewModeRepository);
    ngOnInit(): void;
    changeContainerMode(mode: ListViewMode): void;
}
