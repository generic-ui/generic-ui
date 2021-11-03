import { Directive } from '@angular/core';
import { StreamCloser } from '../reactive/stream-closer';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
export class Gate {
    constructor() {
        this.streamCloser = new StreamCloser();
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    ngOnDestroy() {
        this.streamCloser.unsubscribe();
        this.hermesUnsubscribe();
    }
    isDefined(propertyName, changes) {
        return changes[propertyName] !== undefined && changes[propertyName].currentValue !== undefined;
    }
    subscribeAndEmit(stream$, emitter) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((value) => {
            emitter.emit(value);
        });
    }
    unsubscribe() {
        this.streamCloser.unsubscribe();
    }
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    takeUntil() {
        return this.streamCloser.takeUntil();
    }
}
Gate.decorators = [
    { type: Directive }
];
Gate.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUduRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFvQixhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEYsTUFBTSxPQUFnQixJQUFJO0lBTXpCO1FBSmlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyx1QkFBa0IsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBR2hFLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUyxDQUFDLFlBQW9CLEVBQUUsT0FBcUI7UUFDcEQsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQ2hHLENBQUM7SUFFRCxnQkFBZ0IsQ0FDZixPQUE0QixFQUM1QixPQUF3QjtRQUV4QixPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFRLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLFdBQVc7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRVMsaUJBQWlCO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVTLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7OztZQS9DRCxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RyZWFtQ2xvc2VyIH0gZnJvbSAnLi4vcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHYXRlPFQgPSBhbnk+IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlcm1lc1Vuc3Vic2NyaWJlJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRpc0RlZmluZWQocHJvcGVydHlOYW1lOiBzdHJpbmcsIGNoYW5nZXM6IE5nQ2hhbmdlczxUPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjaGFuZ2VzW3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzW3Byb3BlcnR5TmFtZV0uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRzdWJzY3JpYmVBbmRFbWl0PFY+KFxuXHRcdHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8Vj4sXG5cdFx0ZW1pdHRlcjogRXZlbnRFbWl0dGVyPFY+XG5cdCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogVikgPT4ge1xuXHRcdFx0XHRlbWl0dGVyLmVtaXQodmFsdWUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNVbnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNUYWtlVW50aWwoKTogYW55IHtcblx0XHRyZXR1cm4gaGVybWVzVGFrZVVudGlsKHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkKTtcblx0fVxuXG5cdHByb3RlY3RlZCB0YWtlVW50aWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyZWFtQ2xvc2VyLnRha2VVbnRpbCgpO1xuXHR9XG5cbn1cbiJdfQ==