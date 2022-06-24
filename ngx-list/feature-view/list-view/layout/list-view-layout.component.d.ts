import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../feature/common/cdk/component/smart-component';
import { ListViewReadModelRootId } from '../../../core/list-view/api/global/list-view.read-model-root-id';
import { ListViewWarehouse } from '../../../core/list-view/api/list-view.warehouse';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewLayoutComponent, "div[gui-list-view-layout]", never, {}, {}, never, never>;
}
