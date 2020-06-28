/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../lib/composition/domain-api/composition.warehouse';
import { FieldWarehouse } from '../../../field/domain-api/field.warehouse';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { FilterCommandDispatcher } from '../../domain-api/filter.command-dispatcher';
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
        { type: FilterCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUlwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUtyRjtJQXlFeUMsK0NBQWM7SUFvQnRELDZCQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELG9CQUEwQztRQUw5RCxZQU1DLGlCQUFPLFNBQ1A7UUFQNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXJCOUQsYUFBTyxHQUFtQyxFQUFFLENBQUM7UUFJN0MsWUFBTSxHQUEwQixFQUFFLENBQUM7UUFVbkMsbUJBQWEsR0FBaUMs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SUFDL0MsOENBQWlEOzs7OztJQUNqRCxzREFBaUU7Ozs7O0lBQ2pFLG1EQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi1hcGkvcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFwIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS90eXBlL2ZpbHRlci10eXBlLW1hcCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWZpbHRlci1tZW51Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXY+XG5cdFx0XHQ8Z3VpLWFjdGl2ZS1maWx0ZXItbGlzdD48L2d1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+XG5cdFx0PC9kaXY+XG5cblx0XHQ8IS0tXHRcdDxkaXY+LS0+XG5cdFx0PCEtLVx0XHRcdDxndWktY29sdW1uLXNlbGVjdG9yLS0+XG5cdFx0PCEtLVx0XHRcdFx0XHRbY29sdW1uc109XCJjb2x1bW5zXCItLT5cblx0XHQ8IS0tXHRcdFx0XHRcdChjb2x1bW5TZWxlY3RlZCk9XCJvbkNvbHVtblNlbGVjdCgkZXZlbnQpXCI+LS0+XG5cdFx0PCEtLVx0XHRcdDwvZ3VpLWNvbHVtbi1zZWxlY3Rvcj4tLT5cblxuXHRcdDwhLS1cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRDb2x1bW5cIj4tLT5cblx0XHQ8IS0tXHRcdFx0XHR7e3NlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKX19LS0+XG5cdFx0PCEtLVx0XHRcdDwvbmctY29udGFpbmVyPi0tPlxuXHRcdDwhLS1cdFx0PC9kaXY+LS0+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGd1aS1maWVsZC1zZWxlY3RvclxuXHRcdFx0XHRcdFtmaWVsZHNdPVwiZmllbGRzXCJcblx0XHRcdFx0XHQoZmllbGRTZWxlY3RlZCk9XCJvbkZpZWxkU2VsZWN0KCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWZpZWxkLXNlbGVjdG9yPlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRDb2x1bW5cIj5cblx0XHRcdFx0e3tzZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCl9fVxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGd1aS1maWx0ZXItdHlwZS1zZWxlY3RvclxuXHRcdFx0XHRcdFtmaWx0ZXJUeXBlc109XCJmaWx0ZXJUeXBlc1wiXG5cdFx0XHRcdFx0KGZpbHRlclR5cGVTZWxlY3RlZCk9XCJvbkZpbHRlclR5cGVTZWxlY3QoJGV2ZW50KVwiPlxuXHRcdFx0PC9ndWktZmlsdGVyLXR5cGUtc2VsZWN0b3I+XG5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZEZpbHRlclR5cGVJZFwiPlxuXHRcdFx0XHR7e3NlbGVjdGVkRmlsdGVyVHlwZUlkLnRvU3RyaW5nKCl9fVxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXG5cdFx0XHQ8Z3VpLWZpbHRlci12YWx1ZSAqbmdJZj1cInNlbGVjdGVkRmlsdGVyVHlwZUlkXCJcblx0XHRcdFx0XHRcdFx0ICAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWZpbHRlci12YWx1ZT5cblxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFtwcmltYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdFtkaXNhYmxlZF09XCIhc2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIlxuXHRcdFx0XHRcdChjbGljayk9XCJhZGRGaWx0ZXIoKVwiPlxuXHRcdFx0XHRGaWx0ZXJcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFtzZWNvbmRhcnldPVwidHJ1ZVwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cInJlbW92ZUFsbEZpbHRlcnMoKVwiPlxuXHRcdFx0XHRDbGVhciBmaWx0ZXJzXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWZpbHRlci1tZW51XSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRDb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdHNlbGVjdGVkRmllbGQ6IEZpZWxkUmVhZE1vZGVsO1xuXG5cdGZpZWxkczogQXJyYXk8RmllbGRSZWFkTW9kZWw+ID0gW107XG5cblx0ZmlsdGVyVHlwZU1hcDogRmlsdGVyVHlwZU1hcDtcblxuXHRmaWx0ZXJUeXBlczogQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD47XG5cblx0c2VsZWN0ZWRGaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZDtcblxuXHRzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XG5cblx0YWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZTogRmllbGRXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29tbWFuZERpc3BhdGNoZXI6IEZpbHRlckNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vbkZpbHRlclR5cGVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmlsdGVyVHlwZU1hcDogRmlsdGVyVHlwZU1hcCkgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbHRlclR5cGVNYXAgPSBmaWx0ZXJUeXBlTWFwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5maWVsZFdhcmVob3VzZVxuXHRcdFx0Lm9uRmllbGRzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmllbGRSZWFkTW9kZWxzOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5maWVsZHMgPSBmaWVsZFJlYWRNb2RlbHM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uQ29sdW1uU2VsZWN0KHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IHNlbGVjdGVkQ29sdW1uO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG9uRmllbGRTZWxlY3QoZmllbGQ6IEZpZWxkUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gZmllbGQ7XG5cblx0XHR0aGlzLmZpbHRlclR5cGVzID0gdGhpcy5maWx0ZXJUeXBlTWFwLmdldEZpbHRlclR5cGVzKHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpbHRlclR5cGVTZWxlY3QoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBmaWx0ZXJUeXBlSWQ7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHJlbW92ZUFsbEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVBbGxGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0YWRkRmlsdGVyKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCksXG5cdFx0XHRmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCA9IHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQsXG5cdFx0XHR2YWx1ZTogYW55ID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuXG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5hZGQoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0XHR0aGlzLmNsZWFyQWRkRmlsdGVyRm9ybSgpO1xuXHR9XG5cblx0b25WYWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Y2xlYXJBZGRGaWx0ZXJGb3JtKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIl19