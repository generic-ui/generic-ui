import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import { GuiLetViewChanger } from './gui.let-view-chager';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiLetDirective {
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
}
GuiLetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiLetDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiLetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: GuiLetDirective, selector: "[guiLet]", inputs: { guiLet: "guiLet" }, providers: [
        GuiSubscriber
    ], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiLetDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvbGV0L2d1aS5sZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBc0UsTUFBTSxlQUFlLENBQUM7QUFFeEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFRMUQsTUFBTSxPQUFPLGVBQWU7SUFPM0IsWUFDa0IsVUFBeUIsRUFDekIsRUFBcUIsRUFDckIsR0FBcUIsRUFDckIsUUFBMEI7UUFIMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQU4zQixzQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFRN0YsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUVqQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFFcEMsSUFBSSxDQUFDLFVBQVU7aUJBQ2IsU0FBUyxDQUNULElBQUksQ0FBQyxNQUFNLEVBQ1gsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7NkdBOUJXLGVBQWU7aUdBQWYsZUFBZSxpRUFKaEI7UUFDVixhQUFhO0tBQ2I7NEZBRVcsZUFBZTtrQkFOM0IsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsU0FBUyxFQUFFO3dCQUNWLGFBQWE7cUJBQ2I7aUJBQ0Q7NkxBSUEsTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBHdWlTdWJzY3JpYmVyIH0gZnJvbSAnLi4vZ3VpLnN1YnNjcmliZXInO1xuaW1wb3J0IHsgR3VpTGV0Vmlld0NoYW5nZXIgfSBmcm9tICcuL2d1aS5sZXQtdmlldy1jaGFnZXInO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpTGV0XScsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN1YnNjcmliZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBHdWlMZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0Z3VpTGV0ITogSGVybWVzT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3VpTGV0Vmlld0NoYW5nZXIgPSBuZXcgR3VpTGV0Vmlld0NoYW5nZXIodGhpcy5jZCwgdGhpcy52Y3IsIHRoaXMudGVtcGxhdGUpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcjogR3VpU3Vic2NyaWJlcixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHZjcjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG5cdCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ2d1aUxldCddICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5zdWJzY3JpYmVyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0dGhpcy5ndWlMZXQsXG5cdFx0XHRcdFx0KHY6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5ndWlMZXRWaWV3Q2hhbmdlci5vbk5leHQodik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdWJzY3JpYmVyLmRlc3Ryb3koKTtcblx0fVxufVxuIl19