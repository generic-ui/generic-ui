import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { StructureId } from '../../../domain/structure-id';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
export declare class StructureHeaderFiltersComponent {
    private structureFilterCommandService;
    private formBuilder;
    private cd;
    private structureId;
    columns: Array<CellTemplateWithContext>;
    closed: EventEmitter<void>;
    readonly filterFieldName = "phrase";
    filterForm: FormGroup;
    filterMode: boolean;
    constructor(structureFilterCommandService: StructureFilterCommandService, formBuilder: FormBuilder, cd: ChangeDetectorRef, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
    clearFilters(): void;
    turnOnFilterMode(): void;
    turnOffFilterMode(): void;
}
