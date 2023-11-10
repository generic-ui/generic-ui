import { HermesObservable } from './hermes.observable';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
import { hermesEmptySubscription } from '../subscription/hermes-empty.subscription';
export class HermesSubject extends HermesObservable {
    /**
     * After error
     */
    thrownError = null;
    /**
     * After complete
     */
    isCompleted = false;
    /**
     * After unsubscribe
     */
    isClosed = false;
    subscribers = [];
    constructor() {
        super();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsTUFBTSxPQUFPLGFBQWlCLFNBQVEsZ0JBQW1CO0lBRXhEOztPQUVHO0lBQ0ssV0FBVyxHQUFtQixJQUFJLENBQUM7SUFFM0M7O09BRUc7SUFDSyxXQUFXLEdBQVksS0FBSyxDQUFDO0lBRXJDOztPQUVHO0lBQ0ssUUFBUSxHQUFZLEtBQUssQ0FBQztJQUVqQixXQUFXLEdBQStCLEVBQUUsQ0FBQztJQUU5RDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNsRCxPQUFPO1NBQ1A7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUVmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQVVRLFNBQVMsQ0FDakIsR0FBUTtRQUdSLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLFVBQStCLENBQUM7UUFFcEMsSUFBSSxHQUFHLFlBQVksZ0JBQWdCLEVBQUU7WUFDcEMsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUNqQjthQUFNO1lBQ04sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdFO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUM5QixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxPQUFPLHVCQUF1QixFQUFFLENBQUM7U0FDakM7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDNUIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sdUJBQXVCLEVBQUUsQ0FBQztTQUNqQzthQUFNO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUNsQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDdkIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ2hDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FDekIsQ0FBQztZQUVGLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLGVBQWU7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM3QztJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmlwdGlvbiB9IGZyb20gJy4uL3N1YnNjcmlwdGlvbi9oZXJtZXMuc3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuaW1wb3J0IHsgaGVybWVzRW1wdHlTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLWVtcHR5LnN1YnNjcmlwdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNTdWJqZWN0PFQ+IGV4dGVuZHMgSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0LyoqXG5cdCAqIEFmdGVyIGVycm9yXG5cdCAqL1xuXHRwcml2YXRlIHRocm93bkVycm9yOiBFcnJvciB8IHN0cmluZyA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEFmdGVyIGNvbXBsZXRlXG5cdCAqL1xuXHRwcml2YXRlIGlzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEFmdGVyIHVuc3Vic2NyaWJlXG5cdCAqL1xuXHRwcml2YXRlIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyczogQXJyYXk8SGVybWVzU3Vic2NyaWJlcjxUPj4gPSBbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkIHx8IHRoaXMudGhyb3duRXJyb3IgIT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHN1YnMgb2YgdGhpcy5zdWJzY3JpYmVycykge1xuXHRcdFx0c3Vicy5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvcihlcnJvcjogYW55KTogdm9pZCB7XG5cblx0XHR0aGlzLnZlcmlmeU5vdENsb3NlZCgpO1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnRocm93bkVycm9yID0gZXJyb3I7XG5cblx0XHRmb3IgKGNvbnN0IHN1YnMgb2YgdGhpcy5zdWJzY3JpYmVycykge1xuXHRcdFx0c3Vicy5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHRcdHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcblx0fVxuXG5cdGNvbXBsZXRlKCk6IHZvaWQge1xuXG5cdFx0dGhpcy52ZXJpZnlOb3RDbG9zZWQoKTtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRmb3IgKGNvbnN0IHN1YnMgb2YgdGhpcy5zdWJzY3JpYmVycykge1xuXHRcdFx0c3Vicy5jb21wbGV0ZSgpO1xuXHRcdH1cblx0XHR0aGlzLnN1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRvdmVycmlkZSBzdWJzY3JpYmUoXG5cdFx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdG92ZXJyaWRlIHN1YnNjcmliZShcblx0XHRzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0b3ZlcnJpZGUgc3Vic2NyaWJlKFxuXHRcdGFyZzogYW55XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0XHR0aGlzLnZlcmlmeU5vdENsb3NlZCgpO1xuXG5cdFx0bGV0IHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD47XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgSGVybWVzU3Vic2NyaWJlcikge1xuXHRcdFx0c3Vic2NyaWJlciA9IGFyZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3Vic2NyaWJlciA9IHRoaXMuY3JlYXRlU3Vic2NyaWJlcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy50aHJvd25FcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0c3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcblx0XHRcdHJldHVybiBoZXJtZXNFbXB0eVN1YnNjcmlwdGlvbigpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5pc0NvbXBsZXRlZCkge1xuXHRcdFx0c3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuXHRcdFx0cmV0dXJuIGhlcm1lc0VtcHR5U3Vic2NyaXB0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcblx0XHRcdHJldHVybiB0aGlzLmdldFN1YnNjcmlwdGlvbihzdWJzY3JpYmVyKTtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcblx0XHR0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLnN1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHR0b09ic2VydmFibGUoKTogSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmUoXG5cdFx0XHRcdCh2KSA9PiBvYnNlcnZlci5uZXh0KHYpLFxuXHRcdFx0XHQoZXJyb3IpID0+IG9ic2VydmVyLmVycm9yKGVycm9yKSxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB2ZXJpZnlOb3RDbG9zZWQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDbG9zZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignT2JzZXJ2YWJsZSBhbHJlYWR5IGNsb3NlZCcpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=