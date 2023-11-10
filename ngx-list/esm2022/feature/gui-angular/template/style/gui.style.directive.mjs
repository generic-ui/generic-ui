import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiStyleDirective {
    subscriber;
    elementRef;
    static STYLE = 'style';
    guiStyle;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiStyleDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: GuiStyleDirective, selector: "[guiStyle]", inputs: { guiStyle: "guiStyle" }, providers: [
            GuiSubscriber
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiStyleDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLnN0eWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9zdHlsZS9ndWkuc3R5bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVFsRCxNQUFNLE9BQU8saUJBQWlCO0lBUVg7SUFDQTtJQVBWLE1BQU0sQ0FBVSxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBR3hDLFFBQVEsQ0FBK0M7SUFFdkQsWUFDa0IsVUFBeUIsRUFDekIsVUFBc0I7UUFEdEIsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUN6QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRXhDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFakMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBRXRDLElBQUksQ0FBQyxVQUFVO2lCQUNiLFNBQVMsQ0FDVCxJQUFJLENBQUMsUUFBUSxFQUNiLENBQUMsTUFBaUMsRUFBRSxFQUFFO2dCQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztxQkFDZixPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sY0FBYyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxHQUFHLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3RFLENBQUM7d0dBeENXLGlCQUFpQjs0RkFBakIsaUJBQWlCLHVFQUpsQjtZQUNWLGFBQWE7U0FDYjs7NEZBRVcsaUJBQWlCO2tCQU43QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUU7d0JBQ1YsYUFBYTtxQkFDYjtpQkFDRDs2SEFNQSxRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBHdWlTdWJzY3JpYmVyIH0gZnJvbSAnLi4vZ3VpLnN1YnNjcmliZXInO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpU3R5bGVdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3Vic2NyaWJlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEd1aVN0eWxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNUWUxFID0gJ3N0eWxlJztcblxuXHRASW5wdXQoKVxuXHRndWlTdHlsZSE6IEhlcm1lc09ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyOiBHdWlTdWJzY3JpYmVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzWydndWlTdHlsZSddICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5zdWJzY3JpYmVyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0dGhpcy5ndWlTdHlsZSxcblx0XHRcdFx0XHQoc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XG5cblx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKHN0eWxlcylcblx0XHRcdFx0XHRcdFx0ICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHQgIHRoaXMuc2V0U3R5bGVCeU5hbWUoa2V5LCBzdHlsZXNba2V5XSk7XG5cdFx0XHRcdFx0XHRcdCAgfSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdWJzY3JpYmVyLmRlc3Ryb3koKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U3R5bGVCeU5hbWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZXQobmFtZSwgdmFsdWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbR3VpU3R5bGVEaXJlY3RpdmUuU1RZTEVdW25hbWVdID0gdmFsdWU7XG5cdH1cblxufVxuIl19