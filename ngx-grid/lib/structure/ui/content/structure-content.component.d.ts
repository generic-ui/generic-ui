import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../domain/composition/read/definition/cell-template-with-accessor';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { ItemEntity } from '../../domain/source/item.entity';
export declare class StructureContentComponent extends SmartComponent implements OnInit {
    private platformId;
    private renderer;
    private elementRef;
    private changeDetectorRef;
    private formationCommandService;
    private structureCellEditArchive;
    private structureEditModeArchive;
    private formationQueryService;
    source: Array<ItemEntity>;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    constructor(platformId: any, renderer: Renderer2, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, formationCommandService: FormationCommandService, structureCellEditArchive: StructureCellEditArchive, structureEditModeArchive: StructureEditModeArchive, formationQueryService: FormationReadModelService);
    ngOnInit(): void;
    trackByFn(): number;
    translateY(index: number): string;
    toggleSelectedRow(entity: ItemEntity): void;
    private clearSelectedRows;
}
