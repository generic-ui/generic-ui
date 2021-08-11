/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GuiComponent } from './gui-component';
/**
 * @abstract
 */
var /**
 * @abstract
 */
StaticComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StaticComponent, _super);
    function StaticComponent(elementRef, changeDetectorRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    /**
     * @return {?}
     */
    StaticComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detach();
    };
    return StaticComponent;
}(GuiComponent));
/**
 * @abstract
 */
export { StaticComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StaticComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvc3RhdGljLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUcvQzs7OztJQUE4QywyQ0FBWTtJQUV6RCx5QkFBc0IsVUFBc0IsRUFDcEIsaUJBQW9DO1FBRDVELFlBRUMsa0JBQU0sVUFBVSxDQUFDLFNBQ2pCO1FBRnVCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7O0lBRTVELENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQVhELENBQThDLFlBQVksR0FXekQ7Ozs7Ozs7Ozs7SUFSTyw0Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0YXRpY0NvbXBvbmVudCBleHRlbmRzIEd1aUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGFjaCgpO1xuXHR9XG5cbn1cbiJdfQ==