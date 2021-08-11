/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FabricReactive } from '../fabric-reactive';
import { distinctUntilChanged } from 'rxjs/operators';
import { Theme } from '../../themes/theme';
/**
 * @abstract
 */
export class FabricThemedComponent extends FabricReactive {
    /**
     * @protected
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} themeService
     */
    constructor(elementRef, renderer, themeService) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.themeService
            .onTheme()
            .pipe(distinctUntilChanged(), this.takeUntil())
            .subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            this.addTheme(theme);
        }));
    }
    /**
     * @protected
     * @param {?} theme
     * @return {?}
     */
    addTheme(theme) {
        this.removeThemes();
        /** @type {?} */
        const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    }
    /**
     * @protected
     * @return {?}
     */
    removeThemes() {
        /** @type {?} */
        const themes = Object.keys(Theme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => Theme[key].toLowerCase()))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => !Number.isInteger(val)));
        themes.forEach((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => {
            /** @type {?} */
            const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme;
            this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * @protected
     * @return {?}
     */
    getRenderer() {
        return this.renderer;
    }
}
FabricThemedComponent.CSS_CLASS_PREFIX = 'gui-';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRoZW1lZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJjb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHM0MsTUFBTSxPQUFnQixxQkFBc0IsU0FBUSxjQUFjOzs7Ozs7O0lBSWpFLFlBQXVDLFVBQXNCLEVBQ3JDLFFBQW1CLEVBQ25CLFlBQXFDO1FBQzVELEtBQUssRUFBRSxDQUFDO1FBSDhCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBeUI7SUFFN0QsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsWUFBWTthQUNmLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixvQkFBb0IsRUFBRSxFQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVTLFFBQVEsQ0FBQyxLQUFZO1FBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Y0FDZCxRQUFRLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUU3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVTLFlBQVk7O2NBQ2YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzFCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFDO2FBQzlDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBRTlDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTs7a0JBQzFCLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLO1lBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFUyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVTLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7O0FBNUN1QixzQ0FBZ0IsR0FBRyxNQUFNLENBQUM7Ozs7OztJQUFsRCx1Q0FBa0Q7Ozs7O0lBRTVCLDJDQUF1Qzs7Ozs7SUFDdEQseUNBQW9DOzs7OztJQUNwQyw2Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYnJpY1RoZW1lZENvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1NTX0NMQVNTX1BSRUZJWCA9ICdndWktJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgdGhlbWVTZXJ2aWNlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50aGVtZVNlcnZpY2Vcblx0XHRcdC5vblRoZW1lKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aGVtZTogVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5hZGRUaGVtZSh0aGVtZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRUaGVtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZVRoZW1lcygpO1xuXHRcdGNvbnN0IGNzc0NsYXNzID0gRmFicmljVGhlbWVkQ29tcG9uZW50LkNTU19DTEFTU19QUkVGSVggKyB0aGVtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZVRoZW1lcygpOiB2b2lkIHtcblx0XHRjb25zdCB0aGVtZXMgPSBPYmplY3Qua2V5cyhUaGVtZSlcblx0XHRcdFx0XHRcdFx0IC5tYXAoKGtleTogc3RyaW5nKSA9PiBUaGVtZVtrZXldLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdFx0XHRcdCAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpO1xuXG5cdFx0dGhlbWVzLmZvckVhY2goKHRoZW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IGNzc0NsYXNzID0gRmFicmljVGhlbWVkQ29tcG9uZW50LkNTU19DTEFTU19QUkVGSVggKyB0aGVtZTtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0UmVuZGVyZXIoKTogUmVuZGVyZXIyIHtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJlcjtcblx0fVxufVxuXG4iXX0=