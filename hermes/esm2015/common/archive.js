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
export class Archive {
    /**
     * @protected
     * @param {?=} value
     */
    constructor(value) {
        this.archive$ = HermesArchiveSubject.of(value);
    }
    /**
     * @return {?}
     */
    on() {
        return this.archive$
            .toObservable()
            .pipe(hermesDistinctUntilChanged(this.compare));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.archive$.next(value);
    }
    /**
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    compare(one, two) {
        return one === two;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Archive.prototype.archive$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7QUFFN0YsTUFBTSxPQUFnQixPQUFPOzs7OztJQUk1QixZQUFzQixLQUFTO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxFQUFFO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3hDLENBQUM7SUFDUixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQU0sRUFBRSxHQUFNO1FBQ3JCLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0Q7Ozs7OztJQXJCQSwyQkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNBcmNoaXZlU3ViamVjdCB9IGZyb20gJy4vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLmFyY2hpdmUtc3ViamVjdCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJy4vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5kaXN0aW5jdC11bnRpbC1jaGFuZ2VkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFyY2hpdmU8VD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYXJjaGl2ZSQ6IEhlcm1lc0FyY2hpdmVTdWJqZWN0PFQ+O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih2YWx1ZT86IFQpIHtcblx0XHR0aGlzLmFyY2hpdmUkID0gSGVybWVzQXJjaGl2ZVN1YmplY3Qub2YodmFsdWUpO1xuXHR9XG5cblx0b24oKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZSRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKHRoaXMuY29tcGFyZSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG5leHQodmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLmFyY2hpdmUkLm5leHQodmFsdWUpO1xuXHR9XG5cblx0Y29tcGFyZShvbmU6IFQsIHR3bzogVCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvbmUgPT09IHR3bztcblx0fVxufVxuIl19