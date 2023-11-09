import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/composition/src/api/global/composition.id";
import * as i3 from "../../../../../core/structure/field/src/api/field.warehouse";
import * as i4 from "../../../../../core/structure/filter/src/api/filter.warehouse";
import * as i5 from "../../../../../core/structure/filter/src/api/filter.publisher";
import * as i6 from "@angular/common";
import * as i7 from "@generic-ui/fabric";
import * as i8 from "./filter-selector/filter-type-selector.component";
import * as i9 from "./value/filter-value.component";
import * as i10 from "./field-selector/field-selector.component";
import * as i11 from "./active-filters/filter-menu-active-filters.component";
import * as i12 from "../../../../gui-angular/template/push/gui.push.pipe";
export class FilterMenuComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, fieldWarehouse, filterWarehouse, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.fieldWarehouse = fieldWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.fields$ = this.fieldWarehouse.onFields(this.structureId);
        this.activeFilters$ = this.filterWarehouse.onActiveFilters(this.structureId);
        this.addClassToHost('gui-block');
    }
    onFieldSelect(field) {
        this.selectedField = field;
        const filterTypeMapOpt = this.filterWarehouse.findFilterTypes(this.structureId);
        filterTypeMapOpt.ifPresent(filterTypeMap => {
            this.filterTypes = filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
            this.reRender();
        });
    }
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.reRender();
    }
    removeAllFilters() {
        this.filterCommandInvoker.removeAll(this.structureId);
    }
    onValueChanged(value) {
        this.selectedValue = value;
    }
    addFilter() {
        const fieldId = this.selectedField.getFieldId(), filterTypeId = this.selectedFilterTypeId, value = this.selectedValue;
        this.filterCommandInvoker.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    onRemovedFilter(filterId) {
        event.preventDefault();
        this.filterCommandInvoker.remove(filterId, this.structureId);
    }
    removeFilter() {
    }
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.reRender();
    }
    getSelectorName() {
        return 'gui-filter-menu';
    }
}
FilterMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.FieldWarehouse }, { token: i4.FilterWarehouse }, { token: i5.FilterPublisher }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FilterMenuComponent, selector: "div[gui-filter-menu]", usesInheritance: true, ngImport: i0, template: "<!--<div>-->\n<!--\t<div gui-active-filter-list></div>-->\n<!--</div>-->\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<!--<div>-->\n<!--\t<div (fieldSelected)=\"onFieldSelect($event)\"-->\n<!--\t\t [fields]=\"fields\" gui-field-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedColumn\">-->\n<!--\t\t{{selectedColumn.getFieldId()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n<!--\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"-->\n<!--\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedFilterTypeId\">-->\n<!--\t\t{{selectedFilterTypeId.toString()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n\n<!--\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>-->\n\n<!--</div>-->\n\n<h1>Filter menu</h1>\n\n\n<div (removedFilter)=\"onRemovedFilter($event)\"\n\t [activeFilters]=\"activeFilters$ | guiPush\"\n\t gui-filter-menu-active-filters>\n</div>\n\n<div class=\"gui-flex gui-flex-row gui-pb-12\">\n\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields$ | guiPush\"\n\t\t gui-field-selector>\n\t</div>\n\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\"\n\t\t gui-filter-type-selector>\n\t</div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\"\n\t\t *ngIf=\"selectedFilterTypeId\"\n\t\t gui-filter-value>\n\t</div>\n\n\t<button (click)=\"addFilter()\">Filter</button>\n\t<button (click)=\"removeFilter()\">Remove</button>\n\n</div>\n\n<br/>\n<br/>\n<br/>\n\n<button\n\t[primary]=\"true\" gui-button>\n\tAdd filter\n</button>\n\n<br/>\n<br/>\n<br/>\n\n<div class=\"gui-flex gui-flex-row gui-justify-between gui-pt-12\">\n\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[outline]=\"false\"\n\t\t\tgui-button>\n\t\tClear filters\n\t</button>\n\n\t<!--\t<div>-->\n\t<!--\t\t<button (click)=\"close()\"-->\n\t<!--\t\t\t\t[outline]=\"false\" gui-button>-->\n\t<!--\t\t\tCancel-->\n\t<!--\t\t</button>-->\n\t<!--\t</div>-->\n</div>\n\n", dependencies: [{ kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i8.FilterTypeSelectorComponent, selector: "div[gui-filter-type-selector][filterTypes]", inputs: ["filterTypes"], outputs: ["filterTypeSelected"] }, { kind: "component", type: i9.FilterValueComponent, selector: "div[gui-filter-value]", outputs: ["valueChanged"] }, { kind: "component", type: i10.FieldSelectorComponent, selector: "div[gui-field-selector][fields]", inputs: ["fields"], outputs: ["fieldSelected"] }, { kind: "component", type: i11.FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: ["activeFilters"], outputs: ["removedFilter"] }, { kind: "pipe", type: i12.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-menu]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!--<div>-->\n<!--\t<div gui-active-filter-list></div>-->\n<!--</div>-->\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<!--<div>-->\n<!--\t<div (fieldSelected)=\"onFieldSelect($event)\"-->\n<!--\t\t [fields]=\"fields\" gui-field-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedColumn\">-->\n<!--\t\t{{selectedColumn.getFieldId()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n<!--\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"-->\n<!--\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedFilterTypeId\">-->\n<!--\t\t{{selectedFilterTypeId.toString()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n\n<!--\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>-->\n\n<!--</div>-->\n\n<h1>Filter menu</h1>\n\n\n<div (removedFilter)=\"onRemovedFilter($event)\"\n\t [activeFilters]=\"activeFilters$ | guiPush\"\n\t gui-filter-menu-active-filters>\n</div>\n\n<div class=\"gui-flex gui-flex-row gui-pb-12\">\n\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields$ | guiPush\"\n\t\t gui-field-selector>\n\t</div>\n\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\"\n\t\t gui-filter-type-selector>\n\t</div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\"\n\t\t *ngIf=\"selectedFilterTypeId\"\n\t\t gui-filter-value>\n\t</div>\n\n\t<button (click)=\"addFilter()\">Filter</button>\n\t<button (click)=\"removeFilter()\">Remove</button>\n\n</div>\n\n<br/>\n<br/>\n<br/>\n\n<button\n\t[primary]=\"true\" gui-button>\n\tAdd filter\n</button>\n\n<br/>\n<br/>\n<br/>\n\n<div class=\"gui-flex gui-flex-row gui-justify-between gui-pt-12\">\n\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[outline]=\"false\"\n\t\t\tgui-button>\n\t\tClear filters\n\t</button>\n\n\t<!--\t<div>-->\n\t<!--\t\t<button (click)=\"close()\"-->\n\t<!--\t\t\t\t[outline]=\"false\" gui-button>-->\n\t<!--\t\t\tCancel-->\n\t<!--\t\t</button>-->\n\t<!--\t</div>-->\n</div>\n\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.FieldWarehouse }, { type: i4.FilterWarehouse }, { type: i5.FilterPublisher }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXNCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUF1QmxGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxjQUFjO0lBZ0J0RCxZQUFZLGlCQUFvQyxFQUM3QyxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLG9CQUFxQztRQUN4RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFMbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWlCO1FBVmhELFlBQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekQsbUJBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFVaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWlCO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhGLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRWpGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxZQUEwQjtRQUU1QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxDQUFDO1FBRXpDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTO1FBRVIsTUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFDdkQsWUFBWSxHQUFpQixJQUFJLENBQUMsb0JBQW9CLEVBQ3RELEtBQUssR0FBUSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRWpDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBa0I7UUFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsWUFBWTtJQUNaLENBQUM7SUFFRCxrQkFBa0I7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOztpSEFuRlcsbUJBQW1CO3FHQUFuQixtQkFBbUIsbUZDeEJoQyx5eUVBNEZBOzRGRHBFYSxtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0Msc0JBQXNCLG1CQUVmLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvc3JjL2FwaS9tb2RlbC9maWVsZC5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlclR5cGVDb2xsZWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS90eXBlL2ZpbHRlci10eXBlLWNvbGxlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvdHlwZS9maWx0ZXItdHlwZS5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpbHRlclB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2lkL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblRlbXBsYXRlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zcmMvY29sdW1uL2NvbXBvc2l0aW9uLnRlbXBsYXRlLm1vZGVsJztcbmltcG9ydCB7IENvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zcmMvY29sdW1uL2NvbXBvc2l0aW9uLnRlbXBsYXRlLXdhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItbWVudV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHNlbGVjdGVkQ29sdW1uOiBDb21wb3NpdGlvblRlbXBsYXRlTW9kZWw7XG5cblx0c2VsZWN0ZWRGaWVsZDogRmllbGRNb2RlbDtcblxuXHRmaWx0ZXJUeXBlczogQXJyYXk8RmlsdGVyVHlwZU1vZGVsPjtcblxuXHRzZWxlY3RlZEZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkO1xuXG5cdHNlbGVjdGVkVmFsdWU6IHN0cmluZztcblxuXHRyZWFkb25seSBmaWVsZHMkID0gdGhpcy5maWVsZFdhcmVob3VzZS5vbkZpZWxkcyh0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRyZWFkb25seSBhY3RpdmVGaWx0ZXJzJCA9IHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uQWN0aXZlRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmRJbnZva2VyOiBGaWx0ZXJQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRvbkZpZWxkU2VsZWN0KGZpZWxkOiBGaWVsZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gZmllbGQ7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlTWFwT3B0ID0gdGhpcy5maWx0ZXJXYXJlaG91c2UuZmluZEZpbHRlclR5cGVzKHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdFx0ZmlsdGVyVHlwZU1hcE9wdC5pZlByZXNlbnQoZmlsdGVyVHlwZU1hcCA9PiB7XG5cdFx0XHR0aGlzLmZpbHRlclR5cGVzID0gZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpKTtcblxuXHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdH0pO1xuXHR9XG5cblx0b25GaWx0ZXJUeXBlU2VsZWN0KGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gZmlsdGVyVHlwZUlkO1xuXG5cdFx0dGhpcy5yZVJlbmRlcigpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnJlbW92ZUFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uVmFsdWVDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGFkZEZpbHRlcigpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSB0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQgPSB0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkLFxuXHRcdFx0dmFsdWU6IGFueSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcblxuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIuYWRkKGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdFx0dGhpcy5jbGVhckFkZEZpbHRlckZvcm0oKTtcblx0fVxuXG5cdG9uUmVtb3ZlZEZpbHRlcihmaWx0ZXJJZDogRmlsdGVySWQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIucmVtb3ZlKGZpbHRlcklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHJlbW92ZUZpbHRlcigpOiB2b2lkIHtcblx0fVxuXG5cdGNsZWFyQWRkRmlsdGVyRm9ybSgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XG5cdFx0dGhpcy5yZVJlbmRlcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci1tZW51Jztcblx0fVxufVxuIiwiPCEtLTxkaXY+LS0+XG48IS0tXHQ8ZGl2IGd1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+PC9kaXY+LS0+XG48IS0tPC9kaXY+LS0+XG5cbjwhLS1cdFx0PGRpdj4tLT48IS0tXHRcdFx0PGRpdiBndWktY29sdW1uLXNlbGVjdG9yLS0+PCEtLVx0XHRcdFx0XHRbY29sdW1uc109XCJjb2x1bW5zXCItLT48IS0tXHRcdFx0XHRcdChjb2x1bW5TZWxlY3RlZClcbj1cIm9uQ29sdW1uU2VsZWN0KCRldmVudClcIj4tLT48IS0tXHRcdFx0PC9kaXY+LS0+XG5cbjwhLS1cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRDb2x1bW5cIj4tLT48IS0tXHRcdFx0XHR7e3NlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKX19LS0+PCEtLVx0XHRcdDwvbmctY29udGFpbmVyPi0tPjwhLS1cdFx0PC9kaXY+LS0+XG5cbjwhLS08ZGl2Pi0tPlxuPCEtLVx0PGRpdiAoZmllbGRTZWxlY3RlZCk9XCJvbkZpZWxkU2VsZWN0KCRldmVudClcIi0tPlxuPCEtLVx0XHQgW2ZpZWxkc109XCJmaWVsZHNcIiBndWktZmllbGQtc2VsZWN0b3I+PC9kaXY+LS0+XG5cbjwhLS1cdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZENvbHVtblwiPi0tPlxuPCEtLVx0XHR7e3NlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKX19LS0+XG48IS0tXHQ8L25nLWNvbnRhaW5lcj4tLT5cbjwhLS08L2Rpdj4tLT5cblxuPCEtLTxkaXY+LS0+XG48IS0tXHQ8ZGl2IChmaWx0ZXJUeXBlU2VsZWN0ZWQpPVwib25GaWx0ZXJUeXBlU2VsZWN0KCRldmVudClcIi0tPlxuPCEtLVx0XHQgW2ZpbHRlclR5cGVzXT1cImZpbHRlclR5cGVzXCIgZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yPjwvZGl2Pi0tPlxuXG48IS0tXHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIj4tLT5cbjwhLS1cdFx0e3tzZWxlY3RlZEZpbHRlclR5cGVJZC50b1N0cmluZygpfX0tLT5cbjwhLS1cdDwvbmctY29udGFpbmVyPi0tPlxuPCEtLTwvZGl2Pi0tPlxuXG48IS0tPGRpdj4tLT5cblxuPCEtLVx0PGRpdiAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIiAqbmdJZj1cInNlbGVjdGVkRmlsdGVyVHlwZUlkXCIgZ3VpLWZpbHRlci12YWx1ZT48L2Rpdj4tLT5cblxuPCEtLTwvZGl2Pi0tPlxuXG48aDE+RmlsdGVyIG1lbnU8L2gxPlxuXG5cbjxkaXYgKHJlbW92ZWRGaWx0ZXIpPVwib25SZW1vdmVkRmlsdGVyKCRldmVudClcIlxuXHQgW2FjdGl2ZUZpbHRlcnNdPVwiYWN0aXZlRmlsdGVycyQgfCBndWlQdXNoXCJcblx0IGd1aS1maWx0ZXItbWVudS1hY3RpdmUtZmlsdGVycz5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZ3VpLWZsZXggZ3VpLWZsZXgtcm93IGd1aS1wYi0xMlwiPlxuXG5cdDxkaXYgKGZpZWxkU2VsZWN0ZWQpPVwib25GaWVsZFNlbGVjdCgkZXZlbnQpXCJcblx0XHQgW2ZpZWxkc109XCJmaWVsZHMkIHwgZ3VpUHVzaFwiXG5cdFx0IGd1aS1maWVsZC1zZWxlY3Rvcj5cblx0PC9kaXY+XG5cblx0PGRpdiAoZmlsdGVyVHlwZVNlbGVjdGVkKT1cIm9uRmlsdGVyVHlwZVNlbGVjdCgkZXZlbnQpXCJcblx0XHQgW2ZpbHRlclR5cGVzXT1cImZpbHRlclR5cGVzXCJcblx0XHQgZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yPlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2ICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiXG5cdFx0ICpuZ0lmPVwic2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIlxuXHRcdCBndWktZmlsdGVyLXZhbHVlPlxuXHQ8L2Rpdj5cblxuXHQ8YnV0dG9uIChjbGljayk9XCJhZGRGaWx0ZXIoKVwiPkZpbHRlcjwvYnV0dG9uPlxuXHQ8YnV0dG9uIChjbGljayk9XCJyZW1vdmVGaWx0ZXIoKVwiPlJlbW92ZTwvYnV0dG9uPlxuXG48L2Rpdj5cblxuPGJyLz5cbjxici8+XG48YnIvPlxuXG48YnV0dG9uXG5cdFtwcmltYXJ5XT1cInRydWVcIiBndWktYnV0dG9uPlxuXHRBZGQgZmlsdGVyXG48L2J1dHRvbj5cblxuPGJyLz5cbjxici8+XG48YnIvPlxuXG48ZGl2IGNsYXNzPVwiZ3VpLWZsZXggZ3VpLWZsZXgtcm93IGd1aS1qdXN0aWZ5LWJldHdlZW4gZ3VpLXB0LTEyXCI+XG5cblx0PGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlQWxsRmlsdGVycygpXCJcblx0XHRcdFtvdXRsaW5lXT1cImZhbHNlXCJcblx0XHRcdGd1aS1idXR0b24+XG5cdFx0Q2xlYXIgZmlsdGVyc1xuXHQ8L2J1dHRvbj5cblxuXHQ8IS0tXHQ8ZGl2Pi0tPlxuXHQ8IS0tXHRcdDxidXR0b24gKGNsaWNrKT1cImNsb3NlKClcIi0tPlxuXHQ8IS0tXHRcdFx0XHRbb3V0bGluZV09XCJmYWxzZVwiIGd1aS1idXR0b24+LS0+XG5cdDwhLS1cdFx0XHRDYW5jZWwtLT5cblx0PCEtLVx0XHQ8L2J1dHRvbj4tLT5cblx0PCEtLVx0PC9kaXY+LS0+XG48L2Rpdj5cblxuIl19