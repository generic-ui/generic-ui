export class HermesSubscription {
    constructor(finalize, isClosed) {
        this.closed = false;
        // tslint-disable-next-line
        this.finalize = () => { };
        if (finalize !== undefined && finalize !== null &&
            typeof finalize === 'function') {
            this.finalize = finalize;
        }
        if (isClosed !== undefined && isClosed !== null) {
            this.closed = isClosed;
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.finalize();
    }
    getFinalize() {
        return this.finalize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL3N1YnNjcmlwdGlvbi9oZXJtZXMuc3Vic2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxrQkFBa0I7SUFPOUIsWUFBWSxRQUFxQixFQUFFLFFBQWtCO1FBTDdDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFaEMsMkJBQTJCO1FBQ1YsYUFBUSxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUloRCxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLElBQUk7WUFDOUMsT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FDdkI7SUFDRixDQUFDO0lBRUQsV0FBVztRQUVWLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0cHJpdmF0ZSBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvLyB0c2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0cHJpdmF0ZSByZWFkb25seSBmaW5hbGl6ZTogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG5cdGNvbnN0cnVjdG9yKGZpbmFsaXplPzogKCkgPT4gdm9pZCwgaXNDbG9zZWQ/OiBib29sZWFuKSB7XG5cblx0XHRpZiAoZmluYWxpemUgIT09IHVuZGVmaW5lZCAmJiBmaW5hbGl6ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIGZpbmFsaXplID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmZpbmFsaXplID0gZmluYWxpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGlzQ2xvc2VkICE9PSB1bmRlZmluZWQgJiYgaXNDbG9zZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuY2xvc2VkID0gaXNDbG9zZWQ7XG5cdFx0fVxuXHR9XG5cblx0dW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jbG9zZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNsb3NlZCA9IHRydWU7XG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xuXHR9XG5cblx0Z2V0RmluYWxpemUoKTogKCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmluYWxpemU7XG5cdH1cbn1cbiJdfQ==