import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { CellTemplateWithContext } from '../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../../feature/composition/src/column/edit/changed-value.emitter';
import { FilterPublisher } from '../../../../../core/structure/filter/src/api/filter.publisher';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class StructureHeaderFilterComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureFilterCommandService;
    private readonly structureId;
    column: CellTemplateWithContext;
    sub: ChangedValueEmitter<unknown>;
    editContext: any;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureFilterCommandService: FilterPublisher, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderFilterComponent, "gui-structure-header-filter", never, { "column": "column"; }, {}, never, never, false, never>;
}
