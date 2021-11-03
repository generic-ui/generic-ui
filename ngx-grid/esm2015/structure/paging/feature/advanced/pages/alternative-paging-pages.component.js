import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../core/api/paging.command-invoker";
import * as i3 from "@angular/common";
import * as i4 from "../../../../../l10n/feature/translation.pipe";
const _c0 = ["gui-paging-alternative-pages", "", "paging", ""];
function AlternativePagingPagesComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵlistener("click", function AlternativePagingPagesComponent_ng_container_0_div_1_Template_div_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const page_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.goToPage(page_r4); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("gui-paging-active-page", ctx_r3.activePage(page_r4))("gui-paging-visible-page", ctx_r3.calculateVisiblePages(page_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", page_r4, " ");
} }
function AlternativePagingPagesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AlternativePagingPagesComponent_ng_container_0_div_1_Template, 4, 5, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.pages);
} }
function AlternativePagingPagesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "guiTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "pagingNoItems"), " ");
} }
export class AlternativePagingPagesComponent extends PureComponent {
    constructor(elRef, structureId, pagingCommandService) {
        super(elRef);
        this.structureId = structureId;
        this.pagingCommandService = pagingCommandService;
        this.sourceSize = 0;
        this.numberOfVisiblePages = 3;
    }
    ngOnChanges(changes) {
        this.calculate();
    }
    calculate() {
        if (this.paging && this.sourceSize) {
            const numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
            this.currentPage = this.paging.getPage();
            this.pages = [];
            if (this.pages.length <= numberOfPages) {
                for (let i = 1; i <= numberOfPages; i++) {
                    this.pages.push(i);
                }
            }
        }
    }
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    goToPage(pageNumber) {
        const currentPage = this.paging.getPage();
        this.pagingCommandService.goToPage(pageNumber, currentPage, this.structureId);
    }
    calculateVisiblePages(page) {
        return this.paging.calculateVisiblePages(this.currentPage, this.numberOfVisiblePages, page);
    }
    activePage(page) {
        return this.currentPage === page;
    }
    getSelectorName() {
        return 'gui-paging-alternative-pages';
    }
}
AlternativePagingPagesComponent.ɵfac = function AlternativePagingPagesComponent_Factory(t) { return new (t || AlternativePagingPagesComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.PagingCommandInvoker)); };
AlternativePagingPagesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlternativePagingPagesComponent, selectors: [["div", "gui-paging-alternative-pages", "", "paging", ""]], inputs: { paging: "paging", sourceSize: "sourceSize" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noSource", ""], [4, "ngFor", "ngForOf"], [1, "relative"], [1, "gui-paging-page", "gui-select-none", "gui-cursor-pointer", "gui-py-0", "gui-px-6", "gui-font-base", 3, "click"], [1, "gui-paging-source-stats", "gui-paging-no-items"]], template: function AlternativePagingPagesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AlternativePagingPagesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, AlternativePagingPagesComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.isSourceNotEmpty())("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i3.NgForOf], pipes: [i4.TranslationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlternativePagingPagesComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-paging-alternative-pages][paging]',
                templateUrl: './alternative-paging-pages.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.PagingCommandInvoker }]; }, { paging: [{
            type: Input
        }], sourceSize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9hZHZhbmNlZC9wYWdlcy9hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLcEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7SUNIbEYsMkJBQWdDO0lBQy9CLDhCQUVtQjtJQUNsQiw4QkFDNkY7SUFEeEYsZ1JBQXdCO0lBRTVCLFlBQ0Q7SUFBQSxpQkFBTTtJQUNQLGlCQUFNO0lBQ1AsaUJBQU07Ozs7SUFSQSxlQUFpRDtJQUFqRCxvRUFBaUQsa0VBQUE7SUFLcEQsZUFDRDtJQURDLHdDQUNEOzs7SUFUSCw2QkFBeUQ7SUFFeEQsK0ZBU007SUFFUCwwQkFBZTs7O0lBWFEsZUFBUTtJQUFSLHNDQUFROzs7SUFjOUIsK0JBQTBEO0lBQ3pELFlBQ0Q7O0lBQUEsaUJBQU87O0lBRE4sZUFDRDtJQURDLHNFQUNEOztBREhELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxhQUFhO0lBY2pFLFlBQVksS0FBaUIsRUFDVCxXQUF3QixFQUN4QixvQkFBMEM7UUFDN0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRk0sZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVY5RCxlQUFVLEdBQVksQ0FBQyxDQUFDO1FBTXhCLHlCQUFvQixHQUFXLENBQUMsQ0FBQztJQU1qQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQW1EO1FBQzlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFFN0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksYUFBYSxFQUFFO2dCQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7YUFDRDtTQUVEO0lBQ0YsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFrQjtRQUMxQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELHFCQUFxQixDQUFDLElBQVk7UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7OEdBM0RXLCtCQUErQjtrRkFBL0IsK0JBQStCO1FDZjVDLGtHQWFlO1FBRWYsaUlBSWM7OztRQW5CQyw2Q0FBMEIsaUJBQUE7O3VGRGU1QiwrQkFBK0I7Y0FOM0MsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzswSEFJQSxNQUFNO2tCQURMLEtBQUs7WUFJTixVQUFVO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzXVtwYWdpbmddJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHRzb3VyY2VTaXplPzogbnVtYmVyID0gMDtcblxuXHRjdXJyZW50UGFnZTogbnVtYmVyO1xuXG5cdHBhZ2VzOiBBcnJheTxudW1iZXI+O1xuXG5cdG51bWJlck9mVmlzaWJsZVBhZ2VzOiBudW1iZXIgPSAzO1xuXG5cdGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kU2VydmljZTogUGFnaW5nQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8QWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudD4pIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBhZ2luZyAmJiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGNvbnN0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5zb3VyY2VTaXplIC8gdGhpcy5wYWdpbmcuZ2V0UGFnZVNpemUoKSk7XG5cblx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luZy5nZXRQYWdlKCk7XG5cblx0XHRcdHRoaXMucGFnZXMgPSBbXTtcblx0XHRcdGlmICh0aGlzLnBhZ2VzLmxlbmd0aCA8PSBudW1iZXJPZlBhZ2VzKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlck9mUGFnZXM7IGkrKykge1xuXHRcdFx0XHRcdHRoaXMucGFnZXMucHVzaChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdGdvVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmcuZ2V0UGFnZSgpO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuZ29Ub1BhZ2UocGFnZU51bWJlciwgY3VycmVudFBhZ2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Y2FsY3VsYXRlVmlzaWJsZVBhZ2VzKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZy5jYWxjdWxhdGVWaXNpYmxlUGFnZXModGhpcy5jdXJyZW50UGFnZSwgdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcywgcGFnZSk7XG5cdH1cblxuXHRhY3RpdmVQYWdlKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRQYWdlID09PSBwYWdlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1wYWdlcyc7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU291cmNlTm90RW1wdHkoKTsgZWxzZSBub1NvdXJjZTtcIj5cblxuXHQ8ZGl2ICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzXCI+XG5cdFx0PGRpdiBbY2xhc3MuZ3VpLXBhZ2luZy1hY3RpdmUtcGFnZV09XCJhY3RpdmVQYWdlKHBhZ2UpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLXBhZ2luZy12aXNpYmxlLXBhZ2VdPVwiY2FsY3VsYXRlVmlzaWJsZVBhZ2VzKHBhZ2UpXCJcblx0XHRcdCBjbGFzcz1cInJlbGF0aXZlXCI+XG5cdFx0XHQ8ZGl2IChjbGljayk9XCJnb1RvUGFnZShwYWdlKVwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1wYWdpbmctcGFnZSBndWktc2VsZWN0LW5vbmUgZ3VpLWN1cnNvci1wb2ludGVyIGd1aS1weS0wIGd1aS1weC02IGd1aS1mb250LWJhc2VcIj5cblx0XHRcdFx0e3twYWdlfX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjbm9Tb3VyY2U+XG5cdDxzcGFuIGNsYXNzPVwiZ3VpLXBhZ2luZy1zb3VyY2Utc3RhdHMgZ3VpLXBhZ2luZy1uby1pdGVtc1wiPlxuXHRcdHt7J3BhZ2luZ05vSXRlbXMnIHwgZ3VpVHJhbnNsYXRlfX1cblx0PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==