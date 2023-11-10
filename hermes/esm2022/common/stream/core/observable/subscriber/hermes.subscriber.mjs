export class HermesSubscriber {
    observer;
    // eslint-disable-next-line
    finalize = () => {
    };
    completed = false;
    closed = false;
    constructor(config) {
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
    getFinalize() {
        return this.finalize;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmliZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sZ0JBQWdCO0lBRXBCLFFBQVEsQ0FBNkI7SUFFN0MsMkJBQTJCO0lBQ25CLFFBQVEsR0FBZSxHQUFHLEVBQUU7SUFDcEMsQ0FBQyxDQUFDO0lBRU0sU0FBUyxHQUFZLEtBQUssQ0FBQztJQUUzQixNQUFNLEdBQVksS0FBSyxDQUFDO0lBRWhDLFlBQVksTUFBa0M7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFRO1FBRVosSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsT0FBTztTQUNQO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBRWYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUDtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFvQjtRQUMvQixJQUFJLFFBQVEsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDekI7YUFBTTtTQUVOO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVTLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2ZXIgfSBmcm9tICcuLi9oZXJtZXMub2JzZXJ2ZXInO1xuXG5leHBvcnQgY2xhc3MgSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cblx0cHJpdmF0ZSBvYnNlcnZlcjogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj47XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdHByaXZhdGUgZmluYWxpemU6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG5cdH07XG5cblx0cHJpdmF0ZSBjb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj4pIHtcblx0XHR0aGlzLm9ic2VydmVyID0gY29uZmlnO1xuXHR9XG5cblx0bmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIubmV4dCkge1xuXHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvcihlcnJvcjogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmVycm9yKSB7XG5cdFx0XHR0aGlzLm9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0Y29tcGxldGUoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG5cdFx0aWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNsb3NlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHR0aGlzLmZpbmFsaXplKCk7XG5cdH1cblxuXHRzZXRGaW5hbGl6ZShmaW5hbGl6ZTogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmIChmaW5hbGl6ZSAmJiB0eXBlb2YgZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuZmluYWxpemUgPSBmaW5hbGl6ZTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0fVxuXHR9XG5cblx0Z2V0RmluYWxpemUoKTogKCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmluYWxpemU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaXNDb21wbGV0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcGxldGVkO1xuXHR9XG5cblx0cHJvdGVjdGVkIGlzQ2xvc2VkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNsb3NlZDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRPYnNlcnZlcigpOiBQYXJ0aWFsPEhlcm1lc09ic2VydmVyPFQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMub2JzZXJ2ZXI7XG5cdH1cblxufVxuIl19