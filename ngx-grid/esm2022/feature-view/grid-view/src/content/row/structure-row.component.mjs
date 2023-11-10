import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { RowSelectToggleType } from '../../../../../core/structure/formation/src/domain/row-select-toggle-type';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { StyleModifier } from '../../../../../feature/common/component/src/dom/style/style-modifier';
import { ClassModifier } from '../../../../../feature/common/component/src/dom/class/class-modifier';
import { ifChanged } from '../../../../../feature/common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i4 from "../../../../../feature/structure/common/src/css-class/css-class.modifier";
import * as i5 from "@angular/common";
import * as i6 from "@generic-ui/fabric";
import * as i7 from "../cell/structure.cell.component";
export class StructureRowComponent extends SmartComponent {
    changeDetectorRef;
    elRef;
    structureId;
    formationWarehouse;
    formationCommandDispatcher;
    cssClassModifier;
    entity;
    columns;
    editMode;
    cellEditing;
    searchPhrase;
    index;
    rowStyle;
    rowClass;
    checkboxSelection = false;
    radioSelection = false;
    selectedItem = false;
    row;
    styleModifier;
    classModifier;
    constructor(changeDetectorRef, elRef, structureId, formationWarehouse, formationCommandDispatcher, cssClassModifier) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.structureId = structureId;
        this.formationWarehouse = formationWarehouse;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.cssClassModifier = cssClassModifier;
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
    selectCheckbox() {
        event.stopPropagation();
        this.formationCommandDispatcher.toggleSelectedRow(this.entity.getId(), RowSelectToggleType.ADD, this.structureId);
    }
    selectRadio() {
        event.stopPropagation();
        this.formationCommandDispatcher.toggleSelectedRow(this.entity.getId(), RowSelectToggleType.NONE, this.structureId);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.FormationWarehouse }, { token: i3.FormationPublisher }, { token: i4.CssClassModifier }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureRowComponent, selector: "div[gui-structure-row]", inputs: { entity: "entity", columns: "columns", editMode: "editMode", cellEditing: "cellEditing", searchPhrase: "searchPhrase", index: "index", rowStyle: "rowStyle", rowClass: "rowClass", checkboxSelection: "checkboxSelection", radioSelection: "radioSelection" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectCheckbox()\" [checked]=\"selectedItem\"></gui-checkbox>\n</div>\n\n<div *ngIf=\"radioSelection\"\n\t class=\"gui-cell gui-row-radio\">\n\t<gui-radio-button (changed)=\"selectRadio()\" [checked]=\"selectedItem\"></gui-radio-button>\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn; let i = index\" [cellEditorManager]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [columnIndex]=\"i\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [rowIndex]=\"index\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n", dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "component", type: i6.FabricRadioButtonComponent, selector: "gui-radio-button", inputs: ["name", "checked", "disabled"], outputs: ["changed"] }, { kind: "component", type: i7.StructureCellComponent, selector: "div[gui-structure-cell][entity][cell]", inputs: ["entity", "cell", "editMode", "cellEditorManager", "searchPhrase", "rowIndex", "columnIndex"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureRowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-row]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectCheckbox()\" [checked]=\"selectedItem\"></gui-checkbox>\n</div>\n\n<div *ngIf=\"radioSelection\"\n\t class=\"gui-cell gui-row-radio\">\n\t<gui-radio-button (changed)=\"selectRadio()\" [checked]=\"selectedItem\"></gui-radio-button>\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn; let i = index\" [cellEditorManager]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [columnIndex]=\"i\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [rowIndex]=\"index\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n" }]
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
            }], checkboxSelection: [{
                type: Input
            }], radioSelection: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2NvbnRlbnQvcm93L3N0cnVjdHVyZS1yb3cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFFaEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRzdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNyRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFJckcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7Ozs7Ozs7QUFVcEYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGNBQWM7SUF3QzNCO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQTFDcEIsTUFBTSxDQUFPO0lBR2IsT0FBTyxDQUFrQztJQUd6QyxRQUFRLENBQVU7SUFHbEIsV0FBVyxDQUFvQjtJQUcvQixZQUFZLENBQVM7SUFHckIsS0FBSyxDQUFTO0lBR2QsUUFBUSxDQUFjO0lBR3RCLFFBQVEsQ0FBYztJQUd0QixpQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFHbkMsY0FBYyxHQUFZLEtBQUssQ0FBQztJQUVoQyxZ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SSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsSUFBSSxLQUFhLENBQUM7UUFFbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtZQUN0RCxJQUFJLE1BQU0sRUFBRTtnQkFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4RjtTQUNEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO3dHQTdPVyxxQkFBcUI7NEZBQXJCLHFCQUFxQixrWEN4QmxDLDJzQkFxQkE7OzRGREdhLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDQyx3QkFBd0IsbUJBRWpCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7NFBBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4saUJBQWlCO3NCQURoQixLQUFLO2dCQUlOLGNBQWM7c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvaXRlbS9pdGVtJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvZG9tYWluL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEd1aVJvd0NsYXNzLCBHdWlSb3dTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2d1aS9ncmlkL3NyYy9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQgeyBDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9kb20vY2xhc3MvY2xhc3MtbW9kaWZpZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2NvbW1vbi9zcmMvY3NzLWNsYXNzL2Nzcy1jbGFzcy5tb2RpZmllcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgQ2VsbEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2NoZWNrLmlucHV0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWNjZXNzb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi5hY2Nlc3Nvci5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtcm93XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBJdGVtO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbXBvc2l0aW9uQWNjZXNzb3JNb2RlbD47XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IENlbGxFZGl0b3JNYW5hZ2VyO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGluZGV4OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRASW5wdXQoKVxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdHJhZGlvU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2VsZWN0ZWRJdGVtOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByb3c6IFJvd1NlbGVjdGVkUmVhZE1vZGVsO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25QdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY3NzQ2xhc3NNb2RpZmllcjogQ3NzQ2xhc3NNb2RpZmllcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd0NvbXBvbmVudD4pIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmVudGl0eSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5jaGVja1NlbGVjdGVkSXRlbSgpO1xuXHRcdFx0dGhpcy51cGRhdGVSb3dDbGFzcyhjaGFuZ2VzLmVudGl0eS5wcmV2aW91c1ZhbHVlKTtcblx0XHRcdHRoaXMudXBkYXRlUm93U3R5bGUoY2hhbmdlcy5lbnRpdHkucHJldmlvdXNWYWx1ZSk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5yb3dDbGFzcywgKCkgPT4ge1xuXHRcdFx0dGhpcy51cGRhdGVSb3dDbGFzcygpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucm93U3R5bGUsICgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlUm93U3R5bGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Uub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChyb3c6IFJvd1NlbGVjdGVkUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMucm93ID0gcm93O1xuXHRcdFx0XHRjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuXHRcdFx0XHR0aGlzLmNoZWNrU2VsZWN0ZWRJdGVtKCk7XG5cblx0XHRcdFx0aWYgKHByZXZWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcblxuXHRcdFx0XHRcdGlmIChwcmV2VmFsdWUpIHtcblx0XHRcdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci51bnNlbGVjdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG5cdFx0dGhpcy51cGRhdGVSb3dDbGFzcygpO1xuXHRcdHRoaXMudXBkYXRlUm93U3R5bGUoKTtcblx0fVxuXG5cdHRyYWNrQnlGbigpOiBudW1iZXIge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c2VsZWN0Q2hlY2tib3goKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyh0aGlzLmVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLkFERCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZWxlY3RSYWRpbygpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHRoaXMuZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjaGVja1NlbGVjdGVkSXRlbSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3cpIHtcblxuXHRcdFx0Y29uc3QgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5yb3cuaXNTZWxlY3RlZCh0aGlzLmVudGl0eS5nZXRJZCgpKTtcblxuXHRcdFx0aWYgKHByZXZWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnVuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnNlbGVjdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1yb3cnO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSb3dTdHlsZShlbnRpdHk6IEl0ZW0pOiBzdHJpbmcge1xuXG5cdFx0aWYgKCF0aGlzLnJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93U3R5bGUuc3R5bGUgfHwgJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24oZW50aXR5LmdldFNvdXJjZUl0ZW0oKSwgZW50aXR5LmdldFBvc2l0aW9uKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93U3R5bGUocHJldkVudGl0eT86IEl0ZW0pOiB2b2lkIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCByb3dTdHlsZXNUb1JlbW92ZSA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUocHJldkVudGl0eSk7XG5cblx0XHRcdHRoaXMucmVtb3ZlUm93U3R5bGVzKHJvd1N0eWxlc1RvUmVtb3ZlKTtcblx0XHR9XG5cblx0XHRjb25zdCByb3dTdHlsZXNUb0FkZCA9IHRoaXMuY2FsY3VsYXRlUm93U3R5bGUodGhpcy5lbnRpdHkpO1xuXG5cdFx0dGhpcy5yZW5kZXJSb3dTdHlsZXMocm93U3R5bGVzVG9BZGQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVSb3dTdHlsZXMocm93U3R5bGU6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKCFyb3dTdHlsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHJvd1N0eWxlLnNwbGl0KCc7Jyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBzZXBhcmF0ZWRTdHlsZXMgPSBzdHlsZXNbaV0uc3BsaXQoJzonKTtcblxuXHRcdFx0aWYgKHNlcGFyYXRlZFN0eWxlc1swXSAmJiBzZXBhcmF0ZWRTdHlsZXNbMV0pIHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmVTdHlsZUJ5TmFtZShzZXBhcmF0ZWRTdHlsZXNbMF0udHJpbSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0gcm93U3R5bGUuc3BsaXQoJzsnKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHNlcGFyYXRlZFN0eWxlcyA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xuXG5cdFx0XHRpZiAoc2VwYXJhdGVkU3R5bGVzWzBdICYmIHNlcGFyYXRlZFN0eWxlc1sxXSkge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnNldFN0eWxlQnlOYW1lKHNlcGFyYXRlZFN0eWxlc1swXS50cmltKCksIHNlcGFyYXRlZFN0eWxlc1sxXS50cmltKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93Q2xhc3MocHJldkVudGl0eT86IEl0ZW0pOiB2b2lkIHtcblxuXHRcdGlmIChwcmV2RW50aXR5KSB7XG5cdFx0XHRjb25zdCB0b1JlbW92ZUNsYXNzID0gdGhpcy5jYWxjdWxhdGVSb3dDbGFzcyhwcmV2RW50aXR5KTtcblxuXHRcdFx0aWYgKHRvUmVtb3ZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5yZW1vdmUodG9SZW1vdmVDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9BZGRDbGFzcyA9IHRoaXMuY2FsY3VsYXRlUm93Q2xhc3ModGhpcy5lbnRpdHkpO1xuXG5cdFx0aWYgKHRvQWRkQ2xhc3MpIHtcblx0XHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKHRvQWRkQ2xhc3MpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUm93Q2xhc3MoZW50aXR5OiBJdGVtKTogc3RyaW5nIHtcblxuXHRcdGlmICghdGhpcy5yb3dDbGFzcykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGxldCBjbGF6ejogc3RyaW5nO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd0NsYXNzLmNsYXNzID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzIHx8ICcnO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAoZW50aXR5KSB7XG5cdFx0XHRcdGNsYXp6ID0gdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uKGVudGl0eS5nZXRTb3VyY2VJdGVtKCksIGVudGl0eS5nZXRQb3NpdGlvbigpKSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xheno7XG5cdH1cblxufVxuIiwiPGRpdiAqbmdJZj1cImNoZWNrYm94U2VsZWN0aW9uXCJcblx0IGNsYXNzPVwiZ3VpLWNlbGwgZ3VpLXJvdy1jaGVja2JveFwiPlxuXHQ8Z3VpLWNoZWNrYm94IChjaGFuZ2VkKT1cInNlbGVjdENoZWNrYm94KClcIiBbY2hlY2tlZF09XCJzZWxlY3RlZEl0ZW1cIj48L2d1aS1jaGVja2JveD5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicmFkaW9TZWxlY3Rpb25cIlxuXHQgY2xhc3M9XCJndWktY2VsbCBndWktcm93LXJhZGlvXCI+XG5cdDxndWktcmFkaW8tYnV0dG9uIChjaGFuZ2VkKT1cInNlbGVjdFJhZGlvKClcIiBbY2hlY2tlZF09XCJzZWxlY3RlZEl0ZW1cIj48L2d1aS1yYWRpby1idXR0b24+XG48L2Rpdj5cblxuPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnM7IHRyYWNrQnk6IHRyYWNrQnlGbjsgbGV0IGkgPSBpbmRleFwiIFtjZWxsRWRpdG9yTWFuYWdlcl09XCJjZWxsRWRpdGluZ1wiXG5cdCBbY2VsbF09XCJjb2x1bW5cIlxuXHQgW2NvbHVtbkluZGV4XT1cImlcIlxuXHQgW2VkaXRNb2RlXT1cImVkaXRNb2RlXCJcblx0IFtlbnRpdHldPVwiZW50aXR5XCJcblx0IFtyb3dJbmRleF09XCJpbmRleFwiXG5cdCBbc2VhcmNoUGhyYXNlXT1cInNlYXJjaFBocmFzZVwiXG5cdCBbc3R5bGUud2lkdGgucHhdPVwiY29sdW1uLndpZHRoXCJcblx0IGNsYXNzPVwiZ3VpLWNlbGxcIlxuXHQgZ3VpLXN0cnVjdHVyZS1jZWxsPlxuPC9kaXY+XG4iXX0=