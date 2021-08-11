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
        console.log(sorting);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEY7SUFhOEMsb0RBQWM7SUFZM0Qsa0NBQVksUUFBMkIsRUFDcEMsVUFBc0I7UUFEekIsWUFFQyxrQkFBTSxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQzNCO1FBYkQsb0JBQWMsR0FBRztZQUNoQixXQUFXO1lBQ1gsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsTUFBTTtTQUNOLENBQUM7UUFFRixxQkFBZSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBS3pDLENBQUM7Ozs7O0lBRUQsZ0RBQWE7Ozs7SUFBYixVQUFjLE9BQWU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVTLGtEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztnQkFwQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxzTUFRVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBakJpQyxpQkFBaUI7Z0JBQWEsVUFBVTs7SUEwQzFFLCtCQUFDO0NBQUEsQUFyQ0QsQ0FhOEMsY0FBYyxHQXdCM0Q7U0F4Qlksd0JBQXdCOzs7SUFFcEMsa0RBTUU7O0lBRUYsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc29ydGluZy1zZWxlY3Rvcl0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwiY2hhbmdlU29ydGluZygkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJzb3J0aW5nT3B0aW9uc1wiXG5cdFx0XHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkU29ydGluZ1wiXG5cdFx0XHRcdFx0W3dpZHRoXT1cIjIwMFwiPlxuXHRcdDwvZ3VpLXNlbGVjdD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0c29ydGluZ09wdGlvbnMgPSBbXG5cdFx0J05hbWU6IEEtWicsXG5cdFx0J05hbWU6IFotQScsXG5cdFx0J1ByaWNlOiBMb3cgdG8gSGlnaCcsXG5cdFx0J1ByaWNlOiBIaWdoIHRvIExvdycsXG5cdFx0J05vbmUnXG5cdF07XG5cblx0c2VsZWN0ZWRTb3J0aW5nID0gdGhpcy5zb3J0aW5nT3B0aW9uc1swXTtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRjaGFuZ2VTb3J0aW5nKHNvcnRpbmc6IHN0cmluZykge1xuXHRcdGNvbnNvbGUubG9nKHNvcnRpbmcpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNvcnRpbmctc2VsZWN0b3InO1xuXHR9XG59XG4iXX0=