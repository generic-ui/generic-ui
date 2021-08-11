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
    function UniqueValueListComponent(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandDispatcher) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.filterWarehouse = filterWarehouse;
        _this.filterCommandDispatcher = filterCommandDispatcher;
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
        this.filterWarehouse
            .onUniqueValues(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        function (uniqueValuesReadModel) {
            _this.uniqueValues = uniqueValuesReadModel.getValues(_this.fieldId);
            _this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(_this.fieldId);
            _this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(_this.fieldId);
            _this.changeDetectorRef.detectChanges();
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
            this.filterCommandDispatcher.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandDispatcher.selectAllUniqueFilter(this.fieldId, this.structureId);
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
            this.filterCommandDispatcher.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandDispatcher.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    };
    /**
     * @return {?}
     */
    UniqueValueListComponent.prototype.clearFilters = /**
     * @return {?}
     */
    function () {
        this.filterCommandDispatcher.selectAllUniqueFilter(this.fieldId, this.structureId);
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
    UniqueValueListComponent.prototype.filterCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUFTOEMsb0RBQWM7SUFXM0Qsa0NBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLHVCQUE2QztRQUpqRSxZQUtDLGtCQUFNLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQUNwQztRQU40Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBTmpFLGtCQUFZLEdBQWdDLEVBQUUsQ0FBQzs7SUFRL0MsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLGVBQWU7YUFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxxQkFBNEM7WUFDdkQsS0FBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsS0FBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEYsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjtRQUNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckY7YUFBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7O0lBRUQsK0NBQVk7Ozs7SUFBWixVQUFhLG9CQUEwQztRQUN0RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEg7YUFBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RztJQUNGLENBQUM7Ozs7SUFFRCwrQ0FBWTs7O0lBQVo7UUFDQyxJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Ozs7SUFFUyxrREFBZTs7OztJQUF6QjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Z0JBdkVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUNBQXFDO29CQUMvQyx5c0JBQWlEO29CQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUlyQzs7OztnQkFsQmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQUtqRSxXQUFXO2dCQUNYLGVBQWU7Z0JBRWYsb0JBQW9COzs7MEJBYTNCLEtBQUs7O0lBOERQLCtCQUFDO0NBQUEsQUF6RUQsQ0FTOEMsY0FBYyxHQWdFM0Q7U0FoRVksd0JBQXdCOzs7SUFFcEMsMkNBQ2lCOztJQUVqQixvREFBMEI7O0lBRTFCLDBEQUFnQzs7SUFFaEMsZ0RBQStDOzs7OztJQUVuQyxxREFBcUQ7Ozs7O0lBRTlELCtDQUF5Qzs7Ozs7SUFDekMsbURBQWlEOzs7OztJQUNqRCwyREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXVuaXF1ZS12YWx1ZS1saXN0XVtmaWVsZElkXScsXG5cdHRlbXBsYXRlVXJsOiAnLi91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vc3R5bGUvdW5pcXVlLXZhbHVlLWxpc3Qubmd4LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkSWQ6IEZpZWxkSWQ7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHVuaXF1ZVZhbHVlc1JlYWRNb2RlbDogVW5pcXVlVmFsdWVzUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5pcXVlVmFsdWVzID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmdldFZhbHVlcyh0aGlzLmZpZWxkSWQpO1xuXG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5pc1NlbGVjdEFsbENoZWNrZWQodGhpcy5maWVsZElkKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmlzSW5kZXRlcm1pbmF0ZSh0aGlzLmZpZWxkSWQpO1xuXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVBbGxTZWxlY3QoKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RBbGxDaGVja2VkKSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlU2VsZWN0KHVuaXF1ZVZhbHVlUmVhZE1vZGVsOiBVbmlxdWVWYWx1ZVJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0VW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdW5pcXVlVmFsdWVSZWFkTW9kZWwuZ2V0SWQoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0VW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdW5pcXVlVmFsdWVSZWFkTW9kZWwuZ2V0SWQoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktdW5pcXVlLXZhbHVlLWxpc3QnO1xuXHR9XG5cbn1cbiJdfQ==