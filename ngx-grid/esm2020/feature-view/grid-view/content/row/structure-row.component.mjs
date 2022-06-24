import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { RowSelectToggleType } from '../../../../core/structure/formation/domain/core/row-select-toggle-type';
import { SmartComponent } from '../../../../feature/common/cdk/component/smart-component';
import { StyleModifier } from '../../../../feature/common/cdk/dom/style/style-modifier';
import { ClassModifier } from '../../../../feature/common/cdk/dom/class/class-modifier';
import { ifChanged } from '../../../../feature/common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/formation/api/formation.warehouse";
import * as i3 from "../../../../core/structure/formation/api/formation.publisher";
import * as i4 from "../../../../feature/structure/common/css-class/css-class.modifier";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../cell/structure.cell.component";
import * as i7 from "@angular/common";
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
        ifChanged(changes.entity, () => {
            this.checkSelectedItem();
            this.updateRowClass(changes.entity.previousValue);
            this.updateRowStyle(changes.entity.previousValue);
        });
        ifChanged(changes.rowClass, () => {
            this.updateRowClass();
        });
        ifChanged(changes.rowStyle, () => {
            this.updateRowStyle();
        });
    }
    ngOnInit() {
        this.subscribeWithoutRender(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (row) => {
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
    getSelectorName() {
        return 'gui-structure-row';
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
}
StructureRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.FormationWarehouse }, { token: i3.FormationPublisher }, { token: i4.CssClassModifier }], target: i0.ɵɵFactoryTarget.Component });
StructureRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StructureRowComponent, selector: "div[gui-structure-row]", inputs: { entity: "entity", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", searchPhrase: "searchPhrase", index: "index", rowStyle: "rowStyle", rowClass: "rowClass", detailsEnabled: "detailsEnabled", checkboxSelection: "checkboxSelection" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn; let i = index\" [cellEditorManager]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [columnIndex]=\"i\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [rowIndex]=\"index\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n", components: [{ type: i5.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { type: i6.StructureCellComponent, selector: "div[gui-structure-cell][entity][cell]", inputs: ["entity", "cell", "editMode", "cellEditorManager", "searchPhrase", "rowIndex", "columnIndex"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureRowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-row]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn; let i = index\" [cellEditorManager]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [columnIndex]=\"i\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [rowIndex]=\"index\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.FormationWarehouse }, { type: i3.FormationPublisher }, { type: i4.CssClassModifier }]; }, propDecorators: { entity: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTS9JLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBRTlHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUcxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBSXhGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7Ozs7Ozs7O0FBU2pGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjO0lBd0N4RCxZQUE2QixpQkFBb0MsRUFDN0MsS0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLDBCQUE4QyxFQUM5QyxnQkFBa0M7UUFDckQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTkosc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHVCQUFrQixHQUFsQixrQkFBa0Is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LENBQUM7SUFDZCxDQUFDOzttSEF4T1cscUJBQXFCO3VHQUFyQixxQkFBcUIsa1hDekJsQyxpMkJBNkJBOzRGREphLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDQyx3QkFBd0IsbUJBRWpCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7NFBBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sY0FBYztzQkFEYixLQUFLO2dCQUlOLGlCQUFpQjtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9kb21haW4vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgR3VpUm93Q2xhc3MsIEd1aVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQgeyBDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXInO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IENlbGxFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9kb21haW4vZWRpdC9jZWxsLWVkaXRvci5tYW5hZ2VyJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvY2hlY2suaW5wdXQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXJvd10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBDZWxsRWRpdG9yTWFuYWdlcjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRpbmRleDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1N0eWxlOiBHdWlSb3dTdHlsZTtcblxuXHRASW5wdXQoKVxuXHRyb3dDbGFzczogR3VpUm93Q2xhc3M7XG5cblx0QElucHV0KClcblx0ZGV0YWlsc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNlbGVjdGVkSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNzc0NsYXNzTW9kaWZpZXI6IENzc0NsYXNzTW9kaWZpZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dDb21wb25lbnQ+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5lbnRpdHksICgpID0+IHtcblx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblx0XHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoY2hhbmdlcy5lbnRpdHkucHJldmlvdXNWYWx1ZSk7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKGNoYW5nZXMuZW50aXR5LnByZXZpb3VzVmFsdWUpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucm93Q2xhc3MsICgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnJvd1N0eWxlLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJvdyA9IHJvdztcblx0XHRcdFx0Y29uc3QgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdFx0dGhpcy5jaGVja1NlbGVjdGVkSXRlbSgpO1xuXG5cdFx0XHRcdGlmIChwcmV2VmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG5cblx0XHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIudW5zZWxlY3QodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnNlbGVjdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKCk7XG5cdH1cblxuXHR0cmFja0J5Rm4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlbGVjdFJvdygpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHRoaXMuZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuQURELCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNoZWNrU2VsZWN0ZWRJdGVtKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnJvdykge1xuXG5cdFx0XHRjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLnJvdy5pc1NlbGVjdGVkKHRoaXMuZW50aXR5LmdldElkKCkpO1xuXG5cdFx0XHRpZiAocHJldlZhbHVlICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuXG5cdFx0XHRcdGlmIChwcmV2VmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIudW5zZWxlY3QodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLXJvdyc7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVJvd1N0eWxlKGVudGl0eTogSXRlbUVudGl0eSk6IHN0cmluZyB7XG5cblx0XHRpZiAoIXRoaXMucm93U3R5bGUpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93U3R5bGUuc3R5bGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yb3dTdHlsZS5zdHlsZSB8fCAnJztcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93U3R5bGUuc3R5bGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93U3R5bGUuc3R5bGVGdW5jdGlvbihlbnRpdHkuZ2V0U291cmNlSXRlbSgpLCBlbnRpdHkuZ2V0UG9zaXRpb24oKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVSb3dTdHlsZShwcmV2RW50aXR5PzogSXRlbUVudGl0eSk6IHZvaWQge1xuXG5cdFx0aWYgKHByZXZFbnRpdHkpIHtcblx0XHRcdGNvbnN0IHJvd1N0eWxlc1RvUmVtb3ZlID0gdGhpcy5jYWxjdWxhdGVSb3dTdHlsZShwcmV2RW50aXR5KTtcblxuXHRcdFx0dGhpcy5yZW1vdmVSb3dTdHlsZXMocm93U3R5bGVzVG9SZW1vdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJvd1N0eWxlc1RvQWRkID0gdGhpcy5jYWxjdWxhdGVSb3dTdHlsZSh0aGlzLmVudGl0eSk7XG5cblx0XHR0aGlzLnJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZXNUb0FkZCk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVJvd1N0eWxlcyhyb3dTdHlsZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0gcm93U3R5bGUuc3BsaXQoJzsnKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHNlcGFyYXRlZFN0eWxlcyA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xuXG5cdFx0XHRpZiAoc2VwYXJhdGVkU3R5bGVzWzBdICYmIHNlcGFyYXRlZFN0eWxlc1sxXSkge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnJlbW92ZVN0eWxlQnlOYW1lKHNlcGFyYXRlZFN0eWxlc1swXS50cmltKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyUm93U3R5bGVzKHJvd1N0eWxlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICghcm93U3R5bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzdHlsZXMgPSByb3dTdHlsZS5zcGxpdCgnOycpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3Qgc2VwYXJhdGVkU3R5bGVzID0gc3R5bGVzW2ldLnNwbGl0KCc6Jyk7XG5cblx0XHRcdGlmIChzZXBhcmF0ZWRTdHlsZXNbMF0gJiYgc2VwYXJhdGVkU3R5bGVzWzFdKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0U3R5bGVCeU5hbWUoc2VwYXJhdGVkU3R5bGVzWzBdLnRyaW0oKSwgc2VwYXJhdGVkU3R5bGVzWzFdLnRyaW0oKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVSb3dDbGFzcyhwcmV2RW50aXR5PzogSXRlbUVudGl0eSk6IHZvaWQge1xuXG5cdFx0aWYgKHByZXZFbnRpdHkpIHtcblx0XHRcdGNvbnN0IHRvUmVtb3ZlQ2xhc3MgPSB0aGlzLmNhbGN1bGF0ZVJvd0NsYXNzKHByZXZFbnRpdHkpO1xuXG5cdFx0XHRpZiAodG9SZW1vdmVDbGFzcykge1xuXHRcdFx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0SG9zdCgpLnJlbW92ZSh0b1JlbW92ZUNsYXNzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCB0b0FkZENsYXNzID0gdGhpcy5jYWxjdWxhdGVSb3dDbGFzcyh0aGlzLmVudGl0eSk7XG5cblx0XHRpZiAodG9BZGRDbGFzcykge1xuXHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQodG9BZGRDbGFzcyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSb3dDbGFzcyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiBzdHJpbmcge1xuXG5cdFx0aWYgKCF0aGlzLnJvd0NsYXNzKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0bGV0IGNsYXp6OiBzdHJpbmc7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93Q2xhc3MuY2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjbGF6eiA9IHRoaXMucm93Q2xhc3MuY2xhc3MgfHwgJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd0NsYXNzLmNsYXNzRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmIChlbnRpdHkpIHtcblx0XHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzRnVuY3Rpb24oZW50aXR5LmdldFNvdXJjZUl0ZW0oKSwgZW50aXR5LmdldFBvc2l0aW9uKCkpIHx8ICcnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGF6ejtcblx0fVxuXG59XG4iLCI8IS0tPGRpdiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtY2VsbC1jb250YWluZXJcIiA+LS0+XG5cbjxkaXYgKm5nSWY9XCJjaGVja2JveFNlbGVjdGlvblwiXG5cdCBjbGFzcz1cImd1aS1jZWxsIGd1aS1yb3ctY2hlY2tib3hcIj5cblx0PGd1aS1jaGVja2JveCAoY2hhbmdlZCk9XCJzZWxlY3RSb3coKVwiIFtjaGVja2VkXT1cInNlbGVjdGVkSXRlbVwiPjwvZ3VpLWNoZWNrYm94PlxuXHQ8IS0tXHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwic2VsZWN0ZWRJdGVtXCIgLz4tLT5cbjwvZGl2PlxuXG48ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uczsgdHJhY2tCeTogdHJhY2tCeUZuOyBsZXQgaSA9IGluZGV4XCIgW2NlbGxFZGl0b3JNYW5hZ2VyXT1cImNlbGxFZGl0aW5nXCJcblx0IFtjZWxsXT1cImNvbHVtblwiXG5cdCBbY29sdW1uSW5kZXhdPVwiaVwiXG5cdCBbZWRpdE1vZGVdPVwiZWRpdE1vZGVcIlxuXHQgW2VudGl0eV09XCJlbnRpdHlcIlxuXHQgW3Jvd0luZGV4XT1cImluZGV4XCJcblx0IFtzZWFyY2hQaHJhc2VdPVwic2VhcmNoUGhyYXNlXCJcblx0IFtzdHlsZS53aWR0aC5weF09XCJjb2x1bW4ud2lkdGhcIlxuXHQgY2xhc3M9XCJndWktY2VsbFwiXG5cdCBndWktc3RydWN0dXJlLWNlbGw+XG48L2Rpdj5cblxuPCEtLTwvZGl2Pi0tPlxuXG48IS0tPGRpdiAqbmdJZj1cImRldGFpbHNFbmFibGVkXCItLT5cbjwhLS1cdCBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDMycHgpJ31cIi0tPlxuPCEtLVx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1yb3ctZGV0YWlsc1wiPi0tPlxuXG48IS0tXHRERVRBSUxTIFBBTkVMLS0+XG5cbjwhLS08L2Rpdj4tLT5cbiJdfQ==