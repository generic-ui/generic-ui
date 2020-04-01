/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FabricReactive } from '../fabric-reactive';
/**
 * @abstract
 */
var DialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DialogComponent, _super);
    function DialogComponent(elementRef, renderer, theme) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.theme = theme;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    DialogComponent.prototype.addTheme = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cssClass = DialogComponent.CSS_CLASS_PREFIX + this.theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    };
    DialogComponent.CSS_CLASS_PREFIX = 'gui-';
    return DialogComponent;
}(FabricReactive));
export { DialogComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DialogComponent.CSS_CLASS_PREFIX;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DialogComponent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImNvbW1vbi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUdwRDtJQUE4QywyQ0FBYztJQUkzRCx5QkFBdUMsVUFBc0IsRUFDckMsUUFBbUIsRUFDbkIsS0FBWTtRQUZwQyxZQUdDLGlCQUFPLFNBQ1A7UUFKc0MsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDckMsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFLLEdBQUwsS0FBSyxDQUFPOztJQUVwQyxDQUFDOzs7OztJQUVTLGtDQUFROzs7O0lBQWxCOztZQUVPLFFBQVEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQWJ1QixnQ0FBZ0IsR0FBRyxNQUFNLENBQUM7SUFjbkQsc0JBQUM7Q0FBQSxBQWhCRCxDQUE4QyxjQUFjLEdBZ0IzRDtTQWhCcUIsZUFBZTs7Ozs7O0lBRXBDLGlDQUFrRDs7Ozs7SUFFNUIscUNBQXVDOzs7OztJQUN0RCxtQ0FBb0M7Ozs7O0lBQ3BDLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDU1NfQ0xBU1NfUFJFRklYID0gJ2d1aS0nO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSB0aGVtZTogVGhlbWUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFkZFRoZW1lKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY3NzQ2xhc3MgPSBEaWFsb2dDb21wb25lbnQuQ1NTX0NMQVNTX1BSRUZJWCArIHRoaXMudGhlbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcblx0fVxufVxuIl19