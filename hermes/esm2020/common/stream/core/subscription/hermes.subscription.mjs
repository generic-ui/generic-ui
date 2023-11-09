export class HermesSubscription {
    constructor(subscriber, isClosed) {
        this.subscriber = subscriber;
        this.closed = false;
        if (isClosed !== undefined && isClosed !== null) {
            this.closed = isClosed;
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.subscriber.unsubscribe();
    }
    getFinalize() {
        return this.subscriber.getFinalize();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL2NvcmUvc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGtCQUFrQjtJQUk5QixZQUNrQixVQUFpQyxFQUNsRCxRQUFrQjtRQURELGVBQVUsR0FBVixVQUFVLENBQXVCO1FBSDNDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFPL0IsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FDdkI7SUFDRixDQUFDO0lBRUQsV0FBVztRQUVWLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuXG5leHBvcnQgY2xhc3MgSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRwcml2YXRlIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxhbnk+LFxuXHRcdGlzQ2xvc2VkPzogYm9vbGVhblxuXHQpIHtcblxuXHRcdGlmIChpc0Nsb3NlZCAhPT0gdW5kZWZpbmVkICYmIGlzQ2xvc2VkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNsb3NlZCA9IGlzQ2xvc2VkO1xuXHRcdH1cblx0fVxuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuY2xvc2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jbG9zZWQgPSB0cnVlO1xuXHRcdHRoaXMuc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0Z2V0RmluYWxpemUoKTogKCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlci5nZXRGaW5hbGl6ZSgpO1xuXHR9XG59XG4iXX0=