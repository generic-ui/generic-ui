import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import { GuiLetViewChanger } from './gui.let-view-chager';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiLetDirective {
    subscriber;
    cd;
    vcr;
    template;
    guiLet;
    // @ts-ignore
    guiLetViewChanger = new GuiLetViewChanger(this.cd, this.vcr, this.template);
    constructor(subscriber, cd, vcr, template) {
        this.subscriber = subscriber;
        this.cd = cd;
        this.vcr = vcr;
        this.template = template;
    }
    ngOnChanges(changes) {
        if (changes['guiLet'] !== undefined) {
            this.subscriber
                .subscribe(this.guiLet, (v) => {
                this.guiLetViewChanger.onNext(v);
            });
        }
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiLetDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: GuiLetDirective, selector: "[guiLet]", inputs: { guiLet: "guiLet" }, providers: [
            GuiSubscriber
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GuiLetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiLet]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.GuiSubscriber }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { guiLet: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvbGV0L2d1aS5sZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBc0UsTUFBTSxlQUFlLENBQUM7QUFFeEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFRMUQsTUFBTSxPQUFPLGVBQWU7SUFTVDtJQUNBO0lBQ0E7SUFDQTtJQVRsQixNQUFNLENBQXlCO0lBRS9CLGFBQWE7SUFDSSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFN0YsWUFDa0IsVUFBeUIsRUFDekIsRUFBcUIsRUFDckIsR0FBcUIsRUFDckIsUUFBMEI7UUFIMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUU1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUVwQyxJQUFJLENBQUMsVUFBVTtpQkFDYixTQUFTLENBQ1QsSUFBSSxDQUFDLE1BQU0sRUFDWCxDQUFDLENBQU0sRUFBRSxFQUFFO2dCQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDTDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO3dHQS9CVyxlQUFlOzRGQUFmLGVBQWUsaUVBSmhCO1lBQ1YsYUFBYTtTQUNiOzs0RkFFVyxlQUFlO2tCQU4zQixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUU7d0JBQ1YsYUFBYTtxQkFDYjtpQkFDRDs2TEFJQSxNQUFNO3NCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aVN1YnNjcmliZXIgfSBmcm9tICcuLi9ndWkuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBHdWlMZXRWaWV3Q2hhbmdlciB9IGZyb20gJy4vZ3VpLmxldC12aWV3LWNoYWdlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWlMZXRdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3Vic2NyaWJlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRndWlMZXQhOiBIZXJtZXNPYnNlcnZhYmxlPGFueT47XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRwcml2YXRlIHJlYWRvbmx5IGd1aUxldFZpZXdDaGFuZ2VyID0gbmV3IEd1aUxldFZpZXdDaGFuZ2VyKHRoaXMuY2QsIHRoaXMudmNyLCB0aGlzLnRlbXBsYXRlKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXI6IEd1aVN1YnNjcmliZXIsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxuXHQpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGlmIChjaGFuZ2VzWydndWlMZXQnXSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHRoaXMuc3Vic2NyaWJlclxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdHRoaXMuZ3VpTGV0LFxuXHRcdFx0XHRcdCh2OiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuZ3VpTGV0Vmlld0NoYW5nZXIub25OZXh0KHYpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuc3Vic2NyaWJlci5kZXN0cm95KCk7XG5cdH1cbn1cbiJdfQ==