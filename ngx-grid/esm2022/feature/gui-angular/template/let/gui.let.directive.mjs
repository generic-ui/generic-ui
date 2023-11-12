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
    guiLetViewChanger;
    constructor(subscriber, cd, vcr, template) {
        this.subscriber = subscriber;
        this.cd = cd;
        this.vcr = vcr;
        this.template = template;
        this.guiLetViewChanger = new GuiLetViewChanger(this.cd, this.vcr, this.template);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiLetDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: GuiLetDirective, selector: "[guiLet]", inputs: { guiLet: "guiLet" }, providers: [
            GuiSubscriber
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiLetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiLet]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: () => [{ type: i1.GuiSubscriber }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }], propDecorators: { guiLet: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvbGV0L2d1aS5sZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBc0UsTUFBTSxlQUFlLENBQUM7QUFFeEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFRMUQsTUFBTSxPQUFPLGVBQWU7SUFRVDtJQUNBO0lBQ0E7SUFDQTtJQVJsQixNQUFNLENBQXlCO0lBRWQsaUJBQWlCLENBQW9CO0lBRXRELFlBQ2tCLFVBQXlCLEVBQ3pCLEVBQXFCLEVBQ3JCLEdBQXFCLEVBQ3JCLFFBQTBCO1FBSDFCLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFFM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUVwQyxJQUFJLENBQUMsVUFBVTtpQkFDYixTQUFTLENBQ1QsSUFBSSxDQUFDLE1BQU0sRUFDWCxDQUFDLENBQU0sRUFBRSxFQUFFO2dCQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDTDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO3VHQS9CVyxlQUFlOzJGQUFmLGVBQWUsaUVBSmhCO1lBQ1YsYUFBYTtTQUNiOzsyRkFFVyxlQUFlO2tCQU4zQixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUU7d0JBQ1YsYUFBYTtxQkFDYjtpQkFDRDsyS0FJQSxNQUFNO3NCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aVN1YnNjcmliZXIgfSBmcm9tICcuLi9ndWkuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBHdWlMZXRWaWV3Q2hhbmdlciB9IGZyb20gJy4vZ3VpLmxldC12aWV3LWNoYWdlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWlMZXRdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3Vic2NyaWJlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRndWlMZXQhOiBIZXJtZXNPYnNlcnZhYmxlPGFueT47XG5cblx0cHJpdmF0ZSByZWFkb25seSBndWlMZXRWaWV3Q2hhbmdlcjogR3VpTGV0Vmlld0NoYW5nZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyOiBHdWlTdWJzY3JpYmVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT5cblx0KSB7XG5cdFx0dGhpcy5ndWlMZXRWaWV3Q2hhbmdlciA9IG5ldyBHdWlMZXRWaWV3Q2hhbmdlcih0aGlzLmNkLCB0aGlzLnZjciwgdGhpcy50ZW1wbGF0ZSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlc1snZ3VpTGV0J10gIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHR0aGlzLmd1aUxldCxcblx0XHRcdFx0XHQodjogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmd1aUxldFZpZXdDaGFuZ2VyLm9uTmV4dCh2KTtcblx0XHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmliZXIuZGVzdHJveSgpO1xuXHR9XG59XG4iXX0=