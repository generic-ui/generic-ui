import { Directive } from '@angular/core';
import { GuiComponent } from './gui-component';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class SmartComponent extends GuiComponent {
    detector;
    viewInDom = false;
    unsubscribe$ = new HermesSubject();
    constructor(detector, elementRef) {
        super(elementRef);
        this.detector = detector;
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
    /**
     * @deprecated instead use useReactiveContext
     */
    subscribe(stream$, callback) {
        stream$
            .pipe(this.takeUntil())
            .subscribe((streamValues) => {
            callback(streamValues);
            this.reRender();
        });
    }
    /**
     * @deprecated instead use useReactiveContext
     */
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SmartComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: SmartComponent, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SmartComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUd0RixNQUFNLE9BQWdCLGNBQWUsU0FBUSxZQUFZO0lBTWY7SUFKakMsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUVsQixZQUFZLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUUxRCxZQUF5QyxRQUEyQixFQUM3RCxVQUFzQjtRQUM1QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFGc0IsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7SUFHcEUsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTLENBQUksT0FBNEIsRUFBRSxRQUE0QjtRQUN0RSxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxZQUFlLEVBQUUsRUFBRTtZQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0JBQXNCLENBQUksT0FBNEIsRUFBRSxRQUE0QjtRQUNuRixPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxZQUFlLEVBQUUsRUFBRTtZQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLGdCQUFnQixDQUNmLE9BQTRCLEVBQzVCLE9BQXdCLEVBQ3hCLFNBQTRCLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1FBRS9DLE9BQU87YUFDTCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsV0FBVztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVTLFNBQVM7UUFDbEIsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7dUdBOUVvQixjQUFjOzJGQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBRG5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydENvbXBvbmVudCBleHRlbmRzIEd1aUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSB2aWV3SW5Eb206IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3Vic2NyaWJlJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdFx0XHQgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnZpZXdJbkRvbSA9IHRydWU7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRyZVJlbmRlcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ZpZXdJbkRvbSgpKSB7XG5cdFx0XHR0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cblxuXHRpc1ZpZXdJbkRvbSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3SW5Eb207XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgaW5zdGVhZCB1c2UgdXNlUmVhY3RpdmVDb250ZXh0XG5cdCAqL1xuXHRzdWJzY3JpYmU8VD4oc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPiwgY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJlYW1WYWx1ZXM6IFQpID0+IHtcblx0XHRcdFx0Y2FsbGJhY2soc3RyZWFtVmFsdWVzKTtcblx0XHRcdFx0dGhpcy5yZVJlbmRlcigpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgaW5zdGVhZCB1c2UgdXNlUmVhY3RpdmVDb250ZXh0XG5cdCAqL1xuXHRzdWJzY3JpYmVXaXRob3V0UmVuZGVyPFQ+KHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4sIGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RyZWFtVmFsdWVzOiBUKSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN0cmVhbVZhbHVlcyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8vIGZvciBnYXRlXG5cdHN1YnNjcmliZUFuZEVtaXQ8Vj4oXG5cdFx0c3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxWPixcblx0XHRlbWl0dGVyOiBFdmVudEVtaXR0ZXI8Vj4sXG5cdFx0bWFwcGVyOiAodmFsdWU6IFYpID0+IGFueSA9ICh2YWx1ZTogVikgPT4gdmFsdWVcblx0KTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBWKSA9PiB7XG5cdFx0XHRcdGVtaXR0ZXIuZW1pdChtYXBwZXIodmFsdWUpKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpOiBhbnkge1xuXHRcdHJldHVybiBoZXJtZXNUYWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpO1xuXHR9XG5cbn1cbiJdfQ==