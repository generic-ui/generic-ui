import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
export declare class StructureInfoPanelComponent extends SmartComponent implements OnInit {
    private sourceQueryService;
    private dialog;
    private changeDetectorRef;
    totalItemsSize: number;
    preparedItemsSize: number;
    infoPanel: typeof StructureInfoModalComponent;
    constructor(sourceQueryService: SourceReadModelService, dialog: FabricDialogService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    openInfo(): void;
}
