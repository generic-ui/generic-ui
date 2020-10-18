/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
var UniqueValueListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueValueListComponent, _super);
    function UniqueValueListComponent(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        var _this = _super.call(this, changeDetectorRef) || this;
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
    UniqueValueListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-unique-value-list',
                    template: "\n\n\t\t<gui-checkbox [checked]=\"selectAllChecked\"\n\t\t\t\t\t  [indeterminate]=\"selectAllIndeterminate\"\n\t\t\t\t\t  (changed)=\"toggleAllSelect()\">\n\t\t\tSelect all\n\t\t</gui-checkbox>\n\t\t<div class=\"gui-unique-value-list\">\n\t\t\t<div *ngFor=\"let value of uniqueValues\">\n\t\t\t\t<gui-checkbox [checked]=\"value.isEnabled()\"\n\t\t\t\t\t\t\t  (changed)=\"toggleSelect(value)\">\n\t\t\t\t\t{{value.getValue()}}\n\t\t\t\t</gui-checkbox>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"gui-unique-value-list-actions\">\n\t\t\t<!--\t\t\t<button gui-button-->\n\t\t\t<!--\t\t\t\t\t[outline]=\"true\"-->\n\t\t\t<!--\t\t\t\t\t(click)=\"clearFilters()\">-->\n\t\t\t<!--\t\t\t\tCancel-->\n\t\t\t<!--\t\t\t</button>-->\n\n\t\t\t<button gui-button\n\t\t\t\t\t[outline]=\"true\"\n\t\t\t\t\t[primary]=\"true\"\n\t\t\t\t\t(click)=\"clearFilters()\">\n\t\t\t\tClear\n\t\t\t</button>\n\t\t</div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-unique-value-list{max-height:300px;overflow-y:scroll;overflow-x:hidden}.gui-unique-value-list-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    UniqueValueListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RTtJQXNDOEMsb0RBQWM7SUFXM0Qsa0NBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyx1QkFBNkM7UUFIakUsWUFJQyxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN4QjtRQUw0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBTGpFLGtCQUFZLEdBQWdDLEVBQUUsQ0FBQzs7SUFPL0MsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLGVBQWU7YUFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxxQkFBNEM7WUFDdkQsS0FBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsS0FBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEYsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjtRQUNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckY7YUFBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7O0lBRUQsK0NBQVk7Ozs7SUFBWixVQUFhLG9CQUEwQztRQUN0RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEg7YUFBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RztJQUNGLENBQUM7Ozs7SUFFRCwrQ0FBWTs7O0lBQVo7UUFDQyxJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Z0JBL0ZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscTRCQStCVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUVyQzs7OztnQkEvQ2lDLGlCQUFpQjtnQkFLMUMsV0FBVztnQkFDWCxlQUFlO2dCQUVmLG9CQUFvQjs7OzBCQTBDM0IsS0FBSzs7SUF5RFAsK0JBQUM7Q0FBQSxBQWpHRCxDQXNDOEMsY0FBYyxHQTJEM0Q7U0EzRFksd0JBQXdCOzs7SUFFcEMsMkNBQ2lCOztJQUVqQixvREFBMEI7O0lBRTFCLDBEQUFnQzs7SUFFaEMsZ0RBQStDOzs7OztJQUVuQyxxREFBcUQ7Ozs7O0lBQzlELCtDQUF5Qzs7Ozs7SUFDekMsbURBQWlEOzs7OztJQUNqRCwyREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktdW5pcXVlLXZhbHVlLWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJzZWxlY3RBbGxDaGVja2VkXCJcblx0XHRcdFx0XHQgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdEFsbEluZGV0ZXJtaW5hdGVcIlxuXHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlQWxsU2VsZWN0KClcIj5cblx0XHRcdFNlbGVjdCBhbGxcblx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXVuaXF1ZS12YWx1ZS1saXN0XCI+XG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB1bmlxdWVWYWx1ZXNcIj5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJ2YWx1ZS5pc0VuYWJsZWQoKVwiXG5cdFx0XHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlU2VsZWN0KHZhbHVlKVwiPlxuXHRcdFx0XHRcdHt7dmFsdWUuZ2V0VmFsdWUoKX19XG5cdFx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXVuaXF1ZS12YWx1ZS1saXN0LWFjdGlvbnNcIj5cblx0XHRcdDwhLS1cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b24tLT5cblx0XHRcdDwhLS1cdFx0XHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiLS0+XG5cdFx0XHQ8IS0tXHRcdFx0XHRcdChjbGljayk9XCJjbGVhckZpbHRlcnMoKVwiPi0tPlxuXHRcdFx0PCEtLVx0XHRcdFx0Q2FuY2VsLS0+XG5cdFx0XHQ8IS0tXHRcdFx0PC9idXR0b24+LS0+XG5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFtvdXRsaW5lXT1cInRydWVcIlxuXHRcdFx0XHRcdFtwcmltYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJjbGVhckZpbHRlcnMoKVwiPlxuXHRcdFx0XHRDbGVhclxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHN0eWxlVXJsczogWycuLi9zdHlsZS91bmlxdWUtdmFsdWUtbGlzdC5uZ3guc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZElkOiBGaWVsZElkO1xuXG5cdHNlbGVjdEFsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0QWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuXHR1bmlxdWVWYWx1ZXM6IEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcjogRmlsdGVyQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh1bmlxdWVWYWx1ZXNSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuaXF1ZVZhbHVlcyA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5nZXRWYWx1ZXModGhpcy5maWVsZElkKTtcblxuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuaXNTZWxlY3RBbGxDaGVja2VkKHRoaXMuZmllbGRJZCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUodGhpcy5maWVsZElkKTtcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlQWxsU2VsZWN0KCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVNlbGVjdCh1bmlxdWVWYWx1ZVJlYWRNb2RlbDogVW5pcXVlVmFsdWVSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh1bmlxdWVWYWx1ZVJlYWRNb2RlbC5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==