import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { ListViewMode } from '../../core/domain/mode/list-view-mode';
import * as i0 from "@angular/core";
import * as i1 from "../../core/api/list-view.read-model-root-id";
import * as i2 from "../../core/api/list-view.warehouse";
import * as i3 from "@angular/common";
import * as i4 from "../../../paging/feature/paging.component";
import * as i5 from "../../../search/feature/search.component";
import * as i6 from "../container/select/list-view.container-mode-select.component";
import * as i7 from "../source/list-view-source.component";
import * as i8 from "../card/list-view.container-card.component";
const _c0 = ["gui-list-view-layout", ""];
function ListViewLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} }
function ListViewLayoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} }
function ListViewLayoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} }
function ListViewLayoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
export class ListViewLayoutComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, listViewReadModelRootId, listViewWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewWarehouse = listViewWarehouse;
        this.listModeEnabled = false;
        this.cardModeEnabled = false;
        this.selectorEnabled = false;
        this.searchBarEnabled = true;
    }
    ngOnInit() {
        this.hermesSubscribe(this.listViewWarehouse.onMode(this.listViewReadModelRootId.toAggregateId()), (mode) => {
            this.listModeEnabled = mode === ListViewMode.LIST;
            this.cardModeEnabled = mode === ListViewMode.CARD;
        });
        this.hermesSubscribe(this.listViewWarehouse.onSelector(this.listViewReadModelRootId.toAggregateId()), (enabled) => {
            this.selectorEnabled = enabled;
        });
    }
    getSelectorName() {
        return 'gui-list-view-layout';
    }
}
ListViewLayoutComponent.ɵfac = function ListViewLayoutComponent_Factory(t) { return new (t || ListViewLayoutComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ListViewReadModelRootId), i0.ɵɵdirectiveInject(i2.ListViewWarehouse)); };
ListViewLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListViewLayoutComponent, selectors: [["div", "gui-list-view-layout", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 8, vars: 7, consts: [[1, "gui-flex"], ["class", "gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto", "gui-search-bar", "", 4, "ngIf"], [1, "gui-list-panel-top", "gui-items-center", "gui-flex", "gui-px-6"], ["gui-list-mode-select", "", 4, "ngIf"], ["gui-paging", "", 1, "gui-ml-auto", 3, "minimal", "position"], ["gui-list-view-source", "", 4, "ngIf"], ["gui-list-container-card", "", 4, "ngIf"], ["gui-paging", "", 1, "gui-ml-auto", 3, "position"], ["gui-search-bar", "", 1, "gui-flex", "gui-items-center", "gui-h-full", "gui-w-3/5", "gui-mr-auto"], ["gui-list-mode-select", ""], ["gui-list-view-source", ""], ["gui-list-container-card", ""]], template: function ListViewLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ListViewLayoutComponent_div_1_Template, 1, 0, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, ListViewLayoutComponent_div_3_Template, 1, 0, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ListViewLayoutComponent_div_5_Template, 1, 0, "div", 5);
        i0.ɵɵtemplate(6, ListViewLayoutComponent_div_6_Template, 1, 0, "div", 6);
        i0.ɵɵelement(7, "div", 7);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchBarEnabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.selectorEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("minimal", true)("position", 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.listModeEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cardModeEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("position", 1);
    } }, directives: [i3.NgIf, i4.PagingComponent, i5.SearchComponent, i6.ListViewContainerModeSelectComponent, i7.ListViewSourceComponent, i8.ListViewContainerCardComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-list-view-layout]',
                templateUrl: './list-view-layout.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.ListViewReadModelRootId }, { type: i2.ListViewWarehouse }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvbGF5b3V0L2xpc3Qtdmlldy1sYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xheW91dC9saXN0LXZpZXctbGF5b3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFzQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7Ozs7SUNEcEUseUJBQXNIOzs7SUFRdEgseUJBQXdEOzs7SUFLekQsMEJBQXdEOzs7SUFFeEQsMEJBQTJEOztBREgzRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYztJQVUxRCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCx1QkFBZ0QsRUFDaEQsaUJBQW9DO1FBRXZELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUxULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBWHhELG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLHFCQUFnQixHQUFZLElBQUksQ0FBQztJQVFqQyxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQzNFLENBQUMsSUFBa0IsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztRQUNuRCxDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQy9FLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOzs4RkF0Q1csdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNkcEMsOEJBQXNCO1FBRXJCLHdFQUFzSDtRQU12SCxpQkFBTTtRQUNOLDhCQUFtRTtRQUNsRSx3RUFBd0Q7UUFFeEQseUJBQTBFO1FBQzNFLGlCQUFNO1FBRU4sd0VBQXdEO1FBRXhELHdFQUEyRDtRQUUzRCx5QkFBeUQ7O1FBakJsRCxlQUFzQjtRQUF0QiwyQ0FBc0I7UUFRdEIsZUFBcUI7UUFBckIsMENBQXFCO1FBRXRCLGVBQWdCO1FBQWhCLDhCQUFnQixlQUFBO1FBR2hCLGVBQXFCO1FBQXJCLDBDQUFxQjtRQUVyQixlQUFxQjtRQUFyQiwwQ0FBcUI7UUFFdEIsZUFBYztRQUFkLDRCQUFjOzt1RkRMTix1QkFBdUI7Y0FObkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3V2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvbGlzdC12aWV3LndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LXZpZXctbGF5b3V0XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXctbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0bGlzdE1vZGVFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y2FyZE1vZGVFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2VsZWN0b3JFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2VhcmNoQmFyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3V2FyZWhvdXNlOiBMaXN0Vmlld1dhcmVob3VzZVxuXHQpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5saXN0Vmlld1dhcmVob3VzZS5vbk1vZGUodGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpLFxuXHRcdFx0KG1vZGU6IExpc3RWaWV3TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3RNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdFx0XHR0aGlzLmNhcmRNb2RlRW5hYmxlZCA9IG1vZGUgPT09IExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMubGlzdFZpZXdXYXJlaG91c2Uub25TZWxlY3Rvcih0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdG9yRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LXZpZXctbGF5b3V0Jztcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1mbGV4XCI+XG5cblx0PGRpdiAqbmdJZj1cInNlYXJjaEJhckVuYWJsZWRcIiBjbGFzcz1cImd1aS1mbGV4IGd1aS1pdGVtcy1jZW50ZXIgZ3VpLWgtZnVsbCBndWktdy0zLzUgZ3VpLW1yLWF1dG9cIiBndWktc2VhcmNoLWJhcj48L2Rpdj5cblxuXHQ8IS0tXHRcdFx0PGRpdiBndWktc29ydGluZy1zZWxlY3Rvcj48L2Rpdj4tLT5cblx0PCEtLVx0XHRcdDxndWktZmlsdGVyLW1lbnUtdHJpZ2dlcj48L2d1aS1maWx0ZXItbWVudS10cmlnZ2VyPi0tPlxuXHQ8IS0tXHRcdFx0PGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZ3VpLWZpbHRlci1tZW51LXRyaWdnZXI+LS0+XG5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImd1aS1saXN0LXBhbmVsLXRvcCBndWktaXRlbXMtY2VudGVyIGd1aS1mbGV4IGd1aS1weC02XCI+XG5cdDxkaXYgKm5nSWY9XCJzZWxlY3RvckVuYWJsZWRcIiBndWktbGlzdC1tb2RlLXNlbGVjdD48L2Rpdj5cblxuXHQ8ZGl2IFttaW5pbWFsXT1cInRydWVcIiBbcG9zaXRpb25dPVwiMFwiIGNsYXNzPVwiZ3VpLW1sLWF1dG9cIiBndWktcGFnaW5nPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJsaXN0TW9kZUVuYWJsZWRcIiBndWktbGlzdC12aWV3LXNvdXJjZT48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImNhcmRNb2RlRW5hYmxlZFwiIGd1aS1saXN0LWNvbnRhaW5lci1jYXJkPjwvZGl2PlxuXG48ZGl2IFtwb3NpdGlvbl09XCIxXCIgY2xhc3M9XCJndWktbWwtYXV0b1wiIGd1aS1wYWdpbmc+PC9kaXY+XG4iXX0=