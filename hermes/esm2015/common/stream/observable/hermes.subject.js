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
            return this.getSubscription();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5zdWJqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXBGLE1BQU0sT0FBTyxhQUFpQixTQUFRLGdCQUFtQjtJQW1CeEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQWxCVDs7V0FFRztRQUNLLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUUzQzs7V0FFRztRQUNLLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRXJDOztXQUVHO1FBQ0ssYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVqQixnQkFBVyxHQUErQixFQUFFLENBQUM7SUFJOUQsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNsRCxPQUFPO1NBQ1A7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUVmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQVVELFNBQVMsQ0FDUixHQUFRO1FBR1IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksVUFBK0IsQ0FBQztRQUVwQyxJQUFJLEdBQUcsWUFBWSxnQkFBZ0IsRUFBRTtZQUNwQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO2FBQU07WUFDTixVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0U7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzlCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sdUJBQXVCLEVBQUUsQ0FBQztTQUNqQzthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM1QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsT0FBTyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLGdCQUFnQixDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDeEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDbEMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ3ZCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNoQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQ3pCLENBQUM7WUFFRixPQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDN0M7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IGhlcm1lc0VtcHR5U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy1lbXB0eS5zdWJzY3JpcHRpb24nO1xuXG5leHBvcnQgY2xhc3MgSGVybWVzU3ViamVjdDxUPiBleHRlbmRzIEhlcm1lc09ic2VydmFibGU8VD4ge1xuXG5cdC8qKlxuXHQgKiBBZnRlciBlcnJvclxuXHQgKi9cblx0cHJpdmF0ZSB0aHJvd25FcnJvcjogRXJyb3IgfCBzdHJpbmcgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBBZnRlciBjb21wbGV0ZVxuXHQgKi9cblx0cHJpdmF0ZSBpc0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBBZnRlciB1bnN1YnNjcmliZVxuXHQgKi9cblx0cHJpdmF0ZSBpc0Nsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnM6IEFycmF5PEhlcm1lc1N1YnNjcmliZXI8VD4+ID0gW107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5leHQodmFsdWU6IFQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVyaWZ5Tm90Q2xvc2VkKCk7XG5cblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlZCB8fCB0aGlzLnRocm93bkVycm9yICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBzdWJzIG9mIHRoaXMuc3Vic2NyaWJlcnMpIHtcblx0XHRcdHN1YnMubmV4dCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50aHJvd25FcnJvciA9IGVycm9yO1xuXG5cdFx0Zm9yIChjb25zdCBzdWJzIG9mIHRoaXMuc3Vic2NyaWJlcnMpIHtcblx0XHRcdHN1YnMuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0XHR0aGlzLnN1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRjb21wbGV0ZSgpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVyaWZ5Tm90Q2xvc2VkKCk7XG5cblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0Zm9yIChjb25zdCBzdWJzIG9mIHRoaXMuc3Vic2NyaWJlcnMpIHtcblx0XHRcdHN1YnMuY29tcGxldGUoKTtcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuXHR9XG5cblx0c3Vic2NyaWJlKFxuXHRcdG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG5cdFx0ZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0c3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPlxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRhcmc6IGFueVxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGxldCBzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+O1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEhlcm1lc1N1YnNjcmliZXIpIHtcblx0XHRcdHN1YnNjcmliZXIgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YnNjcmliZXIgPSB0aGlzLmNyZWF0ZVN1YnNjcmliZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudGhyb3duRXJyb3IgIT09IG51bGwpIHtcblx0XHRcdHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG5cdFx0XHRyZXR1cm4gaGVybWVzRW1wdHlTdWJzY3JpcHRpb24oKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNDb21wbGV0ZWQpIHtcblx0XHRcdHN1YnNjcmliZXIuY29tcGxldGUoKTtcblx0XHRcdHJldHVybiBoZXJtZXNFbXB0eVN1YnNjcmlwdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRTdWJzY3JpcHRpb24oKTtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcblx0XHR0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLnN1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHR0b09ic2VydmFibGUoKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmUoXG5cdFx0XHRcdCh2KSA9PiBvYnNlcnZlci5uZXh0KHYpLFxuXHRcdFx0XHQoZXJyb3IpID0+IG9ic2VydmVyLmVycm9yKGVycm9yKSxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB2ZXJpZnlOb3RDbG9zZWQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDbG9zZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignT2JzZXJ2YWJsZSBhbHJlYWR5IGNsb3NlZCcpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=