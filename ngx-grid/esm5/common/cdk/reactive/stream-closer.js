/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @template T
 */
var /**
 * @template T
 */
StreamCloser = /** @class */ (function () {
    function StreamCloser() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    StreamCloser.prototype.takeUntil = /**
     * @return {?}
     */
    function () {
        return takeUntil(this.unsubscribe$);
    };
    /**
     * @return {?}
     */
    StreamCloser.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        if (this.unsubscribe$.isStopped) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    return StreamCloser;
}());
/**
 * @template T
 */
export { StreamCloser };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StreamCloser.prototype.unsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNsb3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUczQzs7OztJQUlDO1FBRmlCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUdwRCxDQUFDOzs7O0lBRUQsZ0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQ2hDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUYsbUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7Ozs7Ozs7O0lBbEJBLG9DQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgY2xhc3MgU3RyZWFtQ2xvc2VyPFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHR0YWtlVW50aWwoKSB7XG5cdFx0cmV0dXJuIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCk7XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy51bnN1YnNjcmliZSQuaXNTdG9wcGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIl19