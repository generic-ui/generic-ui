import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ListViewReadModelRootId } from '../../core/api/read/list-view.read-model-root-id';
import { ListViewModeRepository } from '../../core/api/mode/list-view.mode.repository';
import { ListViewSelectorRepository } from '../../core/api/mode/selector/list-view.selector.repository';
export declare class ListViewLayoutComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly listViewReadModelRootId;
    private readonly listViewModeRepository;
    private readonly listViewSelectorRepository;
    listModeEnabled: boolean;
    cardModeEnabled: boolean;
    selectorEnabled: boolean;
    searchBarEnabled: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, listViewReadModelRootId: ListViewReadModelRootId, listViewModeRepository: ListViewModeRepository, listViewSelectorRepository: ListViewSelectorRepository);
    ngOnInit(): void;
    protected getSelectorName(): string;
}
