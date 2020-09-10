/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Theme } from '../../themes/theme';
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
     * @param {?=} theme
     * @return {?}
     */
    DialogComponent.prototype.addTheme = /**
     * @protected
     * @param {?=} theme
     * @return {?}
     */
    function (theme) {
        if (!theme) {
            theme = this.theme;
        }
        this.removeThemes();
        /** @type {?} */
        var cssClass = DialogComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    };
    /**
     * @protected
     * @return {?}
     */
    DialogComponent.prototype.removeThemes = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var themes = Object.keys(Theme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return Theme[key].toLowerCase(); }))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !Number.isInteger(val); }));
        themes.forEach((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            /** @type {?} */
            var cssClass = DialogComponent.CSS_CLASS_PREFIX + theme;
            _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2NvbW1vbi9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUc5RDtJQUE4QywyQ0FBYztJQUkzRCx5QkFBdUMsVUFBc0IsRUFDckMsUUFBbUIsRUFDbkIsS0FBWTtRQUZwQyxZQUdDLGlCQUFPLFNBQ1A7UUFKc0MsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDckMsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFLLEdBQUwsS0FBSyxDQUFPOztJQUVwQyxDQUFDOzs7Ozs7SUFFUyxrQ0FBUTs7Ozs7SUFBbEIsVUFBbUIsS0FBYTtRQUUvQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBQ2QsUUFBUSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO1FBRXZFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRVMsc0NBQVk7Ozs7SUFBdEI7UUFBQSxpQkFTQzs7WUFSTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDMUIsR0FBRzs7OztRQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUF4QixDQUF3QixFQUFDO2FBQzlDLE1BQU07Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsRUFBQztRQUU5QyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBYTs7Z0JBQ3RCLFFBQVEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7SUE3QnVCLGdDQUFnQixHQUFHLE1BQU0sQ0FBQztJQThCbkQsc0JBQUM7Q0FBQSxBQWhDRCxDQUE4QyxjQUFjLEdBZ0MzRDtTQWhDcUIsZUFBZTs7Ozs7O0lBRXBDLGlDQUFrRDs7Ozs7SUFFNUIscUNBQXVDOzs7OztJQUN0RCxtQ0FBb0M7Ozs7O0lBQ3BDLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1NTX0NMQVNTX1BSRUZJWCA9ICdndWktJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgdGhlbWU6IFRoZW1lKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRUaGVtZSh0aGVtZT86IFRoZW1lKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoZW1lKSB7XG5cdFx0XHR0aGVtZSA9IHRoaXMudGhlbWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZW1vdmVUaGVtZXMoKTtcblx0XHRjb25zdCBjc3NDbGFzcyA9IERpYWxvZ0NvbXBvbmVudC5DU1NfQ0xBU1NfUFJFRklYICsgdGhlbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVUaGVtZXMoKTogdm9pZCB7XG5cdFx0Y29uc3QgdGhlbWVzID0gT2JqZWN0LmtleXMoVGhlbWUpXG5cdFx0XHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gVGhlbWVba2V5XS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKTtcblxuXHRcdHRoZW1lcy5mb3JFYWNoKCh0aGVtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBjc3NDbGFzcyA9IERpYWxvZ0NvbXBvbmVudC5DU1NfQ0xBU1NfUFJFRklYICsgdGhlbWU7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==