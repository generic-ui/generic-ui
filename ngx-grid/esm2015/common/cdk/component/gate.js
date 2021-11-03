import { Directive } from '@angular/core';
import { StreamCloser } from '../reactive/stream-closer';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
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
Gate.ɵfac = function Gate_Factory(t) { return new (t || Gate)(); };
Gate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: Gate });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Gate, [{
        type: Directive
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUduRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFvQixhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR3RGLE1BQU0sT0FBZ0IsSUFBSTtJQU16QjtRQUppQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsdUJBQWtCLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUdoRSxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxZQUFvQixFQUFFLE9BQXFCO1FBQ3BELE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUNoRyxDQUFDO0lBRUQsZ0JBQWdCLENBQ2YsT0FBNEIsRUFDNUIsT0FBd0I7UUFFeEIsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxXQUFXO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVTLGlCQUFpQjtRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzt3REE5Q29CLElBQUk7dURBQUosSUFBSTt1RkFBSixJQUFJO2NBRHpCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4vbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QsIGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdhdGU8VCA9IGFueT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVybWVzVW5zdWJzY3JpYmUkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGlzRGVmaW5lZChwcm9wZXJ0eU5hbWU6IHN0cmluZywgY2hhbmdlczogTmdDaGFuZ2VzPFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNoYW5nZXNbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXNbcHJvcGVydHlOYW1lXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdHN1YnNjcmliZUFuZEVtaXQ8Vj4oXG5cdFx0c3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxWPixcblx0XHRlbWl0dGVyOiBFdmVudEVtaXR0ZXI8Vj5cblx0KTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBWKSA9PiB7XG5cdFx0XHRcdGVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGhlcm1lc1Rha2VVbnRpbCgpOiBhbnkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy5oZXJtZXNVbnN1YnNjcmliZSQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW1DbG9zZXIudGFrZVVudGlsKCk7XG5cdH1cblxufVxuIl19