import { ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ListViewReadModelRootId } from '../../domain-api/read/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../domain-api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../domain-api/mode/selector/list-view.selector.repository';
export declare class ContainerLayoutComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly listViewReadModelRootId;
    private readonly listViewModeRepository;
    private readonly listViewSelectorRepository;
    listModeEnabled: boolean;
    cardModeEnabled: boolean;
    selectorEnabled: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, listViewReadModelRootId: ListViewReadModelRootId, listViewModeRepository: ListViewModeRepository, listViewSelectorRepository: ListViewSelectorRepository);
    ngOnInit(): void;
}
