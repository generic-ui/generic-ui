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
var FilterMenuComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterMenuComponent, _super);
    function FilterMenuComponent(changeDetectorRef, elementRef, structureId, fieldWarehouse, filterWarehouse, filterCommandDispatcher, compositionWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLN0U7SUFNeUMsK0NBQWM7SUFvQnRELDZCQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyx1QkFBNkMsRUFDN0Msb0JBQTBDO1FBTjlELFlBT0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBRXBDO1FBVDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBQzdDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUF0QjlELGFBQU8sR0FBbUMsRUFBRSxDQUFDO1FB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SUFFeEMsbURBQW1DOztJQUVuQyw0Q0FBc0I7O0lBRXRCLDRDQUFpRDs7Ozs7SUFFckMsZ0RBQXFEOzs7OztJQUU5RCwwQ0FBeUM7Ozs7O0lBQ3pDLDZDQUErQzs7Ozs7SUFDL0MsOENBQWlEOzs7OztJQUNqRCxzREFBOEQ7Ozs7O0lBQzlELG1EQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZENvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0c2VsZWN0ZWRGaWVsZDogRmllbGRSZWFkTW9kZWw7XG5cblx0ZmllbGRzOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4gPSBbXTtcblxuXHRmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlTWFwO1xuXG5cdGZpbHRlclR5cGVzOiBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPjtcblxuXHRzZWxlY3RlZEZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkO1xuXG5cdHNlbGVjdGVkVmFsdWU6IHN0cmluZztcblxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkV2FyZWhvdXNlOiBGaWVsZFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcjogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uQWN0aXZlRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzID0gYWN0aXZlRmlsdGVycztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25GaWx0ZXJUeXBlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXApID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXJUeXBlTWFwID0gZmlsdGVyVHlwZU1hcDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZmllbGRXYXJlaG91c2Vcblx0XHRcdC5vbkZpZWxkcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZpZWxkUmVhZE1vZGVsczogQXJyYXk8RmllbGRSZWFkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmllbGRzID0gZmllbGRSZWFkTW9kZWxzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvbkNvbHVtblNlbGVjdChzZWxlY3RlZENvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBzZWxlY3RlZENvbHVtbjtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpZWxkU2VsZWN0KGZpZWxkOiBGaWVsZFJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IGZpZWxkO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpKTtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0b25GaWx0ZXJUeXBlU2VsZWN0KGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gZmlsdGVyVHlwZUlkO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRyZW1vdmVBbGxGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIucmVtb3ZlQWxsRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGFkZEZpbHRlcigpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSB0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQgPSB0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkLFxuXHRcdFx0dmFsdWU6IGFueSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcblxuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuYWRkKGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdFx0dGhpcy5jbGVhckFkZEZpbHRlckZvcm0oKTtcblx0fVxuXG5cdG9uVmFsdWVDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGNsZWFyQWRkRmlsdGVyRm9ybSgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUnO1xuXHR9XG59XG4iXX0=