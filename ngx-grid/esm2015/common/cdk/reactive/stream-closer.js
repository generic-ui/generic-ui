/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
/**
 * @template T
 */
export class StreamCloser {
    constructor() {
        this.unsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    takeUntil() {
        return hermesTakeUntil(this.unsubscribe$);
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        if (((/** @type {?} */ (this.unsubscribe$))).isCompleted) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNsb3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR3BFLE1BQU0sT0FBTyxZQUFZO0lBSXhCO1FBRmlCLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUcxRCxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxFQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDM0MsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FFRDs7Ozs7O0lBbEJBLG9DQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc1N1YmplY3QsIGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmVhbUNsb3NlcjxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0dGFrZVVudGlsKCkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0aWYgKCh0aGlzLnVuc3Vic2NyaWJlJCBhcyBhbnkpLmlzQ29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIl19