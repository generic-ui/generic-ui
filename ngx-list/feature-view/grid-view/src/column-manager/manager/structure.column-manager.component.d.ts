import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { CellTemplateWithContext } from '../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { CompositionPublisher } from '../../../../../core/composition/src/api/composition.publisher';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { CompositionTemplateWarehouse } from '../../../../../feature/composition/src/column/composition.template-warehouse';
import { CompositionTemplateModel } from '../../../../../feature/composition/src/column/composition.template.model';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export interface StructureColumnManagerComponentState {
    columns: ReadonlyArray<CompositionTemplateModel>;
    enabledColumnsCount: number;
}
export declare class StructureColumnManagerComponent extends SmartComponent {
    private readonly compositionId;
    private readonly compositionCommandInvoker;
    private readonly compositionTemplateWarehouse;
    private readonly state;
    readonly state$: HermesObservable<any>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, compositionId: CompositionId, compositionCommandInvoker: CompositionPublisher, compositionTemplateWarehouse: CompositionTemplateWarehouse);
    toggleColumn(column: CellTemplateWithContext): void;
    protected getSelectorName(): string;
    private selectColumns;
    private selectEnabledColumnsCount;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnManagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnManagerComponent, "div[gui-structure-column-manager]", never, {}, {}, never, never, false, never>;
}
