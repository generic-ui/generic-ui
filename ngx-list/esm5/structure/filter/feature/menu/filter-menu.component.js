/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
import { CompositionId } from '../../../../composition/core/api/composition.id';
var FilterMenuComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterMenuComponent, _super);
    function FilterMenuComponent(changeDetectorRef, elementRef, structureId, compositionId, fieldWarehouse, filterWarehouse, filterCommandDispatcher, compositionWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.fieldWarehouse = fieldWarehouse;
        _this.filterWarehouse = filterWarehouse;
        _this.filterCommandDispatcher = filterCommandDispatcher;
        _this.compositionWarehouse = compositionWarehouse;
        _this.columns = [];
        _this.fields = [];
        _this.activeFilters = [];
        _this.addClassToHost('gui-block');
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
        this.hermesSubscribe(this.filterWarehouse.onActiveFilters(this.structureId), (/**
         * @param {?} activeFilters
         * @return {?}
         */
        function (activeFilters) {
            _this.activeFilters = activeFilters;
        }));
        this.hermesSubscribe(this.filterWarehouse.onFilterTypes(this.structureId), (/**
         * @param {?} filterTypeMap
         * @return {?}
         */
        function (filterTypeMap) {
            _this.filterTypeMap = filterTypeMap;
        }));
        this.hermesSubscribe(this.fieldWarehouse.onFields(this.structureId), (/**
         * @param {?} fieldReadModels
         * @return {?}
         */
        function (fieldReadModels) {
            _this.fields = fieldReadModels;
        }));
        this.hermesSubscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.columns = columns;
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
    /**
     * @protected
     * @return {?}
     */
    FilterMenuComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-filter-menu';
    };
    FilterMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-filter-menu]',
                    template: "<div>\n\t<div gui-active-filter-list></div>\n</div>\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<div>\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields\" gui-field-selector></div>\n\n\t<ng-container *ngIf=\"selectedColumn\">\n\t\t{{selectedColumn.getFieldId()}}\n\t</ng-container>\n</div>\n\n<div>\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>\n\n\t<ng-container *ngIf=\"selectedFilterTypeId\">\n\t\t{{selectedFilterTypeId.toString()}}\n\t</ng-container>\n</div>\n\n<div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>\n\n</div>\n\n<div>\n\t<button (click)=\"addFilter()\"\n\t\t\t[disabled]=\"!selectedFilterTypeId\"\n\t\t\t[primary]=\"true\" gui-button>\n\t\tFilter\n\t</button>\n</div>\n\n<div>\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[secondary]=\"true\" gui-button>\n\t\tClear filters\n\t</button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FilterMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: CompositionId },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR2hGO0lBTXlDLCtDQUFjO0lBb0J0RCw2QkFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQTZDLEVBQzdDLG9CQUEwQztRQVA5RCxZQVFDLGtCQUFNLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUVwQztRQVY0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNkJBQXVC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b3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFwIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdHlwZS9maWx0ZXItdHlwZS1tYXAnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZENvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0c2VsZWN0ZWRGaWVsZDogRmllbGRSZWFkTW9kZWw7XG5cblx0ZmllbGRzOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4gPSBbXTtcblxuXHRmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlTWFwO1xuXG5cdGZpbHRlclR5cGVzOiBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPjtcblxuXHRzZWxlY3RlZEZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkO1xuXG5cdHNlbGVjdGVkVmFsdWU6IHN0cmluZztcblxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzID0gYWN0aXZlRmlsdGVycztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpbHRlcldhcmVob3VzZS5vbkZpbHRlclR5cGVzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXApID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXJUeXBlTWFwID0gZmlsdGVyVHlwZU1hcDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpZWxkV2FyZWhvdXNlLm9uRmllbGRzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGZpZWxkUmVhZE1vZGVsczogQXJyYXk8RmllbGRSZWFkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmllbGRzID0gZmllbGRSZWFkTW9kZWxzO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25IZWFkZXJDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG9uQ29sdW1uU2VsZWN0KHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IHNlbGVjdGVkQ29sdW1uO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG9uRmllbGRTZWxlY3QoZmllbGQ6IEZpZWxkUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gZmllbGQ7XG5cblx0XHR0aGlzLmZpbHRlclR5cGVzID0gdGhpcy5maWx0ZXJUeXBlTWFwLmdldEZpbHRlclR5cGVzKHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpbHRlclR5cGVTZWxlY3QoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBmaWx0ZXJUeXBlSWQ7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHJlbW92ZUFsbEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVBbGxGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0YWRkRmlsdGVyKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCksXG5cdFx0XHRmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCA9IHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQsXG5cdFx0XHR2YWx1ZTogYW55ID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuXG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5hZGQoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0XHR0aGlzLmNsZWFyQWRkRmlsdGVyRm9ybSgpO1xuXHR9XG5cblx0b25WYWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Y2xlYXJBZGRGaWx0ZXJGb3JtKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItbWVudSc7XG5cdH1cbn1cbiJdfQ==