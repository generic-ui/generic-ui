export class HermesSubscriber {
    constructor(config) {
        // eslint-disable-next-line
        this.finalize = () => {
        };
        this.completed = false;
        this.closed = false;
        this.observer = config;
    }
    next(value) {
        if (this.isCompleted()) {
            return;
        }
        if (this.observer && this.observer.next) {
            this.observer.next(value);
        }
    }
    error(error) {
        if (this.completed) {
            return;
        }
        if (this.observer && this.observer.error) {
            this.observer.error(error);
        }
        this.unsubscribe();
    }
    complete() {
        if (this.completed) {
            return;
        }
        this.completed = true;
        if (this.observer && this.observer.complete) {
            this.observer.complete();
        }
        this.unsubscribe();
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.completed = true;
        this.finalize();
    }
    setFinalize(finalize) {
        if (finalize && typeof finalize === 'function') {
            this.finalize = finalize;
        }
        else {
        }
    }
    isCompleted() {
        return this.completed;
    }
    isClosed() {
        return this.closed;
    }
    getObserver() {
        return this.observer;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmliZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGdCQUFnQjtJQVk1QixZQUFZLE1BQWtDO1FBUjlDLDJCQUEyQjtRQUNuQixhQUFRLEdBQWUsR0FBRyxFQUFFO1FBQ3BDLENBQUMsQ0FBQztRQUVNLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUcvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVE7UUFFWixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN2QixPQUFPO1NBQ1A7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDRixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFFZixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNQO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQW9CO1FBQy9CLElBQUksUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUN6QjthQUFNO1NBRU47SUFDRixDQUFDO0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVTLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZlciB9IGZyb20gJy4uL2hlcm1lcy5vYnNlcnZlcic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNTdWJzY3JpYmVyPFQ+IHtcblxuXHRwcml2YXRlIG9ic2VydmVyOiBQYXJ0aWFsPEhlcm1lc09ic2VydmVyPFQ+PjtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0cHJpdmF0ZSBmaW5hbGl6ZTogKCkgPT4gdm9pZCA9ICgpID0+IHtcblx0fTtcblxuXHRwcml2YXRlIGNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgY2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnOiBQYXJ0aWFsPEhlcm1lc09ic2VydmVyPFQ+Pikge1xuXHRcdHRoaXMub2JzZXJ2ZXIgPSBjb25maWc7XG5cdH1cblxuXHRuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5uZXh0KSB7XG5cdFx0XHR0aGlzLm9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGVycm9yKGVycm9yOiBhbnkpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmNvbXBsZXRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZXJyb3IpIHtcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRjb21wbGV0ZSgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmNvbXBsZXRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcblx0XHRpZiAodGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmNvbXBsZXRlKSB7XG5cdFx0XHR0aGlzLm9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0dW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY2xvc2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jbG9zZWQgPSB0cnVlO1xuXHRcdHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdHRoaXMuZmluYWxpemUoKTtcblx0fVxuXG5cdHNldEZpbmFsaXplKGZpbmFsaXplOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKGZpbmFsaXplICYmIHR5cGVvZiBmaW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5maW5hbGl6ZSA9IGZpbmFsaXplO1xuXHRcdH0gZWxzZSB7XG5cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgaXNDb21wbGV0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcGxldGVkO1xuXHR9XG5cblx0cHJvdGVjdGVkIGlzQ2xvc2VkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNsb3NlZDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRPYnNlcnZlcigpOiBQYXJ0aWFsPEhlcm1lc09ic2VydmVyPFQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMub2JzZXJ2ZXI7XG5cdH1cblxufVxuIl19