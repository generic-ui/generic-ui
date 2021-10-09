/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesArchiveSubject } from './stream/observable/hermes.archive-subject';
import { hermesDistinctUntilChanged } from './stream/operator/hermes.distinct-until-changed';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
Archive = /** @class */ (function () {
    function Archive(value) {
        this.archive$ = HermesArchiveSubject.of(value);
    }
    /**
     * @return {?}
     */
    Archive.prototype.on = /**
     * @return {?}
     */
    function () {
        return this.archive$
            .toObservable()
            .pipe(hermesDistinctUntilChanged(this.compare));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Archive.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.archive$.next(value);
    };
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    Archive.prototype.compare = /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    function (one, two) {
        return one === two;
    };
    return Archive;
}());
/**
 * @abstract
 * @template T
 */
export { Archive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Archive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7QUFFN0Y7Ozs7O0lBSUMsaUJBQXNCLEtBQVM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELG9CQUFFOzs7SUFBRjtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osMEJBQTBCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUN4QyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxzQkFBSTs7OztJQUFKLFVBQUssS0FBUTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELHlCQUFPOzs7OztJQUFQLFVBQVEsR0FBTSxFQUFFLEdBQU07UUFDckIsT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7Ozs7Ozs7Ozs7SUFyQkEsMkJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzQXJjaGl2ZVN1YmplY3QgfSBmcm9tICcuL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5hcmNoaXZlLXN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICcuL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZGlzdGluY3QtdW50aWwtY2hhbmdlZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcmNoaXZlPFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFyY2hpdmUkOiBIZXJtZXNBcmNoaXZlU3ViamVjdDxUPjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWU/OiBUKSB7XG5cdFx0dGhpcy5hcmNoaXZlJCA9IEhlcm1lc0FyY2hpdmVTdWJqZWN0Lm9mKHZhbHVlKTtcblx0fVxuXG5cdG9uKCk6IEhlcm1lc09ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmFyY2hpdmUkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCh0aGlzLmNvbXBhcmUpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5hcmNoaXZlJC5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdGNvbXBhcmUob25lOiBULCB0d286IFQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gb25lID09PSB0d287XG5cdH1cbn1cbiJdfQ==