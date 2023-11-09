import { Directive, Input } from '@angular/core';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
import * as i1 from "../gui.subscriber";
export class GuiForDirective {
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
}
GuiForDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiForDirective, deps: [{ token: i1.GuiSubscriber }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
GuiForDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: GuiForDirective, selector: "[guiFor]", inputs: { guiForOf: "guiForOf" }, providers: [
        GuiSubscriber
    ], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiForDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[guiFor]',
                    providers: [
                        GuiSubscriber
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.GuiSubscriber }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { guiForOf: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmZvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvZm9yL2d1aS5mb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sZUFBZTtJQUszQixZQUNrQixVQUF5QixFQUN6QixHQUFxQixFQUNyQixRQUEwQjtRQUYxQixlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQ3pCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBRTVDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFakMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBRXRDLElBQUksQ0FBQyxRQUFRO2lCQUNYLFNBQVMsQ0FBQyxDQUFDLE1BQWtCLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNqRTtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUosSUFBSSxDQUFDLFVBQVU7aUJBQ2IsU0FBUyxDQUNULElBQUksQ0FBQyxRQUFRLEVBQ2IsQ0FBQyxNQUFrQixFQUFFLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO29CQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDakU7WUFDRixDQUFDLENBQ0QsQ0FBQztTQUNIO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7OzZHQXZDVyxlQUFlO2lHQUFmLGVBQWUscUVBSmhCO1FBQ1YsYUFBYTtLQUNiOzRGQUVXLGVBQWU7a0JBTjNCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFNBQVMsRUFBRTt3QkFDVixhQUFhO3FCQUNiO2lCQUNEOzZKQUlBLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBHdWlTdWJzY3JpYmVyIH0gZnJvbSAnLi4vZ3VpLnN1YnNjcmliZXInO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpRm9yXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN1YnNjcmliZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBHdWlGb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0Z3VpRm9yT2YhOiBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PGFueT4+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcjogR3VpU3Vic2NyaWJlcixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHZjcjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG5cdCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXNbJ2d1aUZvck9mJ10gIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLmd1aUZvck9mXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogQXJyYXk8YW55PikgPT4ge1xuXHRcdFx0XHRcdHRoaXMudmNyLmNsZWFyKCk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlLCB7ICRpbXBsaWNpdDogdmFsdWUgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5zdWJzY3JpYmVyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0dGhpcy5ndWlGb3JPZixcblx0XHRcdFx0XHQodmFsdWVzOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnZjci5jbGVhcigpO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUsIHsgJGltcGxpY2l0OiB2YWx1ZSB9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdWJzY3JpYmVyLmRlc3Ryb3koKTtcblx0fVxufVxuIl19