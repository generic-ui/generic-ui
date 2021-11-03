import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { ChangedValueEmitter } from '../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { EditEventType } from '../../../../../composition/core/domain-read/edit/state/edit.event-type';
import { StructureEditSourceItemParams } from '../../../../source/core/domain/origin/edit/structure.edit-source-item.params';
import { StructureCellEditState } from '../../edit/structure.cell-edit.state';
import { hermesTimer } from '@generic-ui/hermes';
import { ColumnId } from '../../../../../composition/core/api/column/column.id';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../../composition/core/api/composition.id";
import * as i3 from "../../edit/structure.cell-edit.store";
import * as i4 from "../../edit/structure.cell-edit-close-all.service";
import * as i5 from "../../../../source/core/api/source.command-invoker";
import * as i6 from "../../../../../composition/core/api/composition.warehouse";
import * as i7 from "@angular/common";
import * as i8 from "./boolean/structure.cell-edit-boolean.component";
const _c0 = ["gui-structure-cell", "", "entity", "", "cell", ""];
function StructureCellComponent_ng_container_0_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a1, a2, a3, a4) { return { "gui-cell-view": true, "gui-align-left": a1, "gui-align-center": a2, "gui-align-right": a3, "gui-column-highlighted": a4 }; };
const _c2 = function (a0, a1, a2, a3) { return { element: a0, index: a1, value: a2, item: a3 }; };
function StructureCellComponent_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵlistener("click", function StructureCellComponent_ng_container_0_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.enterEditMode(); });
    i0.ɵɵtemplate(1, StructureCellComponent_ng_container_0_span_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(3, _c1, ctx_r2.cell.isAlignLeft(), ctx_r2.cell.isAlignCenter(), ctx_r2.cell.isAlignRight(), ctx_r2.isHighlighted));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.cell.template)("ngTemplateOutletContext", i0.ɵɵpureFunction4(8, _c2, ctx_r2.cell.getValue(ctx_r2.entity, ctx_r2.searchPhrase), ctx_r2.entity.getPosition(), ctx_r2.cell.getValue(ctx_r2.entity, ctx_r2.searchPhrase).value, ctx_r2.entity.getSourceItem()));
} }
function StructureCellComponent_ng_container_0_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function StructureCellComponent_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtemplate(1, StructureCellComponent_ng_container_0_span_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.cell.editTemplate)("ngTemplateOutletContext", ctx_r3.editContext);
} }
function StructureCellComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StructureCellComponent_ng_container_0_span_1_Template, 2, 13, "span", 1);
    i0.ɵɵtemplate(2, StructureCellComponent_ng_container_0_span_2_Template, 2, 2, "span", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.inEditMode);
} }
function StructureCellComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", ctx_r1.cell)("entity", ctx_r1.entity);
} }
export class StructureCellComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, structureCellEditStore, cellEditCloseAllService, sourceCommandService, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCellEditStore = structureCellEditStore;
        this.cellEditCloseAllService = cellEditCloseAllService;
        this.sourceCommandService = sourceCommandService;
        this.compositionWarehouse = compositionWarehouse;
        this.inEditMode = false;
    }
    ngOnInit() {
        this.hermesSubscribe(this.compositionWarehouse.onHighlightedColumn(new ColumnId(this.cell.columnDefinitionId.toString()), this.compositionId), (value) => {
            this.isHighlighted = value;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.hermesSubscribeWithoutRender(this.cellEditCloseAllService.onCloseAll(), () => {
            this.exitEditMode();
        });
    }
    isCellEditingEnabled() {
        return this.cellEditorManager.isEnabled(this.cell.getValue(this.entity), this.entity.getSourceItem(), this.rowIndex) &&
            this.cell.isCellEditingEnabled();
    }
    enterEditMode(forceCheck = true) {
        if (!this.isCellEditingEnabled()) {
            return;
        }
        this.cellEditCloseAllService.closeAll();
        hermesTimer(0)
            .pipe(this.hermesTakeUntil())
            .subscribe(() => {
            this.inEditMode = true;
            this.valueChanges$ = new ChangedValueEmitter();
            this.status$ = new ChangedValueEmitter();
            this.editContext = {
                status: this.status$,
                valueChanges: this.valueChanges$,
                value: this.cell.getValue(this.entity).value,
                focus: forceCheck,
                parent: this.elementRef
            };
            this.observeFieldStatus();
            this.observeValueChanges();
            this.publishEditEnter();
            if (!forceCheck) {
                this.changeDetectorRef.markForCheck();
            }
            else {
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    exitEditMode() {
        this.inEditMode = false;
        this.changeDetectorRef.detectChanges();
    }
    submitChangesAndExit() {
        const itemId = this.entity.getId(), updatedValue = this.actualValue, fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue), this.structureId);
        this.exitEditMode();
    }
    observeFieldStatus() {
        this.status$
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((status) => {
            switch (status) {
                case EditEventType.SUBMIT:
                    this.submitChangesAndExit();
                    this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    this.exitEditMode();
                    this.publishEditCancel();
                    break;
                default:
                    break;
            }
        });
    }
    observeValueChanges() {
        this.valueChanges$
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((value) => {
            this.actualValue = value;
        });
    }
    publishEditState(state) {
        this.structureCellEditStore.next(state);
    }
    publishEditEnter() {
        this.publishEditState(StructureCellEditState.ENTER);
    }
    publishEditCancel() {
        this.publishEditState(StructureCellEditState.CANCEL);
    }
    publishEditSubmit() {
        this.publishEditState(StructureCellEditState.SUBMIT);
    }
    getSelectorName() {
        return 'gui-structure-cell';
    }
}
StructureCellComponent.ɵfac = function StructureCellComponent_Factory(t) { return new (t || StructureCellComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.CompositionId), i0.ɵɵdirectiveInject(i3.StructureCellEditStore), i0.ɵɵdirectiveInject(i4.StructureCellEditCloseAllService), i0.ɵɵdirectiveInject(i5.SourceCommandInvoker), i0.ɵɵdirectiveInject(i6.CompositionWarehouse)); };
StructureCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureCellComponent, selectors: [["div", "gui-structure-cell", "", "entity", "", "cell", ""]], inputs: { entity: "entity", cell: "cell", editMode: "editMode", cellEditorManager: "cellEditorManager", searchPhrase: "searchPhrase", rowIndex: "rowIndex", columnIndex: "columnIndex" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "gui-cell-edit-mode", 4, "ngIf"], [3, "ngClass", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "gui-cell-edit-mode"], ["gui-structure-cell-edit-boolean", "", 3, "cell", "entity"]], template: function StructureCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureCellComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        i0.ɵɵtemplate(1, StructureCellComponent_ng_container_1_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.cell.isBooleanDataType() || ctx.cell.isBooleanDataType() && !ctx.isCellEditingEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cell.isBooleanDataType() && ctx.isCellEditingEnabled());
    } }, directives: [i7.NgIf, i7.NgClass, i7.NgTemplateOutlet, i8.StructureCellEditBooleanComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureCellComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-cell][entity][cell]',
                templateUrl: './structure.cell.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.StructureCellEditStore }, { type: i4.StructureCellEditCloseAllService }, { type: i5.SourceCommandInvoker }, { type: i6.CompositionWarehouse }]; }, { entity: [{
            type: Input
        }], cell: [{
            type: Input
        }], editMode: [{
            type: Input
        }], cellEditorManager: [{
            type: Input
        }], searchPhrase: [{
            type: Input
        }], rowIndex: [{
            type: Input
        }], columnIndex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0ksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBS3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUc5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7Ozs7Ozs7Ozs7SUNaOUUsd0JBUWU7Ozs7OztJQVhoQiwrQkFFb007SUFGOUwsNE1BQXlCO0lBRzlCLCtHQVFlO0lBQ2hCLGlCQUFPOzs7SUFWSiw4SkFBZ007SUFFaE0sZUFDQTtJQURBLHVEQUNBLDZPQUFBOzs7SUFXRix3QkFHZTs7O0lBTGhCLCtCQUM4QjtJQUM3QiwrR0FHZTtJQUNoQixpQkFBTzs7O0lB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QTZEOzt1RkRUL0Qsc0JBQXNCO2NBTmxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NlNBSUEsTUFBTTtrQkFETCxLQUFLO1lBSU4sSUFBSTtrQkFESCxLQUFLO1lBSU4sUUFBUTtrQkFEUCxLQUFLO1lBSU4saUJBQWlCO2tCQURoQixLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLO1lBSU4sUUFBUTtrQkFEUCxLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvY2hhbmdlZC12YWx1ZS5lbWl0dGVyJztcbmltcG9ydCB7IEVkaXRFdmVudFR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvc3RhdGUvZWRpdC5ldmVudC10eXBlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWNsb3NlLWFsbC5zZXJ2aWNlJztcbmltcG9ydCB7IGhlcm1lc1RpbWVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ2VsbEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9lZGl0L2NlbGwtZWRpdG9yLm1hbmFnZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNlbGxdW2VudGl0eV1bY2VsbF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNlbGwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y2VsbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0b3JNYW5hZ2VyOiBDZWxsRWRpdG9yTWFuYWdlcjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRyb3dJbmRleDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkluZGV4OiBudW1iZXI7XG5cblx0aW5FZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGlzSGlnaGxpZ2h0ZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlOiBTdHJ1Y3R1cmVDZWxsRWRpdENsb3NlQWxsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uSGlnaGxpZ2h0ZWRDb2x1bW4obmV3IENvbHVtbklkKHRoaXMuY2VsbC5jb2x1bW5EZWZpbml0aW9uSWQudG9TdHJpbmcoKSksIHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQodmFsdWU6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5pc0hpZ2hsaWdodGVkID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Uub25DbG9zZUFsbCgpLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRpc0NlbGxFZGl0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jZWxsRWRpdG9yTWFuYWdlci5pc0VuYWJsZWQoXG5cdFx0XHR0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLFxuXHRcdFx0dGhpcy5lbnRpdHkuZ2V0U291cmNlSXRlbSgpLFxuXHRcdFx0dGhpcy5yb3dJbmRleFxuXHRcdFx0KSAmJlxuXHRcdFx0dGhpcy5jZWxsLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCk7XG5cdH1cblxuXHRlbnRlckVkaXRNb2RlKGZvcmNlQ2hlY2s6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UuY2xvc2VBbGwoKTtcblxuXHRcdGhlcm1lc1RpbWVyKDApXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5FZGl0TW9kZSA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0dXMkID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXI8RWRpdEV2ZW50VHlwZT4oKTtcblxuXHRcdFx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0XHRcdHN0YXR1czogdGhpcy5zdGF0dXMkLFxuXHRcdFx0XHRcdHZhbHVlQ2hhbmdlczogdGhpcy52YWx1ZUNoYW5nZXMkLFxuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLmNlbGwuZ2V0VmFsdWUodGhpcy5lbnRpdHkpLnZhbHVlLFxuXHRcdFx0XHRcdGZvY3VzOiBmb3JjZUNoZWNrLFxuXHRcdFx0XHRcdHBhcmVudDogdGhpcy5lbGVtZW50UmVmXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5vYnNlcnZlRmllbGRTdGF0dXMoKTtcblx0XHRcdFx0dGhpcy5vYnNlcnZlVmFsdWVDaGFuZ2VzKCk7XG5cblx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdEVudGVyKCk7XG5cblx0XHRcdFx0aWYgKCFmb3JjZUNoZWNrKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0fVxuXG5cdGV4aXRFZGl0TW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmluRWRpdE1vZGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHN1Ym1pdENoYW5nZXNBbmRFeGl0KCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkID0gdGhpcy5lbnRpdHkuZ2V0SWQoKSxcblx0XHRcdHVwZGF0ZWRWYWx1ZSA9IHRoaXMuYWN0dWFsVmFsdWUsXG5cdFx0XHRmaWVsZElkID0gdGhpcy5jZWxsLmNvbHVtbkZpZWxkSWQ7XG5cblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLmVkaXRJdGVtKFxuXHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRJZCwgdXBkYXRlZFZhbHVlKSxcblx0XHRcdHRoaXMuc3RydWN0dXJlSWRcblx0XHQpO1xuXG5cdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUZpZWxkU3RhdHVzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlc0FuZEV4aXQoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRTdWJtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLkNBTkNFTDpcblx0XHRcdFx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0Q2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVWYWx1ZUNoYW5nZXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdGF0ZShzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZS5uZXh0KHN0YXRlKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUik7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNlbGwnO1xuXHR9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiIWNlbGwuaXNCb29sZWFuRGF0YVR5cGUoKSB8fCAoY2VsbC5pc0Jvb2xlYW5EYXRhVHlwZSgpICYmICF0aGlzLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCkpXCI+XG5cblx0PHNwYW4gKGNsaWNrKT1cImVudGVyRWRpdE1vZGUoKVwiXG5cdFx0ICAqbmdJZj1cIiFpbkVkaXRNb2RlXCJcblx0XHQgIFtuZ0NsYXNzXT1cInsnZ3VpLWNlbGwtdmlldyc6IHRydWUsJ2d1aS1hbGlnbi1sZWZ0JzogY2VsbC5pc0FsaWduTGVmdCgpLCdndWktYWxpZ24tY2VudGVyJzogY2VsbC5pc0FsaWduQ2VudGVyKCksJ2d1aS1hbGlnbi1yaWdodCc6IGNlbGwuaXNBbGlnblJpZ2h0KCksJ2d1aS1jb2x1bW4taGlnaGxpZ2h0ZWQnOiBpc0hpZ2hsaWdodGVkfVwiPlxuXHRcdDxuZy1jb250YWluZXJcblx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbC50ZW1wbGF0ZTtcblx0XHRcdFx0Y29udGV4dDoge1xuXHRcdFx0XHRlbGVtZW50OiBjZWxsLmdldFZhbHVlKGVudGl0eSwgc2VhcmNoUGhyYXNlKSxcblx0XHRcdFx0IGluZGV4OiBlbnRpdHkuZ2V0UG9zaXRpb24oKSxcblx0XHRcdFx0IHZhbHVlOiBjZWxsLmdldFZhbHVlKGVudGl0eSwgc2VhcmNoUGhyYXNlKS52YWx1ZSxcblx0XHRcdFx0IGl0ZW06IGVudGl0eS5nZXRTb3VyY2VJdGVtKClcblx0XHRcdCAgfVwiPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHQ8L3NwYW4+XG5cblx0PHNwYW4gKm5nSWY9XCJpbkVkaXRNb2RlXCJcblx0XHQgIGNsYXNzPVwiZ3VpLWNlbGwtZWRpdC1tb2RlXCI+XG5cdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsLmVkaXRUZW1wbGF0ZTtcblx0XHRcdFx0Y29udGV4dDogZWRpdENvbnRleHRcIj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0PC9zcGFuPlxuXG5cblx0PCEtLVx0PHNwYW4gKm5nSWY9XCJpbkVkaXRNb2RlXCItLT5cblx0PCEtLVx0XHQgIGNsYXNzPVwiZ3VpLWNlbGwtZWRpdC1tb2RlXCI+LS0+XG5cblx0PCEtLVx0XHQ8Z3VpLXN0cnVjdHVyZS1jZWxsLWVkaXQgW2NlbGxdPVwiY2VsbFwiLS0+XG5cdDwhLS1cdFx0XHRcdFx0XHRcdFx0IFtlbnRpdHldPVwiZW50aXR5XCI+LS0+XG5cdDwhLS1cdFx0PC9ndWktc3RydWN0dXJlLWNlbGwtZWRpdD4tLT5cblx0PCEtLVx0PC9zcGFuPi0tPlxuXG5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbC5pc0Jvb2xlYW5EYXRhVHlwZSgpICYmIHRoaXMuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKVwiPlxuXHQ8ZGl2IFtjZWxsXT1cImNlbGxcIiBbZW50aXR5XT1cImVudGl0eVwiXG5cdFx0IGd1aS1zdHJ1Y3R1cmUtY2VsbC1lZGl0LWJvb2xlYW4+XG5cdDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=