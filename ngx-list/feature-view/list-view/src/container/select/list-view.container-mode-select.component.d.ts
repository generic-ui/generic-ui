import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiSelectOption } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { ListViewModeArchive } from '../../../../../core/list-view/src/api/mode/list-view.mode.archive';
import { ListViewReadModelRootId } from '../../../../../core/list-view/src/api/global/list-view.read-model-root-id';
import { ListViewWarehouse } from '../../../../../core/list-view/src/api/list-view.warehouse';
import * as i0 from "@angular/core";
export declare class ListViewContainerModeSelectComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly listViewReadModelRootId;
    private readonly listViewWarehouse;
    private readonly listViewModeRepository;
    options: Array<GuiSelectOption>;
    listContainerMode: GuiSelectOption;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, listViewReadModelRootId: ListViewReadModelRootId, listViewWarehouse: ListViewWarehouse, listViewModeRepository: ListViewModeArchive);
    ngOnInit(): void;
    changeContainerMode(mode: GuiSelectOption): void;
    protected getSelectorName(): string;
    private toGuiSelectOption;
    private toListViewMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewContainerModeSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewContainerModeSelectComponent, "div[gui-list-mode-select]", never, {}, {}, never, never, false, never>;
}
