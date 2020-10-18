/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
var FilterMenuComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterMenuComponent, _super);
    function FilterMenuComponent(changeDetectorRef, structureId, fieldWarehouse, filterWarehouse, filterCommandDispatcher, compositionWarehouse) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.fieldWarehouse = fieldWarehouse;
        _this.filterWarehouse = filterWarehouse;
        _this.filterCommandDispatcher = filterCommandDispatcher;
        _this.compositionWarehouse = compositionWarehouse;
        _this.columns = [];
        _this.fields = [];
        _this.activeFilters = [];
        return _this;
    }
    /**
     * @return {?}
     */
    FilterMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filterWarehouse
            .onActiveFilters(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} activeFilters
         * @return {?}
         */
        function (activeFilters) {
            _this.activeFilters = activeFilters;
            _this.changeDetectorRef.detectChanges();
        }));
        this.filterWarehouse
            .onFilterTypes(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} filterTypeMap
         * @return {?}
         */
        function (filterTypeMap) {
            _this.filterTypeMap = filterTypeMap;
            _this.changeDetectorRef.detectChanges();
        }));
        this.fieldWarehouse
            .onFields(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} fieldReadModels
         * @return {?}
         */
        function (fieldReadModels) {
            _this.fields = fieldReadModels;
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.columns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} selectedColumn
     * @return {?}
     */
    FilterMenuComponent.prototype.onColumnSelect = /**
     * @param {?} selectedColumn
     * @return {?}
     */
    function (selectedColumn) {
        this.selectedColumn = selectedColumn;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedColumn.getFieldId());
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FilterMenuComponent.prototype.onFieldSelect = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.selectedField = field;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} filterTypeId
     * @return {?}
     */
    FilterMenuComponent.prototype.onFilterTypeSelect = /**
     * @param {?} filterTypeId
     * @return {?}
     */
    function (filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FilterMenuComponent.prototype.removeAllFilters = /**
     * @return {?}
     */
    function () {
        this.filterCommandDispatcher.removeAllFilters(this.structureId);
    };
    /**
     * @return {?}
     */
    FilterMenuComponent.prototype.addFilter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fieldId = this.selectedField.getFieldId();
        /** @type {?} */
        var filterTypeId = this.selectedFilterTypeId;
        /** @type {?} */
        var value = this.selectedValue;
        this.filterCommandDispatcher.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FilterMenuComponent.prototype.onValueChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedValue = value;
    };
    /**
     * @return {?}
     */
    FilterMenuComponent.prototype.clearAddFilterForm = /**
     * @return {?}
     */
    function () {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.changeDetectorRef.detectChanges();
    };
    FilterMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-filter-menu',
                    template: "\n\n\t\t<div>\n\t\t\t<gui-active-filter-list></gui-active-filter-list>\n\t\t</div>\n\n\t\t<!--\t\t<div>-->\n\t\t<!--\t\t\t<gui-column-selector-->\n\t\t<!--\t\t\t\t\t[columns]=\"columns\"-->\n\t\t<!--\t\t\t\t\t(columnSelected)=\"onColumnSelect($event)\">-->\n\t\t<!--\t\t\t</gui-column-selector>-->\n\n\t\t<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">-->\n\t\t<!--\t\t\t\t{{selectedColumn.getFieldId()}}-->\n\t\t<!--\t\t\t</ng-container>-->\n\t\t<!--\t\t</div>-->\n\n\t\t<div>\n\t\t\t<gui-field-selector\n\t\t\t\t\t[fields]=\"fields\"\n\t\t\t\t\t(fieldSelected)=\"onFieldSelect($event)\">\n\t\t\t</gui-field-selector>\n\n\t\t\t<ng-container *ngIf=\"selectedColumn\">\n\t\t\t\t{{selectedColumn.getFieldId()}}\n\t\t\t</ng-container>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<gui-filter-type-selector\n\t\t\t\t\t[filterTypes]=\"filterTypes\"\n\t\t\t\t\t(filterTypeSelected)=\"onFilterTypeSelect($event)\">\n\t\t\t</gui-filter-type-selector>\n\n\t\t\t<ng-container *ngIf=\"selectedFilterTypeId\">\n\t\t\t\t{{selectedFilterTypeId.toString()}}\n\t\t\t</ng-container>\n\t\t</div>\n\n\t\t<div>\n\n\t\t\t<gui-filter-value *ngIf=\"selectedFilterTypeId\"\n\t\t\t\t\t\t\t  (valueChanged)=\"onValueChanged($event)\">\n\t\t\t</gui-filter-value>\n\n\t\t</div>\n\n\t\t<div>\n\t\t\t<button gui-button\n\t\t\t\t\t[primary]=\"true\"\n\t\t\t\t\t[disabled]=\"!selectedFilterTypeId\"\n\t\t\t\t\t(click)=\"addFilter()\">\n\t\t\t\tFilter\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<button gui-button\n\t\t\t\t\t[secondary]=\"true\"\n\t\t\t\t\t(click)=\"removeAllFilters()\">\n\t\t\t\tClear filters\n\t\t\t</button>\n\t\t</div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-filter-menu]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    FilterMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: FieldWarehouse },
        { type: FilterWarehouse },
        { type: FilterCommandInvoker },
        { type: CompositionWarehouse }
    ]; };
    return FilterMenuComponent;
}(SmartComponent));
export { FilterMenuComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUlsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUs3RTtJQXlFeUMsK0NBQWM7SUFvQnRELDZCQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQTZDLEVBQzdDLG9CQUEwQztRQUw5RCxZQU1DLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3hCO1FBUDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBQzdDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFyQjlELGFBQU8sR0FBbUMsRUFBRSxDQUFDO1FBSTdDLFlBQU0sR0FBMEIsRUFBRSxDQUFDO1FBVW5DLG1CQUFhLEdBQWlDLEVBQUUsQ0FBQzs7SUFTakQsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQWlDQztRQS9CQSxJQUFJLENBQUMsZUFBZTthQUNsQixlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLGFBQTJDO1lBQ3RELEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxlQUFlO2FBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsYUFBNEI7WUFDdkMsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGNBQWM7YUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxlQUFzQztZQUNqRCxLQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztZQUM5QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CO2FBQ3ZCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXVDO1lBQ2xELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLGNBQXVDO1FBRXJELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRXZGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxLQUFxQjtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUV0RixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxnREFBa0I7Ozs7SUFBbEIsVUFBbUIsWUFBMEI7UUFFNUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFlBQVksQ0FBQztRQUV6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELDhDQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsdUNBQVM7OztJQUFUOztZQUVPLE9BQU8sR0FBWSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTs7WUFDdkQsWUFBWSxHQUFpQixJQUFJLENBQUMsb0JBQW9COztZQUN0RCxLQUFLLEdBQVEsSUFBSSxDQUFDLGFBQWE7UUFFaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCw0Q0FBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsZ0RBQWtCOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOztnQkExTEQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwwa0RBZ0VUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLHlCQUF5QixFQUFFLE1BQU07cUJBQ2pDO2lCQUNEOzs7O2dCQXpGaUMsaUJBQWlCO2dCQU0xQyxXQUFXO2dCQURYLGNBQWM7Z0JBR2QsZUFBZTtnQkFJZixvQkFBb0I7Z0JBUnBCLG9CQUFvQjs7SUF3TTdCLDBCQUFDO0NBQUEsQUEzTEQsQ0F5RXlDLGNBQWMsR0FrSHREO1NBbEhZLG1CQUFtQjs7O0lBRS9CLDZDQUF3Qzs7SUFFeEMsc0NBQTZDOztJQUU3Qyw0Q0FBOEI7O0lBRTlCLHFDQUFtQzs7SUFFbkMsNENBQTZCOztJQUU3QiwwQ0FBd0M7O0lBRXhDLG1EQUFtQzs7SUFFbkMsNENBQXNCOztJQUV0Qiw0Q0FBaUQ7Ozs7O0lBRXJDLGdEQUFxRDs7Ozs7SUFDOUQsMENBQXlDOzs7OztJQUN6Qyw2Q0FBK0M7Ozs7O0lBQy9DLDhDQUFpRDs7Ozs7SUFDakQsc0RBQThEOzs7OztJQUM5RCxtREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1maWx0ZXItbWVudScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGd1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+PC9ndWktYWN0aXZlLWZpbHRlci1saXN0PlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLVx0XHQ8ZGl2Pi0tPlxuXHRcdDwhLS1cdFx0XHQ8Z3VpLWNvbHVtbi1zZWxlY3Rvci0tPlxuXHRcdDwhLS1cdFx0XHRcdFx0W2NvbHVtbnNdPVwiY29sdW1uc1wiLS0+XG5cdFx0PCEtLVx0XHRcdFx0XHQoY29sdW1uU2VsZWN0ZWQpPVwib25Db2x1bW5TZWxlY3QoJGV2ZW50KVwiPi0tPlxuXHRcdDwhLS1cdFx0XHQ8L2d1aS1jb2x1bW4tc2VsZWN0b3I+LS0+XG5cblx0XHQ8IS0tXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkQ29sdW1uXCI+LS0+XG5cdFx0PCEtLVx0XHRcdFx0e3tzZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCl9fS0tPlxuXHRcdDwhLS1cdFx0XHQ8L25nLWNvbnRhaW5lcj4tLT5cblx0XHQ8IS0tXHRcdDwvZGl2Pi0tPlxuXG5cdFx0PGRpdj5cblx0XHRcdDxndWktZmllbGQtc2VsZWN0b3Jcblx0XHRcdFx0XHRbZmllbGRzXT1cImZpZWxkc1wiXG5cdFx0XHRcdFx0KGZpZWxkU2VsZWN0ZWQpPVwib25GaWVsZFNlbGVjdCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1maWVsZC1zZWxlY3Rvcj5cblxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkQ29sdW1uXCI+XG5cdFx0XHRcdHt7c2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpfX1cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxndWktZmlsdGVyLXR5cGUtc2VsZWN0b3Jcblx0XHRcdFx0XHRbZmlsdGVyVHlwZXNdPVwiZmlsdGVyVHlwZXNcIlxuXHRcdFx0XHRcdChmaWx0ZXJUeXBlU2VsZWN0ZWQpPVwib25GaWx0ZXJUeXBlU2VsZWN0KCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yPlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIj5cblx0XHRcdFx0e3tzZWxlY3RlZEZpbHRlclR5cGVJZC50b1N0cmluZygpfX1cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblxuXHRcdFx0PGd1aS1maWx0ZXItdmFsdWUgKm5nSWY9XCJzZWxlY3RlZEZpbHRlclR5cGVJZFwiXG5cdFx0XHRcdFx0XHRcdCAgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1maWx0ZXItdmFsdWU+XG5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRbcHJpbWFyeV09XCJ0cnVlXCJcblx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiIXNlbGVjdGVkRmlsdGVyVHlwZUlkXCJcblx0XHRcdFx0XHQoY2xpY2spPVwiYWRkRmlsdGVyKClcIj5cblx0XHRcdFx0RmlsdGVyXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRbc2Vjb25kYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJyZW1vdmVBbGxGaWx0ZXJzKClcIj5cblx0XHRcdFx0Q2xlYXIgZmlsdGVyc1xuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1maWx0ZXItbWVudV0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRzZWxlY3RlZEZpZWxkOiBGaWVsZFJlYWRNb2RlbDtcblxuXHRmaWVsZHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXA7XG5cblx0ZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdHNlbGVjdGVkRmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0c2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vbkZpbHRlclR5cGVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmlsdGVyVHlwZU1hcDogRmlsdGVyVHlwZU1hcCkgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbHRlclR5cGVNYXAgPSBmaWx0ZXJUeXBlTWFwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5maWVsZFdhcmVob3VzZVxuXHRcdFx0Lm9uRmllbGRzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmllbGRSZWFkTW9kZWxzOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5maWVsZHMgPSBmaWVsZFJlYWRNb2RlbHM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uQ29sdW1uU2VsZWN0KHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IHNlbGVjdGVkQ29sdW1uO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG9uRmllbGRTZWxlY3QoZmllbGQ6IEZpZWxkUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gZmllbGQ7XG5cblx0XHR0aGlzLmZpbHRlclR5cGVzID0gdGhpcy5maWx0ZXJUeXBlTWFwLmdldEZpbHRlclR5cGVzKHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpbHRlclR5cGVTZWxlY3QoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBmaWx0ZXJUeXBlSWQ7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHJlbW92ZUFsbEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVBbGxGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0YWRkRmlsdGVyKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCksXG5cdFx0XHRmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCA9IHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQsXG5cdFx0XHR2YWx1ZTogYW55ID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuXG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5hZGQoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0XHR0aGlzLmNsZWFyQWRkRmlsdGVyRm9ybSgpO1xuXHR9XG5cblx0b25WYWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Y2xlYXJBZGRGaWx0ZXJGb3JtKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIl19