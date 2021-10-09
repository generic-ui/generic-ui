/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
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
                    template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEY7SUFNOEMsb0RBQWM7SUFZM0Qsa0NBQVksUUFBMkIsRUFDcEMsVUFBc0I7UUFEekIsWUFFQyxrQkFBTSxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQzNCO1FBYkQsb0JBQWMsR0FBRztZQUNoQixXQUFXO1lBQ1gsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsTUFBTTtTQUNOLENBQUM7UUFFRixxQkFBZSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBS3pDLENBQUM7Ozs7O0lBRUQsZ0RBQWE7Ozs7SUFBYixVQUFjLE9BQWU7SUFDN0IsQ0FBQzs7Ozs7SUFFUyxrREFBZTs7OztJQUF6QjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Z0JBNUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxvTEFBZ0Q7b0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBVmlDLGlCQUFpQjtnQkFBYSxVQUFVOztJQWtDMUUsK0JBQUM7Q0FBQSxBQTdCRCxDQU04QyxjQUFjLEdBdUIzRDtTQXZCWSx3QkFBd0I7OztJQUVwQyxrREFNRTs7SUFFRixtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc29ydGluZy1zZWxlY3Rvcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRzb3J0aW5nT3B0aW9ucyA9IFtcblx0XHQnTmFtZTogQS1aJyxcblx0XHQnTmFtZTogWi1BJyxcblx0XHQnUHJpY2U6IExvdyB0byBIaWdoJyxcblx0XHQnUHJpY2U6IEhpZ2ggdG8gTG93Jyxcblx0XHQnTm9uZSdcblx0XTtcblxuXHRzZWxlY3RlZFNvcnRpbmcgPSB0aGlzLnNvcnRpbmdPcHRpb25zWzBdO1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGRldGVjdG9yLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdGNoYW5nZVNvcnRpbmcoc29ydGluZzogc3RyaW5nKSB7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc29ydGluZy1zZWxlY3Rvcic7XG5cdH1cbn1cbiJdfQ==