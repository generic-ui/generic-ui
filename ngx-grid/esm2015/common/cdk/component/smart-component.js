import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';
import { GuiComponent } from './gui-component';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
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
SmartComponent.decorators = [
    { type: Directive }
];
SmartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RixNQUFNLE9BQWdCLGNBQWUsU0FBUSxZQUFZO0lBTXhELFlBQXlDLFFBQTJCLEVBQzdELFVBQXNCO1FBQzVCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUZzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUo1RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxCLHVCQUFrQixHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFLaEUsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlLENBQUksT0FBNEIsRUFBRSxRQUE0QjtRQUM1RSxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxZQUFlLEVBQUUsRUFBRTtZQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUE0QixDQUFJLE9BQTRCLEVBQUUsUUFBNEI7UUFDekYsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDLENBQUMsWUFBZSxFQUFFLEVBQUU7WUFDOUIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDWCxnQkFBZ0IsQ0FDZixPQUE0QixFQUM1QixPQUF3QixFQUN4QixTQUE0QixDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsS0FBSztRQUUvQyxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFRLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLFdBQVc7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVTLGlCQUFpQjtRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQTdFRCxTQUFTOzs7WUFKRCxpQkFBaUI7WUFBYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHdWlDb21wb25lbnQgfSBmcm9tICcuL2d1aS1jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCwgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU21hcnRDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgdmlld0luRG9tOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNVbnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52aWV3SW5Eb20gPSB0cnVlO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cmVSZW5kZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNWaWV3SW5Eb20oKSkge1xuXHRcdFx0dGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNWaWV3SW5Eb20oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmlld0luRG9tO1xuXHR9XG5cblx0aGVybWVzU3Vic2NyaWJlPFQ+KHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4sIGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RyZWFtVmFsdWVzOiBUKSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN0cmVhbVZhbHVlcyk7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcjxUPihzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cmVhbVZhbHVlczogVCkgPT4ge1xuXHRcdFx0XHRjYWxsYmFjayhzdHJlYW1WYWx1ZXMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvLyBmb3IgZ2F0ZVxuXHRzdWJzY3JpYmVBbmRFbWl0PFY+KFxuXHRcdHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8Vj4sXG5cdFx0ZW1pdHRlcjogRXZlbnRFbWl0dGVyPFY+LFxuXHRcdG1hcHBlcjogKHZhbHVlOiBWKSA9PiBhbnkgPSAodmFsdWU6IFYpID0+IHZhbHVlXG5cdCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogVikgPT4ge1xuXHRcdFx0XHRlbWl0dGVyLmVtaXQobWFwcGVyKHZhbHVlKSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVGFrZVVudGlsKCk6IGFueSB7XG5cdFx0cmV0dXJuIGhlcm1lc1Rha2VVbnRpbCh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJCk7XG5cdH1cblxufVxuIl19