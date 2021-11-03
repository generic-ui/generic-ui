import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { CellTemplateWithContext } from '../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import * as i0 from "@angular/core";
export declare class StructureColumnManagerComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private compositionId;
    private compositionCommandInvoker;
    private compositionWarehouse;
    columns: Array<CellTemplateWithContext>;
    enabledColumnsCount: number;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, compositionId: CompositionId, compositionCommandInvoker: CompositionCommandInvoker, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    toggleColumn(column: CellTemplateWithContext): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnManagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnManagerComponent, "div[gui-structure-column-manager]", never, {}, {}, never, never>;
}
//# sourceMappingURL=structure.column-manager.component.d.ts.map