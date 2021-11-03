export class HermesSubscriber {
    constructor(config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmliZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGdCQUFnQjtJQVc1QixZQUFZLE1BQWtDO1FBUHRDLGFBQVEsR0FBZSxHQUFHLEVBQUU7UUFDcEMsQ0FBQyxDQUFDO1FBRU0sY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBUTtRQUVaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87U0FDUDtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUVmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1A7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBb0I7UUFDL0IsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ3pCO2FBQU07U0FFTjtJQUNGLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRVMsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVTLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi4vaGVybWVzLm9ic2VydmVyJztcblxuZXhwb3J0IGNsYXNzIEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXG5cdHByaXZhdGUgb2JzZXJ2ZXI6IFBhcnRpYWw8SGVybWVzT2JzZXJ2ZXI8VD4+O1xuXG5cdHByaXZhdGUgZmluYWxpemU6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG5cdH07XG5cblx0cHJpdmF0ZSBjb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj4pIHtcblx0XHR0aGlzLm9ic2VydmVyID0gY29uZmlnO1xuXHR9XG5cblx0bmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIubmV4dCkge1xuXHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvcihlcnJvcjogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmVycm9yKSB7XG5cdFx0XHR0aGlzLm9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0Y29tcGxldGUoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG5cdFx0aWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNsb3NlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHR0aGlzLmZpbmFsaXplKCk7XG5cdH1cblxuXHRzZXRGaW5hbGl6ZShmaW5hbGl6ZTogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmIChmaW5hbGl6ZSAmJiB0eXBlb2YgZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuZmluYWxpemUgPSBmaW5hbGl6ZTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGlzQ29tcGxldGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBsZXRlZDtcblx0fVxuXG5cdHByb3RlY3RlZCBpc0Nsb3NlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jbG9zZWQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0T2JzZXJ2ZXIoKTogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj4ge1xuXHRcdHJldHVybiB0aGlzLm9ic2VydmVyO1xuXHR9XG5cbn1cbiJdfQ==