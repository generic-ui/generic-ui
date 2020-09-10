import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterCommandInvoker } from '../../../../filter/domain-api/filter.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { CellTemplateWithContext } from '../../../../../composition/domain-api/read/definition/cell-template-with-context';
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
    constructor(structureFilterCommandService: FilterCommandInvoker, formBuilder: FormBuilder, cd: ChangeDetectorRef, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
    clearFilters(): void;
    turnOnFilterMode(): void;
    turnOffFilterMode(): void;
}
