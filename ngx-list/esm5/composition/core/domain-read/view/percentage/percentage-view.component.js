/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
var PercentageViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PercentageViewComponent, _super);
    function PercentageViewComponent(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    PercentageViewComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-percentage-view';
    };
    PercentageViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-percentage-view[value]',
                    template: "\n\t\t{{ value }} %\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    PercentageViewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PercentageViewComponent.propDecorators = {
        value: [{ type: Input }]
    };
    return PercentageViewComponent;
}(PureComponent));
export { PercentageViewComponent };
if (false) {
    /** @type {?} */
    PercentageViewComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VudGFnZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC92aWV3L3BlcmNlbnRhZ2UvcGVyY2VudGFnZS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFbkY7SUFRNkMsbURBQWE7SUFLekQsaUNBQVksVUFBc0I7ZUFDakMsa0JBQU0sVUFBVSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRVMsaURBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7O2dCQW5CRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHlCQUVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBWDRDLFVBQVU7Ozt3QkFjckQsS0FBSzs7SUFXUCw4QkFBQztDQUFBLEFBckJELENBUTZDLGFBQWEsR0FhekQ7U0FiWSx1QkFBdUI7OztJQUVuQyx3Q0FDYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcGVyY2VudGFnZS12aWV3W3ZhbHVlXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0e3sgdmFsdWUgfX0gJVxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQZXJjZW50YWdlVmlld0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBlcmNlbnRhZ2Utdmlldyc7XG5cdH1cblxufVxuIl19