import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
export declare class StructureHeaderFilterComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureFilterCommandService;
    private readonly structureId;
    column: CellTemplateWithContext;
    sub: ChangedValueEmitter<unknown>;
    editContext: any;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureFilterCommandService: FilterCommandInvoker, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
    protected getSelectorName(): string;
}
