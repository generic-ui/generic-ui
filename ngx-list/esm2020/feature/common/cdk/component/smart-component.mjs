import { Directive } from '@angular/core';
import { GuiComponent } from './gui-component';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class SmartComponent extends GuiComponent {
    constructor(detector, elementRef) {
        super(elementRef);
        this.detector = detector;
        this.viewInDom = false;
        this.unsubscribe$ = new HermesSubject();
    }
    ngAfterViewInit() {
        this.viewInDom = true;
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    reRender() {
        if (this.isViewInDom()) {
            this.detector.detectChanges();
        }
    }
    isViewInDom() {
        return this.viewInDom;
    }
    subscribe(stream$, callback) {
        stream$
            .pipe(this.takeUntil())
            .subscribe((streamValues) => {
            callback(streamValues);
            this.reRender();
        });
    }
    subscribeWithoutRender(stream$, callback) {
        stream$
            .pipe(this.takeUntil())
            .subscribe((streamValues) => {
            callback(streamValues);
        });
    }
    // for gate
    subscribeAndEmit(stream$, emitter, mapper = (value) => value) {
        stream$
            .pipe(this.takeUntil())
            .subscribe((value) => {
            emitter.emit(mapper(value));
        });
    }
    unsubscribe() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    takeUntil() {
        return hermesTakeUntil(this.unsubscribe$);
    }
}
SmartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SmartComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
SmartComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: SmartComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SmartComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUd0RixNQUFNLE9BQWdCLGNBQWUsU0FBUSxZQUFZO0lBTXhELFlBQXlDLFFBQTJCLEVBQzdELFVBQXNCO1FBQzVCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUZzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUo1RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUsxRCxDQUFDO0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTLENBQUksT0FBNEIsRUFBRSxRQUE0QjtRQUN0RSxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxZQUFlLEVBQUUsRUFBRTtZQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQixDQUFJLE9BQTRCLEVBQUUsUUFBNEI7UUFDbkYsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUyxDQUFDLENBQUMsWUFBZSxFQUFFLEVBQUU7WUFDOUIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDWCxnQkFBZ0IsQ0FDZixPQUE0QixFQUM1QixPQUF3QixFQUN4QixTQUE0QixDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsS0FBSztRQUUvQyxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFRLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLFdBQVc7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFUyxTQUFTO1FBQ2xCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzsyR0F4RW9CLGNBQWM7K0ZBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQURuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHdWlDb21wb25lbnQgfSBmcm9tICcuL2d1aS1jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCwgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU21hcnRDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgdmlld0luRG9tOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52aWV3SW5Eb20gPSB0cnVlO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cmVSZW5kZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNWaWV3SW5Eb20oKSkge1xuXHRcdFx0dGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNWaWV3SW5Eb20oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmlld0luRG9tO1xuXHR9XG5cblx0c3Vic2NyaWJlPFQ+KHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4sIGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RyZWFtVmFsdWVzOiBUKSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN0cmVhbVZhbHVlcyk7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0c3Vic2NyaWJlV2l0aG91dFJlbmRlcjxUPihzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cmVhbVZhbHVlczogVCkgPT4ge1xuXHRcdFx0XHRjYWxsYmFjayhzdHJlYW1WYWx1ZXMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvLyBmb3IgZ2F0ZVxuXHRzdWJzY3JpYmVBbmRFbWl0PFY+KFxuXHRcdHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8Vj4sXG5cdFx0ZW1pdHRlcjogRXZlbnRFbWl0dGVyPFY+LFxuXHRcdG1hcHBlcjogKHZhbHVlOiBWKSA9PiBhbnkgPSAodmFsdWU6IFYpID0+IHZhbHVlXG5cdCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogVikgPT4ge1xuXHRcdFx0XHRlbWl0dGVyLmVtaXQobWFwcGVyKHZhbHVlKSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCB0YWtlVW50aWwoKTogYW55IHtcblx0XHRyZXR1cm4gaGVybWVzVGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKTtcblx0fVxuXG59XG4iXX0=