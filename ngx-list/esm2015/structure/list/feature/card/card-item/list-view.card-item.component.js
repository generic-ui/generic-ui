import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["gui-list-card-item", "", "item", "", "template", ""];
function ListViewCardItemComponent_ng_container_0_2_ng_template_0_Template(rf, ctx) { }
function ListViewCardItemComponent_ng_container_0_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListViewCardItemComponent_ng_container_0_2_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c1 = function (a0) { return { item: a0 }; };
function ListViewCardItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, ListViewCardItemComponent_ng_container_0_2_Template, 1, 0, undefined, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template.getTemplateRef())("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r0.item));
} }
function ListViewCardItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r2.context, i0.ɵɵsanitizeHtml);
} }
export class ListViewCardItemComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.context = 'Template not provided';
        this.addClassToHost('gui-cursor-pointer');
        this.addClassToHost('gui-block');
        this.addClassToHost('gui-m-0');
        this.addClassToHost('gui-p-0');
        this.addClassToHost('gui-relative');
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
        return 'gui-list-card';
    }
}
ListViewCardItemComponent.ɵfac = function ListViewCardItemComponent_Factory(t) { return new (t || ListViewCardItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ListViewCardItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListViewCardItemComponent, selectors: [["div", "gui-list-card-item", "", "item", "", "template", ""]], inputs: { item: "item", template: "template" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["templateMethod", ""], [1, "gui-list-card-wrapper", "gui-h-full", "gui-m-0", "gui-py-0", "gui-px-8", "gui-relative"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "gui-list-card-wrapper", "gui-h-full", "gui-m-0", "gui-py-0", "gui-px-8", "gui-relative", 3, "innerHTML"]], template: function ListViewCardItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListViewCardItemComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
        i0.ɵɵtemplate(1, ListViewCardItemComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.hasTemplateRef)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewCardItemComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-list-card-item][item][template]',
                templateUrl: './list-view.card-item.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { item: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC9jYXJkLWl0ZW0vbGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7OztJQ0FqRix3R0FBZ0c7Ozs7SUFGbEcsNkJBQTBEO0lBQ3pELDhCQUFxRjtJQUNwRix5RkFBZ0c7SUFDakcsaUJBQU07SUFDUCwwQkFBZTs7O0lBRkMsZUFBNkM7SUFBN0MsbUVBQTZDLG9FQUFBOzs7SUFLNUQseUJBQ3dGOzs7SUFEbkYsNkRBQXFCOztBREszQixNQUFNLE9BQU8seUJBQTBCLFNBQVEsYUFBYTtJQVkzRCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUxuQixZQUFPLEdBQVcsdUJBQXVCLENBQUM7UUFPekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtTQUVEO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7a0dBcENXLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDWnRDLDRGQUllO1FBRWYsMkhBR2M7OztRQVRDLHlDQUFzQixpQkFBQTs7dUZEWXhCLHlCQUF5QjtjQU5yQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzZEQUlBLElBQUk7a0JBREgsS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LWNhcmQtaXRlbV1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRjb250ZXh0OiBzdHJpbmcgPSAnVGVtcGxhdGUgbm90IHByb3ZpZGVkJztcblxuXHRoYXNUZW1wbGF0ZVJlZjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktY3Vyc29yLXBvaW50ZXInKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbS0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtMCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1yZWxhdGl2ZScpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5pdGVtKSB7XG5cblx0XHRcdHRoaXMuaGFzVGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlLmhhc1RlbXBsYXRlUmVmKCk7XG5cblx0XHRcdGlmICghdGhpcy5oYXNUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLnRlbXBsYXRlLmdldFRlbXBsYXRlTWV0aG9kKCkodGhpcy5pdGVtKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LWNhcmQnO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNUZW1wbGF0ZVJlZjsgZWxzZSB0ZW1wbGF0ZU1ldGhvZFwiPlxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtY2FyZC13cmFwcGVyIGd1aS1oLWZ1bGwgZ3VpLW0tMCBndWktcHktMCBndWktcHgtOCBndWktcmVsYXRpdmVcIj5cblx0XHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZS5nZXRUZW1wbGF0ZVJlZigpOyBjb250ZXh0OiB7aXRlbTogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuXHQ8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlTWV0aG9kPlxuXHQ8ZGl2IFtpbm5lckhUTUxdPVwiY29udGV4dFwiXG5cdFx0IGNsYXNzPVwiZ3VpLWxpc3QtY2FyZC13cmFwcGVyIGd1aS1oLWZ1bGwgZ3VpLW0tMCBndWktcHktMCBndWktcHgtOCBndWktcmVsYXRpdmVcIj48L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=