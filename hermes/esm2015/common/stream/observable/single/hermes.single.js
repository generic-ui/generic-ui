/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from '../hermes.observable';
import { HermesSingleSubscriber } from '../subscriber/hermes.single-subscriber';
/**
 * @template T
 */
export class HermesSingle extends HermesObservable {
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    createSubscriber(next, error, complete) {
        return new HermesSingleSubscriber({
            next,
            error,
            complete
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9zaW5nbGUvaGVybWVzLnNpbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7QUFHaEYsTUFBTSxPQUFPLFlBQWdCLFNBQVEsZ0JBQW1COzs7Ozs7OztJQUU3QyxnQkFBZ0IsQ0FDekIsSUFBeUIsRUFDekIsS0FBNEIsRUFDNUIsUUFBcUI7UUFHckIsT0FBTyxJQUFJLHNCQUFzQixDQUFDO1lBQ2pDLElBQUk7WUFDSixLQUFLO1lBQ0wsUUFBUTtTQUNSLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBIZXJtZXNTaW5nbGVTdWJzY3JpYmVyIH0gZnJvbSAnLi4vc3Vic2NyaWJlci9oZXJtZXMuc2luZ2xlLXN1YnNjcmliZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNTaW5nbGU8VD4gZXh0ZW5kcyBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHRwcm90ZWN0ZWQgY3JlYXRlU3Vic2NyaWJlcihcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNTaW5nbGVTdWJzY3JpYmVyKHtcblx0XHRcdG5leHQsXG5cdFx0XHRlcnJvcixcblx0XHRcdGNvbXBsZXRlXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==