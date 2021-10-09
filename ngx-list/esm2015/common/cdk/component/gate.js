/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StreamCloser } from '../reactive/stream-closer';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
/**
 * @abstract
 * @template T
 */
export class Gate {
    /**
     * @protected
     */
    constructor() {
        this.streamCloser = new StreamCloser();
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.streamCloser.unsubscribe();
        this.hermesUnsubscribe();
    }
    /**
     * @param {?} propertyName
     * @param {?} changes
     * @return {?}
     */
    isDefined(propertyName, changes) {
        return changes[propertyName] !== undefined && changes[propertyName].currentValue !== undefined;
    }
    /**
     * @template V
     * @param {?} stream$
     * @param {?} emitter
     * @return {?}
     */
    subscribeAndEmit(stream$, emitter) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            emitter.emit(value);
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        this.streamCloser.unsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    /**
     * @protected
     * @return {?}
     */
    takeUntil() {
        return this.streamCloser.takeUntil();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Gate.prototype.streamCloser;
    /**
     * @type {?}
     * @private
     */
    Gate.prototype.hermesUnsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUV0RixNQUFNLE9BQWdCLElBQUk7Ozs7SUFNekI7UUFKaUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLHVCQUFrQixHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFHaEUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxZQUFvQixFQUFFLE9BQXFCO1FBQ3BELE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQ2YsT0FBNEIsRUFDNUIsT0FBd0I7UUFFeEIsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRVMsaUJBQWlCO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRVMsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUVEOzs7Ozs7SUE5Q0EsNEJBQW1EOzs7OztJQUVuRCxrQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RyZWFtQ2xvc2VyIH0gZnJvbSAnLi4vcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2F0ZTxUID0gYW55PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNVbnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuc3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSgpO1xuXHR9XG5cblx0aXNEZWZpbmVkKHByb3BlcnR5TmFtZTogc3RyaW5nLCBjaGFuZ2VzOiBOZ0NoYW5nZXM8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY2hhbmdlc1twcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlc1twcm9wZXJ0eU5hbWVdLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0c3Vic2NyaWJlQW5kRW1pdDxWPihcblx0XHRzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFY+LFxuXHRcdGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxWPlxuXHQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IFYpID0+IHtcblx0XHRcdFx0ZW1pdHRlci5lbWl0KHZhbHVlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVGFrZVVudGlsKCk6IGFueSB7XG5cdFx0cmV0dXJuIGhlcm1lc1Rha2VVbnRpbCh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdGFrZVVudGlsKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmVhbUNsb3Nlci50YWtlVW50aWwoKTtcblx0fVxuXG59XG4iXX0=