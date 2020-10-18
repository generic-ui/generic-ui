/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Reactive } from './reactive';
/**
 * @abstract
 */
export class SmartComponent extends Reactive {
    /**
     * @protected
     * @param {?} detector
     */
    constructor(detector) {
        super();
        this.detector = detector;
        this.viewRendered = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewRendered = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    reRender() {
        if (this.isViewRendered()) {
            this.detector.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    isViewRendered() {
        return this.viewRendered;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartComponent.prototype.viewRendered;
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUV0QyxNQUFNLE9BQWdCLGNBQWUsU0FBUSxRQUFROzs7OztJQUlwRCxZQUF5QyxRQUEyQjtRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQURnQyxhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUY1RCxpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUl0QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FFRDs7Ozs7O0lBeEJBLHNDQUFzQzs7Ozs7SUFFaEIsa0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuL3JlYWN0aXZlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgdmlld1JlbmRlcmVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMudmlld1JlbmRlcmVkID0gdHJ1ZTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRyZVJlbmRlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ZpZXdSZW5kZXJlZCgpKSB7XG5cdFx0XHR0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRpc1ZpZXdSZW5kZXJlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3UmVuZGVyZWQ7XG5cdH1cblxufVxuIl19