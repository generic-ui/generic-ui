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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmliZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sZ0JBQWdCO0lBWTVCLFlBQVksTUFBa0M7UUFSOUMsMkJBQTJCO1FBQ25CLGFBQVEsR0FBZSxHQUFHLEVBQUU7UUFDcEMsQ0FBQyxDQUFDO1FBRU0sY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBUTtRQUVaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87U0FDUDtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUVmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1A7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBb0I7UUFDL0IsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ3pCO2FBQU07U0FFTjtJQUNGLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRVMsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVTLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi4vaGVybWVzLm9ic2VydmVyJztcblxuZXhwb3J0IGNsYXNzIEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXG5cdHByaXZhdGUgb2JzZXJ2ZXI6IFBhcnRpYWw8SGVybWVzT2JzZXJ2ZXI8VD4+O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRwcml2YXRlIGZpbmFsaXplOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuXHR9O1xuXG5cdHByaXZhdGUgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihjb25maWc6IFBhcnRpYWw8SGVybWVzT2JzZXJ2ZXI8VD4+KSB7XG5cdFx0dGhpcy5vYnNlcnZlciA9IGNvbmZpZztcblx0fVxuXG5cdG5leHQodmFsdWU6IFQpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLm5leHQpIHtcblx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuY29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5lcnJvcikge1xuXHRcdFx0dGhpcy5vYnNlcnZlci5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGNvbXBsZXRlKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuY29tcGxldGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdGlmICh0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuY29tcGxldGUpIHtcblx0XHRcdHRoaXMub2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHR9XG5cblx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNsb3NlZCA9IHRydWU7XG5cdFx0dGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xuXHR9XG5cblx0c2V0RmluYWxpemUoZmluYWxpemU6ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRpZiAoZmluYWxpemUgJiYgdHlwZW9mIGZpbmFsaXplID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmZpbmFsaXplID0gZmluYWxpemU7XG5cdFx0fSBlbHNlIHtcblxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBpc0NvbXBsZXRlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaXNDbG9zZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvc2VkO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldE9ic2VydmVyKCk6IFBhcnRpYWw8SGVybWVzT2JzZXJ2ZXI8VD4+IHtcblx0XHRyZXR1cm4gdGhpcy5vYnNlcnZlcjtcblx0fVxuXG59XG4iXX0=