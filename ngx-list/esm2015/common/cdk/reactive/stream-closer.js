/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @template T
 */
export class StreamCloser {
    constructor() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    takeUntil() {
        return takeUntil(this.unsubscribe$);
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        if (this.unsubscribe$.isStopped) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StreamCloser.prototype.unsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNsb3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUczQyxNQUFNLE9BQU8sWUFBWTtJQUl4QjtRQUZpQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFHcEQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQ2hDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBRUQ7Ozs7OztJQWxCQSxvQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmVhbUNsb3NlcjxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0dGFrZVVudGlsKCkge1xuXHRcdHJldHVybiB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudW5zdWJzY3JpYmUkLmlzU3RvcHBlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cbn1cbiJdfQ==