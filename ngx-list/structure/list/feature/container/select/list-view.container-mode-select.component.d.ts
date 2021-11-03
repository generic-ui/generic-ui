import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiSelectOption } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ListViewModeArchive } from '../../../core/api/mode/list-view.mode.archive';
import { ListViewReadModelRootId } from '../../../core/api/list-view.read-model-root-id';
import { ListViewWarehouse } from '../../../core/api/list-view.warehouse';
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
    private toGuiSelectOption;
    private toListViewMode;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewContainerModeSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewContainerModeSelectComponent, "div[gui-list-mode-select]", never, {}, {}, never, never>;
}
//# sourceMappingURL=list-view.container-mode-select.component.d.ts.map