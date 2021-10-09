/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
/**
 * @template T
 */
var /**
 * @template T
 */
StreamCloser = /** @class */ (function () {
    function StreamCloser() {
        this.unsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    StreamCloser.prototype.takeUntil = /**
     * @return {?}
     */
    function () {
        return hermesTakeUntil(this.unsubscribe$);
    };
    /**
     * @return {?}
     */
    StreamCloser.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        if (((/** @type {?} */ (this.unsubscribe$))).isCompleted) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNsb3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR3BFOzs7O0lBSUM7UUFGaUIsaUJBQVksR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBRzFELENBQUM7Ozs7SUFFRCxnQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxFQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDM0MsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7Ozs7Ozs7Ozs7SUFsQkEsb0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3ViamVjdCwgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5leHBvcnQgY2xhc3MgU3RyZWFtQ2xvc2VyPFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHR0YWtlVW50aWwoKSB7XG5cdFx0cmV0dXJuIGhlcm1lc1Rha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCk7XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHRpZiAoKHRoaXMudW5zdWJzY3JpYmUkIGFzIGFueSkuaXNDb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG59XG4iXX0=