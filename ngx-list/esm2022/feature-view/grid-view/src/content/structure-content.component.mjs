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
    elementRef;
    changeDetectorRef;
    state;
    formationPublisher;
    structureEditModeArchive;
    formationWarehouse;
    structureWarehouse;
    verticalFormationWarehouse;
    structureId;
    schemaReadModelRootId;
    searchWarehouse;
    schemaWarehouse;
    source;
    columns;
    // @ts-ignore
    state$ = this.state.select();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureContentComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.GuiState }, { token: i2.FormationPublisher }, { token: i3.StructureEditModeArchive }, { token: i4.FormationWarehouse }, { token: i5.StructureWarehouse }, { token: i6.VerticalFormationWarehouse }, { token: i7.StructureId }, { token: i8.SchemaReadModelRootId }, { token: i9.SearchWarehouse }, { token: i10.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureContentComponent, selector: "div[gui-structure-content]", inputs: { source: "source", columns: "columns" }, providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<div *guiLet=\"state$; let localState\"\n\t class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity, localState.selectionEnabled, localState.checkboxSelection, localState.radioSelection)\"\n\t\t *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"localState.cellEditing\"\n\t\t [checkboxSelection]=\"localState.checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [editMode]=\"localState.editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index, localState.rowHeight)}\"\n\t\t [radioSelection]=\"localState.radioSelection\"\n\t\t [rowClass]=\"localState.schemaRowClass\"\n\t\t [rowStyle]=\"localState.schemaRowStyle\"\n\t\t [searchPhrase]=\"localState.searchPhrase\"\n\t\t [style.height.px]=\"localState.rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "directive", type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i11.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i12.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i13.StructureRowComponent, selector: "div[gui-structure-row]", inputs: ["entity", "columns", "editMode", "cellEditing", "searchPhrase", "index", "rowStyle", "rowClass", "checkboxSelection", "radioSelection"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-content]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<div *guiLet=\"state$; let localState\"\n\t class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity, localState.selectionEnabled, localState.checkboxSelection, localState.radioSelection)\"\n\t\t *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"localState.cellEditing\"\n\t\t [checkboxSelection]=\"localState.checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [editMode]=\"localState.editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index, localState.rowHeight)}\"\n\t\t [radioSelection]=\"localState.radioSelection\"\n\t\t [rowClass]=\"localState.schemaRowClass\"\n\t\t [rowStyle]=\"localState.schemaRowStyle\"\n\t\t [searchPhrase]=\"localState.searchPhrase\"\n\t\t [style.height.px]=\"localState.rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.GuiState }, { type: i2.FormationPublisher }, { type: i3.StructureEditModeArchive }, { type: i4.FormationWarehouse }, { type: i5.StructureWarehouse }, { type: i6.VerticalFormationWarehouse }, { type: i7.StructureId }, { type: i8.SchemaReadModelRootId }, { type: i9.SearchWarehouse }, { type: i10.SchemaWarehouse }]; }, propDecorators: { source: [{
                type: Input
            }], columns: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFRMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFHN0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU12RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWlDM0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFXL0I7SUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBbkJwQixNQUFNLENBQWM7SUFHcEIsT0FBTyxDQUFrQztJQUV6QyxhQUFhO0lBQ0osTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFF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QUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ04sT0FBTyxNQUFNLENBQUM7YUFDZDtRQUNGLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO3dHQTdHVyx5QkFBeUI7NEZBQXpCLHlCQUF5Qix1R0FKMUI7WUFDVixRQUFRO1NBQ1IsaURDcERGLG0vQkF3QkE7OzRGRDhCYSx5QkFBeUI7a0JBVHJDLFNBQVM7K0JBQ0MsNEJBQTRCLG1CQUVyQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLFFBQVE7cUJBQ1I7c2NBS0QsTUFBTTtzQkFETCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL2l0ZW0vaXRlbSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9kb21haW4vcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIHRvUnhKc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9hcGkvc2VhcmNoLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDZWxsRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9kb21haW4vZWRpdC9jZWxsLWVkaXRvci5tYW5hZ2VyJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWNjZXNzb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi5hY2Nlc3Nvci5tb2RlbCc7XG5pbXBvcnQgeyBHdWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvc3RhdGUvZ3VpLnN0YXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50U3RhdGUge1xuXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdHNlbGVjdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0Y2VsbEVkaXRpbmc6IENlbGxFZGl0b3JNYW5hZ2VyO1xuXG5cdHNjaGVtYVJvd0NsYXNzOiBTY2hlbWFSb3dDbGFzcztcblxuXHRzY2hlbWFSb3dTdHlsZTogU2NoZW1hUm93U3R5bGU7XG5cblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW47XG5cblx0cmFkaW9TZWxlY3Rpb246IGJvb2xlYW47XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29udGVudF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8SXRlbT47XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q29tcG9zaXRpb25BY2Nlc3Nvck1vZGVsPjtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJlYWRvbmx5IHN0YXRlJCA9IHRoaXMuc3RhdGUuc2VsZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogR3VpU3RhdGU8U3RydWN0dXJlQ29udGVudENvbXBvbmVudFN0YXRlPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25QdWJsaXNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVdhcmVob3VzZTogU2NoZW1hV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdGF0ZS5zZXRWYWx1ZSh7XG5cdFx0XHRjaGVja2JveFNlbGVjdGlvbjogZmFsc2UsXG5cdFx0XHRyYWRpb1NlbGVjdGlvbjogZmFsc2UsXG5cdFx0XHRzZWFyY2hQaHJhc2U6ICcnXG5cdFx0fSk7XG5cblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ2VkaXRNb2RlJywgdGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUub24oKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzZWxlY3Rpb25FbmFibGVkJywgdGhpcy5mb3JtYXRpb25XYXJlaG91c2Uub25TZWxlY3Rpb25FbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ3Jvd0hlaWdodCcsIHRoaXMudmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnY2VsbEVkaXRpbmcnLCB0aGlzLnN0cnVjdHVyZVdhcmVob3VzZS5vbkVkaXRNYW5hZ2VyKHRoaXMuc3RydWN0dXJlSWQpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ3NjaGVtYVJvd0NsYXNzJywgdGhpcy5zY2hlbWFXYXJlaG91c2Uub25Sb3dDbGFzcyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnc2NoZW1hUm93U3R5bGUnLCB0aGlzLnNjaGVtYVdhcmVob3VzZS5vblJvd1N0eWxlKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdjaGVja2JveFNlbGVjdGlvbicsIHRoaXMuc2VsZWN0Q2hlY2tib3hTZWxlY3Rpb24oKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdyYWRpb1NlbGVjdGlvbicsIHRoaXMuc2VsZWN0UmFkaW9TZWxlY3Rpb24oKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzZWFyY2hQaHJhc2UnLCB0aGlzLnNlbGVjdFNlYXJjaFBocmFzZSgpKTtcblx0fVxuXG5cdHRyYWNrQnlGbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHRyYW5zbGF0ZVkoaW5kZXg6IG51bWJlciwgcm93SGVpZ2h0OiBudW1iZXIpOiBzdHJpbmcge1xuXG5cdFx0Y29uc3QgaGVpZ2h0ID0gaW5kZXggKiByb3dIZWlnaHQ7XG5cblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtoZWlnaHR9cHgpYDtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KFxuXHRcdGVudGl0eTogSXRlbSxcblx0XHRzZWxlY3Rpb25FbmFibGVkOiBib29sZWFuLFxuXHRcdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuLFxuXHRcdHJhZGlvU2VsZWN0aW9uOiBib29sZWFuXG5cdCk6IHZvaWQge1xuXG5cdFx0aWYgKCFzZWxlY3Rpb25FbmFibGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFjaGVja2JveFNlbGVjdGlvbiAmJiAhcmFkaW9TZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uUHVibGlzaGVyLnRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCc7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdENoZWNrYm94U2VsZWN0aW9uKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0XHQgICAub25UeXBlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodHlwZTogUm93U2VsZWN0aW9uVHlwZSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0UmFkaW9TZWxlY3Rpb24oKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vblR5cGUodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKCh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdHlwZSA9PT0gUm93U2VsZWN0aW9uVHlwZS5SQURJTztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RTZWFyY2hQaHJhc2UoKTogSGVybWVzT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLnNlYXJjaFdhcmVob3VzZS5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKSksXG5cdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zZWFyY2hXYXJlaG91c2Uub25IaWdobGlnaHQodGhpcy5zdHJ1Y3R1cmVJZCkpXG5cdFx0XHQpXG5cdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc01hcCgoW3BocmFzZSwgaGlnaGxpZ2h0aW5nXSkgPT4ge1xuXHRcdFx0XHRcdGlmICghaGlnaGxpZ2h0aW5nKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBwaHJhc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG59XG4iLCI8ZGl2ICpndWlMZXQ9XCJzdGF0ZSQ7IGxldCBsb2NhbFN0YXRlXCJcblx0IGNsYXNzPVwiZ3VpLWNvbnRlbnRcIj5cblxuXHQ8ZGl2IChjbGljayk9XCJ0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHksIGxvY2FsU3RhdGUuc2VsZWN0aW9uRW5hYmxlZCwgbG9jYWxTdGF0ZS5jaGVja2JveFNlbGVjdGlvbiwgbG9jYWxTdGF0ZS5yYWRpb1NlbGVjdGlvbilcIlxuXHRcdCAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIHNvdXJjZTsgbGV0IGluZGV4ID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG5cdFx0IFtjZWxsRWRpdGluZ109XCJsb2NhbFN0YXRlLmNlbGxFZGl0aW5nXCJcblx0XHQgW2NoZWNrYm94U2VsZWN0aW9uXT1cImxvY2FsU3RhdGUuY2hlY2tib3hTZWxlY3Rpb25cIlxuXHRcdCBbY29sdW1uc109XCJjb2x1bW5zXCJcblx0XHQgW2VkaXRNb2RlXT1cImxvY2FsU3RhdGUuZWRpdE1vZGVcIlxuXHRcdCBbZW50aXR5XT1cImVudGl0eVwiXG5cdFx0IFtpZF09XCJlbnRpdHkuZ2V0VWlJZCgpXCJcblx0XHQgW2luZGV4XT1cImVudGl0eS5nZXRQb3NpdGlvbigpXCJcblx0XHQgW25nQ2xhc3NdPVwieydldmVuJzogZW50aXR5LmlzRXZlbigpLCAnb2RkJzogZW50aXR5LmlzT2RkKCl9XCJcblx0XHQgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiB0cmFuc2xhdGVZKGluZGV4LCBsb2NhbFN0YXRlLnJvd0hlaWdodCl9XCJcblx0XHQgW3JhZGlvU2VsZWN0aW9uXT1cImxvY2FsU3RhdGUucmFkaW9TZWxlY3Rpb25cIlxuXHRcdCBbcm93Q2xhc3NdPVwibG9jYWxTdGF0ZS5zY2hlbWFSb3dDbGFzc1wiXG5cdFx0IFtyb3dTdHlsZV09XCJsb2NhbFN0YXRlLnNjaGVtYVJvd1N0eWxlXCJcblx0XHQgW3NlYXJjaFBocmFzZV09XCJsb2NhbFN0YXRlLnNlYXJjaFBocmFzZVwiXG5cdFx0IFtzdHlsZS5oZWlnaHQucHhdPVwibG9jYWxTdGF0ZS5yb3dIZWlnaHRcIlxuXHRcdCBjbGFzcz1cImd1aS1yb3dcIlxuXHRcdCBndWktc3RydWN0dXJlLXJvdz5cblx0PC9kaXY+XG5cbjwvZGl2PlxuIl19