/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
export class Reactive {
    /**
     * @protected
     */
    constructor() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    takeUntil() {
        return takeUntil(this.unsubscribe$);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.unsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDLE1BQU0sT0FBZ0IsUUFBUTs7OztJQUk3QjtRQUZpQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVTLFNBQVM7UUFDbEIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FFRDs7Ozs7O0lBbEJBLGdDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKTtcblx0fVxuXG59XG4iXX0=