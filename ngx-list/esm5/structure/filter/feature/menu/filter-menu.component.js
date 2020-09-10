/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { FieldWarehouse } from '../../../field/domain-api/field.warehouse';
import { StructureId } from '../../../core/domain/structure.id';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { FilterCommandInvoker } from '../../domain-api/filter.command-invoker';
var FilterMenuComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterMenuComponent, _super);
    function FilterMenuComponent(changeDetectorRef, structureId, fieldWarehouse, filterWarehouse, filterCommandDispatcher, compositionWarehouse) {
        var _this = _super.call(this) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUlwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUsvRTtJQXlFeUMsK0NBQWM7SUFvQnRELDZCQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQTZDLEVBQzdDLG9CQUEwQztRQUw5RCxZQU1DLGlCQUFPLFNBQ1A7UUFQNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBc0I7UUFDN0MsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXJCOUQsYUFBTyxHQUFtQyxFQUFFLENBQUM7UUFJN0MsWUFBTSxHQUEwQixFQUFFLENBQUM7UUFVbkMsbUJBQWEsR0FBaUMs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SUFDL0MsOENBQWlEOzs7OztJQUNqRCxzREFBOEQ7Ozs7O0lBQzlELG1EQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluLWFwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL3JlYWQvZmllbGQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdHlwZS9maWx0ZXItdHlwZS1tYXAnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1maWx0ZXItbWVudScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGd1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+PC9ndWktYWN0aXZlLWZpbHRlci1saXN0PlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLVx0XHQ8ZGl2Pi0tPlxuXHRcdDwhLS1cdFx0XHQ8Z3VpLWNvbHVtbi1zZWxlY3Rvci0tPlxuXHRcdDwhLS1cdFx0XHRcdFx0W2NvbHVtbnNdPVwiY29sdW1uc1wiLS0+XG5cdFx0PCEtLVx0XHRcdFx0XHQoY29sdW1uU2VsZWN0ZWQpPVwib25Db2x1bW5TZWxlY3QoJGV2ZW50KVwiPi0tPlxuXHRcdDwhLS1cdFx0XHQ8L2d1aS1jb2x1bW4tc2VsZWN0b3I+LS0+XG5cblx0XHQ8IS0tXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkQ29sdW1uXCI+LS0+XG5cdFx0PCEtLVx0XHRcdFx0e3tzZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCl9fS0tPlxuXHRcdDwhLS1cdFx0XHQ8L25nLWNvbnRhaW5lcj4tLT5cblx0XHQ8IS0tXHRcdDwvZGl2Pi0tPlxuXG5cdFx0PGRpdj5cblx0XHRcdDxndWktZmllbGQtc2VsZWN0b3Jcblx0XHRcdFx0XHRbZmllbGRzXT1cImZpZWxkc1wiXG5cdFx0XHRcdFx0KGZpZWxkU2VsZWN0ZWQpPVwib25GaWVsZFNlbGVjdCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1maWVsZC1zZWxlY3Rvcj5cblxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkQ29sdW1uXCI+XG5cdFx0XHRcdHt7c2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpfX1cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxndWktZmlsdGVyLXR5cGUtc2VsZWN0b3Jcblx0XHRcdFx0XHRbZmlsdGVyVHlwZXNdPVwiZmlsdGVyVHlwZXNcIlxuXHRcdFx0XHRcdChmaWx0ZXJUeXBlU2VsZWN0ZWQpPVwib25GaWx0ZXJUeXBlU2VsZWN0KCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yPlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIj5cblx0XHRcdFx0e3tzZWxlY3RlZEZpbHRlclR5cGVJZC50b1N0cmluZygpfX1cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblxuXHRcdFx0PGd1aS1maWx0ZXItdmFsdWUgKm5nSWY9XCJzZWxlY3RlZEZpbHRlclR5cGVJZFwiXG5cdFx0XHRcdFx0XHRcdCAgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1maWx0ZXItdmFsdWU+XG5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRbcHJpbWFyeV09XCJ0cnVlXCJcblx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiIXNlbGVjdGVkRmlsdGVyVHlwZUlkXCJcblx0XHRcdFx0XHQoY2xpY2spPVwiYWRkRmlsdGVyKClcIj5cblx0XHRcdFx0RmlsdGVyXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRbc2Vjb25kYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJyZW1vdmVBbGxGaWx0ZXJzKClcIj5cblx0XHRcdFx0Q2xlYXIgZmlsdGVyc1xuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1maWx0ZXItbWVudV0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRzZWxlY3RlZEZpZWxkOiBGaWVsZFJlYWRNb2RlbDtcblxuXHRmaWVsZHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXA7XG5cblx0ZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdHNlbGVjdGVkRmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0c2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uQWN0aXZlRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzID0gYWN0aXZlRmlsdGVycztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25GaWx0ZXJUeXBlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXApID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXJUeXBlTWFwID0gZmlsdGVyVHlwZU1hcDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZmllbGRXYXJlaG91c2Vcblx0XHRcdC5vbkZpZWxkcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZpZWxkUmVhZE1vZGVsczogQXJyYXk8RmllbGRSZWFkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmllbGRzID0gZmllbGRSZWFkTW9kZWxzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvbkNvbHVtblNlbGVjdChzZWxlY3RlZENvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBzZWxlY3RlZENvbHVtbjtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpZWxkU2VsZWN0KGZpZWxkOiBGaWVsZFJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IGZpZWxkO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpKTtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0b25GaWx0ZXJUeXBlU2VsZWN0KGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gZmlsdGVyVHlwZUlkO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRyZW1vdmVBbGxGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIucmVtb3ZlQWxsRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGFkZEZpbHRlcigpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSB0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQgPSB0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkLFxuXHRcdFx0dmFsdWU6IGFueSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcblxuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuYWRkKGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdFx0dGhpcy5jbGVhckFkZEZpbHRlckZvcm0oKTtcblx0fVxuXG5cdG9uVmFsdWVDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGNsZWFyQWRkRmlsdGVyRm9ybSgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cbn1cbiJdfQ==