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
     * @template T
     * @return {?}
     */
    Reactive.prototype.takeUntil = /**
     * @protected
     * @template T
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUzQzs7OztJQUlDO1FBRmlCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUdwRCxDQUFDOzs7O0lBRUQsOEJBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRVMsOEJBQVc7Ozs7SUFBckI7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRVMsNEJBQVM7Ozs7O0lBQW5CO1FBQ0MsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRixlQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQzs7Ozs7Ozs7OztJQWxCQSxnQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbDxUPigpOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuXHRcdHJldHVybiB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpO1xuXHR9XG5cbn1cbiJdfQ==