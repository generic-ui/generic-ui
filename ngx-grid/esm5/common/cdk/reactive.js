/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
var /**
 * @abstract
 */
Reactive = /** @class */ (function () {
    function Reactive() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    Reactive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.unsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.takeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return takeUntil(this.unsubscribe$);
    };
    return Reactive;
}());
/**
 * @abstract
 */
export { Reactive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.unsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDOzs7O0lBSUM7UUFGaUIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBR3BELENBQUM7Ozs7SUFFRCw4QkFBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFUyw4QkFBVzs7OztJQUFyQjtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVTLDRCQUFTOzs7O0lBQW5CO1FBQ0MsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRixlQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQzs7Ozs7Ozs7OztJQWxCQSxnQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKTtcblx0fVxuXG59XG4iXX0=