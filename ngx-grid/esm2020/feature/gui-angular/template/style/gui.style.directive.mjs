import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiStyleDirective {
    constructor(subscriber, elementRef) {
        this.subscriber = subscriber;
        this.elementRef = elementRef;
    }
    ngOnChanges(changes) {
        if (changes['guiStyle'] !== undefined) {
            this.subscriber
                .subscribe(this.guiStyle, (styles) => {
                Object.keys(styles)
                    .forEach((key) => {
                    this.setStyleByName(key, styles[key]);
                });
            });
        }
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
    setStyleByName(name, value) {
        this.set(name, value);
    }
    set(name, value) {
        this.elementRef.nativeElement[GuiStyleDirective.STYLE][name] = value;
    }
}
GuiStyleDirective.STYLE = 'style';
GuiStyleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiStyleDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiStyleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: GuiStyleDirective, selector: "[guiStyle]", inputs: { guiStyle: "guiStyle" }, providers: [
        GuiSubscriber
    ], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiStyleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiStyle]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.GuiSubscriber }, { type: i0.ElementRef }]; }, propDecorators: { guiStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLnN0eWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9zdHlsZS9ndWkuc3R5bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVFsRCxNQUFNLE9BQU8saUJBQWlCO0lBTzdCLFlBQ2tCLFVBQXlCLEVBQ3pCLFVBQXNCO1FBRHRCLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUV4QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUV0QyxJQUFJLENBQUMsVUFBVTtpQkFDYixTQUFTLENBQ1QsSUFBSSxDQUFDLFFBQVEsRUFDYixDQUFDLE1BQWlDLEVBQUUsRUFBRTtnQkFFckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBQ2YsT0FBTyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGNBQWMsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sR0FBRyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN0RSxDQUFDOztBQXRDdUIsdUJBQUssR0FBRyxPQUFPLENBQUM7K0dBRjVCLGlCQUFpQjttR0FBakIsaUJBQWlCLHVFQUpsQjtRQUNWLGFBQWE7S0FDYjs0RkFFVyxpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRTt3QkFDVixhQUFhO3FCQUNiO2lCQUNEOzZIQU1BLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aVN1YnNjcmliZXIgfSBmcm9tICcuLi9ndWkuc3Vic2NyaWJlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWlTdHlsZV0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHRHdWlTdWJzY3JpYmVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgR3VpU3R5bGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1RZTEUgPSAnc3R5bGUnO1xuXG5cdEBJbnB1dCgpXG5cdGd1aVN0eWxlITogSGVybWVzT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXI6IEd1aVN1YnNjcmliZXIsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ2d1aVN0eWxlJ10gIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHR0aGlzLmd1aVN0eWxlLFxuXHRcdFx0XHRcdChzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcblxuXHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoc3R5bGVzKVxuXHRcdFx0XHRcdFx0XHQgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCAgdGhpcy5zZXRTdHlsZUJ5TmFtZShrZXksIHN0eWxlc1trZXldKTtcblx0XHRcdFx0XHRcdFx0ICB9KTtcblx0XHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmliZXIuZGVzdHJveSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTdHlsZUJ5TmFtZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNldChuYW1lLCB2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtHdWlTdHlsZURpcmVjdGl2ZS5TVFlMRV1bbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG59XG4iXX0=