import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiForDirective {
    subscriber;
    vcr;
    template;
    guiForOf;
    constructor(subscriber, vcr, template) {
        this.subscriber = subscriber;
        this.vcr = vcr;
        this.template = template;
    }
    ngOnChanges(changes) {
        if (changes['guiForOf'] !== undefined) {
            this.guiForOf
                .subscribe((values) => {
                this.vcr.clear();
                for (const value of values) {
                    this.vcr.createEmbeddedView(this.template, { $implicit: value });
                }
            });
            this.subscriber
                .subscribe(this.guiForOf, (values) => {
                this.vcr.clear();
                for (const value of values) {
                    this.vcr.createEmbeddedView(this.template, { $implicit: value });
                }
            });
        }
    }
    ngOnDestroy() {
        this.subscriber.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiForDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: GuiForDirective, selector: "[guiFor]", inputs: { guiForOf: "guiForOf" }, providers: [
            GuiSubscriber
        ], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiForDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiFor]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: () => [{ type: i1.GuiSubscriber }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }], propDecorators: { guiForOf: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmZvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvZm9yL2d1aS5mb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sZUFBZTtJQU1UO0lBQ0E7SUFDQTtJQUxsQixRQUFRLENBQWdDO0lBRXhDLFlBQ2tCLFVBQXlCLEVBQ3pCLEdBQXFCLEVBQ3JCLFFBQTBCO1FBRjFCLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDekIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFFNUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFFBQVE7aUJBQ1gsU0FBUyxDQUFDLENBQUMsTUFBa0IsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtvQkFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2pFO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFJLENBQUMsVUFBVTtpQkFDYixTQUFTLENBQ1QsSUFBSSxDQUFDLFFBQVEsRUFDYixDQUFDLE1BQWtCLEVBQUUsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNqRTtZQUNGLENBQUMsQ0FDRCxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzt1R0F2Q1csZUFBZTsyRkFBZixlQUFlLHFFQUpoQjtZQUNWLGFBQWE7U0FDYjs7MkZBRVcsZUFBZTtrQkFOM0IsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsU0FBUyxFQUFFO3dCQUNWLGFBQWE7cUJBQ2I7aUJBQ0Q7MklBSUEsUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aVN1YnNjcmliZXIgfSBmcm9tICcuLi9ndWkuc3Vic2NyaWJlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWlGb3JdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3Vic2NyaWJlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEd1aUZvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRndWlGb3JPZiE6IEhlcm1lc09ic2VydmFibGU8QXJyYXk8YW55Pj47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyOiBHdWlTdWJzY3JpYmVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT5cblx0KSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoY2hhbmdlc1snZ3VpRm9yT2YnXSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHRoaXMuZ3VpRm9yT2Zcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWVzOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy52Y3IuY2xlYXIoKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuXHRcdFx0XHRcdFx0dGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUsIHsgJGltcGxpY2l0OiB2YWx1ZSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHR0aGlzLmd1aUZvck9mLFxuXHRcdFx0XHRcdCh2YWx1ZXM6IEFycmF5PGFueT4pID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudmNyLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSwgeyAkaW1wbGljaXQ6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmliZXIuZGVzdHJveSgpO1xuXHR9XG59XG4iXX0=