import { OnInit, ChangeDetectorRef } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoPanel } from './structure.info-panel';
import { StructureSummaryEnabledArchive } from './structure.summary-enabled.archive';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
export declare class StructureSummaryComponent extends SmartComponent implements OnInit {
    private structureSummaryEnabledArchive;
    private sourceQueryService;
    private dialog;
    private changeDetectorRef;
    originSize: number;
    infoPanel: typeof StructureInfoPanel;
    constructor(structureSummaryEnabledArchive: StructureSummaryEnabledArchive, sourceQueryService: SourceReadModelService, dialog: FabricDialogService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    openInfo(): void;
}
