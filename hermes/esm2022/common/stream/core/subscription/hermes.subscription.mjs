export class HermesSubscription {
    subscriber;
    closed = false;
    constructor(subscriber, isClosed) {
        this.subscriber = subscriber;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL2NvcmUvc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGtCQUFrQjtJQUtaO0lBSFYsTUFBTSxHQUFZLEtBQUssQ0FBQztJQUVoQyxZQUNrQixVQUFpQyxFQUNsRCxRQUFrQjtRQURELGVBQVUsR0FBVixVQUFVLENBQXVCO1FBSWxELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFFVixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcblxuZXhwb3J0IGNsYXNzIEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0cHJpdmF0ZSBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8YW55Pixcblx0XHRpc0Nsb3NlZD86IGJvb2xlYW5cblx0KSB7XG5cblx0XHRpZiAoaXNDbG9zZWQgIT09IHVuZGVmaW5lZCAmJiBpc0Nsb3NlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jbG9zZWQgPSBpc0Nsb3NlZDtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmNsb3NlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLnN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGdldEZpbmFsaXplKCk6ICgpID0+IHZvaWQge1xuXHRcdHJldHVybiB0aGlzLnN1YnNjcmliZXIuZ2V0RmluYWxpemUoKTtcblx0fVxufVxuIl19