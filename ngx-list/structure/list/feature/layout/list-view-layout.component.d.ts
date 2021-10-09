import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ListViewReadModelRootId } from '../../core/api/list-view.read-model-root-id';
import { ListViewWarehouse } from '../../core/api/list-view.warehouse';
export declare class ListViewLayoutComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly listViewReadModelRootId;
    private readonly listViewWarehouse;
    listModeEnabled: boolean;
    cardModeEnabled: boolean;
    selectorEnabled: boolean;
    searchBarEnabled: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, listViewReadModelRootId: ListViewReadModelRootId, listViewWarehouse: ListViewWarehouse);
    ngOnInit(): void;
    protected getSelectorName(): string;
}
