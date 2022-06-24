import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ListViewItemComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.context = 'Template not provided';
        this.addClassToHost('gui-w-full');
        this.addClassToHost('gui-my-6');
        this.addClassToHost('gui-mx-0');
        this.addClassToHost('gui-block');
    }
    ngOnChanges() {
        if (this.template && this.item) {
            this.hasTemplateRef = this.template.hasTemplateRef();
            if (!this.hasTemplateRef) {
                this.context = this.template.getTemplateMethod()(this.item);
            }
        }
    }
    getSelectorName() {
        return 'gui-list-item';
    }
}
ListViewItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ListViewItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ListViewItemComponent, selector: "div[gui-list-view-item][item][template]", inputs: { item: "item", template: "template" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-item-container gui-py-8\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-item-container gui-py-8\"></div>\n</ng-template>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-view-item][item][template]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-item-container gui-py-8\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-item-container gui-py-8\"></div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { item: [{
                type: Input
            }], template: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7QUFVeEYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFZdkQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFMbkIsWUFBTyxHQUFXLHVCQUF1QixDQUFDO1FBT3pDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVc7UUFFVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7bUhBcENXLHFCQUFxQjt1R0FBckIscUJBQXFCLDJLQ1psQyxnWUFVQTs0RkRFYSxxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0MseUNBQXlDLGlCQUVwQyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO2lHQUsvQyxJQUFJO3NCQURILEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3VGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXctdGVtcGxhdGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktbGlzdC12aWV3LWl0ZW1dW2l0ZW1dW3RlbXBsYXRlXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXctaXRlbS5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3SXRlbUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGl0ZW0hOiBhbnk7XG5cblx0QElucHV0KClcblx0dGVtcGxhdGUhOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGNvbnRleHQ6IHN0cmluZyA9ICdUZW1wbGF0ZSBub3QgcHJvdmlkZWQnO1xuXG5cdGhhc1RlbXBsYXRlUmVmOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS13LWZ1bGwnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbXktNicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1teC0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblxuXHRcdGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMuaXRlbSkge1xuXG5cdFx0XHR0aGlzLmhhc1RlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZS5oYXNUZW1wbGF0ZVJlZigpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaGFzVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpcy50ZW1wbGF0ZS5nZXRUZW1wbGF0ZU1ldGhvZCgpKHRoaXMuaXRlbSk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1pdGVtJztcblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzVGVtcGxhdGVSZWY7IGVsc2UgdGVtcGxhdGVNZXRob2RcIj5cblx0PGRpdiBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyIGd1aS1weS04XCI+XG5cdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGUuZ2V0VGVtcGxhdGVSZWYoKTsgY29udGV4dDoge2l0ZW06IGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZU1ldGhvZD5cblx0PGRpdiBbaW5uZXJIVE1MXT1cImNvbnRleHRcIlxuXHRcdCBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyIGd1aS1weS04XCI+PC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19