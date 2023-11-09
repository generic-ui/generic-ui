import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../feature/common/component/src/smart-component';
import { RowSelectionType } from '../../../../core/structure/formation/src/api/row-selected/row-selection';
import { RowSelectToggleType } from '../../../../core/structure/formation/src/domain/row-select-toggle-type';
import { fromRxJsObservable, hermesMap, toRxJsObservable } from '@generic-ui/hermes';
import { GuiState } from '../../../../feature/gui-angular/state/gui.state';
import * as i0 from "@angular/core";
import * as i1 from "../../../../feature/gui-angular/state/gui.state";
import * as i2 from "../../../../core/structure/formation/src/api/formation.publisher";
import * as i3 from "../edit/structure.edit-mode.archive";
import * as i4 from "../../../../core/structure/formation/src/api/formation.warehouse";
import * as i5 from "../../../../core/structure/structure-core/src/api/structure.warehouse";
import * as i6 from "../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse";
import * as i7 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i8 from "../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i9 from "../../../../core/structure/search/src/api/search.warehouse";
import * as i10 from "../../../../core/schema/src/api/schema.warehouse";
import * as i11 from "@angular/common";
import * as i12 from "../../../../feature/gui-angular/template/let/gui.let.directive";
import * as i13 from "./row/structure-row.component";
export class StructureContentComponent extends SmartComponent {
    constructor(elementRef, changeDetectorRef, state, formationPublisher, structureEditModeArchive, formationWarehouse, structureWarehouse, verticalFormationWarehouse, structureId, schemaReadModelRootId, searchWarehouse, schemaWarehouse) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.state = state;
        this.formationPublisher = formationPublisher;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationWarehouse = formationWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.searchWarehouse = searchWarehouse;
        this.schemaWarehouse = schemaWarehouse;
        this.state$ = this.state.select();
        this.state.setValue({
            checkboxSelection: false,
            radioSelection: false,
            searchPhrase: ''
        });
        this.state.connect('editMode', this.structureEditModeArchive.on());
        this.state.connect('selectionEnabled', this.formationWarehouse.onSelectionEnabled(this.structureId));
        this.state.connect('rowHeight', this.verticalFormationWarehouse.onRowHeight(this.structureId));
        this.state.connect('cellEditing', this.structureWarehouse.onEditManager(this.structureId));
        this.state.connect('schemaRowClass', this.schemaWarehouse.onRowClass(this.schemaReadModelRootId));
        this.state.connect('schemaRowStyle', this.schemaWarehouse.onRowStyle(this.schemaReadModelRootId));
        this.state.connect('checkboxSelection', this.selectCheckboxSelection());
        this.state.connect('radioSelection', this.selectRadioSelection());
        this.state.connect('searchPhrase', this.selectSearchPhrase());
    }
    trackByFn() {
        return 0;
    }
    translateY(index, rowHeight) {
        const height = index * rowHeight;
        return `translateY(${height}px)`;
    }
    toggleSelectedRow(entity, selectionEnabled, checkboxSelection, radioSelection) {
        if (!selectionEnabled) {
            return;
        }
        if (!checkboxSelection && !radioSelection) {
            this.formationPublisher.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE, this.structureId);
        }
    }
    getSelectorName() {
        return 'gui-structure-content';
    }
    selectCheckboxSelection() {
        return this.formationWarehouse
            .onType(this.structureId)
            .pipe(hermesMap((type) => {
            return type === RowSelectionType.CHECKBOX;
        }));
    }
    selectRadioSelection() {
        return this.formationWarehouse
            .onType(this.structureId)
            .pipe(hermesMap((type) => {
            return type === RowSelectionType.RADIO;
        }));
    }
    selectSearchPhrase() {
        return fromRxJsObservable(combineLatest(toRxJsObservable(this.searchWarehouse.onPhrase(this.structureId)), toRxJsObservable(this.searchWarehouse.onHighlight(this.structureId))))
            .pipe(hermesMap(([phrase, highlighting]) => {
            if (!highlighting) {
                return '';
            }
            else {
                return phrase;
            }
        }));
    }
}
StructureContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureContentComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.GuiState }, { token: i2.FormationPublisher }, { token: i3.StructureEditModeArchive }, { token: i4.FormationWarehouse }, { token: i5.StructureWarehouse }, { token: i6.VerticalFormationWarehouse }, { token: i7.StructureId }, { token: i8.SchemaReadModelRootId }, { token: i9.SearchWarehouse }, { token: i10.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureContentComponent, selector: "div[gui-structure-content]", inputs: { source: "source", columns: "columns" }, providers: [
        GuiState
    ], usesInheritance: true, ngImport: i0, template: "<div *guiLet=\"state$; let localState\"\n\t class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity, localState.selectionEnabled, localState.checkboxSelection, localState.radioSelection)\"\n\t\t *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"localState.cellEditing\"\n\t\t [checkboxSelection]=\"localState.checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [editMode]=\"localState.editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index, localState.rowHeight)}\"\n\t\t [radioSelection]=\"localState.radioSelection\"\n\t\t [rowClass]=\"localState.schemaRowClass\"\n\t\t [rowStyle]=\"localState.schemaRowStyle\"\n\t\t [searchPhrase]=\"localState.searchPhrase\"\n\t\t [style.height.px]=\"localState.rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "directive", type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i11.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i12.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i13.StructureRowComponent, selector: "div[gui-structure-row]", inputs: ["entity", "columns", "editMode", "cellEditing", "searchPhrase", "index", "rowStyle", "rowClass", "checkboxSelection", "radioSelection"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-content]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<div *guiLet=\"state$; let localState\"\n\t class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity, localState.selectionEnabled, localState.checkboxSelection, localState.radioSelection)\"\n\t\t *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"localState.cellEditing\"\n\t\t [checkboxSelection]=\"localState.checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [editMode]=\"localState.editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index, localState.rowHeight)}\"\n\t\t [radioSelection]=\"localState.radioSelection\"\n\t\t [rowClass]=\"localState.schemaRowClass\"\n\t\t [rowStyle]=\"localState.schemaRowStyle\"\n\t\t [searchPhrase]=\"localState.searchPhrase\"\n\t\t [style.height.px]=\"localState.rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.GuiState }, { type: i2.FormationPublisher }, { type: i3.StructureEditModeArchive }, { type: i4.FormationWarehouse }, { type: i5.StructureWarehouse }, { type: i6.VerticalFormationWarehouse }, { type: i7.StructureId }, { type: i8.SchemaReadModelRootId }, { type: i9.SearchWarehouse }, { type: i10.SchemaWarehouse }]; }, propDecorators: { source: [{
                type: Input
            }], columns: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFRMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFHN0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU12RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWlDM0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFVNUQsWUFBNkIsVUFBc0IsRUFDL0IsaUJBQW9DLEVBQ3BDLEtBQStDLEVBQy9DLGtCQUFzQyxFQUN0Qyx3QkFBa0QsRUFDbEQsa0JBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QywwQkFBc0QsRUFDdEQsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLGVBQWdDLEVBQ2hD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Q0FDRixDQUFDO0lBQ0osQ0FBQzs7dUhBNUdXLHlCQUF5QjsyR0FBekIseUJBQXlCLHVHQUoxQjtRQUNWLFFBQVE7S0FDUixpRENwREYsbS9CQXdCQTs0RkQ4QmEseUJBQXlCO2tCQVRyQyxTQUFTOytCQUNDLDRCQUE0QixtQkFFckIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVixRQUFRO3FCQUNSO3NjQUtELE1BQU07c0JBREwsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9pdGVtL2l0ZW0nO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NyYy9hcGkvdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvZG9tYWluL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlJztcbmltcG9ydCB7IGZyb21SeEpzT2JzZXJ2YWJsZSwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCB0b1J4SnNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFjY2Vzc29yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vY29tcG9zaXRpb24uYWNjZXNzb3IubW9kZWwnO1xuaW1wb3J0IHsgR3VpU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2d1aS1hbmd1bGFyL3N0YXRlL2d1aS5zdGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RydWN0dXJlQ29udGVudENvbXBvbmVudFN0YXRlIHtcblxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRzZWxlY3Rpb25FbmFibGVkOiBib29sZWFuO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdGNlbGxFZGl0aW5nOiBDZWxsRWRpdG9yTWFuYWdlcjtcblxuXHRzY2hlbWFSb3dDbGFzczogU2NoZW1hUm93Q2xhc3M7XG5cblx0c2NoZW1hUm93U3R5bGU6IFNjaGVtYVJvd1N0eWxlO1xuXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuO1xuXG5cdHJhZGlvU2VsZWN0aW9uOiBib29sZWFuO1xuXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbnRlbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN0YXRlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PEl0ZW0+O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbXBvc2l0aW9uQWNjZXNzb3JNb2RlbD47XG5cblx0cmVhZG9ubHkgc3RhdGUkID0gdGhpcy5zdGF0ZS5zZWxlY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBHdWlTdGF0ZTxTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50U3RhdGU+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvblB1Ymxpc2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hV2FyZWhvdXNlOiBTY2hlbWFXYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0YXRlLnNldFZhbHVlKHtcblx0XHRcdGNoZWNrYm94U2VsZWN0aW9uOiBmYWxzZSxcblx0XHRcdHJhZGlvU2VsZWN0aW9uOiBmYWxzZSxcblx0XHRcdHNlYXJjaFBocmFzZTogJydcblx0XHR9KTtcblxuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnZWRpdE1vZGUnLCB0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZS5vbigpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ3NlbGVjdGlvbkVuYWJsZWQnLCB0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vblNlbGVjdGlvbkVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgncm93SGVpZ2h0JywgdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vblJvd0hlaWdodCh0aGlzLnN0cnVjdHVyZUlkKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdjZWxsRWRpdGluZycsIHRoaXMuc3RydWN0dXJlV2FyZWhvdXNlLm9uRWRpdE1hbmFnZXIodGhpcy5zdHJ1Y3R1cmVJZCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnc2NoZW1hUm93Q2xhc3MnLCB0aGlzLnNjaGVtYVdhcmVob3VzZS5vblJvd0NsYXNzKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzY2hlbWFSb3dTdHlsZScsIHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uUm93U3R5bGUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ2NoZWNrYm94U2VsZWN0aW9uJywgdGhpcy5zZWxlY3RDaGVja2JveFNlbGVjdGlvbigpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ3JhZGlvU2VsZWN0aW9uJywgdGhpcy5zZWxlY3RSYWRpb1NlbGVjdGlvbigpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ3NlYXJjaFBocmFzZScsIHRoaXMuc2VsZWN0U2VhcmNoUGhyYXNlKCkpO1xuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyLCByb3dIZWlnaHQ6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRjb25zdCBoZWlnaHQgPSBpbmRleCAqIHJvd0hlaWdodDtcblxuXHRcdHJldHVybiBgdHJhbnNsYXRlWSgke2hlaWdodH1weClgO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0ZWRSb3coXG5cdFx0ZW50aXR5OiBJdGVtLFxuXHRcdHNlbGVjdGlvbkVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4sXG5cdFx0cmFkaW9TZWxlY3Rpb246IGJvb2xlYW5cblx0KTogdm9pZCB7XG5cblx0XHRpZiAoIXNlbGVjdGlvbkVuYWJsZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWNoZWNrYm94U2VsZWN0aW9uICYmICFyYWRpb1NlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25QdWJsaXNoZXIudG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb250ZW50Jztcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0Q2hlY2tib3hTZWxlY3Rpb24oKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vblR5cGUodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdHlwZSA9PT0gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RSYWRpb1NlbGVjdGlvbigpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdFx0ICAgLm9uVHlwZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLlJBRElPO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdFNlYXJjaFBocmFzZSgpOiBIZXJtZXNPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiBmcm9tUnhKc09ic2VydmFibGUoXG5cdFx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpKSxcblx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLnNlYXJjaFdhcmVob3VzZS5vbkhpZ2hsaWdodCh0aGlzLnN0cnVjdHVyZUlkKSlcblx0XHRcdClcblx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzTWFwKChbcGhyYXNlLCBoaWdobGlnaHRpbmddKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFoaWdobGlnaHRpbmcpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHBocmFzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiIsIjxkaXYgKmd1aUxldD1cInN0YXRlJDsgbGV0IGxvY2FsU3RhdGVcIlxuXHQgY2xhc3M9XCJndWktY29udGVudFwiPlxuXG5cdDxkaXYgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eSwgbG9jYWxTdGF0ZS5zZWxlY3Rpb25FbmFibGVkLCBsb2NhbFN0YXRlLmNoZWNrYm94U2VsZWN0aW9uLCBsb2NhbFN0YXRlLnJhZGlvU2VsZWN0aW9uKVwiXG5cdFx0ICpuZ0Zvcj1cImxldCBlbnRpdHkgb2Ygc291cmNlOyBsZXQgaW5kZXggPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeUZuXCJcblx0XHQgW2NlbGxFZGl0aW5nXT1cImxvY2FsU3RhdGUuY2VsbEVkaXRpbmdcIlxuXHRcdCBbY2hlY2tib3hTZWxlY3Rpb25dPVwibG9jYWxTdGF0ZS5jaGVja2JveFNlbGVjdGlvblwiXG5cdFx0IFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuXHRcdCBbZWRpdE1vZGVdPVwibG9jYWxTdGF0ZS5lZGl0TW9kZVwiXG5cdFx0IFtlbnRpdHldPVwiZW50aXR5XCJcblx0XHQgW2lkXT1cImVudGl0eS5nZXRVaUlkKClcIlxuXHRcdCBbaW5kZXhdPVwiZW50aXR5LmdldFBvc2l0aW9uKClcIlxuXHRcdCBbbmdDbGFzc109XCJ7J2V2ZW4nOiBlbnRpdHkuaXNFdmVuKCksICdvZGQnOiBlbnRpdHkuaXNPZGQoKX1cIlxuXHRcdCBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6IHRyYW5zbGF0ZVkoaW5kZXgsIGxvY2FsU3RhdGUucm93SGVpZ2h0KX1cIlxuXHRcdCBbcmFkaW9TZWxlY3Rpb25dPVwibG9jYWxTdGF0ZS5yYWRpb1NlbGVjdGlvblwiXG5cdFx0IFtyb3dDbGFzc109XCJsb2NhbFN0YXRlLnNjaGVtYVJvd0NsYXNzXCJcblx0XHQgW3Jvd1N0eWxlXT1cImxvY2FsU3RhdGUuc2NoZW1hUm93U3R5bGVcIlxuXHRcdCBbc2VhcmNoUGhyYXNlXT1cImxvY2FsU3RhdGUuc2VhcmNoUGhyYXNlXCJcblx0XHQgW3N0eWxlLmhlaWdodC5weF09XCJsb2NhbFN0YXRlLnJvd0hlaWdodFwiXG5cdFx0IGNsYXNzPVwiZ3VpLXJvd1wiXG5cdFx0IGd1aS1zdHJ1Y3R1cmUtcm93PlxuXHQ8L2Rpdj5cblxuPC9kaXY+XG4iXX0=