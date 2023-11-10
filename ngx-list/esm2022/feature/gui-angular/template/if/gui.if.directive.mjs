import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiIfDirective {
    subscriber;
    vcr;
    template;
    guiIf;
    constructor(subscriber, vcr, template) {
        this.subscriber = subscriber;
        this.vcr = vcr;
        this.template = template;
    }
    ngOnChanges(changes) {
        if (changes['guiIf'] !== undefined) {
            this.subscriber
                .subscribe(this.guiIf, (v) => {
                if (v) {
                    this.vcr.createEmbeddedView(this.template);
                }
                else {
                    this.vcr.clear();
                }
            });
        }
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiIfDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: GuiIfDirective, selector: "[guiIf]", inputs: { guiIf: "guiIf" }, providers: [
            GuiSubscriber
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiIfDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiIf]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.GuiSubscriber }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { guiIf: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9pZi9ndWkuaWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sY0FBYztJQU1SO0lBQ0E7SUFDQTtJQUxsQixLQUFLLENBQTZCO0lBRWxDLFlBQ2tCLFVBQXlCLEVBQ3pCLEdBQXFCLEVBQ3JCLFFBQTBCO1FBRjFCLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDekIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFFNUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFFbkMsSUFBSSxDQUFDLFVBQVU7aUJBQ2IsU0FBUyxDQUNULElBQUksQ0FBQyxLQUFLLEVBQ1YsQ0FBQyxDQUFVLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsRUFBRTtvQkFDTixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDakI7WUFDRixDQUFDLENBQ0QsQ0FBQztTQUNIO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7d0dBaENXLGNBQWM7NEZBQWQsY0FBYyw4REFKZjtZQUNWLGFBQWE7U0FDYjs7NEZBRVcsY0FBYztrQkFOMUIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsU0FBUztvQkFDbkIsU0FBUyxFQUFFO3dCQUNWLGFBQWE7cUJBQ2I7aUJBQ0Q7NkpBSUEsS0FBSztzQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aVN1YnNjcmliZXIgfSBmcm9tICcuLi9ndWkuc3Vic2NyaWJlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWlJZl0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHRHdWlTdWJzY3JpYmVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgR3VpSWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0Z3VpSWYhOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcjogR3VpU3Vic2NyaWJlcixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHZjcjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG5cdCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ2d1aUlmJ10gIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHR0aGlzLmd1aUlmLFxuXHRcdFx0XHRcdCh2OiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZjci5jbGVhcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmliZXIuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==