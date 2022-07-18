import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
export class StreamCloser {
    constructor() {
        this.unsubscribe$ = new HermesSubject();
    }
    takeUntil() {
        return hermesTakeUntil(this.unsubscribe$);
    }
    unsubscribe() {
        if (this.unsubscribe$.isCompleted) {
            return;
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNsb3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tbW9uL3NyYy9jZGsvcmVhY3RpdmUvc3RyZWFtLWNsb3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLE1BQU0sT0FBTyxZQUFZO0lBSXhCO1FBRmlCLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUcxRCxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUssSUFBSSxDQUFDLFlBQW9CLENBQUMsV0FBVyxFQUFFO1lBQzNDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJlYW1DbG9zZXI8VD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWJzY3JpYmUkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gaGVybWVzVGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdGlmICgodGhpcy51bnN1YnNjcmliZSQgYXMgYW55KS5pc0NvbXBsZXRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cbn1cbiJdfQ==