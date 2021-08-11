import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { GuiSelectOption } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ListViewModeRepository } from '../../../core/api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../core/api/read/list-view.read-model-root-id';
export declare class ListViewContainerModeSelectComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly listViewReadModelRootId;
    private readonly listViewModeRepository;
    options: Array<GuiSelectOption>;
    listContainerMode: GuiSelectOption;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, listViewReadModelRootId: ListViewReadModelRootId, listViewModeRepository: ListViewModeRepository);
    ngOnInit(): void;
    changeContainerMode(mode: GuiSelectOption): void;
    private toGuiSelectOption;
    private toListViewMode;
    protected getSelectorName(): string;
}
