import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiIfDirective {
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
}
GuiIfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiIfDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiIfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: GuiIfDirective, selector: "[guiIf]", inputs: { guiIf: "guiIf" }, providers: [
        GuiSubscriber
    ], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiIfDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9pZi9ndWkuaWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEyRCxNQUFNLGVBQWUsQ0FBQztBQUUxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sY0FBYztJQUsxQixZQUNrQixVQUF5QixFQUN6QixHQUFxQixFQUNyQixRQUEwQjtRQUYxQixlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQ3pCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBRTVDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFakMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBRW5DLElBQUksQ0FBQyxVQUFVO2lCQUNiLFNBQVMsQ0FDVCxJQUFJLENBQUMsS0FBSyxFQUNWLENBQUMsQ0FBVSxFQUFFLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEVBQUU7b0JBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pCO1lBQ0YsQ0FBQyxDQUNELENBQUM7U0FDSDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs0R0FoQ1csY0FBYztnR0FBZCxjQUFjLDhEQUpmO1FBQ1YsYUFBYTtLQUNiOzRGQUVXLGNBQWM7a0JBTjFCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFNBQVMsRUFBRTt3QkFDVixhQUFhO3FCQUNiO2lCQUNEOzZKQUlBLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgR3VpU3Vic2NyaWJlciB9IGZyb20gJy4uL2d1aS5zdWJzY3JpYmVyJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2d1aUlmXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN1YnNjcmliZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBHdWlJZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0Z3VpSWYhOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcjogR3VpU3Vic2NyaWJlcixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHZjcjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG5cdCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ2d1aUlmJ10gIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHR0aGlzLmd1aUlmLFxuXHRcdFx0XHRcdCh2OiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZjci5jbGVhcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN1YnNjcmliZXIuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==