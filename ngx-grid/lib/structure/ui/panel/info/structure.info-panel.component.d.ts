import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureReadModelService } from '../../../ui-api/structure/structure-read-model.service';
export declare class StructureInfoPanelComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private renderer;
    private elementRef;
    private sourceQueryService;
    private dialog;
    private structureReadModelService;
    totalItemsSize: number;
    preparedItemsSize: number;
    rowHeight: number;
    infoPanel: typeof StructureInfoModalComponent;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef, sourceQueryService: SourceReadModelService, dialog: FabricDialogService, structureReadModelService: StructureReadModelService);
    ngOnInit(): void;
    openInfo(): void;
}
