import { ElementRef, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { Entity } from '../../domain/source/entity';
import { CellTemplateWithAccessor } from '../../domain/composition/query/definition/cell-template-with-accessor';
import { FormationCommandService } from '../../app/formation/formation-command.service';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { FormationQueryService } from '../../app/formation/formation-query.service';
export declare class StructureContentComponent extends SmartComponent implements OnInit {
    private renderer;
    private elementRef;
    private changeDetectorRef;
    private formationCommandService;
    private structureCellEditArchive;
    private structureEditModeArchive;
    private formationQueryService;
    source: Array<Entity>;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    constructor(renderer: Renderer2, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, formationCommandService: FormationCommandService, structureCellEditArchive: StructureCellEditArchive, structureEditModeArchive: StructureEditModeArchive, formationQueryService: FormationQueryService);
    ngOnInit(): void;
    trackByFn(): number;
    translateY(index: number): string;
    toggleSelectedRow(entity: Entity): void;
    private clearSelectedRows;
}
