import { Directive, Input } from '@angular/core';
import { GuiClassManager } from './gui.class.manager';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiClassDirective {
    subscriber;
    elementRef;
    guiClass;
    classManager;
    constructor(subscriber, elementRef) {
        this.subscriber = subscriber;
        this.elementRef = elementRef;
        this.classManager = new GuiClassManager(this.elementRef.nativeElement);
    }
    ngOnChanges(changes) {
        if (changes['guiClass'] !== undefined) {
            this.subscriber
                .subscribe(this.guiClass, (newClasses) => {
                this.classManager.update(newClasses);
            });
        }
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiClassDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: GuiClassDirective, selector: "[guiClass]", inputs: { guiClass: "guiClass" }, providers: [
            GuiSubscriber
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiClass]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: () => [{ type: i1.GuiSubscriber }, { type: i0.ElementRef }], propDecorators: { guiClass: [{
                type: Input,
                args: [{ required: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmNsYXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9jbGFzcy9ndWkuY2xhc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFRbEQsTUFBTSxPQUFPLGlCQUFpQjtJQVFYO0lBQ0E7SUFObEIsUUFBUSxDQUFtQztJQUUxQixZQUFZLENBQWtCO0lBRS9DLFlBQ2tCLFVBQXlCLEVBQ3pCLFVBQXNCO1FBRHRCLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFVBQVU7aUJBQ2IsU0FBUyxDQUNULElBQUksQ0FBQyxRQUFRLEVBQ2IsQ0FBQyxVQUF5QixFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzt1R0E3QlcsaUJBQWlCOzJGQUFqQixpQkFBaUIsdUVBSmxCO1lBQ1YsYUFBYTtTQUNiOzsyRkFFVyxpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRTt3QkFDVixhQUFhO3FCQUNiO2lCQUNEOzJHQUlBLFFBQVE7c0JBRFAsS0FBSzt1QkFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBHdWlDbGFzc01hbmFnZXIgfSBmcm9tICcuL2d1aS5jbGFzcy5tYW5hZ2VyJztcbmltcG9ydCB7IEd1aVN1YnNjcmliZXIgfSBmcm9tICcuLi9ndWkuc3Vic2NyaWJlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWlDbGFzc10nLFxuXHRwcm92aWRlcnM6IFtcblx0XHRHdWlTdWJzY3JpYmVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgR3VpQ2xhc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSlcblx0Z3VpQ2xhc3MhOiBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNYW5hZ2VyOiBHdWlDbGFzc01hbmFnZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyOiBHdWlTdWJzY3JpYmVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHtcblx0XHR0aGlzLmNsYXNzTWFuYWdlciA9IG5ldyBHdWlDbGFzc01hbmFnZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ2d1aUNsYXNzJ10gIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHR0aGlzLmd1aUNsYXNzLFxuXHRcdFx0XHRcdChuZXdDbGFzc2VzOiBBcnJheTxzdHJpbmc+KSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsYXNzTWFuYWdlci51cGRhdGUobmV3Q2xhc3Nlcyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdWJzY3JpYmVyLmRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=