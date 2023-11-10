import { hermesDistinctUntilChanged, hermesFilter, HermesReplaySubject, HermesSubject, hermesSwitchMap, hermesTakeUntil } from '@generic-ui/hermes';
export class GuiPushSubscriber {
    cd;
    value;
    actualObs$;
    baseValues$ = new HermesSubject();
    destroy$ = new HermesReplaySubject(1);
    constructor(cd) {
        this.cd = cd;
        this.baseValues$
            .pipe(hermesFilter((obs$) => obs$ !== this.actualObs$), hermesSwitchMap((value$) => {
            this.actualObs$ = value$;
            return value$;
        }), hermesDistinctUntilChanged(), hermesTakeUntil(this.destroy$))
            .subscribe((v) => {
            this.value = v;
            this.scheduleCD();
        });
    }
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    subscribe(value) {
        this.baseValues$.next(value);
        return this.value;
    }
    scheduleCD() {
        setTimeout(() => {
            this.cd.detectChanges();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLnB1c2gtc3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9wdXNoL2d1aS5wdXNoLXN1YnNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNOLDBCQUEwQixFQUMxQixZQUFZLEVBRVosbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixlQUFlLEVBQ2YsZUFBZSxFQUNmLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsTUFBTSxPQUFPLGlCQUFpQjtJQVdYO0lBVFYsS0FBSyxDQUFNO0lBRVgsVUFBVSxDQUFvQztJQUU5QyxXQUFXLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUVsQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FBTyxDQUFDLENBQUMsQ0FBQztJQUVwRCxZQUNrQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUd0QyxJQUFJLENBQUMsV0FBVzthQUNkLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN2RSxlQUFlLENBQUMsQ0FBQyxNQUE2QixFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDLENBQUMsRUFDRiwwQkFBMEIsRUFBRSxFQUM1QixlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM5QjthQUNBLFNBQVMsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVMsQ0FBSSxLQUEwQjtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVU7UUFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCxcblx0aGVybWVzRmlsdGVyLFxuXHRIZXJtZXNPYnNlcnZhYmxlLFxuXHRIZXJtZXNSZXBsYXlTdWJqZWN0LFxuXHRIZXJtZXNTdWJqZWN0LFxuXHRoZXJtZXNTd2l0Y2hNYXAsXG5cdGhlcm1lc1Rha2VVbnRpbFxufSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgY2xhc3MgR3VpUHVzaFN1YnNjcmliZXIge1xuXG5cdHByaXZhdGUgdmFsdWU6IGFueTtcblxuXHRwcml2YXRlIGFjdHVhbE9icyQ6IEhlcm1lc09ic2VydmFibGU8YW55PiB8IHVuZGVmaW5lZDtcblxuXHRwcml2YXRlIGJhc2VWYWx1ZXMkID0gbmV3IEhlcm1lc1N1YmplY3QoKTtcblxuXHRwcml2YXRlIGRlc3Ryb3kkID0gbmV3IEhlcm1lc1JlcGxheVN1YmplY3Q8dm9pZD4oMSk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcblx0KSB7XG5cblx0XHR0aGlzLmJhc2VWYWx1ZXMkXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChvYnMkOiBIZXJtZXNPYnNlcnZhYmxlPGFueT4pID0+IG9icyQgIT09IHRoaXMuYWN0dWFsT2JzJCksXG5cdFx0XHRcdGhlcm1lc1N3aXRjaE1hcCgodmFsdWUkOiBIZXJtZXNPYnNlcnZhYmxlPGFueT4pID0+IHtcblx0XHRcdFx0XHR0aGlzLmFjdHVhbE9icyQgPSB2YWx1ZSQ7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlJDtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdGhlcm1lc1Rha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodjogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB2O1xuXHRcdFx0XHR0aGlzLnNjaGVkdWxlQ0QoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLmRlc3Ryb3kkLm5leHQoKTtcblx0XHR0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzdWJzY3JpYmU8VD4odmFsdWU6IEhlcm1lc09ic2VydmFibGU8VD4pOiBhbnkge1xuXHRcdHRoaXMuYmFzZVZhbHVlcyQubmV4dCh2YWx1ZSk7XG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdHNjaGVkdWxlQ0QoKTogdm9pZCB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblx0XHR9KTtcblx0fVxufVxuIl19