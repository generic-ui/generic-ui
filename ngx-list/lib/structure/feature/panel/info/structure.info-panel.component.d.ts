import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { StructureSourceWarehouse } from '../../../feature-api/source/structure-source.warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
import { SchemaReadModelRootId } from '../../../../schema/feature-api/read/schema.read-model-root-id';
export declare class StructureInfoPanelComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly renderer;
    private readonly elementRef;
    private readonly sourceReadModelService;
    private readonly dialog;
    private readonly compositionId;
    private readonly structureId;
    private readonly schemaReadModelRootId;
    private readonly menuColumnManagerService;
    totalItemsSize: number;
    preparedItemsSize: number;
    rowHeight: number;
    infoPanel: typeof StructureInfoModalComponent;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef, sourceReadModelService: StructureSourceWarehouse, dialog: FabricDialogService, compositionId: CompositionId, structureId: StructureId, schemaReadModelRootId: SchemaReadModelRootId, menuColumnManagerService: StructureDialogColumnManagerService);
    ngOnInit(): void;
    openInfo(): void;
    openColumnManager(): void;
}
