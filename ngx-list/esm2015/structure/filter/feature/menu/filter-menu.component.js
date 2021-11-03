import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../../../composition/core/api/composition.id";
import * as i3 from "../../../field/core/api/field.warehouse";
import * as i4 from "../../core/api/filter.warehouse";
import * as i5 from "../../core/api/filter.command-invoker";
import * as i6 from "../../../../composition/core/api/composition.warehouse";
import * as i7 from "../active-filters/active-filter-list.component";
import * as i8 from "./field-selector/field-selector.component";
import * as i9 from "@angular/common";
import * as i10 from "./filter-selector/filter-type-selector.component";
import * as i11 from "@generic-ui/fabric";
import * as i12 from "./value/filter-value.component";
const _c0 = ["gui-filter-menu", ""];
function FilterMenuComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.selectedColumn.getFieldId(), " ");
} }
function FilterMenuComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedFilterTypeId.toString(), " ");
} }
function FilterMenuComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("valueChanged", function FilterMenuComponent_div_9_Template_div_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onValueChanged($event); });
    i0.ɵɵelementEnd();
} }
export class FilterMenuComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, fieldWarehouse, filterWarehouse, filterCommandDispatcher, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.fieldWarehouse = fieldWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
        this.compositionWarehouse = compositionWarehouse;
        this.columns = [];
        this.fields = [];
        this.activeFilters = [];
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.hermesSubscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFilters = activeFilters;
        });
        this.hermesSubscribe(this.filterWarehouse.onFilterTypes(this.structureId), (filterTypeMap) => {
            this.filterTypeMap = filterTypeMap;
        });
        this.hermesSubscribe(this.fieldWarehouse.onFields(this.structureId), (fieldReadModels) => {
            this.fields = fieldReadModels;
        });
        this.hermesSubscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.columns = columns;
        });
    }
    onColumnSelect(selectedColumn) {
        this.selectedColumn = selectedColumn;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedColumn.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    onFieldSelect(field) {
        this.selectedField = field;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.changeDetectorRef.detectChanges();
    }
    removeAllFilters() {
        this.filterCommandDispatcher.removeAllFilters(this.structureId);
    }
    addFilter() {
        const fieldId = this.selectedField.getFieldId(), filterTypeId = this.selectedFilterTypeId, value = this.selectedValue;
        this.filterCommandDispatcher.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    onValueChanged(value) {
        this.selectedValue = value;
    }
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.changeDetectorRef.detectChanges();
    }
    getSelectorName() {
        return 'gui-filter-menu';
    }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) { return new (t || FilterMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.CompositionId), i0.ɵɵdirectiveInject(i3.FieldWarehouse), i0.ɵɵdirectiveInject(i4.FilterWarehouse), i0.ɵɵdirectiveInject(i5.FilterCommandInvoker), i0.ɵɵdirectiveInject(i6.CompositionWarehouse)); };
FilterMenuComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterMenuComponent, selectors: [["div", "gui-filter-menu", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 16, vars: 8, consts: [["gui-active-filter-list", ""], ["gui-field-selector", "", 3, "fields", "fieldSelected"], [4, "ngIf"], ["gui-filter-type-selector", "", 3, "filterTypes", "filterTypeSelected"], ["gui-filter-value", "", 3, "valueChanged", 4, "ngIf"], ["gui-button", "", 3, "disabled", "primary", "click"], ["gui-button", "", 3, "secondary", "click"], ["gui-filter-value", "", 3, "valueChanged"]], template: function FilterMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "div", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵlistener("fieldSelected", function FilterMenuComponent_Template_div_fieldSelected_3_listener($event) { return ctx.onFieldSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FilterMenuComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵlistener("filterTypeSelected", function FilterMenuComponent_Template_div_filterTypeSelected_6_listener($event) { return ctx.onFilterTypeSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, FilterMenuComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div");
        i0.ɵɵtemplate(9, FilterMenuComponent_div_9_Template, 1, 0, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div");
        i0.ɵɵelementStart(11, "button", 5);
        i0.ɵɵlistener("click", function FilterMenuComponent_Template_button_click_11_listener() { return ctx.addFilter(); });
        i0.ɵɵtext(12, " Filter ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵelementStart(14, "button", 6);
        i0.ɵɵlistener("click", function FilterMenuComponent_Template_button_click_14_listener() { return ctx.removeAllFilters(); });
        i0.ɵɵtext(15, " Clear filters ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("fields", ctx.fields);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedColumn);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("filterTypes", ctx.filterTypes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedFilterTypeId);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.selectedFilterTypeId);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.selectedFilterTypeId)("primary", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("secondary", true);
    } }, directives: [i7.ActiveFilterListComponent, i8.FieldSelectorComponent, i9.NgIf, i10.FilterTypeSelectorComponent, i11.FabricButtonComponent, i12.FilterValueComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterMenuComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-filter-menu]',
                templateUrl: './filter-menu.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.FieldWarehouse }, { type: i4.FilterWarehouse }, { type: i5.FilterCommandInvoker }, { type: i6.CompositionWarehouse }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFzQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNVakYsNkJBQXFDO0lBQ3BDLFlBQ0Q7SUFBQSwwQkFBZTs7O0lBRGQsZUFDRDtJQURDLG1FQUNEOzs7SUFPQSw2QkFBMkM7SUFDMUMsWUFDRDtJQUFBLDBCQUFlOzs7SUFEZCxlQUNEO0lBREMsdUVBQ0Q7Ozs7SUFLQSw4QkFBMkY7SUFBdEYsa05BQXVDO0lBQStDLGlCQUFNOztBRExsRyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYztJQW9CdEQsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQTZDLEVBQzdDLG9CQUEwQztRQUM3RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFSVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFB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QkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci1tZW51XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItbWVudS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRDb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdHNlbGVjdGVkRmllbGQ6IEZpZWxkUmVhZE1vZGVsO1xuXG5cdGZpZWxkczogQXJyYXk8RmllbGRSZWFkTW9kZWw+ID0gW107XG5cblx0ZmlsdGVyVHlwZU1hcDogRmlsdGVyVHlwZU1hcDtcblxuXHRmaWx0ZXJUeXBlczogQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD47XG5cblx0c2VsZWN0ZWRGaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZDtcblxuXHRzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XG5cblx0YWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkV2FyZWhvdXNlOiBGaWVsZFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcjogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uQWN0aXZlRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZUZpbHRlcnM7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25GaWx0ZXJUeXBlcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlTWFwKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyVHlwZU1hcCA9IGZpbHRlclR5cGVNYXA7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWVsZFdhcmVob3VzZS5vbkZpZWxkcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChmaWVsZFJlYWRNb2RlbHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmZpZWxkcyA9IGZpZWxkUmVhZE1vZGVscztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uSGVhZGVyQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRvbkNvbHVtblNlbGVjdChzZWxlY3RlZENvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBzZWxlY3RlZENvbHVtbjtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpZWxkU2VsZWN0KGZpZWxkOiBGaWVsZFJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IGZpZWxkO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpKTtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0b25GaWx0ZXJUeXBlU2VsZWN0KGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gZmlsdGVyVHlwZUlkO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRyZW1vdmVBbGxGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIucmVtb3ZlQWxsRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGFkZEZpbHRlcigpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSB0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQgPSB0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkLFxuXHRcdFx0dmFsdWU6IGFueSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcblxuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuYWRkKGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdFx0dGhpcy5jbGVhckFkZEZpbHRlckZvcm0oKTtcblx0fVxuXG5cdG9uVmFsdWVDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGNsZWFyQWRkRmlsdGVyRm9ybSgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUnO1xuXHR9XG59XG4iLCI8ZGl2PlxuXHQ8ZGl2IGd1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+PC9kaXY+XG48L2Rpdj5cblxuPCEtLVx0XHQ8ZGl2Pi0tPjwhLS1cdFx0XHQ8ZGl2IGd1aS1jb2x1bW4tc2VsZWN0b3ItLT48IS0tXHRcdFx0XHRcdFtjb2x1bW5zXT1cImNvbHVtbnNcIi0tPjwhLS1cdFx0XHRcdFx0KGNvbHVtblNlbGVjdGVkKVxuPVwib25Db2x1bW5TZWxlY3QoJGV2ZW50KVwiPi0tPjwhLS1cdFx0XHQ8L2Rpdj4tLT5cblxuPCEtLVx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZENvbHVtblwiPi0tPjwhLS1cdFx0XHRcdHt7c2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpfX0tLT48IS0tXHRcdFx0PC9uZy1jb250YWluZXI+LS0+PCEtLVx0XHQ8L2Rpdj4tLT5cblxuPGRpdj5cblx0PGRpdiAoZmllbGRTZWxlY3RlZCk9XCJvbkZpZWxkU2VsZWN0KCRldmVudClcIlxuXHRcdCBbZmllbGRzXT1cImZpZWxkc1wiIGd1aS1maWVsZC1zZWxlY3Rvcj48L2Rpdj5cblxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRDb2x1bW5cIj5cblx0XHR7e3NlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKX19XG5cdDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXY+XG5cdDxkaXYgKGZpbHRlclR5cGVTZWxlY3RlZCk9XCJvbkZpbHRlclR5cGVTZWxlY3QoJGV2ZW50KVwiXG5cdFx0IFtmaWx0ZXJUeXBlc109XCJmaWx0ZXJUeXBlc1wiIGd1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcj48L2Rpdj5cblxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIj5cblx0XHR7e3NlbGVjdGVkRmlsdGVyVHlwZUlkLnRvU3RyaW5nKCl9fVxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2PlxuXG5cdDxkaXYgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCIgKm5nSWY9XCJzZWxlY3RlZEZpbHRlclR5cGVJZFwiIGd1aS1maWx0ZXItdmFsdWU+PC9kaXY+XG5cbjwvZGl2PlxuXG48ZGl2PlxuXHQ8YnV0dG9uIChjbGljayk9XCJhZGRGaWx0ZXIoKVwiXG5cdFx0XHRbZGlzYWJsZWRdPVwiIXNlbGVjdGVkRmlsdGVyVHlwZUlkXCJcblx0XHRcdFtwcmltYXJ5XT1cInRydWVcIiBndWktYnV0dG9uPlxuXHRcdEZpbHRlclxuXHQ8L2J1dHRvbj5cbjwvZGl2PlxuXG48ZGl2PlxuXHQ8YnV0dG9uIChjbGljayk9XCJyZW1vdmVBbGxGaWx0ZXJzKClcIlxuXHRcdFx0W3NlY29uZGFyeV09XCJ0cnVlXCIgZ3VpLWJ1dHRvbj5cblx0XHRDbGVhciBmaWx0ZXJzXG5cdDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=