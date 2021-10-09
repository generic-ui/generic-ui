/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesObservable } from './hermes.observable';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
import { hermesEmptySubscription } from '../subscription/hermes-empty.subscription';
/**
 * @template T
 */
var /**
 * @template T
 */
HermesSubject = /** @class */ (function (_super) {
    tslib_1.__extends(HermesSubject, _super);
    function HermesSubject() {
        var _this = _super.call(this) || this;
        /**
         * After error
         */
        _this.thrownError = null;
        /**
         * After complete
         */
        _this.isCompleted = false;
        /**
         * After unsubscribe
         */
        _this.isClosed = false;
        _this.subscribers = [];
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesSubject.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        this.verifyNotClosed();
        if (this.isCompleted || this.thrownError !== null) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subs = _c.value;
                subs.next(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    HermesSubject.prototype.error = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        var e_2, _a;
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.thrownError = error;
        try {
            for (var _b = tslib_1.__values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subs = _c.value;
                subs.error(error);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.subscribers.length = 0;
    };
    /**
     * @return {?}
     */
    HermesSubject.prototype.complete = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.isCompleted = true;
        try {
            for (var _b = tslib_1.__values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subs = _c.value;
                subs.complete();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.subscribers.length = 0;
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesSubject.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        this.verifyNotClosed();
        /** @type {?} */
        var subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        if (this.thrownError !== null) {
            subscriber.error(this.thrownError);
            return hermesEmptySubscription();
        }
        else if (this.isCompleted) {
            subscriber.complete();
            return hermesEmptySubscription();
        }
        else {
            this.subscribers.push(subscriber);
            return this.getSubscription();
        }
    };
    /**
     * @return {?}
     */
    HermesSubject.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        this.isCompleted = true;
        this.isClosed = true;
        this.subscribers.length = 0;
    };
    /**
     * @return {?}
     */
    HermesSubject.prototype.toObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscription = _this.subscribe((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return observer.next(v); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return observer.error(error); }), (/**
             * @return {?}
             */
            function () { return observer.complete(); }));
            return (/**
             * @return {?}
             */
            function () { return subscription.unsubscribe(); });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    HermesSubject.prototype.verifyNotClosed = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isClosed) {
            throw new Error('Observable already closed');
        }
    };
    return HermesSubject;
}(HermesObservable));
/**
 * @template T
 */
export { HermesSubject };
if (false) {
    /**
     * After error
     * @type {?}
     * @private
     */
    HermesSubject.prototype.thrownError;
    /**
     * After complete
     * @type {?}
     * @private
     */
    HermesSubject.prototype.isCompleted;
    /**
     * After unsubscribe
     * @type {?}
     * @private
     */
    HermesSubject.prototype.isClosed;
    /**
     * @type {?}
     * @private
     */
    HermesSubject.prototype.subscribers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQUVwRjs7OztJQUFzQyx5Q0FBbUI7SUFtQnhEO1FBQUEsWUFDQyxpQkFBTyxTQUNQOzs7O1FBaEJPLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7OztRQUtuQyxpQkFBVyxHQUFZLEtBQUssQ0FBQzs7OztRQUs3QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRWpCLGlCQUFXLEdBQStCLEVBQUUsQ0FBQzs7SUFJOUQsQ0FBQzs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKLFVBQUssS0FBUTs7UUFFWixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ2xELE9BQU87U0FDUDs7WUFFRCxLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBaEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQjs7Ozs7Ozs7O0lBQ0YsQ0FBQzs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMLFVBQU0sS0FBVTs7UUFFZixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxXQUFX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QUE5SEQsQ0FBc0MsZ0JBQWdCLEdBOEhyRDs7Ozs7Ozs7Ozs7SUF6SEEsb0NBQTJDOzs7Ozs7SUFLM0Msb0NBQXFDOzs7Ozs7SUFLckMsaUNBQWtDOzs7OztJQUVsQyxvQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IGhlcm1lc0VtcHR5U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy1lbXB0eS5zdWJzY3JpcHRpb24nO1xuXG5leHBvcnQgY2xhc3MgSGVybWVzU3ViamVjdDxUPiBleHRlbmRzIEhlcm1lc09ic2VydmFibGU8VD4ge1xuXG5cdC8qKlxuXHQgKiBBZnRlciBlcnJvclxuXHQgKi9cblx0cHJpdmF0ZSB0aHJvd25FcnJvcjogRXJyb3IgfCBzdHJpbmcgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBBZnRlciBjb21wbGV0ZVxuXHQgKi9cblx0cHJpdmF0ZSBpc0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBBZnRlciB1bnN1YnNjcmliZVxuXHQgKi9cblx0cHJpdmF0ZSBpc0Nsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnM6IEFycmF5PEhlcm1lc1N1YnNjcmliZXI8VD4+ID0gW107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5leHQodmFsdWU6IFQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVyaWZ5Tm90Q2xvc2VkKCk7XG5cblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlZCB8fCB0aGlzLnRocm93bkVycm9yICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBzdWJzIG9mIHRoaXMuc3Vic2NyaWJlcnMpIHtcblx0XHRcdHN1YnMubmV4dCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50aHJvd25FcnJvciA9IGVycm9yO1xuXG5cdFx0Zm9yIChjb25zdCBzdWJzIG9mIHRoaXMuc3Vic2NyaWJlcnMpIHtcblx0XHRcdHN1YnMuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0XHR0aGlzLnN1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRjb21wbGV0ZSgpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVyaWZ5Tm90Q2xvc2VkKCk7XG5cblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0Zm9yIChjb25zdCBzdWJzIG9mIHRoaXMuc3Vic2NyaWJlcnMpIHtcblx0XHRcdHN1YnMuY29tcGxldGUoKTtcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuXHR9XG5cblx0c3Vic2NyaWJlKFxuXHRcdG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG5cdFx0ZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0c3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPlxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRhcmc6IGFueVxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGxldCBzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+O1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEhlcm1lc1N1YnNjcmliZXIpIHtcblx0XHRcdHN1YnNjcmliZXIgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YnNjcmliZXIgPSB0aGlzLmNyZWF0ZVN1YnNjcmliZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudGhyb3duRXJyb3IgIT09IG51bGwpIHtcblx0XHRcdHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG5cdFx0XHRyZXR1cm4gaGVybWVzRW1wdHlTdWJzY3JpcHRpb24oKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNDb21wbGV0ZWQpIHtcblx0XHRcdHN1YnNjcmliZXIuY29tcGxldGUoKTtcblx0XHRcdHJldHVybiBoZXJtZXNFbXB0eVN1YnNjcmlwdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRTdWJzY3JpcHRpb24oKTtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcblx0XHR0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLnN1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHR0b09ic2VydmFibGUoKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmUoXG5cdFx0XHRcdCh2KSA9PiBvYnNlcnZlci5uZXh0KHYpLFxuXHRcdFx0XHQoZXJyb3IpID0+IG9ic2VydmVyLmVycm9yKGVycm9yKSxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB2ZXJpZnlOb3RDbG9zZWQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDbG9zZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignT2JzZXJ2YWJsZSBhbHJlYWR5IGNsb3NlZCcpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=