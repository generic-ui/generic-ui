import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../search/feature/search.component";
const _c0 = ["gui-structure-top-panel", ""];
export class StructureTopPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.addClassToHost('gui-p-6');
        this.addClassToHost('gui-border-b');
        this.addClassToHost('gui-border-b-solid');
    }
    getSelectorName() {
        return 'gui-structure-top-panel';
    }
}
StructureTopPanelComponent.ɵfac = function StructureTopPanelComponent_Factory(t) { return new (t || StructureTopPanelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
StructureTopPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureTopPanelComponent, selectors: [["div", "gui-structure-top-panel", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 0, consts: [["gui-search-bar", "", 1, "gui-flex", "gui-items-center", "gui-h-full", "gui-w-3/5", "gui-mr-auto"]], template: function StructureTopPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, directives: [i1.SearchComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureTopPanelComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-top-panel]',
                template: `

		<div gui-search-bar
			 class="gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto"></div>
		<!--		<gui-filter-menu-trigger></gui-filter-menu-trigger>-->

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7OztBQWNyRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBYztJQUU3RCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdoRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7b0dBWlcsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUFSckMseUJBQzJFOzt1RkFPaEUsMEJBQTBCO2NBWnRDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7OztFQU1UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXRvcC1wYW5lbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBndWktc2VhcmNoLWJhclxuXHRcdFx0IGNsYXNzPVwiZ3VpLWZsZXggZ3VpLWl0ZW1zLWNlbnRlciBndWktaC1mdWxsIGd1aS13LTMvNSBndWktbXItYXV0b1wiPjwvZGl2PlxuXHRcdDwhLS1cdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtNicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ib3JkZXItYicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ib3JkZXItYi1zb2xpZCcpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS10b3AtcGFuZWwnO1xuXHR9XG5cbn1cbiJdfQ==