import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StructureFilterCommandDispatcher } from '../../../ui-api/structure/filter/structure-filter.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
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
    constructor(structureFilterCommandService: StructureFilterCommandDispatcher, formBuilder: FormBuilder, cd: ChangeDetectorRef, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
    clearFilters(): void;
    turnOnFilterMode(): void;
    turnOffFilterMode(): void;
}
