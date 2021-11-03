import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { RowSelectToggleType } from '../../../../source/core/domain/formation/core/row-select-toggle-type';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StyleModifier } from '../../../../../common/cdk/dom/style/style-modifier';
import { ClassModifier } from '../../../../../common/cdk/dom/class/class-modifier';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../source/core/api/formation/formation.warehouse";
import * as i3 from "../../../../source/core/api/formation/formation.command-invoker";
import * as i4 from "../../../../common/css-class/css-class.modifier";
import * as i5 from "@angular/common";
import * as i6 from "@generic-ui/fabric";
import * as i7 from "../cell/structure.cell.component";
const _c0 = ["gui-structure-row", ""];
function StructureRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "gui-checkbox", 3);
    i0.ɵɵlistener("changed", function StructureRowComponent_div_0_Template_gui_checkbox_changed_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectRow(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r0.selectedItem);
} }
function StructureRowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", column_r4.width, "px");
    i0.ɵɵproperty("cellEditorManager", ctx_r1.cellEditing)("cell", column_r4)("columnIndex", i_r5)("editMode", ctx_r1.editMode)("entity", ctx_r1.entity)("rowIndex", ctx_r1.index)("searchPhrase", ctx_r1.searchPhrase);
} }
export class StructureRowComponent extends SmartComponent {
    constructor(changeDetectorRef, elRef, structureId, formationWarehouse, formationCommandDispatcher, cssClassModifier) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.structureId = structureId;
        this.formationWarehouse = formationWarehouse;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.cssClassModifier = cssClassModifier;
        this.detailsEnabled = false;
        this.checkboxSelection = false;
        this.selectedItem = false;
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
        this.classModifier = new ClassModifier(this.elRef.nativeElement);
    }
    ngOnChanges(changes) {
        if (changes.entity !== undefined && changes.entity.currentValue !== undefined) {
            this.checkSelectedItem();
            this.updateRowClass(changes.entity.previousValue);
            this.updateRowStyle(changes.entity.previousValue);
        }
        if (changes.rowClass !== undefined && changes.rowClass.currentValue !== undefined) {
            this.updateRowClass();
        }
        if (changes.rowStyle !== undefined && changes.rowStyle.currentValue !== undefined) {
            this.updateRowStyle();
        }
    }
    ngOnInit() {
        this.hermesSubscribeWithoutRender(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (row) => {
            this.row = row;
            const prevValue = this.selectedItem;
            this.checkSelectedItem();
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.cssClassModifier.unselect(this.elRef.nativeElement);
                }
                else {
                    this.cssClassModifier.select(this.elRef.nativeElement);
                }
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.updateRowClass();
        this.updateRowStyle();
    }
    trackByFn() {
        return 0;
    }
    selectRow() {
        event.stopPropagation();
        this.formationCommandDispatcher.toggleSelectedRow(this.entity.getId(), RowSelectToggleType.ADD, this.structureId);
    }
    checkSelectedItem() {
        if (this.row) {
            const prevValue = this.selectedItem;
            this.selectedItem = this.row.isSelected(this.entity.getId());
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.cssClassModifier.unselect(this.elRef.nativeElement);
                }
                else {
                    this.cssClassModifier.select(this.elRef.nativeElement);
                }
            }
        }
    }
    calculateRowStyle(entity) {
        if (!this.rowStyle) {
            return '';
        }
        if (typeof this.rowStyle.style === 'string') {
            return this.rowStyle.style || '';
        }
        if (typeof this.rowStyle.styleFunction === 'function') {
            return this.rowStyle.styleFunction(entity.getSourceItem(), entity.getPosition());
        }
        return '';
    }
    updateRowStyle(prevEntity) {
        if (prevEntity) {
            const rowStylesToRemove = this.calculateRowStyle(prevEntity);
            this.removeRowStyles(rowStylesToRemove);
        }
        const rowStylesToAdd = this.calculateRowStyle(this.entity);
        this.renderRowStyles(rowStylesToAdd);
    }
    removeRowStyles(rowStyle) {
        if (!rowStyle) {
            return;
        }
        const styles = rowStyle.split(';');
        for (let i = 0; i < styles.length; i += 1) {
            const separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().removeStyleByName(separatedStyles[0].trim());
            }
        }
    }
    renderRowStyles(rowStyle) {
        if (!rowStyle) {
            return;
        }
        const styles = rowStyle.split(';');
        for (let i = 0; i < styles.length; i += 1) {
            const separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().setStyleByName(separatedStyles[0].trim(), separatedStyles[1].trim());
            }
        }
    }
    updateRowClass(prevEntity) {
        if (prevEntity) {
            const toRemoveClass = this.calculateRowClass(prevEntity);
            if (toRemoveClass) {
                this.classModifier.getHost().remove(toRemoveClass);
            }
        }
        const toAddClass = this.calculateRowClass(this.entity);
        if (toAddClass) {
            this.classModifier.getHost().add(toAddClass);
        }
    }
    calculateRowClass(entity) {
        if (!this.rowClass) {
            return '';
        }
        let clazz;
        if (typeof this.rowClass.class === 'string') {
            clazz = this.rowClass.class || '';
        }
        if (typeof this.rowClass.classFunction === 'function') {
            if (entity) {
                clazz = this.rowClass.classFunction(entity.getSourceItem(), entity.getPosition()) || '';
            }
        }
        return clazz;
    }
    getSelectorName() {
        return 'gui-structure-row';
    }
}
StructureRowComponent.ɵfac = function StructureRowComponent_Factory(t) { return new (t || StructureRowComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.FormationWarehouse), i0.ɵɵdirectiveInject(i3.FormationCommandInvoker), i0.ɵɵdirectiveInject(i4.CssClassModifier)); };
StructureRowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureRowComponent, selectors: [["div", "gui-structure-row", ""]], inputs: { entity: "entity", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", searchPhrase: "searchPhrase", index: "index", rowStyle: "rowStyle", rowClass: "rowClass", detailsEnabled: "detailsEnabled", checkboxSelection: "checkboxSelection" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 3, consts: [["class", "gui-cell gui-row-checkbox", 4, "ngIf"], ["class", "gui-cell", "gui-structure-cell", "", 3, "cellEditorManager", "cell", "columnIndex", "editMode", "entity", "rowIndex", "searchPhrase", "width", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "gui-cell", "gui-row-checkbox"], [3, "checked", "changed"], ["gui-structure-cell", "", 1, "gui-cell", 3, "cellEditorManager", "cell", "columnIndex", "editMode", "entity", "rowIndex", "searchPhrase"]], template: function StructureRowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureRowComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵtemplate(1, StructureRowComponent_div_1_Template, 1, 9, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.checkboxSelection);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i5.NgIf, i5.NgForOf, i6.FabricCheckboxComponent, i7.StructureCellComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureRowComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-row]',
                templateUrl: './structure-row.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.FormationWarehouse }, { type: i3.FormationCommandInvoker }, { type: i4.CssClassModifier }]; }, { entity: [{
            type: Input
        }], columns: [{
            type: Input
        }], editMode: [{
            type: Input
        }], cellEditing: [{
            type: Input
        }], searchPhrase: [{
            type: Input
        }], index: [{
            type: Input
        }], rowStyle: [{
            type: Input
        }], rowClass: [{
            type: Input
        }], detailsEnabled: [{
            type: Input
        }], checkboxSelection: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTS9JLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBRTNHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUdyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7Ozs7SUNWbkYsOEJBQ29DO0lBQ25DLHVDQUErRDtJQUFqRCxrTUFBdUI7SUFBMEIsaUJBQWU7SUFFL0UsaUJBQU07OztJQUZpQyxlQUF3QjtJQUF4Qiw2Q0FBd0I7OztJQUkvRCx5QkFVTTs7Ozs7SUFISiw4Q0FBK0I7SUFQc0Msc0RBQWlDLG1CQUFBLHFCQUFBLDZCQUFBLHlCQUFBLDBCQUFBLHFDQUFBOztBRGdCeEcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGNBQWM7SUF3Q3hELFlBQTZCLGlCQUFvQyxFQUM3QyxLQUFpQixFQUNqQixXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsMEJBQW1ELEVBQ25ELGdCQUFrQztRQUNyRCxLQUFLLENBQUMs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RCxJQUFJLE1BQU0sRUFBRTtnQkFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4RjtTQUNEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7OzBGQXhPVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ3RCbEMsc0VBSU07UUFFTixzRUFVTTs7UUFoQkEsNENBQXVCO1FBTUwsZUFBWTtRQUFaLHFDQUFZLCtCQUFBOzt1RkRnQnZCLHFCQUFxQjtjQU5qQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzZOQUlBLE1BQU07a0JBREwsS0FBSztZQUlOLE9BQU87a0JBRE4sS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSztZQUlOLFdBQVc7a0JBRFYsS0FBSztZQUlOLFlBQVk7a0JBRFgsS0FBSztZQUlOLEtBQUs7a0JBREosS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSztZQUlOLGNBQWM7a0JBRGIsS0FBSztZQUlOLGlCQUFpQjtrQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgR3VpUm93Q2xhc3MsIEd1aVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IENzc0NsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY3NzLWNsYXNzL2Nzcy1jbGFzcy5tb2RpZmllcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IENlbGxFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vZWRpdC9jZWxsLWVkaXRvci5tYW5hZ2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1yb3ddJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogQ2VsbEVkaXRvck1hbmFnZXI7XG5cblx0QElucHV0KClcblx0c2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aW5kZXg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRyb3dTdHlsZTogR3VpUm93U3R5bGU7XG5cblx0QElucHV0KClcblx0cm93Q2xhc3M6IEd1aVJvd0NsYXNzO1xuXG5cdEBJbnB1dCgpXG5cdGRldGFpbHNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzZWxlY3RlZEl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJvdzogUm93U2VsZWN0ZWRSZWFkTW9kZWw7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHlsZU1vZGlmaWVyOiBTdHlsZU1vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNzc0NsYXNzTW9kaWZpZXI6IENzc0NsYXNzTW9kaWZpZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5lbnRpdHkgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmVudGl0eS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jaGVja1NlbGVjdGVkSXRlbSgpO1xuXHRcdFx0dGhpcy51cGRhdGVSb3dDbGFzcyhjaGFuZ2VzLmVudGl0eS5wcmV2aW91c1ZhbHVlKTtcblx0XHRcdHRoaXMudXBkYXRlUm93U3R5bGUoY2hhbmdlcy5lbnRpdHkucHJldmlvdXNWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q2xhc3MgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NsYXNzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd0NsYXNzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93U3R5bGUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd1N0eWxlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHJvdzogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5yb3cgPSByb3c7XG5cdFx0XHRcdGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG5cdFx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuXG5cdFx0XHRcdFx0aWYgKHByZXZWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnVuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5zZWxlY3QodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHR0aGlzLnVwZGF0ZVJvd0NsYXNzKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dTdHlsZSgpO1xuXHR9XG5cblx0dHJhY2tCeUZuKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzZWxlY3RSb3coKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyh0aGlzLmVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLkFERCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjaGVja1NlbGVjdGVkSXRlbSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3cpIHtcblxuXHRcdFx0Y29uc3QgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5yb3cuaXNTZWxlY3RlZCh0aGlzLmVudGl0eS5nZXRJZCgpKTtcblxuXHRcdFx0aWYgKHByZXZWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnVuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnNlbGVjdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSb3dTdHlsZShlbnRpdHk6IEl0ZW1FbnRpdHkpOiBzdHJpbmcge1xuXG5cdFx0aWYgKCF0aGlzLnJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93U3R5bGUuc3R5bGUgfHwgJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24oZW50aXR5LmdldFNvdXJjZUl0ZW0oKSwgZW50aXR5LmdldFBvc2l0aW9uKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93U3R5bGUocHJldkVudGl0eT86IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCByb3dTdHlsZXNUb1JlbW92ZSA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUocHJldkVudGl0eSk7XG5cblx0XHRcdHRoaXMucmVtb3ZlUm93U3R5bGVzKHJvd1N0eWxlc1RvUmVtb3ZlKTtcblx0XHR9XG5cblx0XHRjb25zdCByb3dTdHlsZXNUb0FkZCA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUodGhpcy5lbnRpdHkpO1xuXG5cdFx0dGhpcy5yZW5kZXJSb3dTdHlsZXMocm93U3R5bGVzVG9BZGQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVSb3dTdHlsZXMocm93U3R5bGU6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFyb3dTdHlsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHJvd1N0eWxlLnNwbGl0KCc7Jyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBzZXBhcmF0ZWRTdHlsZXMgPSBzdHlsZXNbaV0uc3BsaXQoJzonKTtcblxuXHRcdFx0aWYgKHNlcGFyYXRlZFN0eWxlc1swXSAmJiBzZXBhcmF0ZWRTdHlsZXNbMV0pIHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmVTdHlsZUJ5TmFtZShzZXBhcmF0ZWRTdHlsZXNbMF0udHJpbSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0gcm93U3R5bGUuc3BsaXQoJzsnKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHNlcGFyYXRlZFN0eWxlcyA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xuXG5cdFx0XHRpZiAoc2VwYXJhdGVkU3R5bGVzWzBdICYmIHNlcGFyYXRlZFN0eWxlc1sxXSkge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnNldFN0eWxlQnlOYW1lKHNlcGFyYXRlZFN0eWxlc1swXS50cmltKCksIHNlcGFyYXRlZFN0eWxlc1sxXS50cmltKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93Q2xhc3MocHJldkVudGl0eT86IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCB0b1JlbW92ZUNsYXNzID0gdGhpcy5jYWxjdWxhdGVSb3dDbGFzcyhwcmV2RW50aXR5KTtcblxuXHRcdFx0aWYgKHRvUmVtb3ZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmUodG9SZW1vdmVDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9BZGRDbGFzcyA9IHRoaXMuY2FsY3VsYXRlUm93Q2xhc3ModGhpcy5lbnRpdHkpO1xuXG5cdFx0aWYgKHRvQWRkQ2xhc3MpIHtcblx0XHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKHRvQWRkQ2xhc3MpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUm93Q2xhc3MoZW50aXR5OiBJdGVtRW50aXR5KTogc3RyaW5nIHtcblxuXHRcdGlmICghdGhpcy5yb3dDbGFzcykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGxldCBjbGF6ejogc3RyaW5nO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd0NsYXNzLmNsYXNzID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAoZW50aXR5KSB7XG5cdFx0XHRcdGNsYXp6ID0gdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uKGVudGl0eS5nZXRTb3VyY2VJdGVtKCksIGVudGl0eS5nZXRQb3NpdGlvbigpKSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xheno7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXJvdyc7XG5cdH1cblxufVxuIiwiPCEtLTxkaXYgY2xhc3M9XCJndWktc3RydWN0dXJlLWNlbGwtY29udGFpbmVyXCIgPi0tPlxuXG48ZGl2ICpuZ0lmPVwiY2hlY2tib3hTZWxlY3Rpb25cIlxuXHQgY2xhc3M9XCJndWktY2VsbCBndWktcm93LWNoZWNrYm94XCI+XG5cdDxndWktY2hlY2tib3ggKGNoYW5nZWQpPVwic2VsZWN0Um93KClcIiBbY2hlY2tlZF09XCJzZWxlY3RlZEl0ZW1cIj48L2d1aS1jaGVja2JveD5cblx0PCEtLVx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cInNlbGVjdGVkSXRlbVwiIC8+LS0+XG48L2Rpdj5cblxuPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnM7IHRyYWNrQnk6IHRyYWNrQnlGbjsgbGV0IGkgPSBpbmRleFwiIFtjZWxsRWRpdG9yTWFuYWdlcl09XCJjZWxsRWRpdGluZ1wiXG5cdCBbY2VsbF09XCJjb2x1bW5cIlxuXHQgW2NvbHVtbkluZGV4XT1cImlcIlxuXHQgW2VkaXRNb2RlXT1cImVkaXRNb2RlXCJcblx0IFtlbnRpdHldPVwiZW50aXR5XCJcblx0IFtyb3dJbmRleF09XCJpbmRleFwiXG5cdCBbc2VhcmNoUGhyYXNlXT1cInNlYXJjaFBocmFzZVwiXG5cdCBbc3R5bGUud2lkdGgucHhdPVwiY29sdW1uLndpZHRoXCJcblx0IGNsYXNzPVwiZ3VpLWNlbGxcIlxuXHQgZ3VpLXN0cnVjdHVyZS1jZWxsPlxuPC9kaXY+XG5cbjwhLS08L2Rpdj4tLT5cblxuPCEtLTxkaXYgKm5nSWY9XCJkZXRhaWxzRW5hYmxlZFwiLS0+XG48IS0tXHQgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgzMnB4KSd9XCItLT5cbjwhLS1cdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtcm93LWRldGFpbHNcIj4tLT5cblxuPCEtLVx0REVUQUlMUyBQQU5FTC0tPlxuXG48IS0tPC9kaXY+LS0+XG4iXX0=