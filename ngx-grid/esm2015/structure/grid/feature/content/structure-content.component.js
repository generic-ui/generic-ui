import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { RowSelectionType } from '../../../source/core/api/row-selection';
import { RowSelectToggleType } from '../../../source/core/domain/formation/core/row-select-toggle-type';
import { fromRxJsObservable, toRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../source/core/api/formation/formation.command-invoker";
import * as i2 from "../edit/structure.edit-mode.archive";
import * as i3 from "../../../source/core/api/formation/formation.warehouse";
import * as i4 from "../../core/api/structure.warehouse";
import * as i5 from "../../../vertical-formation/core/api/vertical-formation.warehouse";
import * as i6 from "../../../vertical-formation/core/api/vertical-formation.repository";
import * as i7 from "../../../core/api/structure.id";
import * as i8 from "../../../source/core/api/formation/type/row-selection-type.archive";
import * as i9 from "../../../search/core/api/search.warehouse";
import * as i10 from "../../../../schema/core/api/styling/schema.row-class.archive";
import * as i11 from "../../../../schema/core/api/styling/schema.row-style.archive";
import * as i12 from "@angular/common";
import * as i13 from "./row/structure-row.component";
const _c0 = ["gui-structure-content", ""];
const _c1 = function (a0, a1) { return { "even": a0, "odd": a1 }; };
const _c2 = function (a0) { return { "transform": a0 }; };
function StructureContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function StructureContentComponent_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const entity_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.toggleSelectedRow(entity_r1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entity_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r0.rowHeight, "px");
    i0.ɵɵproperty("cellEditing", ctx_r0.cellEditing)("checkboxSelection", ctx_r0.checkboxSelection)("columns", ctx_r0.columns)("detailsEnabled", ctx_r0.rowDetailOpened === index_r2)("editMode", ctx_r0.editMode)("entity", entity_r1)("id", entity_r1.getUiId())("index", entity_r1.getPosition())("ngClass", i0.ɵɵpureFunction2(15, _c1, entity_r1.isEven(), entity_r1.isOdd()))("ngStyle", i0.ɵɵpureFunction1(18, _c2, ctx_r0.translateY(index_r2)))("rowClass", ctx_r0.schemaRowClass)("rowStyle", ctx_r0.schemaRowStyle)("searchPhrase", ctx_r0.searchPhrase);
} }
export class StructureContentComponent extends SmartComponent {
    constructor(elementRef, changeDetectorRef, formationCommandService, structureEditModeArchive, formationWarehouse, structureWarehouse, structureVerticalFormationWarehouse, verticalFormationRepository, structureId, // REfactor
    rowSelectionTypeArchive, searchWarehouse, schemaRowClassArchive, schemaRowStyleArchive) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationCommandService = formationCommandService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationWarehouse = formationWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.structureVerticalFormationWarehouse = structureVerticalFormationWarehouse;
        this.verticalFormationRepository = verticalFormationRepository;
        this.structureId = structureId;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.searchWarehouse = searchWarehouse;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
        this.editMode = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowDetailOpened = 4;
        this.checkboxSelection = false;
    }
    ngOnInit() {
        this.hermesSubscribe(this.rowSelectionTypeArchive.on(), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
        });
        this.hermesSubscribe(this.structureEditModeArchive.on(), (enabled) => {
            this.editMode = enabled;
        });
        this.hermesSubscribe(this.structureWarehouse.onEditManager(this.structureId), (manager) => {
            this.cellEditing = manager;
        });
        this.hermesSubscribe(this.schemaRowClassArchive.on(), (schemaRowClass) => {
            this.schemaRowClass = schemaRowClass;
        });
        this.hermesSubscribe(this.schemaRowStyleArchive.on(), (schemaRowStyle) => {
            this.schemaRowStyle = schemaRowStyle;
        });
        this.hermesSubscribe(this.structureVerticalFormationWarehouse.onRowHeight(this.structureId), (rowHeight) => {
            this.rowHeight = rowHeight;
        });
        this.hermesSubscribe(fromRxJsObservable(combineLatest(toRxJsObservable(this.searchWarehouse.onPhrase(this.structureId)), toRxJsObservable(this.searchWarehouse.onHighlight(this.structureId)))), (args) => {
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
            this.formationCommandService.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE, this.structureId);
        }
    }
    getSelectorName() {
        return 'gui-structure-content';
    }
}
StructureContentComponent.ɵfac = function StructureContentComponent_Factory(t) { return new (t || StructureContentComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FormationCommandInvoker), i0.ɵɵdirectiveInject(i2.StructureEditModeArchive), i0.ɵɵdirectiveInject(i3.FormationWarehouse), i0.ɵɵdirectiveInject(i4.StructureWarehouse), i0.ɵɵdirectiveInject(i5.VerticalFormationWarehouse), i0.ɵɵdirectiveInject(i6.VerticalFormationRepository), i0.ɵɵdirectiveInject(i7.StructureId), i0.ɵɵdirectiveInject(i8.RowSelectionTypeArchive), i0.ɵɵdirectiveInject(i9.SearchWarehouse), i0.ɵɵdirectiveInject(i10.SchemaRowClassArchive), i0.ɵɵdirectiveInject(i11.SchemaRowStyleArchive)); };
StructureContentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureContentComponent, selectors: [["div", "gui-structure-content", ""]], inputs: { source: "source", columns: "columns" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [[1, "gui-content"], ["class", "gui-row", "gui-structure-row", "", 3, "cellEditing", "checkboxSelection", "columns", "detailsEnabled", "editMode", "entity", "id", "index", "ngClass", "ngStyle", "rowClass", "rowStyle", "searchPhrase", "height", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["gui-structure-row", "", 1, "gui-row", 3, "cellEditing", "checkboxSelection", "columns", "detailsEnabled", "editMode", "entity", "id", "index", "ngClass", "ngStyle", "rowClass", "rowStyle", "searchPhrase", "click"]], template: function StructureContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, StructureContentComponent_div_1_Template, 1, 20, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.source)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i12.NgForOf, i13.StructureRowComponent, i12.NgClass, i12.NgStyle], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureContentComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-content]',
                templateUrl: './structure-content.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FormationCommandInvoker }, { type: i2.StructureEditModeArchive }, { type: i3.FormationWarehouse }, { type: i4.StructureWarehouse }, { type: i5.VerticalFormationWarehouse }, { type: i6.VerticalFormationRepository }, { type: i7.StructureId }, { type: i8.RowSelectionTypeArchive }, { type: i9.SearchWarehouse }, { type: i10.SchemaRowClassArchive }, { type: i11.SchemaRowStyleArchive }]; }, { source: [{
            type: Input
        }], columns: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBWWxGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBS3hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CekUsOEJBZ0JvQjtJQWhCZix1UUFBbUM7SUFpQnhDLGlCQUFNOzs7OztJQUhKLGdEQUE2QjtJQWI3QixnREFBMkIsK0NBQUEsMkJBQUEsdURBQUEsNkJBQUEscUJBQUEsMkJBQUEsa0NBQUEsK0VBQUEscUVBQUEsbUNBQUEsbUNBQUEscUNBQUE7O0FENkI5QixNQUFNLE9BQU8seUJBQTBCLFNBQVEsY0FBYztJQTRCNUQsWUFBNkIsVUFBc0IsRUFDL0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCx3QkFBa0QsRUFDbEQs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LEVBQUUsb0NBQW9DO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7dWVBSUEsTUFBTTtrQkFETCxLQUFLO1lBSU4sT0FBTztrQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZSc7XG5pbXBvcnQgeyBmcm9tUnhKc09ic2VydmFibGUsIHRvUnhKc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9lZGl0L2NlbGwtZWRpdG9yLm1hbmFnZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbnRlbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0ZWRpdE1vZGUgPSBmYWxzZTtcblxuXHRjZWxsRWRpdGluZzogQ2VsbEVkaXRvck1hbmFnZXI7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuXHRoaWdobGlnaHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHBocmFzZTogYm9vbGVhbiA9IHRydWU7XG5cblx0cm93RGV0YWlsT3BlbmVkID0gNDtcblxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNjaGVtYVJvd0NsYXNzOiBTY2hlbWFSb3dDbGFzcztcblxuXHRzY2hlbWFSb3dTdHlsZTogU2NoZW1hUm93U3R5bGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kU2VydmljZTogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgLy8gUkVmYWN0b3Jcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93Q2xhc3NBcmNoaXZlOiBTY2hlbWFSb3dDbGFzc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93U3R5bGVBcmNoaXZlOiBTY2hlbWFSb3dTdHlsZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5jaGVja2JveFNlbGVjdGlvbiA9IHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUub24oKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWRpdE1vZGUgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlV2FyZWhvdXNlLm9uRWRpdE1hbmFnZXIodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQobWFuYWdlcjogQ2VsbEVkaXRvck1hbmFnZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jZWxsRWRpdGluZyA9IG1hbmFnZXI7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFSb3dDbGFzc0FyY2hpdmUub24oKSxcblx0XHRcdChzY2hlbWFSb3dDbGFzczogU2NoZW1hUm93Q2xhc3MpID0+IHtcblx0XHRcdFx0dGhpcy5zY2hlbWFSb3dDbGFzcyA9IHNjaGVtYVJvd0NsYXNzO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hUm93U3R5bGVBcmNoaXZlLm9uKCksXG5cdFx0XHQoc2NoZW1hUm93U3R5bGU6IFNjaGVtYVJvd1N0eWxlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2NoZW1hUm93U3R5bGUgPSBzY2hlbWFSb3dTdHlsZTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uUm93SGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHJvd0hlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdFx0Y29tYmluZUxhdGVzdChcblx0XHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpKSxcblx0XHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uSGlnaGxpZ2h0KHRoaXMuc3RydWN0dXJlSWQpKVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0KGFyZ3M6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBzZWFyY2hQaHJhc2UgPSBhcmdzWzBdLFxuXHRcdFx0XHRcdGhpZ2hsaWdodGluZyA9IGFyZ3NbMV07XG5cblx0XHRcdFx0dGhpcy5oaWdobGlnaHRpbmcgPSBoaWdobGlnaHRpbmc7XG5cdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gc2VhcmNoUGhyYXNlO1xuXG5cdFx0XHRcdGlmICghdGhpcy5oaWdobGlnaHRpbmcpIHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaFBocmFzZSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHRyYWNrQnlGbigpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHRyYW5zbGF0ZVkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRjb25zdCBoZWlnaHQgPSBpbmRleCAqIHRoaXMucm93SGVpZ2h0O1xuXG5cdFx0cmV0dXJuIGB0cmFuc2xhdGVZKCR7aGVpZ2h0fXB4KWA7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UudG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuTk9ORSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb250ZW50Jztcblx0fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZ3VpLWNvbnRlbnRcIj5cblxuXHQ8ZGl2IChjbGljayk9XCJ0b2dnbGVTZWxlY3RlZFJvdyhlbnRpdHkpXCIgKm5nRm9yPVwibGV0IGVudGl0eSBvZiBzb3VyY2U7IGxldCBpbmRleCA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5Rm5cIlxuXHRcdCBbY2VsbEVkaXRpbmddPVwiY2VsbEVkaXRpbmdcIlxuXHRcdCBbY2hlY2tib3hTZWxlY3Rpb25dPVwiY2hlY2tib3hTZWxlY3Rpb25cIlxuXHRcdCBbY29sdW1uc109XCJjb2x1bW5zXCJcblx0XHQgW2RldGFpbHNFbmFibGVkXT1cInJvd0RldGFpbE9wZW5lZCA9PT0gaW5kZXhcIlxuXHRcdCBbZWRpdE1vZGVdPVwiZWRpdE1vZGVcIlxuXHRcdCBbZW50aXR5XT1cImVudGl0eVwiXG5cdFx0IFtpZF09XCJlbnRpdHkuZ2V0VWlJZCgpXCJcblx0XHQgW2luZGV4XT1cImVudGl0eS5nZXRQb3NpdGlvbigpXCJcblx0XHQgW25nQ2xhc3NdPVwieydldmVuJzogZW50aXR5LmlzRXZlbigpLCAnb2RkJzogZW50aXR5LmlzT2RkKCl9XCJcblx0XHQgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiB0cmFuc2xhdGVZKGluZGV4KX1cIlxuXHRcdCBbcm93Q2xhc3NdPVwic2NoZW1hUm93Q2xhc3NcIlxuXHRcdCBbcm93U3R5bGVdPVwic2NoZW1hUm93U3R5bGVcIlxuXHRcdCBbc2VhcmNoUGhyYXNlXT1cInNlYXJjaFBocmFzZVwiXG5cdFx0IFtzdHlsZS5oZWlnaHQucHhdPVwicm93SGVpZ2h0XCJcblx0XHQgY2xhc3M9XCJndWktcm93XCJcblx0XHQgZ3VpLXN0cnVjdHVyZS1yb3c+XG5cdDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==