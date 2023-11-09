import { HermesObservable } from './hermes.observable';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
import { hermesEmptySubscription } from '../subscription/hermes-empty.subscription';
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
    next(value) {
        this.verifyNotClosed();
        if (this.isCompleted || this.thrownError !== null) {
            return;
        }
        for (const subs of this.subscribers) {
            subs.next(value);
        }
    }
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
    subscribe(arg) {
        this.verifyNotClosed();
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
            return this.getSubscription(subscriber);
        }
    }
    unsubscribe() {
        this.isCompleted = true;
        this.isClosed = true;
        this.subscribers.length = 0;
    }
    toObservable() {
        return new HermesObservable((observer) => {
            const subscription = this.subscribe((v) => observer.next(v), (error) => observer.error(error), () => observer.complete());
            return () => subscription.unsubscribe();
        });
    }
    verifyNotClosed() {
        if (this.isClosed) {
            throw new Error('Observable already closed');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsTUFBTSxPQUFPLGFBQWlCLFNBQVEsZ0JBQW1CO0lBbUJ4RDtRQUNDLEtBQUssRUFBRSxDQUFDO1FBbEJUOztXQUVHO1FBQ0ssZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRTNDOztXQUVHO1FBQ0ssZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFckM7O1dBRUc7UUFDSyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQStCLEVBQUUsQ0FBQztJQUk5RCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVE7UUFFWixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ2xELE9BQU87U0FDUDtRQUVELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBRWYsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUV6QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBVVEsU0FBUyxDQUNqQixHQUFRO1FBR1IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksVUFBK0IsQ0FBQztRQUVwQyxJQUFJLEdBQUcsWUFBWSxnQkFBZ0IsRUFBRTtZQUNwQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO2FBQU07WUFDTixVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0U7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzlCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sdUJBQXVCLEVBQUUsQ0FBQztTQUNqQzthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM1QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsT0FBTyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQ2xDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUN2QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDaEMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUN6QixDQUFDO1lBRUYsT0FBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sZUFBZTtRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzdDO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4vaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBoZXJtZXNFbXB0eVN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL3N1YnNjcmlwdGlvbi9oZXJtZXMtZW1wdHkuc3Vic2NyaXB0aW9uJztcblxuZXhwb3J0IGNsYXNzIEhlcm1lc1N1YmplY3Q8VD4gZXh0ZW5kcyBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHQvKipcblx0ICogQWZ0ZXIgZXJyb3Jcblx0ICovXG5cdHByaXZhdGUgdGhyb3duRXJyb3I6IEVycm9yIHwgc3RyaW5nID0gbnVsbDtcblxuXHQvKipcblx0ICogQWZ0ZXIgY29tcGxldGVcblx0ICovXG5cdHByaXZhdGUgaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogQWZ0ZXIgdW5zdWJzY3JpYmVcblx0ICovXG5cdHByaXZhdGUgaXNDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXJzOiBBcnJheTxIZXJtZXNTdWJzY3JpYmVyPFQ+PiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG5cblx0XHR0aGlzLnZlcmlmeU5vdENsb3NlZCgpO1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQgfHwgdGhpcy50aHJvd25FcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qgc3VicyBvZiB0aGlzLnN1YnNjcmliZXJzKSB7XG5cdFx0XHRzdWJzLm5leHQodmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGVycm9yKGVycm9yOiBhbnkpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVyaWZ5Tm90Q2xvc2VkKCk7XG5cblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudGhyb3duRXJyb3IgPSBlcnJvcjtcblxuXHRcdGZvciAoY29uc3Qgc3VicyBvZiB0aGlzLnN1YnNjcmliZXJzKSB7XG5cdFx0XHRzdWJzLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuXHR9XG5cblx0Y29tcGxldGUoKTogdm9pZCB7XG5cblx0XHR0aGlzLnZlcmlmeU5vdENsb3NlZCgpO1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdGZvciAoY29uc3Qgc3VicyBvZiB0aGlzLnN1YnNjcmliZXJzKSB7XG5cdFx0XHRzdWJzLmNvbXBsZXRlKCk7XG5cdFx0fVxuXHRcdHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcblx0fVxuXG5cdG92ZXJyaWRlIHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0b3ZlcnJpZGUgc3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRvdmVycmlkZSBzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdHRoaXMudmVyaWZ5Tm90Q2xvc2VkKCk7XG5cblx0XHRsZXQgc3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPjtcblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBIZXJtZXNTdWJzY3JpYmVyKSB7XG5cdFx0XHRzdWJzY3JpYmVyID0gYXJnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdWJzY3JpYmVyID0gdGhpcy5jcmVhdGVTdWJzY3JpYmVyKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnRocm93bkVycm9yICE9PSBudWxsKSB7XG5cdFx0XHRzdWJzY3JpYmVyLmVycm9yKHRoaXMudGhyb3duRXJyb3IpO1xuXHRcdFx0cmV0dXJuIGhlcm1lc0VtcHR5U3Vic2NyaXB0aW9uKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzQ29tcGxldGVkKSB7XG5cdFx0XHRzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRyZXR1cm4gaGVybWVzRW1wdHlTdWJzY3JpcHRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0U3Vic2NyaXB0aW9uKHN1YnNjcmliZXIpO1xuXHRcdH1cblx0fVxuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuXHRcdHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcblx0fVxuXG5cdHRvT2JzZXJ2YWJsZSgpOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZShcblx0XHRcdFx0KHYpID0+IG9ic2VydmVyLm5leHQodiksXG5cdFx0XHRcdChlcnJvcikgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHZlcmlmeU5vdENsb3NlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0Nsb3NlZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdPYnNlcnZhYmxlIGFscmVhZHkgY2xvc2VkJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==