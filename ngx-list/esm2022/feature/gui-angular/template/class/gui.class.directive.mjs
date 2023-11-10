import { Directive, Input } from '@angular/core';
import { GuiClassManager } from './gui.class.manager';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiClassDirective {
    subscriber;
    elementRef;
    guiClass;
    // @ts-ignore
    manager = new GuiClassManager(this.elementRef.nativeElement);
    constructor(subscriber, elementRef) {
        this.subscriber = subscriber;
        this.elementRef = elementRef;
    }
    ngOnChanges(changes) {
        if (changes['guiClass'] !== undefined) {
            this.subscriber
                .subscribe(this.guiClass, (newClasses) => {
                this.manager.update(newClasses);
            });
        }
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiClassDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: GuiClassDirective, selector: "[guiClass]", inputs: { guiClass: "guiClass" }, providers: [
            GuiSubscriber
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiClass]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.GuiSubscriber }, { type: i0.ElementRef }]; }, propDecorators: { guiClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmNsYXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9jbGFzcy9ndWkuY2xhc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFRbEQsTUFBTSxPQUFPLGlCQUFpQjtJQVNYO0lBQ0E7SUFQbEIsUUFBUSxDQUFtQztJQUUzQyxhQUFhO0lBQ0ksT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFOUUsWUFDa0IsVUFBeUIsRUFDekIsVUFBc0I7UUFEdEIsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUN6QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRXhDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFakMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBRXRDLElBQUksQ0FBQyxVQUFVO2lCQUNiLFNBQVMsQ0FDVCxJQUFJLENBQUMsUUFBUSxFQUNiLENBQUMsVUFBeUIsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztTQUNMO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7d0dBN0JXLGlCQUFpQjs0RkFBakIsaUJBQWlCLHVFQUpsQjtZQUNWLGFBQWE7U0FDYjs7NEZBRVcsaUJBQWlCO2tCQU43QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUU7d0JBQ1YsYUFBYTtxQkFDYjtpQkFDRDs2SEFJQSxRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBHdWlDbGFzc01hbmFnZXIgfSBmcm9tICcuL2d1aS5jbGFzcy5tYW5hZ2VyJztcbmltcG9ydCB7IEd1aVN1YnNjcmliZXIgfSBmcm9tICcuLi9ndWkuc3Vic2NyaWJlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWlDbGFzc10nLFxuXHRwcm92aWRlcnM6IFtcblx0XHRHdWlTdWJzY3JpYmVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgR3VpQ2xhc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0Z3VpQ2xhc3MhOiBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+O1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cHJpdmF0ZSByZWFkb25seSBtYW5hZ2VyID0gbmV3IEd1aUNsYXNzTWFuYWdlcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyOiBHdWlTdWJzY3JpYmVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuXHQpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzWydndWlDbGFzcyddICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5zdWJzY3JpYmVyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0dGhpcy5ndWlDbGFzcyxcblx0XHRcdFx0XHQobmV3Q2xhc3NlczogQXJyYXk8c3RyaW5nPikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5tYW5hZ2VyLnVwZGF0ZShuZXdDbGFzc2VzKTtcblx0XHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmliZXIuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==