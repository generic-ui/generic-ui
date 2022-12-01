import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { CellTemplateWithContext } from '../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { CompositionPublisher } from '../../../../core/composition/src/api/composition.publisher';
import { CompositionId } from '../../../../core/composition/src/api/global/composition.id';
import { CompositionTemplateWarehouse } from '../../../../feature/composition/src/column/composition.template-warehouse';
import { CompositionTemplateModel } from '../../../../feature/composition/src/column/composition.template.model';
import * as i0 from "@angular/core";
export declare class StructureColumnManagerComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private compositionId;
    private compositionCommandInvoker;
    private compositionTemplateWarehouse;
    columns: Array<CompositionTemplateModel>;
    enabledColumnsCount: number;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, compositionId: CompositionId, compositionCommandInvoker: CompositionPublisher, compositionTemplateWarehouse: CompositionTemplateWarehouse);
    ngOnInit(): void;
    toggleColumn(column: CellTemplateWithContext): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnManagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnManagerComponent, "div[gui-structure-column-manager]", never, {}, {}, never, never, false, never>;
}
