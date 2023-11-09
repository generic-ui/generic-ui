import { hermesDistinctUntilChanged, hermesFilter, HermesReplaySubject, HermesSubject, hermesSwitchMap, hermesTakeUntil } from '@generic-ui/hermes';
export class GuiPushSubscriber {
    constructor(cd) {
        this.cd = cd;
        this.baseValues$ = new HermesSubject();
        this.destroy$ = new HermesReplaySubject(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLnB1c2gtc3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9wdXNoL2d1aS5wdXNoLXN1YnNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNOLDBCQUEwQixFQUMxQixZQUFZLEVBRVosbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixlQUFlLEVBQ2YsZUFBZSxFQUNmLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsTUFBTSxPQUFPLGlCQUFpQjtJQVU3QixZQUNrQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUwvQixnQkFBVyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFFbEMsYUFBUSxHQUFHLElBQUksbUJBQW1CLENBQU8sQ0FBQyxDQUFDLENBQUM7UUFNbkQsSUFBSSxDQUFDLFdBQVc7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsSUFBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdkUsZUFBZSxDQUFDLENBQUMsTUFBNkIsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQ0YsMEJBQTBCLEVBQUUsRUFDNUIsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDOUI7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTLENBQUksS0FBMEI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVO1FBQ1QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0aGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQsXG5cdGhlcm1lc0ZpbHRlcixcblx0SGVybWVzT2JzZXJ2YWJsZSxcblx0SGVybWVzUmVwbGF5U3ViamVjdCxcblx0SGVybWVzU3ViamVjdCxcblx0aGVybWVzU3dpdGNoTWFwLFxuXHRoZXJtZXNUYWtlVW50aWxcbn0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGNsYXNzIEd1aVB1c2hTdWJzY3JpYmVyIHtcblxuXHRwcml2YXRlIHZhbHVlOiBhbnk7XG5cblx0cHJpdmF0ZSBhY3R1YWxPYnMkOiBIZXJtZXNPYnNlcnZhYmxlPGFueT4gfCB1bmRlZmluZWQ7XG5cblx0cHJpdmF0ZSBiYXNlVmFsdWVzJCA9IG5ldyBIZXJtZXNTdWJqZWN0KCk7XG5cblx0cHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PHZvaWQ+KDEpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmXG5cdCkge1xuXG5cdFx0dGhpcy5iYXNlVmFsdWVzJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigob2JzJDogSGVybWVzT2JzZXJ2YWJsZTxhbnk+KSA9PiBvYnMkICE9PSB0aGlzLmFjdHVhbE9icyQpLFxuXHRcdFx0XHRoZXJtZXNTd2l0Y2hNYXAoKHZhbHVlJDogSGVybWVzT2JzZXJ2YWJsZTxhbnk+KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hY3R1YWxPYnMkID0gdmFsdWUkO1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSQ7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRoZXJtZXNEaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy5kZXN0cm95JClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHY6IGFueSkgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdjtcblx0XHRcdFx0dGhpcy5zY2hlZHVsZUNEKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5kZXN0cm95JC5uZXh0KCk7XG5cdFx0dGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0c3Vic2NyaWJlPFQ+KHZhbHVlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KTogYW55IHtcblx0XHR0aGlzLmJhc2VWYWx1ZXMkLm5leHQodmFsdWUpO1xuXG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRzY2hlZHVsZUNEKCk6IHZvaWQge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==