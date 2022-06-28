import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../feature/common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../core/composition/api/composition.warehouse';
import { CellTemplateWithContext } from '../../../core/composition/core-read/definition/cell-template-with-context';
import { CompositionPublisher } from '../../../core/composition/api/composition.publisher';
import { CompositionId } from '../../../core/composition/api/global/composition.id';
import * as i0 from "@angular/core";
export declare class StructureColumnManagerComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private compositionId;
    private compositionCommandInvoker;
    private compositionWarehouse;
    columns: Array<CellTemplateWithContext>;
    enabledColumnsCount: number;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, compositionId: CompositionId, compositionCommandInvoker: CompositionPublisher, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    toggleColumn(column: CellTemplateWithContext): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnManagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnManagerComponent, "div[gui-structure-column-manager]", never, {}, {}, never, never, false>;
}
