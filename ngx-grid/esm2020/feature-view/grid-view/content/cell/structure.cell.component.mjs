import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/cdk/component/smart-component';
import { ChangedValueEmitter } from '../../../../core/composition/core-read/edit/changed-value.emitter';
import { EditEventType } from '../../../../core/composition/core-read/edit/state/edit.event-type';
import { StructureEditSourceItemParams } from '../../../../core/structure/source/core/origin/edit/structure.edit-source-item.params';
import { StructureCellEditState } from '../../edit/structure.cell-edit.state';
import { hermesTimer } from '@generic-ui/hermes';
import { ColumnId } from '../../../../core/composition/api/column/column.id';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/api/global/structure.id";
import * as i2 from "../../../../core/composition/api/global/composition.id";
import * as i3 from "../../edit/structure.cell-edit.store";
import * as i4 from "../../edit/structure.cell-edit-close-all.service";
import * as i5 from "../../../../core/structure/source/api/source.publisher";
import * as i6 from "../../../../core/composition/api/composition.warehouse";
import * as i7 from "@angular/common";
import * as i8 from "./boolean/structure.cell-edit-boolean.component";
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
        this.subscribe(this.compositionWarehouse.onHighlightedColumn(new ColumnId(this.cell.columnDefinitionId.toString()), this.compositionId), (value) => {
            this.isHighlighted = value;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.subscribeWithoutRender(this.cellEditCloseAllService.onCloseAll(), () => {
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
            .pipe(this.takeUntil())
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
    getSelectorName() {
        return 'gui-structure-cell';
    }
    observeFieldStatus() {
        this.status$
            .on()
            .pipe(this.takeUntil())
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
            .pipe(this.takeUntil())
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
}
StructureCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.StructureCellEditStore }, { token: i4.StructureCellEditCloseAllService }, { token: i5.SourcePublisher }, { token: i6.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureCellComponent, selector: "div[gui-structure-cell][entity][cell]", inputs: { entity: "entity", cell: "cell", editMode: "editMode", cellEditorManager: "cellEditorManager", searchPhrase: "searchPhrase", rowIndex: "rowIndex", columnIndex: "columnIndex" }, usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight(),'gui-column-highlighted': isHighlighted}\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: {\n\t\t\t\telement: cell.getValue(entity, searchPhrase),\n\t\t\t\t index: entity.getPosition(),\n\t\t\t\t value: cell.getValue(entity, searchPhrase).value,\n\t\t\t\t item: entity.getSourceItem()\n\t\t\t  }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<div [cell]=\"cell\" [entity]=\"entity\"\n\t\t gui-structure-cell-edit-boolean>\n\t</div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i8.StructureCellEditBooleanComponent, selector: "div[gui-structure-cell-edit-boolean][entity][cell]", inputs: ["entity", "cell"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-cell][entity][cell]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight(),'gui-column-highlighted': isHighlighted}\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: {\n\t\t\t\telement: cell.getValue(entity, searchPhrase),\n\t\t\t\t index: entity.getPosition(),\n\t\t\t\t value: cell.getValue(entity, searchPhrase).value,\n\t\t\t\t item: entity.getSourceItem()\n\t\t\t  }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<div [cell]=\"cell\" [entity]=\"entity\"\n\t\t gui-structure-cell-edit-boolean>\n\t</div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.StructureCellEditStore }, { type: i4.StructureCellEditCloseAllService }, { type: i5.SourcePublisher }, { type: i6.CompositionWarehouse }]; }, propDecorators: { entity: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0ksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBSzFGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUNySSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUc5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7Ozs7Ozs7O0FBVTdFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxjQUFjO0lBbUN6RCxZQUE2QixpQkFBb0MsRUFDN0MsVUFBc0IsRUFDdEIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsc0JBQThDLEVBQzlDLHVCQUF5RCxFQUN6RCxvQkFBcUMsRUFDckMsb0JBQTBDO1FBQzdELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFV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QUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBNkI7UUFDckQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8saUJBQWlCO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU8saUJBQWlCO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOzttSEE5TFcsc0JBQXNCO3VHQUF0QixzQkFBc0IsOFJDM0JuQyxnMkNBeUNBOzJGRGRhLHNCQUFzQjtrQkFObEMsU0FBUzsrQkFDQyx1Q0FBdUMsbUJBRWhDLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7NFVBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vY29yZS1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU291cmNlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9zb3VyY2UucHVibGlzaGVyJztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2NvcmUtcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBFZGl0RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9jb3JlLXJlYWQvZWRpdC9zdGF0ZS9lZGl0LmV2ZW50LXR5cGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWNsb3NlLWFsbC5zZXJ2aWNlJztcbmltcG9ydCB7IGhlcm1lc1RpbWVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuaW1wb3J0IHsgQ2VsbEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9kb21haW4vZWRpdC9jZWxsLWVkaXRvci5tYW5hZ2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jZWxsXVtlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ2VsbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBJdGVtRW50aXR5O1xuXG5cdEBJbnB1dCgpXG5cdGNlbGw6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdG9yTWFuYWdlcjogQ2VsbEVkaXRvck1hbmFnZXI7XG5cblx0QElucHV0KClcblx0c2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cm93SW5kZXg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5JbmRleDogbnVtYmVyO1xuXG5cdGluRWRpdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRlZGl0Q29udGV4dDogYW55O1xuXG5cdHZhbHVlQ2hhbmdlcyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRzdGF0dXMkOiBDaGFuZ2VkVmFsdWVFbWl0dGVyPGFueT47XG5cblx0YWN0dWFsVmFsdWU6IGFueTtcblxuXHRpc0hpZ2hsaWdodGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjZWxsRWRpdENsb3NlQWxsU2VydmljZTogU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZVB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25IaWdobGlnaHRlZENvbHVtbihuZXcgQ29sdW1uSWQodGhpcy5jZWxsLmNvbHVtbkRlZmluaXRpb25JZC50b1N0cmluZygpKSwgdGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmlzSGlnaGxpZ2h0ZWQgPSB2YWx1ZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5jZWxsRWRpdENsb3NlQWxsU2VydmljZS5vbkNsb3NlQWxsKCksXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdGlzQ2VsbEVkaXRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNlbGxFZGl0b3JNYW5hZ2VyLmlzRW5hYmxlZChcblx0XHRcdFx0dGhpcy5jZWxsLmdldFZhbHVlKHRoaXMuZW50aXR5KSxcblx0XHRcdFx0dGhpcy5lbnRpdHkuZ2V0U291cmNlSXRlbSgpLFxuXHRcdFx0XHR0aGlzLnJvd0luZGV4XG5cdFx0XHQpICYmXG5cdFx0XHR0aGlzLmNlbGwuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKTtcblx0fVxuXG5cdGVudGVyRWRpdE1vZGUoZm9yY2VDaGVjazogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jZWxsRWRpdENsb3NlQWxsU2VydmljZS5jbG9zZUFsbCgpO1xuXG5cdFx0aGVybWVzVGltZXIoMClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5pbkVkaXRNb2RlID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlcyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXHRcdFx0XHR0aGlzLnN0YXR1cyQgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcjxFZGl0RXZlbnRUeXBlPigpO1xuXG5cdFx0XHRcdHRoaXMuZWRpdENvbnRleHQgPSB7XG5cdFx0XHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyQsXG5cdFx0XHRcdFx0dmFsdWVDaGFuZ2VzOiB0aGlzLnZhbHVlQ2hhbmdlcyQsXG5cdFx0XHRcdFx0dmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSh0aGlzLmVudGl0eSkudmFsdWUsXG5cdFx0XHRcdFx0Zm9jdXM6IGZvcmNlQ2hlY2ssXG5cdFx0XHRcdFx0cGFyZW50OiB0aGlzLmVsZW1lbnRSZWZcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLm9ic2VydmVGaWVsZFN0YXR1cygpO1xuXHRcdFx0XHR0aGlzLm9ic2VydmVWYWx1ZUNoYW5nZXMoKTtcblxuXHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0RW50ZXIoKTtcblxuXHRcdFx0XHRpZiAoIWZvcmNlQ2hlY2spIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0ZXhpdEVkaXRNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW5FZGl0TW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0c3VibWl0Q2hhbmdlc0FuZEV4aXQoKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSB0aGlzLmVudGl0eS5nZXRJZCgpLFxuXHRcdFx0dXBkYXRlZFZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZSxcblx0XHRcdGZpZWxkSWQgPSB0aGlzLmNlbGwuY29sdW1uRmllbGRJZDtcblxuXHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2UuZWRpdEl0ZW0oXG5cdFx0XHRuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZElkLCB1cGRhdGVkVmFsdWUpLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJZFxuXHRcdCk7XG5cblx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jZWxsJztcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUZpZWxkU3RhdHVzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zdGF0dXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXR1czogRWRpdEV2ZW50VHlwZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuc3VibWl0Q2hhbmdlc0FuZEV4aXQoKTtcblx0XHRcdFx0XHRcdHRoaXMucHVibGlzaEVkaXRTdWJtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFZGl0RXZlbnRUeXBlLkNBTkNFTDpcblx0XHRcdFx0XHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0Q2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVWYWx1ZUNoYW5nZXMoKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlQ2hhbmdlcyRcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRTdGF0ZShzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZS5uZXh0KHN0YXRlKTtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaEVkaXRFbnRlcigpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUik7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0Q2FuY2VsKCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkNBTkNFTCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3VibWl0KCk6IHZvaWQge1xuXHRcdHRoaXMucHVibGlzaEVkaXRTdGF0ZShTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVCk7XG5cdH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhY2VsbC5pc0Jvb2xlYW5EYXRhVHlwZSgpIHx8IChjZWxsLmlzQm9vbGVhbkRhdGFUeXBlKCkgJiYgIXRoaXMuaXNDZWxsRWRpdGluZ0VuYWJsZWQoKSlcIj5cblxuXHQ8c3BhbiAoY2xpY2spPVwiZW50ZXJFZGl0TW9kZSgpXCJcblx0XHQgICpuZ0lmPVwiIWluRWRpdE1vZGVcIlxuXHRcdCAgW25nQ2xhc3NdPVwieydndWktY2VsbC12aWV3JzogdHJ1ZSwnZ3VpLWFsaWduLWxlZnQnOiBjZWxsLmlzQWxpZ25MZWZ0KCksJ2d1aS1hbGlnbi1jZW50ZXInOiBjZWxsLmlzQWxpZ25DZW50ZXIoKSwnZ3VpLWFsaWduLXJpZ2h0JzogY2VsbC5pc0FsaWduUmlnaHQoKSwnZ3VpLWNvbHVtbi1oaWdobGlnaHRlZCc6IGlzSGlnaGxpZ2h0ZWR9XCI+XG5cdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsLnRlbXBsYXRlO1xuXHRcdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdGVsZW1lbnQ6IGNlbGwuZ2V0VmFsdWUoZW50aXR5LCBzZWFyY2hQaHJhc2UpLFxuXHRcdFx0XHQgaW5kZXg6IGVudGl0eS5nZXRQb3NpdGlvbigpLFxuXHRcdFx0XHQgdmFsdWU6IGNlbGwuZ2V0VmFsdWUoZW50aXR5LCBzZWFyY2hQaHJhc2UpLnZhbHVlLFxuXHRcdFx0XHQgaXRlbTogZW50aXR5LmdldFNvdXJjZUl0ZW0oKVxuXHRcdFx0ICB9XCI+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdDwvc3Bhbj5cblxuXHQ8c3BhbiAqbmdJZj1cImluRWRpdE1vZGVcIlxuXHRcdCAgY2xhc3M9XCJndWktY2VsbC1lZGl0LW1vZGVcIj5cblx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGwuZWRpdFRlbXBsYXRlO1xuXHRcdFx0XHRjb250ZXh0OiBlZGl0Q29udGV4dFwiPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHQ8L3NwYW4+XG5cblxuXHQ8IS0tXHQ8c3BhbiAqbmdJZj1cImluRWRpdE1vZGVcIi0tPlxuXHQ8IS0tXHRcdCAgY2xhc3M9XCJndWktY2VsbC1lZGl0LW1vZGVcIj4tLT5cblxuXHQ8IS0tXHRcdDxndWktc3RydWN0dXJlLWNlbGwtZWRpdCBbY2VsbF09XCJjZWxsXCItLT5cblx0PCEtLVx0XHRcdFx0XHRcdFx0XHQgW2VudGl0eV09XCJlbnRpdHlcIj4tLT5cblx0PCEtLVx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY2VsbC1lZGl0Pi0tPlxuXHQ8IS0tXHQ8L3NwYW4+LS0+XG5cblxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJjZWxsLmlzQm9vbGVhbkRhdGFUeXBlKCkgJiYgdGhpcy5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpXCI+XG5cdDxkaXYgW2NlbGxdPVwiY2VsbFwiIFtlbnRpdHldPVwiZW50aXR5XCJcblx0XHQgZ3VpLXN0cnVjdHVyZS1jZWxsLWVkaXQtYm9vbGVhbj5cblx0PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==