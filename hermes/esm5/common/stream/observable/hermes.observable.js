/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
/**
 * @record
 * @template T, R
 */
export function HermesOperatorFunction() { }
/**
 * @template T
 */
var /**
 * @template T
 */
HermesObservable = /** @class */ (function () {
    function HermesObservable(generator) {
        this.generatorFn = generator;
    }
    /**
     * @template T, R
     * @param {...?} operations
     * @return {?}
     */
    HermesObservable.prototype.pipe = /**
     * @template T, R
     * @param {...?} operations
     * @return {?}
     */
    function () {
        var e_1, _a;
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        this.source = this;
        try {
            for (var operations_1 = tslib_1.__values(operations), operations_1_1 = operations_1.next(); !operations_1_1.done; operations_1_1 = operations_1.next()) {
                var operation = operations_1_1.value;
                this.source = this.innerPipe(operation, this.source);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (operations_1_1 && !operations_1_1.done && (_a = operations_1.return)) _a.call(operations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.source;
    };
    /**
     * @private
     * @template T, R
     * @param {?} operation
     * @param {?} stream$
     * @return {?}
     */
    HermesObservable.prototype.innerPipe = /**
     * @private
     * @template T, R
     * @param {?} operation
     * @param {?} stream$
     * @return {?}
     */
    function (operation, stream$) {
        return ((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            return operation(input);
        }))(stream$);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesObservable.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else if (arg !== null && this.isObserver(arg)) {
            var next = arg.next, error = arg.error, complete = arg.complete;
            subscriber = this.createSubscriber(next, error, complete);
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        if (this.generatorFn) {
            this.generatorFinalize = this.generatorFn(subscriber);
            subscriber.setFinalize(this.generatorFinalize);
        }
        return this.getSubscription();
    };
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    HermesObservable.prototype.createSubscriber = /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (next, error, complete) {
        return new HermesSubscriber({
            next: next,
            error: error,
            complete: complete
        });
    };
    /**
     * @protected
     * @return {?}
     */
    HermesObservable.prototype.getSubscription = /**
     * @protected
     * @return {?}
     */
    function () {
        return new HermesSubscription(this.generatorFinalize);
    };
    /**
     * @private
     * @param {?} observer
     * @return {?}
     */
    HermesObservable.prototype.isObserver = /**
     * @private
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        return typeof observer === 'object';
    };
    return HermesObservable;
}());
/**
 * @template T
 */
export { HermesObservable };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesObservable.prototype.source;
    /**
     * @type {?}
     * @protected
     */
    HermesObservable.prototype.generatorFn;
    /**
     * @type {?}
     * @private
     */
    HermesObservable.prototype.generatorFinalize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm9ic2VydmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFJbEUsNENBRUM7Ozs7QUFFRDs7OztJQVVDLDBCQUFZLFNBQWtEO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKOztRQUFXLG9CQUFzRDthQUF0RCxVQUFzRCxFQUF0RCxxQkFBc0QsRUFBdEQsSUFBc0Q7WUFBdEQsK0JBQXNEOztRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs7WUFFbkIsS0FBd0IsSUFBQSxlQUFBLGlCQUFBLFVBQVUsQ0FBQSxzQ0FBQSw4REFBRTtnQkFBL0IsSUFBTSxTQUFTLHVCQUFBO2dCQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyRDs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7O0lBRU8sb0NBQVM7Ozs7Ozs7SUFBakIsVUFBd0IsU0FBdUMsRUFBRSxPQUE0QjtRQUM1RixPQUFPOzs7O1FBQUMsVUFBQyxLQUFVO1lBQ2xCLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFhRCxvQ0FBUzs7OztJQUFULFVBQ0MsR0FBUTs7WUFHSixVQUErQjtRQUVuQyxJQUFJLEdBQUcsWUFBWSxnQkFBZ0IsRUFBRTtZQUNwQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFFeEMsSUFBQSxlQUFJLEVBQUUsaUJBQUssRUFBRSx1QkFBUTtZQUU3QixVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUVOLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7Ozs7SUFFUywyQ0FBZ0I7Ozs7Ozs7SUFBMUIsVUFDQyxJQUF5QixFQUN6QixLQUE0QixFQUM1QixRQUFxQjtRQUVyQixPQUFPLElBQUksZ0JBQWdCLENBQUM7WUFDM0IsSUFBSSxNQUFBO1lBQ0osS0FBSyxPQUFBO1lBQ0wsUUFBUSxVQUFBO1NBQ1IsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFUywwQ0FBZTs7OztJQUF6QjtRQUNDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyxxQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsUUFBYTtRQUMvQixPQUFPLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBdEZELElBc0ZDOzs7Ozs7Ozs7O0lBcEZBLGtDQUFvQzs7Ozs7SUFJcEMsdUNBQW9DOzs7OztJQUVwQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi9oZXJtZXMub2JzZXJ2ZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG5cdChzb3VyY2U6IEhlcm1lc09ic2VydmFibGU8VD4pOiBIZXJtZXNPYnNlcnZhYmxlPFI+XG59XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHRwcml2YXRlIHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPjtcblxuXHQvLyBwcml2YXRlIG9wZXJhdG9yOiBIZXJtZXNPYnNlcnZhYmxlPFQ+O1xuXG5cdHByb3RlY3RlZCByZWFkb25seSBnZW5lcmF0b3JGbjogYW55O1xuXG5cdHByaXZhdGUgZ2VuZXJhdG9yRmluYWxpemU6ICgpID0+IHZvaWQ7XG5cblx0Y29uc3RydWN0b3IoZ2VuZXJhdG9yPzogKG9ic2VydmVyPzogSGVybWVzT2JzZXJ2ZXI8VD4pID0+IHZvaWQpIHtcblx0XHR0aGlzLmdlbmVyYXRvckZuID0gZ2VuZXJhdG9yO1xuXHR9XG5cblx0cGlwZTxULCBSPiguLi5vcGVyYXRpb25zOiBBcnJheTxIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55Pj4pOiBIZXJtZXNPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHRoaXMuc291cmNlID0gdGhpcztcblxuXHRcdGZvciAoY29uc3Qgb3BlcmF0aW9uIG9mIG9wZXJhdGlvbnMpIHtcblx0XHRcdHRoaXMuc291cmNlID0gdGhpcy5pbm5lclBpcGUob3BlcmF0aW9uLCB0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnNvdXJjZTtcblx0fVxuXG5cdHByaXZhdGUgaW5uZXJQaXBlPFQsIFI+KG9wZXJhdGlvbjogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBSPiwgc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPik6IEhlcm1lc09ic2VydmFibGU8Uj4ge1xuXHRcdHJldHVybiAoKGlucHV0OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiBvcGVyYXRpb24oaW5wdXQpO1xuXHRcdH0pKHN0cmVhbSQpO1xuXHR9XG5cblx0c3Vic2NyaWJlKFxuXHRcdG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG5cdFx0ZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0c3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPlxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRvYnNlcnZlcjogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdGxldCBzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+O1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEhlcm1lc1N1YnNjcmliZXIpIHtcblx0XHRcdHN1YnNjcmliZXIgPSBhcmc7XG5cdFx0fSBlbHNlIGlmIChhcmcgIT09IG51bGwgJiYgdGhpcy5pc09ic2VydmVyKGFyZykpIHtcblxuXHRcdFx0Y29uc3QgeyBuZXh0LCBlcnJvciwgY29tcGxldGUgfSA9IGFyZztcblxuXHRcdFx0c3Vic2NyaWJlciA9IHRoaXMuY3JlYXRlU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHN1YnNjcmliZXIgPSB0aGlzLmNyZWF0ZVN1YnNjcmliZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZ2VuZXJhdG9yRm4pIHtcblx0XHRcdHRoaXMuZ2VuZXJhdG9yRmluYWxpemUgPSB0aGlzLmdlbmVyYXRvckZuKHN1YnNjcmliZXIpO1xuXHRcdFx0c3Vic2NyaWJlci5zZXRGaW5hbGl6ZSh0aGlzLmdlbmVyYXRvckZpbmFsaXplKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRTdWJzY3JpcHRpb24oKTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVTdWJzY3JpYmVyKFxuXHRcdG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG5cdFx0ZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNTdWJzY3JpYmVyKHtcblx0XHRcdG5leHQsXG5cdFx0XHRlcnJvcixcblx0XHRcdGNvbXBsZXRlXG5cdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U3Vic2NyaXB0aW9uKCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNTdWJzY3JpcHRpb24odGhpcy5nZW5lcmF0b3JGaW5hbGl6ZSk7XG5cdH1cblxuXHRwcml2YXRlIGlzT2JzZXJ2ZXIob2JzZXJ2ZXI6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2Ygb2JzZXJ2ZXIgPT09ICdvYmplY3QnO1xuXHR9XG5cbn1cbiJdfQ==