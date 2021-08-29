/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
var SortingSelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SortingSelectorComponent, _super);
    function SortingSelectorComponent(detector, elementRef) {
        var _this = _super.call(this, detector, elementRef) || this;
        _this.sortingOptions = [
            'Name: A-Z',
            'Name: Z-A',
            'Price: Low to High',
            'Price: High to Low',
            'None'
        ];
        _this.selectedSorting = _this.sortingOptions[0];
        return _this;
    }
    /**
     * @param {?} sorting
     * @return {?}
     */
    SortingSelectorComponent.prototype.changeSorting = /**
     * @param {?} sorting
     * @return {?}
     */
    function (sorting) {
    };
    /**
     * @protected
     * @return {?}
     */
    SortingSelectorComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-sorting-selector';
    };
    SortingSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-sorting-selector]',
                    template: "\n\n\t\t<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t\t\t[options]=\"sortingOptions\"\n\t\t\t\t\t[selected]=\"selectedSorting\"\n\t\t\t\t\t[width]=\"200\">\n\t\t</gui-select>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SortingSelectorComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    return SortingSelectorComponent;
}(SmartComponent));
export { SortingSelectorComponent };
if (false) {
    /** @type {?} */
    SortingSelectorComponent.prototype.sortingOptions;
    /** @type {?} */
    SortingSelectorComponent.prototype.selectedSorting;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEY7SUFhOEMsb0RBQWM7SUFZM0Qsa0NBQVksUUFBMkIsRUFDcEMsVUFBc0I7UUFEekIsWUFFQyxrQkFBTSxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQzNCO1FBYkQsb0JBQWMsR0FBRztZQUNoQixXQUFXO1lBQ1gsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsTUFBTTtTQUNOLENBQUM7UUFFRixxQkFBZSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBS3pDLENBQUM7Ozs7O0lBRUQsZ0RBQWE7Ozs7SUFBYixVQUFjLE9BQWU7SUFDN0IsQ0FBQzs7Ozs7SUFFUyxrREFBZTs7OztJQUF6QjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Z0JBbkNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsc01BUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWpCaUMsaUJBQWlCO2dCQUFhLFVBQVU7O0lBeUMxRSwrQkFBQztDQUFBLEFBcENELENBYThDLGNBQWMsR0F1QjNEO1NBdkJZLHdCQUF3Qjs7O0lBRXBDLGtEQU1FOztJQUVGLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNvcnRpbmctc2VsZWN0b3JdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cImNoYW5nZVNvcnRpbmcoJGV2ZW50KVwiXG5cdFx0XHRcdFx0W29wdGlvbnNdPVwic29ydGluZ09wdGlvbnNcIlxuXHRcdFx0XHRcdFtzZWxlY3RlZF09XCJzZWxlY3RlZFNvcnRpbmdcIlxuXHRcdFx0XHRcdFt3aWR0aF09XCIyMDBcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHNvcnRpbmdPcHRpb25zID0gW1xuXHRcdCdOYW1lOiBBLVonLFxuXHRcdCdOYW1lOiBaLUEnLFxuXHRcdCdQcmljZTogTG93IHRvIEhpZ2gnLFxuXHRcdCdQcmljZTogSGlnaCB0byBMb3cnLFxuXHRcdCdOb25lJ1xuXHRdO1xuXG5cdHNlbGVjdGVkU29ydGluZyA9IHRoaXMuc29ydGluZ09wdGlvbnNbMF07XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0Y2hhbmdlU29ydGluZyhzb3J0aW5nOiBzdHJpbmcpIHtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zb3J0aW5nLXNlbGVjdG9yJztcblx0fVxufVxuIl19