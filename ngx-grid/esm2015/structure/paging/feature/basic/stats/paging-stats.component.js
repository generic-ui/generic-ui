import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-paging-stats", "", "paging", ""];
function PagingStatsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " - ");
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "guiTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 3);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.firstItemIndex);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.lastItemIndex);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 4, "pagingOf"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.sourceSize, " ");
} }
function PagingStatsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "guiTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "pagingNoItems"), " ");
} }
export class PagingStatsComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.addClassToHost('gui-mx-6');
    }
    ngOnChanges() {
        this.calculate();
    }
    calculate() {
        if (this.paging) {
            this.firstItemIndex = this.paging.getStart();
            this.lastItemIndex = this.paging.getEnd();
            this.sourceSize = this.paging.getSourceSize();
        }
    }
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    getSelectorName() {
        return 'gui-paging-stats';
    }
}
PagingStatsComponent.ɵfac = function PagingStatsComponent_Factory(t) { return new (t || PagingStatsComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PagingStatsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagingStatsComponent, selectors: [["div", "gui-paging-stats", "", "paging", ""]], inputs: { paging: "paging" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noSource", ""], [1, "gui-paging-source-stats"], [1, "gui-paging-source-size"], [1, "gui-paging-source-stats", "gui-paging-no-items"]], template: function PagingStatsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PagingStatsComponent_ng_container_0_Template, 12, 6, "ng-container", 0);
        i0.ɵɵtemplate(1, PagingStatsComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.isSourceNotEmpty())("ngIfElse", _r1);
    } }, directives: [i1.NgIf], pipes: [i2.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingStatsComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-paging-stats][paging]',
                templateUrl: './paging-stats.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { paging: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXN0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2Jhc2ljL3N0YXRzL3BhZ2luZy1zdGF0cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9iYXNpYy9zdGF0cy9wYWdpbmctc3RhdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7SUNGbkYsNkJBQXlEO0lBQ3hELCtCQUFzQztJQUNyQyw0QkFBTTtJQUFBLFlBQWtCO0lBQUEsaUJBQU87SUFDL0IsbUJBQ0E7SUFBQSw0QkFBTTtJQUFBLFlBQWlCO0lBQUEsaUJBQU87SUFDL0IsaUJBQU87SUFDUCw0QkFBTTtJQUNMLFlBQ0Q7O0lBQUEsaUJBQU87SUFDUCxnQ0FBcUM7SUFDcEMsYUFDRDtJQUFBLGlCQUFPO0lBQ1IsMEJBQWU7OztJQVZQLGVBQWtCO0lBQWxCLDJDQUFrQjtJQUVsQixlQUFpQjtJQUFqQiwwQ0FBaUI7SUFHdkIsZUFDRDtJQURDLGlFQUNEO0lBRUMsZUFDRDtJQURDLGtEQUNEOzs7SUFJQSwrQkFBMEQ7SUFDekQsWUFDRDs7SUFBQSxpQkFBTzs7SUFETixlQUNEO0lBREMsc0VBQ0Q7O0FETEQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFXdEQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QztJQUNGLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQzs7d0ZBbENXLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDWmpDLHdGQVllO1FBRWYsc0hBSWM7OztRQWxCQyw2Q0FBMEIsaUJBQUE7O3VGRFk1QixvQkFBb0I7Y0FOaEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs2REFJQSxNQUFNO2tCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLXN0YXRzXVtwYWdpbmddJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2luZy1zdGF0cy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ1N0YXRzQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdGZpcnN0SXRlbUluZGV4OiBudW1iZXI7XG5cblx0bGFzdEl0ZW1JbmRleDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbXgtNicpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5wYWdpbmcpIHtcblx0XHRcdHRoaXMuZmlyc3RJdGVtSW5kZXggPSB0aGlzLnBhZ2luZy5nZXRTdGFydCgpO1xuXHRcdFx0dGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy5wYWdpbmcuZ2V0RW5kKCk7XG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPSB0aGlzLnBhZ2luZy5nZXRTb3VyY2VTaXplKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1wYWdpbmctc3RhdHMnO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1NvdXJjZU5vdEVtcHR5KCk7IGVsc2Ugbm9Tb3VyY2U7XCI+XG5cdDxzcGFuIGNsYXNzPVwiZ3VpLXBhZ2luZy1zb3VyY2Utc3RhdHNcIj5cblx0XHQ8c3Bhbj57e2ZpcnN0SXRlbUluZGV4fX08L3NwYW4+XG5cdFx0LVxuXHRcdDxzcGFuPnt7bGFzdEl0ZW1JbmRleH19PC9zcGFuPlxuXHQ8L3NwYW4+XG5cdDxzcGFuPlxuXHRcdHt7ICdwYWdpbmdPZicgfCBndWlUcmFuc2xhdGUgfX1cblx0PC9zcGFuPlxuXHQ8c3BhbiBjbGFzcz1cImd1aS1wYWdpbmctc291cmNlLXNpemVcIj5cblx0XHR7e3NvdXJjZVNpemV9fVxuXHQ8L3NwYW4+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNub1NvdXJjZT5cblx0PHNwYW4gY2xhc3M9XCJndWktcGFnaW5nLXNvdXJjZS1zdGF0cyBndWktcGFnaW5nLW5vLWl0ZW1zXCI+XG5cdFx0e3sncGFnaW5nTm9JdGVtcycgfCBndWlUcmFuc2xhdGV9fVxuXHQ8L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuIl19