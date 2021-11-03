import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../search/core/api/search.command-invoker";
import * as i3 from "../../../../search/core/api/search.warehouse";
import * as i4 from "@angular/common";
import * as i5 from "@generic-ui/fabric";
const _c0 = ["gui-active-search", ""];
function ActiveSearchComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2, " Active search by: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵelementStart(4, "gui-chip");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵelementStart(7, "button", 1);
    i0.ɵɵlistener("click", function ActiveSearchComponent_ng_container_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.clearSearch(); });
    i0.ɵɵtext(8, " Clear search ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.phrase);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("outline", true)("primary", true);
} }
export class ActiveSearchComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, searchCommandDispatcher, searchWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.searchWarehouse = searchWarehouse;
    }
    ngOnInit() {
        this.hermesSubscribe(this.searchWarehouse.onPhrase(this.structureId), (phrase) => {
            this.phrase = phrase;
        });
    }
    clearSearch() {
        event.stopPropagation();
        this.searchCommandDispatcher.search('', this.structureId);
    }
    getSelectorName() {
        return 'gui-active-search';
    }
}
ActiveSearchComponent.ɵfac = function ActiveSearchComponent_Factory(t) { return new (t || ActiveSearchComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SearchCommandInvoker), i0.ɵɵdirectiveInject(i3.SearchWarehouse)); };
ActiveSearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActiveSearchComponent, selectors: [["div", "gui-active-search", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["gui-button", "", 3, "outline", "primary", "click"]], template: function ActiveSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActiveSearchComponent_ng_container_0_Template, 9, 3, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.phrase);
    } }, directives: [i4.NgIf, i5.FabricChipComponent, i5.FabricButtonComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveSearchComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-active-search]',
                templateUrl: './active-search.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SearchCommandInvoker }, { type: i3.SearchWarehouse }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7Ozs7Ozs7Ozs7SUNGckYsNkJBQTZCO0lBQzVCLDJCQUFLO0lBQ0osbUNBQ0Q7SUFBQSxpQkFBTTtJQUVOLDJCQUFLO0lBQ0osZ0NBQVU7SUFBQSxZQUFVO0lBQUEsaUJBQVc7SUFDaEMsaUJBQU07SUFFTiwyQkFBSztJQUNKLGlDQUdhO0lBSEwsbU1BQXVCO0lBSTlCLDhCQUNEO0lBQUEsaUJBQVM7SUFDVixpQkFBTTtJQUNQLDBCQUFlOzs7SUFYSCxlQUFVO0lBQVYsbUNBQVU7SUFLbEIsZUFBZ0I7SUFBaEIsOEJBQWdCLGlCQUFBOztBRENwQixNQUFNLE9BQU8scUJBQXNCLFNBQVEsY0FBYztJQUl4RCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix1QkFBNkMsRUFDN0MsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUVwRCxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0MsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1YsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7OzBGQTdCVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1psQyx3RkFpQmU7O1FBakJBLGlDQUFZOzt1RkRZZCxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktYWN0aXZlLXNlYXJjaF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVNlYXJjaENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRwaHJhc2U6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGhyYXNlID0gcGhyYXNlO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRjbGVhclNlYXJjaCgpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNlYXJjaENvbW1hbmREaXNwYXRjaGVyLnNlYXJjaCgnJywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktYWN0aXZlLXNlYXJjaCc7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInBocmFzZVwiPlxuXHQ8ZGl2PlxuXHRcdEFjdGl2ZSBzZWFyY2ggYnk6XG5cdDwvZGl2PlxuXG5cdDxkaXY+XG5cdFx0PGd1aS1jaGlwPnt7cGhyYXNlfX08L2d1aS1jaGlwPlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2PlxuXHRcdDxidXR0b24gKGNsaWNrKT1cImNsZWFyU2VhcmNoKClcIlxuXHRcdFx0XHRbb3V0bGluZV09XCJ0cnVlXCJcblx0XHRcdFx0W3ByaW1hcnldPVwidHJ1ZVwiXG5cdFx0XHRcdGd1aS1idXR0b24+XG5cdFx0XHRDbGVhciBzZWFyY2hcblx0XHQ8L2J1dHRvbj5cblx0PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==