/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
import { CompositionId } from '../../../../composition/core/api/composition.id';
export class FilterMenuComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} fieldWarehouse
     * @param {?} filterWarehouse
     * @param {?} filterCommandDispatcher
     * @param {?} compositionWarehouse
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.filterWarehouse.onActiveFilters(this.structureId), (/**
         * @param {?} activeFilters
         * @return {?}
         */
        (activeFilters) => {
            this.activeFilters = activeFilters;
        }));
        this.hermesSubscribe(this.filterWarehouse.onFilterTypes(this.structureId), (/**
         * @param {?} filterTypeMap
         * @return {?}
         */
        (filterTypeMap) => {
            this.filterTypeMap = filterTypeMap;
        }));
        this.hermesSubscribe(this.fieldWarehouse.onFields(this.structureId), (/**
         * @param {?} fieldReadModels
         * @return {?}
         */
        (fieldReadModels) => {
            this.fields = fieldReadModels;
        }));
        this.hermesSubscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
        }));
    }
    /**
     * @param {?} selectedColumn
     * @return {?}
     */
    onColumnSelect(selectedColumn) {
        this.selectedColumn = selectedColumn;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedColumn.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onFieldSelect(field) {
        this.selectedField = field;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} filterTypeId
     * @return {?}
     */
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    removeAllFilters() {
        this.filterCommandDispatcher.removeAllFilters(this.structureId);
    }
    /**
     * @return {?}
     */
    addFilter() {
        /** @type {?} */
        const fieldId = this.selectedField.getFieldId();
        /** @type {?} */
        const filterTypeId = this.selectedFilterTypeId;
        /** @type {?} */
        const value = this.selectedValue;
        this.filterCommandDispatcher.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChanged(value) {
        this.selectedValue = value;
    }
    /**
     * @return {?}
     */
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-filter-menu';
    }
}
FilterMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-menu]',
                template: "<div>\n\t<div gui-active-filter-list></div>\n</div>\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<div>\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields\" gui-field-selector></div>\n\n\t<ng-container *ngIf=\"selectedColumn\">\n\t\t{{selectedColumn.getFieldId()}}\n\t</ng-container>\n</div>\n\n<div>\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>\n\n\t<ng-container *ngIf=\"selectedFilterTypeId\">\n\t\t{{selectedFilterTypeId.toString()}}\n\t</ng-container>\n</div>\n\n<div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>\n\n</div>\n\n<div>\n\t<button (click)=\"addFilter()\"\n\t\t\t[disabled]=\"!selectedFilterTypeId\"\n\t\t\t[primary]=\"true\" gui-button>\n\t\tFilter\n\t</button>\n</div>\n\n<div>\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[secondary]=\"true\" gui-button>\n\t\tClear filters\n\t</button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FilterMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: CompositionId },
    { type: FieldWarehouse },
    { type: FilterWarehouse },
    { type: FilterCommandInvoker },
    { type: CompositionWarehouse }
];
if (false) {
    /** @type {?} */
    FilterMenuComponent.prototype.selectedColumn;
    /** @type {?} */
    FilterMenuComponent.prototype.columns;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedField;
    /** @type {?} */
    FilterMenuComponent.prototype.fields;
    /** @type {?} */
    FilterMenuComponent.prototype.filterTypeMap;
    /** @type {?} */
    FilterMenuComponent.prototype.filterTypes;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedFilterTypeId;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedValue;
    /** @type {?} */
    FilterMenuComponent.prototype.activeFilters;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.fieldWarehouse;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.filterCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUlsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUc3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFTaEYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7O0lBb0J0RCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixhQUE0QixFQUM1QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyx1QkFBNkMsRUFDN0Msb0JBQTBDO1FBQzdELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQVJULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFB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YTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7OztZQTFIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsaXdDQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBdkJpQyxpQkFBaUI7WUFBYSxVQUFVO1lBTWpFLFdBQVc7WUFTWCxhQUFhO1lBVmIsY0FBYztZQUdkLGVBQWU7WUFJZixvQkFBb0I7WUFScEIsb0JBQW9COzs7O0lBc0I1Qiw2Q0FBd0M7O0lBRXhDLHNDQUE2Qzs7SUFFN0MsNENBQThCOztJQUU5QixxQ0FBbUM7O0lBRW5DLDRDQUE2Qjs7SUFFN0IsMENBQXdDOztJQUV4QyxtREFBbUM7O0lBRW5DLDRDQUFzQjs7SUFFdEIsNENBQWlEOzs7OztJQUVyQyxnREFBcUQ7Ozs7O0lBRTlELDBDQUF5Qzs7Ozs7SUFDekMsNENBQTZDOzs7OztJQUM3Qyw2Q0FBK0M7Ozs7O0lBQy9DLDhDQUFpRDs7Ozs7SUFDakQsc0RBQThEOzs7OztJQUM5RCxtREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWVsZFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL3JlYWQvZmllbGQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlclR5cGVNYXAgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLW1hcCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItbWVudV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRzZWxlY3RlZEZpZWxkOiBGaWVsZFJlYWRNb2RlbDtcblxuXHRmaWVsZHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXA7XG5cblx0ZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdHNlbGVjdGVkRmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0c2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZTogRmllbGRXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29tbWFuZERpc3BhdGNoZXI6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpbHRlcldhcmVob3VzZS5vbkFjdGl2ZUZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uRmlsdGVyVHlwZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoZmlsdGVyVHlwZU1hcDogRmlsdGVyVHlwZU1hcCkgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbHRlclR5cGVNYXAgPSBmaWx0ZXJUeXBlTWFwO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZmllbGRXYXJlaG91c2Uub25GaWVsZHModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoZmllbGRSZWFkTW9kZWxzOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5maWVsZHMgPSBmaWVsZFJlYWRNb2RlbHM7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkhlYWRlckNvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0b25Db2x1bW5TZWxlY3Qoc2VsZWN0ZWRDb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gc2VsZWN0ZWRDb2x1bW47XG5cblx0XHR0aGlzLmZpbHRlclR5cGVzID0gdGhpcy5maWx0ZXJUeXBlTWFwLmdldEZpbHRlclR5cGVzKHRoaXMuc2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpKTtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0b25GaWVsZFNlbGVjdChmaWVsZDogRmllbGRSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBmaWVsZDtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG9uRmlsdGVyVHlwZVNlbGVjdChmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IGZpbHRlclR5cGVJZDtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnJlbW92ZUFsbEZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRhZGRGaWx0ZXIoKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkOiBGaWVsZElkID0gdGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSxcblx0XHRcdGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkID0gdGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCxcblx0XHRcdHZhbHVlOiBhbnkgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XG5cblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLmFkZChmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRcdHRoaXMuY2xlYXJBZGRGaWx0ZXJGb3JtKCk7XG5cdH1cblxuXHRvblZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRjbGVhckFkZEZpbHRlckZvcm0oKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSBudWxsO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci1tZW51Jztcblx0fVxufVxuIl19