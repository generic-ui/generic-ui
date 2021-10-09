/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
var UniqueValueListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueValueListComponent, _super);
    function UniqueValueListComponent(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandInvoker) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.filterWarehouse = filterWarehouse;
        _this.filterCommandInvoker = filterCommandInvoker;
        _this.uniqueValues = [];
        return _this;
    }
    /**
     * @return {?}
     */
    UniqueValueListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.filterWarehouse.onUniqueValues(this.structureId), (/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        function (uniqueValuesReadModel) {
            _this.uniqueValues = uniqueValuesReadModel.getValues(_this.fieldId);
            _this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(_this.fieldId);
            _this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(_this.fieldId);
        }));
    };
    /**
     * @return {?}
     */
    UniqueValueListComponent.prototype.toggleAllSelect = /**
     * @return {?}
     */
    function () {
        event.stopPropagation();
        if (this.selectAllChecked) {
            this.filterCommandInvoker.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
        }
    };
    /**
     * @param {?} uniqueValueReadModel
     * @return {?}
     */
    UniqueValueListComponent.prototype.toggleSelect = /**
     * @param {?} uniqueValueReadModel
     * @return {?}
     */
    function (uniqueValueReadModel) {
        event.stopPropagation();
        if (uniqueValueReadModel.isEnabled()) {
            this.filterCommandInvoker.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandInvoker.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    };
    /**
     * @return {?}
     */
    UniqueValueListComponent.prototype.clearFilters = /**
     * @return {?}
     */
    function () {
        this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
    };
    /**
     * @protected
     * @return {?}
     */
    UniqueValueListComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-unique-value-list';
    };
    UniqueValueListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-unique-value-list][fieldId]',
                    template: "<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n\tSelect all\n</gui-checkbox>\n\n<div class=\"gui-unique-value-list-container gui-overflow-y-scroll gui-overflow-x-hidden\">\n\t<div *ngFor=\"let value of uniqueValues\">\n\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t{{value.getValue()}}\n\t\t</gui-checkbox>\n\t</div>\n</div>\n\n<div class=\"gui-unique-value-list-actions gui-p-6 gui-flex gui-justify-end\">\n\t<button (click)=\"clearFilters()\"\n\t\t\t[outline]=\"true\"\n\t\t\t[primary]=\"true\"\n\t\t\tgui-button>\n\t\tClear\n\t</button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-unique-value-list-container{max-height:300px}"]
                }] }
    ];
    /** @nocollapse */
    UniqueValueListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: FilterWarehouse },
        { type: FilterCommandInvoker }
    ]; };
    UniqueValueListComponent.propDecorators = {
        fieldId: [{ type: Input }]
    };
    return UniqueValueListComponent;
}(SmartComponent));
export { UniqueValueListComponent };
if (false) {
    /** @type {?} */
    UniqueValueListComponent.prototype.fieldId;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllChecked;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    UniqueValueListComponent.prototype.uniqueValues;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUFTOEMsb0RBQWM7SUFXM0Qsa0NBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLG9CQUEwQztRQUo5RCxZQUtDLGtCQUFNLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUNwQztRQU40Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTjlELGtCQUFZLEdBQWdDLEVBQUUsQ0FBQzs7SUFRL0MsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVEEsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7OztRQUNyRCxVQUFDLHFCQUE0QztZQUM1QyxLQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEUsS0FBSSxDQUFDLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRSxLQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRixDQUFDLEVBQ0QsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxrREFBZTs7O0lBQWY7UUFDQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xGO2FBQU07WUFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEY7SUFDRixDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxvQkFBMEM7UUFDdEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksb0JBQW9CLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdHO2FBQU07WUFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0c7SUFDRixDQUFDOzs7O0lBRUQsK0NBQVk7OztJQUFaO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRVMsa0RBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7O2dCQW5FRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MseXNCQUFpRDtvQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFJckM7Ozs7Z0JBbEJpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFLakUsV0FBVztnQkFDWCxlQUFlO2dCQUVmLG9CQUFvQjs7OzBCQWEzQixLQUFLOztJQTBEUCwrQkFBQztDQUFBLEFBckVELENBUzhDLGNBQWMsR0E0RDNEO1NBNURZLHdCQUF3Qjs7O0lBRXBDLDJDQUNpQjs7SUFFakIsb0RBQTBCOztJQUUxQiwwREFBZ0M7O0lBRWhDLGdEQUErQzs7Ozs7SUFFbkMscURBQXFEOzs7OztJQUU5RCwrQ0FBeUM7Ozs7O0lBQ3pDLG1EQUFpRDs7Ozs7SUFDakQsd0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS11bmlxdWUtdmFsdWUtbGlzdF1bZmllbGRJZF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vdW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4uL3N0eWxlL3VuaXF1ZS12YWx1ZS1saXN0Lm5neC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZElkOiBGaWVsZElkO1xuXG5cdHNlbGVjdEFsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0QWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuXHR1bmlxdWVWYWx1ZXM6IEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kSW52b2tlcjogRmlsdGVyQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQodW5pcXVlVmFsdWVzUmVhZE1vZGVsOiBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy51bmlxdWVWYWx1ZXMgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuZ2V0VmFsdWVzKHRoaXMuZmllbGRJZCk7XG5cblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2VkID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmlzU2VsZWN0QWxsQ2hlY2tlZCh0aGlzLmZpZWxkSWQpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuaXNJbmRldGVybWluYXRlKHRoaXMuZmllbGRJZCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHRvZ2dsZUFsbFNlbGVjdCgpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh0aGlzLnNlbGVjdEFsbENoZWNrZWQpIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIudW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVTZWxlY3QodW5pcXVlVmFsdWVSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodW5pcXVlVmFsdWVSZWFkTW9kZWwuaXNFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIudW5zZWxlY3RVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB1bmlxdWVWYWx1ZVJlYWRNb2RlbC5nZXRJZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5zZWxlY3RVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB1bmlxdWVWYWx1ZVJlYWRNb2RlbC5nZXRJZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRjbGVhckZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS11bmlxdWUtdmFsdWUtbGlzdCc7XG5cdH1cblxufVxuIl19