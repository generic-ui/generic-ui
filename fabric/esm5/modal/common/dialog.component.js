/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FabricReactive } from '../../common/fabric-reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2NvbW1vbi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRzlEO0lBQThDLDJDQUFjO0lBSTNELHlCQUF1QyxVQUFzQixFQUNyQyxRQUFtQixFQUNuQixLQUFZO1FBRnBDLFlBR0MsaUJBQU8sU0FDUDtRQUpzQyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQUssR0FBTCxLQUFLLENBQU87O0lBRXBDLENBQUM7Ozs7O0lBRVMsa0NBQVE7Ozs7SUFBbEI7O1lBRU8sUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUU1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBYnVCLGdDQUFnQixHQUFHLE1BQU0sQ0FBQztJQWNuRCxzQkFBQztDQUFBLEFBaEJELENBQThDLGNBQWMsR0FnQjNEO1NBaEJxQixlQUFlOzs7Ozs7SUFFcEMsaUNBQWtEOzs7OztJQUU1QixxQ0FBdUM7Ozs7O0lBQ3RELG1DQUFvQzs7Ozs7SUFDcEMsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDU1NfQ0xBU1NfUFJFRklYID0gJ2d1aS0nO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSB0aGVtZTogVGhlbWUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFkZFRoZW1lKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY3NzQ2xhc3MgPSBEaWFsb2dDb21wb25lbnQuQ1NTX0NMQVNTX1BSRUZJWCArIHRoaXMudGhlbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcblx0fVxufVxuIl19