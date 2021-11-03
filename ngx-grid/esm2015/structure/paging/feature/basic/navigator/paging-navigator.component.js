import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-paging-navigator", "", "paging", ""];
export class PagingNavigatorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    ngOnChanges() {
        this.calculatePrev();
        this.calculateNext();
    }
    prevPage() {
        this.prevPageChanged.emit();
    }
    nextPage() {
        this.nextPageChanged.emit();
    }
    getSelectorName() {
        return 'gui-paging-navigator';
    }
    calculatePrev() {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    }
    calculateNext() {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    }
}
PagingNavigatorComponent.ɵfac = function PagingNavigatorComponent_Factory(t) { return new (t || PagingNavigatorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PagingNavigatorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagingNavigatorComponent, selectors: [["div", "gui-paging-navigator", "", "paging", ""]], inputs: { paging: "paging", sourceSize: "sourceSize" }, outputs: { nextPageChanged: "nextPageChanged", prevPageChanged: "prevPageChanged" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 7, vars: 8, consts: [["gui-button", "", 1, "gui-paging-navigator-prev", "gui-mr-5", 3, "disabled", "click"], ["gui-button", "", 1, "gui-paging-navigator-next", "gui-mr-0", 3, "disabled", "click"]], template: function PagingNavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-button-group");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function PagingNavigatorComponent_Template_button_click_1_listener() { return ctx.prevPage(); });
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 1);
        i0.ɵɵlistener("click", function PagingNavigatorComponent_Template_button_click_4_listener() { return ctx.nextPage(); });
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "guiTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.prevDisabled);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "pagingPrevPage"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.nextDisabled);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 6, "pagingNextPage"), " ");
    } }, directives: [i1.FabricButtonGroupComponent, i1.FabricButtonComponent], pipes: [i2.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingNavigatorComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-paging-navigator][paging]',
                templateUrl: './paging-navigator.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { paging: [{
            type: Input
        }], sourceSize: [{
            type: Input
        }], nextPageChanged: [{
            type: Output
        }], prevPageChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9iYXNpYy9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9iYXNpYy9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7QUFTbkYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7SUFrQjFELFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBVm5CLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFJOUIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDO0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Z0dBdkRXLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDWnJDLHdDQUFrQjtRQUNqQixpQ0FHYTtRQUhMLHFHQUFTLGNBQVUsSUFBQztRQUkzQixZQUNEOztRQUFBLGlCQUFTO1FBRVQsaUNBR2E7UUFITCxxR0FBUyxjQUFVLElBQUM7UUFJM0IsWUFDRDs7UUFBQSxpQkFBUztRQUNWLGlCQUFtQjs7UUFaaEIsZUFBeUI7UUFBekIsMkNBQXlCO1FBRzFCLGVBQ0Q7UUFEQyx1RUFDRDtRQUdFLGVBQXlCO1FBQXpCLDJDQUF5QjtRQUcxQixlQUNEO1FBREMsdUVBQ0Q7O3VGRERZLHdCQUF3QjtjQU5wQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzZEQUlBLE1BQU07a0JBREwsS0FBSztZQUlOLFVBQVU7a0JBRFQsS0FBSztZQUlOLGVBQWU7a0JBRGQsTUFBTTtZQUlQLGVBQWU7a0JBRGQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLW5hdmlnYXRvcl1bcGFnaW5nXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZT86IG51bWJlcjtcblxuXHRAT3V0cHV0KClcblx0bmV4dFBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwcmV2UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJldkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmV4dERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVQcmV2KCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVOZXh0KCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5leHRQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLW5hdmlnYXRvcic7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVByZXYoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMucGFnaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wcmV2RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc1ByZXZQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTmV4dCgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcgJiYgIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubmV4dERpc2FibGVkID0gdGhpcy5wYWdpbmcuaXNOZXh0UGFnZURpc2FibGVkKCk7XG5cdH1cblxufVxuIiwiPGd1aS1idXR0b24tZ3JvdXA+XG5cdDxidXR0b24gKGNsaWNrKT1cInByZXZQYWdlKClcIlxuXHRcdFx0W2Rpc2FibGVkXT1cInByZXZEaXNhYmxlZFwiXG5cdFx0XHRjbGFzcz1cImd1aS1wYWdpbmctbmF2aWdhdG9yLXByZXYgZ3VpLW1yLTVcIlxuXHRcdFx0Z3VpLWJ1dHRvbj5cblx0XHR7eyAncGFnaW5nUHJldlBhZ2UnIHwgZ3VpVHJhbnNsYXRlIH19XG5cdDwvYnV0dG9uPlxuXG5cdDxidXR0b24gKGNsaWNrKT1cIm5leHRQYWdlKClcIlxuXHRcdFx0W2Rpc2FibGVkXT1cIm5leHREaXNhYmxlZFwiXG5cdFx0XHRjbGFzcz1cImd1aS1wYWdpbmctbmF2aWdhdG9yLW5leHQgZ3VpLW1yLTBcIlxuXHRcdFx0Z3VpLWJ1dHRvbj5cblx0XHR7eyAncGFnaW5nTmV4dFBhZ2UnIHwgZ3VpVHJhbnNsYXRlIH19XG5cdDwvYnV0dG9uPlxuPC9ndWktYnV0dG9uLWdyb3VwPlxuIl19