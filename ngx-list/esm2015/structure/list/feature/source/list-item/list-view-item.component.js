import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["gui-list-view-item", "", "item", "", "template", ""];
function ListViewItemComponent_ng_container_0_2_ng_template_0_Template(rf, ctx) { }
function ListViewItemComponent_ng_container_0_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListViewItemComponent_ng_container_0_2_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c1 = function (a0) { return { item: a0 }; };
function ListViewItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, ListViewItemComponent_ng_container_0_2_Template, 1, 0, undefined, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template.getTemplateRef())("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r0.item));
} }
function ListViewItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r2.context, i0.ɵɵsanitizeHtml);
} }
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
ListViewItemComponent.ɵfac = function ListViewItemComponent_Factory(t) { return new (t || ListViewItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ListViewItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListViewItemComponent, selectors: [["div", "gui-list-view-item", "", "item", "", "template", ""]], inputs: { item: "item", template: "template" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["templateMethod", ""], [1, "gui-list-item-container", "gui-py-8"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "gui-list-item-container", "gui-py-8", 3, "innerHTML"]], template: function ListViewItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListViewItemComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
        i0.ɵɵtemplate(1, ListViewItemComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.hasTemplateRef)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewItemComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-list-view-item][item][template]',
                templateUrl: './list-view-item.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { item: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL3NvdXJjZS9saXN0LWl0ZW0vbGlzdC12aWV3LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7SUNBakYsb0dBQWdHOzs7O0lBRmxHLDZCQUEwRDtJQUN6RCw4QkFBOEM7SUFDN0MscUZBQWdHO0lBQ2pHLGlCQUFNO0lBQ1AsMEJBQWU7OztJQUZDLGVBQTZDO0lBQTdDLG1FQUE2QyxvRUFBQTs7O0lBSzVELHlCQUNpRDs7O0lBRDVDLDZEQUFxQjs7QURLM0IsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFZdkQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFMbkIsWUFBTyxHQUFXLHVCQUF1QixDQUFDO1FBT3pDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVc7UUFFVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7MEZBcENXLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDWmxDLHdGQUllO1FBRWYsdUhBR2M7OztRQVRDLHlDQUFzQixpQkFBQTs7dUZEWXhCLHFCQUFxQjtjQU5qQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzZEQUlBLElBQUk7a0JBREgsS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LXZpZXctaXRlbV1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy1pdGVtLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGNvbnRleHQ6IHN0cmluZyA9ICdUZW1wbGF0ZSBub3QgcHJvdmlkZWQnO1xuXG5cdGhhc1RlbXBsYXRlUmVmOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS13LWZ1bGwnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbXktNicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1teC0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblxuXHRcdGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMuaXRlbSkge1xuXG5cdFx0XHR0aGlzLmhhc1RlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZS5oYXNUZW1wbGF0ZVJlZigpO1xuXG5cdFx0XHRpZiAoIXRoaXMuaGFzVGVtcGxhdGVSZWYpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpcy50ZW1wbGF0ZS5nZXRUZW1wbGF0ZU1ldGhvZCgpKHRoaXMuaXRlbSk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1pdGVtJztcblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzVGVtcGxhdGVSZWY7IGVsc2UgdGVtcGxhdGVNZXRob2RcIj5cblx0PGRpdiBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyIGd1aS1weS04XCI+XG5cdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGUuZ2V0VGVtcGxhdGVSZWYoKTsgY29udGV4dDoge2l0ZW06IGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZU1ldGhvZD5cblx0PGRpdiBbaW5uZXJIVE1MXT1cImNvbnRleHRcIlxuXHRcdCBjbGFzcz1cImd1aS1saXN0LWl0ZW0tY29udGFpbmVyIGd1aS1weS04XCI+PC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19