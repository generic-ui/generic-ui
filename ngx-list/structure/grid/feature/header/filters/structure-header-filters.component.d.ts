import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class StructureHeaderFiltersComponent extends PureComponent implements OnInit {
    private readonly structureFilterCommandService;
    private readonly formBuilder;
    private readonly cd;
    private readonly structureId;
    columns: Array<CellTemplateWithContext>;
    closed: EventEmitter<void>;
    readonly filterFieldName = "phrase";
    filterForm: FormGroup;
    filterMode: boolean;
    constructor(structureFilterCommandService: FilterCommandInvoker, formBuilder: FormBuilder, cd: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
    clearFilters(): void;
    turnOnFilterMode(): void;
    turnOffFilterMode(): void;
    protected getSelectorName(): string;
}
