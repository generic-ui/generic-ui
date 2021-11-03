import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../core/api/filter.warehouse";
import * as i3 from "../../core/api/filter.command-invoker";
import * as i4 from "@angular/common";
import * as i5 from "./search/active-search.component";
const _c0 = ["gui-active-filter-list", ""];
function ActiveFilterListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 2);
    i0.ɵɵlistener("click", function ActiveFilterListComponent_div_0_Template_span_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const filter_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.removeFilter(filter_r1); });
    i0.ɵɵtext(3, "X");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", filter_r1.getText(), " ");
} }
export class ActiveFilterListComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandDispatcher) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
        this.activeFilters = [];
    }
    ngOnInit() {
        this.hermesSubscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFilters = activeFilters;
        });
    }
    removeFilter(filter) {
        this.filterCommandDispatcher.removeFilter(filter.getFilterId(), this.structureId);
    }
    getSelectorName() {
        return 'gui-active-filter-list';
    }
}
ActiveFilterListComponent.ɵfac = function ActiveFilterListComponent_Factory(t) { return new (t || ActiveFilterListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.FilterWarehouse), i0.ɵɵdirectiveInject(i3.FilterCommandInvoker)); };
ActiveFilterListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActiveFilterListComponent, selectors: [["div", "gui-active-filter-list", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["gui-active-search", ""], [3, "click"]], template: function ActiveFilterListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActiveFilterListComponent_div_0_Template, 4, 1, "div", 0);
        i0.ɵɵelement(1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.activeFilters);
    } }, directives: [i4.NgForOf, i5.ActiveSearchComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveFilterListComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-active-filter-list]',
                templateUrl: './active-filter-list.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.FilterWarehouse }, { type: i3.FilterCommandInvoker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXNCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7OztJQ0ZsRiwyQkFBMEM7SUFDekMsWUFDQTtJQUFBLCtCQUFxQztJQUEvQixtUUFBOEI7SUFBQyxpQkFBQztJQUFBLGlCQUFPO0lBQzlDLGlCQUFNOzs7SUFGTCxlQUNBO0lBREEsb0RBQ0E7O0FEYUQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFJNUQsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsdUJBQTZDO1FBQ2hFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUxULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBc0I7UUFOakUsa0JBQWEsR0FBaUMsRUFBRSxDQUFDO0lBUWpELENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN0RCxDQUFDLGFBQTJDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNwQyxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsTUFBNkI7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sd0JBQXdCLENBQUM7SUFDakMsQ0FBQzs7a0dBNUJXLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDZnRDLDBFQUdNO1FBRU4seUJBQTZCOztRQUxMLDJDQUFnQjs7dUZEZTNCLHlCQUF5QjtjQU5yQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1hY3RpdmUtZmlsdGVyLWxpc3RdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlckxpc3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0YWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcjogRmlsdGVyQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzID0gYWN0aXZlRmlsdGVycztcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcjogQWN0aXZlRmlsdGVyUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVGaWx0ZXIoZmlsdGVyLmdldEZpbHRlcklkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWFjdGl2ZS1maWx0ZXItbGlzdCc7XG5cdH1cbn1cbiIsIjxkaXYgKm5nRm9yPVwibGV0IGZpbHRlciBvZiBhY3RpdmVGaWx0ZXJzXCI+XG5cdHt7ZmlsdGVyLmdldFRleHQoKX19XG5cdDxzcGFuIChjbGljayk9XCJyZW1vdmVGaWx0ZXIoZmlsdGVyKVwiPlg8L3NwYW4+XG48L2Rpdj5cblxuPGRpdiBndWktYWN0aXZlLXNlYXJjaD48L2Rpdj5cbiJdfQ==