import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../../composition/core/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../composition/core/api/composition.id";
import * as i2 from "../../../../core/api/structure.id";
import * as i3 from "../../../../source/core/api/formation/formation.command-invoker";
import * as i4 from "../../../../sorting/core/api/sorting.command-invoker";
import * as i5 from "@angular/common";
import * as i6 from "./select-all/select-all.component";
import * as i7 from "../menu/trigger/structure.column-config-trigger.component";
const _c0 = ["gui-structure-header-columns", "", "columns", ""];
function StructureHeaderColumnsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "div", 3);
    i0.ɵɵelementEnd();
} }
function StructureHeaderColumnsComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { "gui-header-sortable": a0 }; };
const _c2 = function (a0, a1) { return { "gui-sort-asc": a0, "gui-sort-desc": a1 }; };
function StructureHeaderColumnsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function StructureHeaderColumnsComponent_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const column_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.toggleSort(column_r2); });
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, StructureHeaderColumnsComponent_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelement(5, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", column_r2.width, "px");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, column_r2.isSortEnabled()));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", column_r2.viewTemplate)("ngTemplateOutletContext", column_r2.context);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c2, ctx_r1.isSortAsc(column_r2), ctx_r1.isSortDesc(column_r2)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("column", column_r2);
} }
export class StructureHeaderColumnsComponent extends SmartComponent {
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.checkboxSelection = false;
        this.globalSearching = false;
    }
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
        }
    }
    isSortAsc(column) {
        return column.getSortStatus() === SortOrder.ASC;
    }
    isSortDesc(column) {
        return column.getSortStatus() === SortOrder.DESC;
    }
    isGlobalSortEnabled() {
        return this.globalSearching;
    }
    getSelectorName() {
        return 'gui-structure-header-columns';
    }
}
StructureHeaderColumnsComponent.ɵfac = function StructureHeaderColumnsComponent_Factory(t) { return new (t || StructureHeaderColumnsComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CompositionId), i0.ɵɵdirectiveInject(i2.StructureId), i0.ɵɵdirectiveInject(i3.FormationCommandInvoker), i0.ɵɵdirectiveInject(i4.SortingCommandInvoker)); };
StructureHeaderColumnsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureHeaderColumnsComponent, selectors: [["div", "gui-structure-header-columns", "", "columns", ""]], inputs: { columns: "columns", checkboxSelection: "checkboxSelection" }, features: [i0.ɵɵProvidersFeature([
            StructureColumnConfigService
        ]), i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [["class", "gui-header-cell gui-row-checkbox\n\t gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis", 4, "ngIf"], ["class", "gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis", 3, "ngClass", "width", "click", 4, "ngFor", "ngForOf"], [1, "gui-header-cell", "gui-row-checkbox", "gui-flex", "gui-justify-between", "gui-overflow-hidden", "gui-relative", "gui-py-0", "gui-px-6", "gui-box-border", "gui-leading-4", "gui-whitespace-nowrap", "gui-overflow-ellipsis"], ["gui-select-all", ""], [1, "gui-header-cell", "gui-flex", "gui-justify-between", "gui-overflow-hidden", "gui-relative", "gui-py-0", "gui-px-6", "gui-box-border", "gui-leading-4", "gui-whitespace-nowrap", "gui-overflow-ellipsis", 3, "ngClass", "click"], [1, "gui-header-title"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "gui-sort", 3, "ngClass"], [1, "gui-header-menu"], ["gui-structure-column-config-trigger", "", 3, "column"]], template: function StructureHeaderColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureHeaderColumnsComponent_div_0_Template, 2, 0, "div", 0);
        i0.ɵɵtemplate(1, StructureHeaderColumnsComponent_div_1_Template, 6, 12, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.checkboxSelection);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columns);
    } }, directives: [i5.NgIf, i5.NgForOf, i6.SelectAllComponent, i5.NgClass, i5.NgTemplateOutlet, i7.StructureColumnConfigTriggerComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureHeaderColumnsComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-header-columns][columns]',
                templateUrl: './structure-header-columns.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    StructureColumnConfigService
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: i1.CompositionId }, { type: i2.StructureId }, { type: i3.FormationCommandInvoker }, { type: i4.SortingCommandInvoker }]; }, { columns: [{
            type: Input
        }], checkboxSelection: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvY29sdW1uL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXdCLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0SSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7Ozs7Ozs7OztJQ0xyRiw4QkFJNkQ7SUFDNUQseUJBQTBCO0lBQzNCLGlCQUFNOzs7SUFXSix3QkFHZTs7Ozs7O0lBWmpCLDhCQU02RDtJQU54RCxzUUFBNEI7SUFRaEMsOEJBQThCO0lBQzdCLHdHQUdlO0lBRWYseUJBRU07SUFDUCxpQkFBTTtJQUVOLDhCQUE2QjtJQUM1Qix5QkFFTTtJQUNQLGlCQUFNO0lBQ1AsaUJBQU07Ozs7SUFyQkosOENBQStCO0lBRC9CLCtFQUEyRDtJQVF6RCxlQUNPO0lBRFAseURBQ08sOENBQUE7SUFHSixlQUFvRjtJQUFwRiwrR0FBb0Y7SUFNcEYsZUFBaUI7SUFBakIsa0NBQWlCOztBRFB4QixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsY0FBYztJQVVsRSxZQUE2QixVQUFzQixFQUMvQixRQUFrQixFQUNsQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsMEJBQW1ELEVBQ25ELHdCQUErQztRQUNsRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFQVCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBdUI7UUFWbkUsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBRW5DLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBVXhCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBK0I7UUFFekMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEc7SUFDRixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQStCO1FBQ3hDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDakQsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUErQjtRQUN6QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2xELENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7OEdBekNXLCtCQUErQjtrRkFBL0IsK0JBQStCLG9MQUpoQztZQUNWLDRCQUE0QjtTQUM1QjtRQ25CRixnRkFNTTtRQUVOLGlGQXdCTTs7UUFoQ0EsNENBQXVCO1FBU1IsZUFBVTtRQUFWLHFDQUFVOzt1RkRZbEIsK0JBQStCO2NBVDNDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDViw0QkFBNEI7aUJBQzVCO2FBQ0Q7b1BBSUEsT0FBTztrQkFETixLQUFLO1lBSU4saUJBQWlCO2tCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1oZWFkZXItY29sdW1uc11bY29sdW1uc10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRASW5wdXQoKVxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGdsb2JhbFNlYXJjaGluZyA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbHVtbi5pc1NvcnRFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNvcnQoY29sdW1uLmdldEZpZWxkSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvcnRBc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNHbG9iYWxTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxTZWFyY2hpbmc7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zJztcblx0fVxuXG59XG4iLCI8ZGl2ICpuZ0lmPVwiY2hlY2tib3hTZWxlY3Rpb25cIlxuXHQgY2xhc3M9XCJndWktaGVhZGVyLWNlbGwgZ3VpLXJvdy1jaGVja2JveFxuXHQgZ3VpLWZsZXggZ3VpLWp1c3RpZnktYmV0d2VlblxuXHQgZ3VpLW92ZXJmbG93LWhpZGRlbiBndWktcmVsYXRpdmUgZ3VpLXB5LTAgZ3VpLXB4LTYgZ3VpLWJveC1ib3JkZXJcblx0IGd1aS1sZWFkaW5nLTQgZ3VpLXdoaXRlc3BhY2Utbm93cmFwIGd1aS1vdmVyZmxvdy1lbGxpcHNpc1wiPlxuXHQ8ZGl2IGd1aS1zZWxlY3QtYWxsPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgKGNsaWNrKT1cInRvZ2dsZVNvcnQoY29sdW1uKVwiXG5cdCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIlxuXHQgW25nQ2xhc3NdPVwieydndWktaGVhZGVyLXNvcnRhYmxlJzogY29sdW1uLmlzU29ydEVuYWJsZWQoKX1cIlxuXHQgW3N0eWxlLndpZHRoLnB4XT1cImNvbHVtbi53aWR0aFwiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuXG5cdCBndWktb3ZlcmZsb3ctaGlkZGVuIGd1aS1yZWxhdGl2ZSBndWktcHktMCBndWktcHgtNiBndWktYm94LWJvcmRlclxuXHQgZ3VpLWxlYWRpbmctNCBndWktd2hpdGVzcGFjZS1ub3dyYXAgZ3VpLW92ZXJmbG93LWVsbGlwc2lzXCI+XG5cblx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItdGl0bGVcIj5cblx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0ICAgY29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxkaXYgW25nQ2xhc3NdPVwieydndWktc29ydC1hc2MnOiBpc1NvcnRBc2MoY29sdW1uKSwgJ2d1aS1zb3J0LWRlc2MnOiBpc1NvcnREZXNjKGNvbHVtbil9XCJcblx0XHRcdCBjbGFzcz1cImd1aS1zb3J0XCI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnVcIj5cblx0XHQ8ZGl2IFtjb2x1bW5dPVwiY29sdW1uXCJcblx0XHRcdCBndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctdHJpZ2dlcj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==