/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesObservable } from './hermes.observable';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
import { hermesEmptySubscription } from '../subscription/hermes-empty.subscription';
/**
 * @template T
 */
export class HermesSubject extends HermesObservable {
    constructor() {
        super();
        /**
         * After error
         */
        this.thrownError = null;
        /**
         * After complete
         */
        this.isCompleted = false;
        /**
         * After unsubscribe
         */
        this.isClosed = false;
        this.subscribers = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.verifyNotClosed();
        if (this.isCompleted || this.thrownError !== null) {
            return;
        }
        for (const subs of this.subscribers) {
            subs.next(value);
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    error(error) {
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.thrownError = error;
        for (const subs of this.subscribers) {
            subs.error(error);
        }
        this.subscribers.length = 0;
    }
    /**
     * @return {?}
     */
    complete() {
        this.verifyNotClosed();
        if (this.isCompleted) {
            return;
        }
        this.isCompleted = true;
        for (const subs of this.subscribers) {
            subs.complete();
        }
        this.subscribers.length = 0;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        this.verifyNotClosed();
        /** @type {?} */
        let subscriber;
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
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        this.isCompleted = true;
        this.isClosed = true;
        this.subscribers.length = 0;
    }
    /**
     * @return {?}
     */
    toObservable() {
        return new HermesObservable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const subscription = this.subscribe((/**
             * @param {?} v
             * @return {?}
             */
            (v) => observer.next(v)), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => observer.error(error)), (/**
             * @return {?}
             */
            () => observer.complete()));
            return (/**
             * @return {?}
             */
            () => subscription.unsubscribe());
        }));
    }
    /**
     * @private
     * @return {?}
     */
    verifyNotClosed() {
        if (this.isClosed) {
            throw new Error('Observable already closed');
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBRXBGLE1BQU0sT0FBTyxhQUFpQixTQUFRLGdCQUFtQjtJQW1CeEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQzs7OztRQWZELGdCQUFXLEdBQW1CLElBQUksQ0FBQzs7OztRQUtuQyxnQkFBVyxHQUFZLEtBQUssQ0FBQzs7OztRQUs3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQStCLEVBQUUsQ0FBQztJQUk5RCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNsRCxPQUFPO1NBQ1A7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtJQUNGLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFFZixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXpCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBVUQsU0FBUyxDQUNSLEdBQVE7UUFHUixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBRW5CLFVBQStCO1FBRW5DLElBQUksR0FBRyxZQUFZLGdCQUFnQixFQUFFO1lBQ3BDLFVBQVUsR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTTtZQUNOLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDOUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsT0FBTyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzVCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixPQUFPLHVCQUF1QixFQUFFLENBQUM7U0FDakM7YUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksZ0JBQWdCOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7a0JBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUzs7OztZQUNsQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOzs7WUFDaEMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUN6QjtZQUVEOzs7WUFBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLGVBQWU7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM3QztJQUNGLENBQUM7Q0FFRDs7Ozs7OztJQXpIQSxvQ0FBMkM7Ozs7OztJQUszQyxvQ0FBcUM7Ozs7OztJQUtyQyxpQ0FBa0M7Ozs7O0lBRWxDLG9DQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmlwdGlvbiB9IGZyb20gJy4uL3N1YnNjcmlwdGlvbi9oZXJtZXMuc3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuaW1wb3J0IHsgaGVybWVzRW1wdHlTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLWVtcHR5LnN1YnNjcmlwdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNTdWJqZWN0PFQ+IGV4dGVuZHMgSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0LyoqXG5cdCAqIEFmdGVyIGVycm9yXG5cdCAqL1xuXHRwcml2YXRlIHRocm93bkVycm9yOiBFcnJvciB8IHN0cmluZyA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEFmdGVyIGNvbXBsZXRlXG5cdCAqL1xuXHRwcml2YXRlIGlzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEFmdGVyIHVuc3Vic2NyaWJlXG5cdCAqL1xuXHRwcml2YXRlIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyczogQXJyYXk8SGVybWVzU3Vic2NyaWJlcjxUPj4gPSBbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkIHx8IHRoaXMudGhyb3duRXJyb3IgIT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHN1YnMgb2YgdGhpcy5zdWJzY3JpYmVycykge1xuXHRcdFx0c3Vicy5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvcihlcnJvcjogYW55KTogdm9pZCB7XG5cblx0XHR0aGlzLnZlcmlmeU5vdENsb3NlZCgpO1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnRocm93bkVycm9yID0gZXJyb3I7XG5cblx0XHRmb3IgKGNvbnN0IHN1YnMgb2YgdGhpcy5zdWJzY3JpYmVycykge1xuXHRcdFx0c3Vicy5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHRcdHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcblx0fVxuXG5cdGNvbXBsZXRlKCk6IHZvaWQge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRmb3IgKGNvbnN0IHN1YnMgb2YgdGhpcy5zdWJzY3JpYmVycykge1xuXHRcdFx0c3Vicy5jb21wbGV0ZSgpO1xuXHRcdH1cblx0XHR0aGlzLnN1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRzdWJzY3JpYmUoXG5cdFx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdGFyZzogYW55XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0XHR0aGlzLnZlcmlmeU5vdENsb3NlZCgpO1xuXG5cdFx0bGV0IHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD47XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgSGVybWVzU3Vic2NyaWJlcikge1xuXHRcdFx0c3Vic2NyaWJlciA9IGFyZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3Vic2NyaWJlciA9IHRoaXMuY3JlYXRlU3Vic2NyaWJlcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy50aHJvd25FcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0c3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcblx0XHRcdHJldHVybiBoZXJtZXNFbXB0eVN1YnNjcmlwdGlvbigpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5pc0NvbXBsZXRlZCkge1xuXHRcdFx0c3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuXHRcdFx0cmV0dXJuIGhlcm1lc0VtcHR5U3Vic2NyaXB0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcblx0XHRcdHJldHVybiB0aGlzLmdldFN1YnNjcmlwdGlvbigpO1xuXHRcdH1cblx0fVxuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuXHRcdHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcblx0fVxuXG5cdHRvT2JzZXJ2YWJsZSgpOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZShcblx0XHRcdFx0KHYpID0+IG9ic2VydmVyLm5leHQodiksXG5cdFx0XHRcdChlcnJvcikgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHZlcmlmeU5vdENsb3NlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0Nsb3NlZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdPYnNlcnZhYmxlIGFscmVhZHkgY2xvc2VkJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==