import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FilterMenuComponent } from './filter-menu.component';
import { filterContainerToken } from '../../core/api/config/filter-container-token';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "./icon/filter-icon.component";
const _c0 = ["gui-filter-menu-trigger", ""];
export class FilterMenuTriggerComponent extends SmartComponent {
    constructor(detector, elementRef, injector, drawerService, filterContainerRef) {
        super(detector, elementRef);
        this.injector = injector;
        this.drawerService = drawerService;
        this.filterContainerRef = filterContainerRef;
    }
    openDrawer() {
        const elementRef = this.filterContainerRef.getElementRef();
        this.drawerService.open(elementRef, FilterMenuComponent, { injector: this.injector });
    }
    getSelectorName() {
        return 'gui-filter-menu-trigger';
    }
}
FilterMenuTriggerComponent.ɵfac = function FilterMenuTriggerComponent_Factory(t) { return new (t || FilterMenuTriggerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i1.FabricDrawerService), i0.ɵɵdirectiveInject(filterContainerToken)); };
FilterMenuTriggerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterMenuTriggerComponent, selectors: [["div", "gui-filter-menu-trigger", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 1, consts: [[1, "gui-filter-icon-wrapper", 3, "gui-tooltip", "click"], ["gui-filter-icon", ""]], template: function FilterMenuTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function FilterMenuTriggerComponent_Template_div_click_0_listener() { return ctx.openDrawer(); });
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("gui-tooltip", "Filters");
    } }, directives: [i1.FabricTooltipDirective, i2.FilterIconComponent], styles: [".gui-filter-icon-wrapper{margin-right:24px}.gui-filter-menu{width:400px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterMenuTriggerComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-filter-menu-trigger]',
                templateUrl: './filter-menu-trigger.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: [
                    '../style/filter.ngx.scss'
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Injector }, { type: i1.FabricDrawerService }, { type: undefined, decorators: [{
                type: Inject,
                args: [filterContainerToken]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLE1BQU0sRUFBWSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7O0FBV2xGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFjO0lBRTdELFlBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxRQUFrQixFQUNsQixhQUFrQyxFQUNKLGtCQUFzQztRQUN2RixLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSFQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDSix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRXhGLENBQUM7SUFFRCxVQUFVO1FBQ1QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7O29HQWxCVywwQkFBMEIseUxBTTNCLG9CQUFvQjs2RUFObkIsMEJBQTBCO1FDbEJ2Qyw4QkFDNEQ7UUFEdkQsb0dBQVMsZ0JBQVksSUFBQztRQUUxQix5QkFBMkI7UUFDNUIsaUJBQU07O1FBRkosdUNBQXlCOzt1RkRpQmQsMEJBQTBCO2NBVHRDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDViwwQkFBMEI7aUJBQzFCO2FBQ0Q7O3NCQU9JLE1BQU07dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0b3IsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmlsdGVyQ29udGFpbmVyVG9rZW4gfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci10b2tlbic7XG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJSZWYgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci1yZWYnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci1tZW51LXRyaWdnZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4uL3N0eWxlL2ZpbHRlci5uZ3guc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRyYXdlclNlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UsXG5cdFx0XHRcdEBJbmplY3QoZmlsdGVyQ29udGFpbmVyVG9rZW4pIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29udGFpbmVyUmVmOiBGaWx0ZXJDb250YWluZXJSZWYpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRvcGVuRHJhd2VyKCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLmZpbHRlckNvbnRhaW5lclJlZi5nZXRFbGVtZW50UmVmKCk7XG5cblx0XHR0aGlzLmRyYXdlclNlcnZpY2Uub3BlbihlbGVtZW50UmVmLCBGaWx0ZXJNZW51Q29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci1tZW51LXRyaWdnZXInO1xuXHR9XG59XG4iLCI8ZGl2IChjbGljayk9XCJvcGVuRHJhd2VyKClcIlxuXHQgW2d1aS10b29sdGlwXT1cIidGaWx0ZXJzJ1wiIGNsYXNzPVwiZ3VpLWZpbHRlci1pY29uLXdyYXBwZXJcIj5cblx0PGRpdiBndWktZmlsdGVyLWljb24+PC9kaXY+XG48L2Rpdj5cbiJdfQ==