import { HermesSubject } from '../stream/core/observable/hermes.subject';
import { hermesTakeUntil } from '../stream/core/operator/hermes.take-until';
import { toRxJsObservable } from '../stream/infrastructure/rxjs/to-rxjs-observable';
import { takeUntil } from 'rxjs/operators';
export class Reactive {
    hermesUnsubscribe$ = new HermesSubject();
    constructor() {
    }
    onDestroy() {
        this.hermesUnsubscribe();
    }
    takeUntil() {
        return takeUntil(toRxJsObservable(this.hermesUnsubscribe$));
    }
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    isNotStopped() {
        return !this.hermesUnsubscribe$.isCompleted;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3JlYWN0aXZlL3JlYWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE1BQU0sT0FBZ0IsUUFBUTtJQUVaLGtCQUFrQixHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFFaEU7SUFDQSxDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFUyxTQUFTO1FBQ2xCLE9BQU8sU0FBUyxDQUNmLGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVTLGlCQUFpQjtRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyxZQUFZO1FBQ3JCLE9BQU8sQ0FBRSxJQUFJLENBQUMsa0JBQTBCLENBQUMsV0FBVyxDQUFDO0lBQ3RELENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnLi4vc3RyZWFtL2NvcmUvb3BlcmF0b3IvaGVybWVzLnRha2UtdW50aWwnO1xuaW1wb3J0IHsgdG9SeEpzT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N0cmVhbS9pbmZyYXN0cnVjdHVyZS9yeGpzL3RvLXJ4anMtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNVbnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG9uRGVzdHJveSgpIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdGFrZVVudGlsPFQ+KCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG5cdFx0cmV0dXJuIHRha2VVbnRpbChcblx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpXG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNVbnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNUYWtlVW50aWwoKTogYW55IHtcblx0XHRyZXR1cm4gaGVybWVzVGFrZVVudGlsKHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBpc05vdFN0b3BwZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQgYXMgYW55KS5pc0NvbXBsZXRlZDtcblx0fVxuXG59XG4iXX0=