import { Directive } from '@angular/core';
import { GuiComponent } from './gui-component';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class SmartComponent extends GuiComponent {
    constructor(detector, elementRef) {
        super(elementRef);
        this.detector = detector;
        this.viewInDom = false;
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    ngAfterViewInit() {
        this.viewInDom = true;
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
    reRender() {
        if (this.isViewInDom()) {
            this.detector.detectChanges();
        }
    }
    isViewInDom() {
        return this.viewInDom;
    }
    hermesSubscribe(stream$, callback) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((streamValues) => {
            callback(streamValues);
            this.reRender();
        });
    }
    hermesSubscribeWithoutRender(stream$, callback) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((streamValues) => {
            callback(streamValues);
        });
    }
    // for gate
    subscribeAndEmit(stream$, emitter, mapper = (value) => value) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((value) => {
            emitter.emit(mapper(value));
        });
    }
    unsubscribe() {
        this.hermesUnsubscribe();
    }
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
}
SmartComponent.ɵfac = function SmartComponent_Factory(t) { return new (t || SmartComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
SmartComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SmartComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SmartComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHdEYsTUFBTSxPQUFnQixjQUFlLFNBQVEsWUFBWTtJQU14RCxZQUF5QyxRQUEyQixFQUM3RCxVQUFzQjtRQUM1QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFGc0IsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFKNUQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVsQix1QkFBa0IsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBS2hFLENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUQsZUFBZSxDQUFJLE9BQTRCLEVBQUUsUUFBNEI7UUFDNUUsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDLENBQUMsWUFBZSxFQUFFLEVBQUU7WUFDOUIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0QkFBNEIsQ0FBSSxPQUE0QixFQUFFLFFBQTRCO1FBQ3pGLE9BQU87YUFDTCxJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVMsQ0FBQyxDQUFDLFlBQWUsRUFBRSxFQUFFO1lBQzlCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO0lBQ1gsZ0JBQWdCLENBQ2YsT0FBNEIsRUFDNUIsT0FBd0IsRUFDeEIsU0FBNEIsQ0FBQyxLQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUs7UUFFL0MsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxXQUFXO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFUyxpQkFBaUI7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs0RUE1RW9CLGNBQWM7aUVBQWQsY0FBYzt1RkFBZCxjQUFjO2NBRG5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydENvbXBvbmVudCBleHRlbmRzIEd1aUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSB2aWV3SW5Eb206IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlcm1lc1Vuc3Vic2NyaWJlJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdFx0XHQgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnZpZXdJbkRvbSA9IHRydWU7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRyZVJlbmRlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ZpZXdJbkRvbSgpKSB7XG5cdFx0XHR0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRpc1ZpZXdJbkRvbSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3SW5Eb207XG5cdH1cblxuXHRoZXJtZXNTdWJzY3JpYmU8VD4oc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPiwgY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJlYW1WYWx1ZXM6IFQpID0+IHtcblx0XHRcdFx0Y2FsbGJhY2soc3RyZWFtVmFsdWVzKTtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRoZXJtZXNTdWJzY3JpYmVXaXRob3V0UmVuZGVyPFQ+KHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4sIGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RyZWFtVmFsdWVzOiBUKSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN0cmVhbVZhbHVlcyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8vIGZvciBnYXRlXG5cdHN1YnNjcmliZUFuZEVtaXQ8Vj4oXG5cdFx0c3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxWPixcblx0XHRlbWl0dGVyOiBFdmVudEVtaXR0ZXI8Vj4sXG5cdFx0bWFwcGVyOiAodmFsdWU6IFYpID0+IGFueSA9ICh2YWx1ZTogVikgPT4gdmFsdWVcblx0KTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBWKSA9PiB7XG5cdFx0XHRcdGVtaXR0ZXIuZW1pdChtYXBwZXIodmFsdWUpKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNVbnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBoZXJtZXNUYWtlVW50aWwoKTogYW55IHtcblx0XHRyZXR1cm4gaGVybWVzVGFrZVVudGlsKHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkKTtcblx0fVxuXG59XG4iXX0=