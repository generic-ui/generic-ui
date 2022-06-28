import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../feature/common/cdk/component/smart-component';
import { RowSelectionType } from '../../../core/structure/formation/api/row-selected/row-selection';
import { RowSelectToggleType } from '../../../core/structure/formation/domain/row-select-toggle-type';
import { fromRxJsObservable, toRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/structure/formation/api/formation.publisher";
import * as i2 from "../edit/structure.edit-mode.archive";
import * as i3 from "../../../core/structure/formation/api/formation.warehouse";
import * as i4 from "../../../core/structure/structure-core/api/structure.warehouse";
import * as i5 from "../../../core/structure/vertical-formation/api/vertical-formation.warehouse";
import * as i6 from "../../../core/structure/structure-core/api/global/structure.id";
import * as i7 from "../../../core/schema/api/global/schema.read-model-root-id";
import * as i8 from "../../../core/structure/formation/api/type/row-selection-type.archive";
import * as i9 from "../../../core/structure/search/api/search.warehouse";
import * as i10 from "../../../core/schema/api/schema.warehouse";
import * as i11 from "@angular/common";
import * as i12 from "./row/structure-row.component";
export class StructureContentComponent extends SmartComponent {
    constructor(elementRef, changeDetectorRef, formationCommandInvoker, structureEditModeArchive, formationWarehouse, structureWarehouse, verticalFormationWarehouse, structureId, // REfactor
    schemaReadModelRootId, // REfactor
    rowSelectionTypeArchive, searchWarehouse, schemaWarehouse) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandInvoker = formationCommandInvoker;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationWarehouse = formationWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.searchWarehouse = searchWarehouse;
        this.schemaWarehouse = schemaWarehouse;
        this.editMode = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowDetailOpened = 4;
        this.checkboxSelection = false;
    }
    ngOnInit() {
        this.subscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.subscribe(this.structureEditModeArchive.on(), (enabled) => {
            this.editMode = enabled;
        });
        this.subscribe(this.structureWarehouse.onEditManager(this.structureId), (manager) => {
            this.cellEditing = manager;
        });
        this.subscribe(this.schemaWarehouse.onRowClass(this.schemaReadModelRootId), (schemaRowClass) => {
            this.schemaRowClass = schemaRowClass;
        });
        this.subscribe(this.schemaWarehouse.onRowStyle(this.schemaReadModelRootId), (schemaRowStyle) => {
            this.schemaRowStyle = schemaRowStyle;
        });
        this.subscribe(this.verticalFormationWarehouse.onRowHeight(this.structureId), (rowHeight) => {
            this.rowHeight = rowHeight;
        });
        this.subscribe(fromRxJsObservable(combineLatest(toRxJsObservable(this.searchWarehouse.onPhrase(this.structureId)), toRxJsObservable(this.searchWarehouse.onHighlight(this.structureId)))), (args) => {
            const searchPhrase = args[0], highlighting = args[1];
            this.highlighting = highlighting;
            this.searchPhrase = searchPhrase;
            if (!this.highlighting) {
                this.searchPhrase = '';
            }
        });
    }
    trackByFn() {
        return 0;
    }
    translateY(index) {
        const height = index * this.rowHeight;
        return `translateY(${height}px)`;
    }
    toggleSelectedRow(entity) {
        if (!this.checkboxSelection) {
            this.formationCommandInvoker.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE, this.structureId);
        }
    }
    getSelectorName() {
        return 'gui-structure-content';
    }
}
StructureContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContentComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.FormationPublisher }, { token: i2.StructureEditModeArchive }, { token: i3.FormationWarehouse }, { token: i4.StructureWarehouse }, { token: i5.VerticalFormationWarehouse }, { token: i6.StructureId }, { token: i7.SchemaReadModelRootId }, { token: i8.RowSelectionTypeArchive }, { token: i9.SearchWarehouse }, { token: i10.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureContentComponent, selector: "div[gui-structure-content]", inputs: { source: "source", columns: "columns" }, usesInheritance: true, ngImport: i0, template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "directive", type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i11.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i12.StructureRowComponent, selector: "div[gui-structure-row]", inputs: ["entity", "columns", "editMode", "cellEditing", "searchPhrase", "index", "rowStyle", "rowClass", "detailsEnabled", "checkboxSelection"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-content]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FormationPublisher }, { type: i2.StructureEditModeArchive }, { type: i3.FormationWarehouse }, { type: i4.StructureWarehouse }, { type: i5.VerticalFormationWarehouse }, { type: i6.StructureId }, { type: i7.SchemaReadModelRootId }, { type: i8.RowSelectionTypeArchive }, { type: i9.SearchWarehouse }, { type: i10.SchemaWarehouse }]; }, propDecorators: { source: [{
                type: Input
            }], columns: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBV3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBR3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWExRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsY0FBYztJQTRCNUQsWUFBNkIsVUFBc0IsRUFDL0IsaUJBQW9DLEVBQ3BDLHVCQUEyQyxFQUMzQyx3QkFBa0QsRUFDbEQsa0JBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QywwQkFBc0QsRUFDdEQsV0FBd0IsRUFBRSxXQUFXO0lBQ3JDLHFCQUE0QyxFQUFFLFdBQVc7SUFDekQsdUJBQWdELEVBQ2hELGVBQWdDLEVBQ2hDLGVBQWdDO1FBQ25ELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FB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QyxDQUFDO1lBRXhCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzthQUN2QjtRQUNGLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUV2QixNQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUV0QyxPQUFPLGNBQWMsTUFBTSxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQWtCO1FBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNHO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOztzSEFqSVcseUJBQXlCOzBHQUF6Qix5QkFBeUIsMklDL0J0Qyw2d0JBc0JBOzJGRFNhLHlCQUF5QjtrQkFOckMsU0FBUzsrQkFDQyw0QkFBNEIsbUJBRXJCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7cWRBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vY29yZS1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9kb21haW4vaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vZG9tYWluL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3MgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZSc7XG5pbXBvcnQgeyBmcm9tUnhKc09ic2VydmFibGUsIHRvUnhKc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IENlbGxFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbnRlbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0ZWRpdE1vZGUgPSBmYWxzZTtcblxuXHRjZWxsRWRpdGluZzogQ2VsbEVkaXRvck1hbmFnZXI7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuXHRoaWdobGlnaHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHBocmFzZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cm93RGV0YWlsT3BlbmVkID0gNDtcblxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNjaGVtYVJvd0NsYXNzOiBTY2hlbWFSb3dDbGFzcztcblxuXHRzY2hlbWFSb3dTdHlsZTogU2NoZW1hUm93U3R5bGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kSW52b2tlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIC8vIFJFZmFjdG9yXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIC8vIFJFZmFjdG9yXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVdhcmVob3VzZTogU2NoZW1hV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMucm93U2VsZWN0aW9uVHlwZUFyY2hpdmUub24oKSxcblx0XHRcdCh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hTZWxlY3Rpb24gPSB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLm9uKCksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRNb2RlID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVdhcmVob3VzZS5vbkVkaXRNYW5hZ2VyKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KG1hbmFnZXI6IENlbGxFZGl0b3JNYW5hZ2VyKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2VsbEVkaXRpbmcgPSBtYW5hZ2VyO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uUm93Q2xhc3ModGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpLFxuXHRcdFx0KHNjaGVtYVJvd0NsYXNzOiBTY2hlbWFSb3dDbGFzcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNjaGVtYVJvd0NsYXNzID0gc2NoZW1hUm93Q2xhc3M7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Uub25Sb3dTdHlsZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQoc2NoZW1hUm93U3R5bGU6IFNjaGVtYVJvd1N0eWxlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2NoZW1hUm93U3R5bGUgPSBzY2hlbWFSb3dTdHlsZTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpKSxcblx0XHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uSGlnaGxpZ2h0KHRoaXMuc3RydWN0dXJlSWQpKVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0KGFyZ3M6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBzZWFyY2hQaHJhc2UgPSBhcmdzWzBdLFxuXHRcdFx0XHRcdGhpZ2hsaWdodGluZyA9IGFyZ3NbMV07XG5cblx0XHRcdFx0dGhpcy5oaWdobGlnaHRpbmcgPSBoaWdobGlnaHRpbmc7XG5cdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlO1xuXG5cdFx0XHRcdGlmICghdGhpcy5oaWdobGlnaHRpbmcpIHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaFBocmFzZSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHRyYWNrQnlGbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHRyYW5zbGF0ZVkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRjb25zdCBoZWlnaHQgPSBpbmRleCAqIHRoaXMucm93SGVpZ2h0O1xuXG5cdFx0cmV0dXJuIGB0cmFuc2xhdGVZKCR7aGVpZ2h0fXB4KWA7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5jaGVja2JveFNlbGVjdGlvbikge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlci50b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHkuZ2V0SWQoKSwgUm93U2VsZWN0VG9nZ2xlVHlwZS5OT05FLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbnRlbnQnO1xuXHR9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJndWktY29udGVudFwiPlxuXG5cdDxkaXYgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eSlcIiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIHNvdXJjZTsgbGV0IGluZGV4ID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG5cdFx0IFtjZWxsRWRpdGluZ109XCJjZWxsRWRpdGluZ1wiXG5cdFx0IFtjaGVja2JveFNlbGVjdGlvbl09XCJjaGVja2JveFNlbGVjdGlvblwiXG5cdFx0IFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuXHRcdCBbZGV0YWlsc0VuYWJsZWRdPVwicm93RGV0YWlsT3BlbmVkID09PSBpbmRleFwiXG5cdFx0IFtlZGl0TW9kZV09XCJlZGl0TW9kZVwiXG5cdFx0IFtlbnRpdHldPVwiZW50aXR5XCJcblx0XHQgW2lkXT1cImVudGl0eS5nZXRVaUlkKClcIlxuXHRcdCBbaW5kZXhdPVwiZW50aXR5LmdldFBvc2l0aW9uKClcIlxuXHRcdCBbbmdDbGFzc109XCJ7J2V2ZW4nOiBlbnRpdHkuaXNFdmVuKCksICdvZGQnOiBlbnRpdHkuaXNPZGQoKX1cIlxuXHRcdCBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6IHRyYW5zbGF0ZVkoaW5kZXgpfVwiXG5cdFx0IFtyb3dDbGFzc109XCJzY2hlbWFSb3dDbGFzc1wiXG5cdFx0IFtyb3dTdHlsZV09XCJzY2hlbWFSb3dTdHlsZVwiXG5cdFx0IFtzZWFyY2hQaHJhc2VdPVwic2VhcmNoUGhyYXNlXCJcblx0XHQgW3N0eWxlLmhlaWdodC5weF09XCJyb3dIZWlnaHRcIlxuXHRcdCBjbGFzcz1cImd1aS1yb3dcIlxuXHRcdCBndWktc3RydWN0dXJlLXJvdz5cblx0PC9kaXY+XG5cbjwvZGl2PlxuIl19