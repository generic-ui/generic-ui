/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FabricReactive } from '../fabric-reactive';
import { distinctUntilChanged } from 'rxjs/operators';
import { Theme } from '../../themes/theme';
/**
 * @abstract
 */
var FabricThemedComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricThemedComponent, _super);
    function FabricThemedComponent(elementRef, renderer, themeService) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.themeService = themeService;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricThemedComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.themeService
            .onTheme()
            .pipe(distinctUntilChanged(), this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            _this.addTheme(theme);
        }));
    };
    /**
     * @protected
     * @param {?} theme
     * @return {?}
     */
    FabricThemedComponent.prototype.addTheme = /**
     * @protected
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.removeThemes();
        /** @type {?} */
        var cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    };
    /**
     * @protected
     * @return {?}
     */
    FabricThemedComponent.prototype.removeThemes = /**
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
            var cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme;
            _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    FabricThemedComponent.prototype.getElementRef = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @protected
     * @return {?}
     */
    FabricThemedComponent.prototype.getRenderer = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.renderer;
    };
    FabricThemedComponent.CSS_CLASS_PREFIX = 'gui-';
    return FabricThemedComponent;
}(FabricReactive));
export { FabricThemedComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricThemedComponent.CSS_CLASS_PREFIX;
    /**
     * @type {?}
     * @private
     */
    FabricThemedComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricThemedComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FabricThemedComponent.prototype.themeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRoZW1lZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJjb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRzNDO0lBQW9ELGlEQUFjO0lBSWpFLCtCQUF1QyxVQUFzQixFQUNyQyxRQUFtQixFQUNuQixZQUFxQztRQUY3RCxZQUdDLGlCQUFPLFNBQ1A7UUFKc0MsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDckMsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixrQkFBWSxHQUFaLFlBQVksQ0FBeUI7O0lBRTdELENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFBQSxpQkFVQztRQVRBLElBQUksQ0FBQyxZQUFZO2FBQ2YsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLG9CQUFvQixFQUFFLEVBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFZO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFUyx3Q0FBUTs7Ozs7SUFBbEIsVUFBbUIsS0FBWTtRQUM5QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBQ2QsUUFBUSxHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFUyw0Q0FBWTs7OztJQUF0QjtRQUFBLGlCQVNDOztZQVJNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUMxQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQXhCLENBQXdCLEVBQUM7YUFDOUMsTUFBTTs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDO1FBRTlDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFhOztnQkFDdEIsUUFBUSxHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixHQUFHLEtBQUs7WUFDL0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVTLDZDQUFhOzs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRVMsMkNBQVc7Ozs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQTVDdUIsc0NBQWdCLEdBQUcsTUFBTSxDQUFDO0lBNkNuRCw0QkFBQztDQUFBLEFBL0NELENBQW9ELGNBQWMsR0ErQ2pFO1NBL0NxQixxQkFBcUI7Ozs7OztJQUUxQyx1Q0FBa0Q7Ozs7O0lBRTVCLDJDQUF1Qzs7Ozs7SUFDdEQseUNBQW9DOzs7OztJQUNwQyw2Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1NTX0NMQVNTX1BSRUZJWCA9ICdndWktJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgdGhlbWVTZXJ2aWNlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50aGVtZVNlcnZpY2Vcblx0XHRcdC5vblRoZW1lKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5hZGRUaGVtZSh0aGVtZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRUaGVtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZVRoZW1lcygpO1xuXHRcdGNvbnN0IGNzc0NsYXNzID0gRmFicmljVGhlbWVkQ29tcG9uZW50LkNTU19DTEFTU19QUkVGSVggKyB0aGVtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZVRoZW1lcygpOiB2b2lkIHtcblx0XHRjb25zdCB0aGVtZXMgPSBPYmplY3Qua2V5cyhUaGVtZSlcblx0XHRcdFx0XHRcdFx0IC5tYXAoKGtleTogc3RyaW5nKSA9PiBUaGVtZVtrZXldLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdFx0XHRcdCAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpO1xuXG5cdFx0dGhlbWVzLmZvckVhY2goKHRoZW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IGNzc0NsYXNzID0gRmFicmljVGhlbWVkQ29tcG9uZW50LkNTU19DTEFTU19QUkVGSVggKyB0aGVtZTtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0UmVuZGVyZXIoKTogUmVuZGVyZXIyIHtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJlcjtcblx0fVxufVxuXG4iXX0=