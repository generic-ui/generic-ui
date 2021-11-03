import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "@angular/common";
const _c0 = ["gui-filter-type-selector", "", "filterTypes", ""];
function FilterTypeSelectorComponent_gui_dropdown_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-dropdown-item", 1);
    i0.ɵɵlistener("click", function FilterTypeSelectorComponent_gui_dropdown_item_3_Template_gui_dropdown_item_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const filterType_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSelectChange(filterType_r1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filterType_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", filterType_r1.getName(), " ");
} }
export class FilterTypeSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.filterTypeSelected = new EventEmitter();
    }
    onSelectChange(filterType) {
        this.filterTypeSelected.emit(filterType.getId());
    }
    getSelectorName() {
        return 'gui-filter-type-selector';
    }
}
FilterTypeSelectorComponent.ɵfac = function FilterTypeSelectorComponent_Factory(t) { return new (t || FilterTypeSelectorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FilterTypeSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterTypeSelectorComponent, selectors: [["div", "gui-filter-type-selector", "", "filterTypes", ""]], inputs: { filterTypes: "filterTypes" }, outputs: { filterTypeSelected: "filterTypeSelected" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 4, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function FilterTypeSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1, " Filter Type:\n");
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementStart(2, "gui-dropdown");
        i0.ɵɵtemplate(3, FilterTypeSelectorComponent_gui_dropdown_item_3_Template, 2, 1, "gui-dropdown-item", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.filterTypes);
    } }, directives: [i1.FabricDropdownComponent, i2.NgForOf, i1.DropdownItemComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterTypeSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-filter-type-selector][filterTypes]',
                templateUrl: './filter-type-selector.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { filterTypes: [{
            type: Input
        }], filterTypeSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7SUNFbEYsNENBQzhDO0lBRDNCLDBTQUFvQztJQUV0RCxZQUNEO0lBQUEsaUJBQW9COzs7SUFEbkIsZUFDRDtJQURDLHdEQUNEOztBREdELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxhQUFhO0lBUTdELFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBSG5CLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO0lBSXRELENBQUM7SUFFRCxjQUFjLENBQUMsVUFBK0I7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7O3NHQWxCVywyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ1h4Qyw2QkFBYztRQUNiLCtCQUNEO1FBQUEsMEJBQWU7UUFFZixvQ0FBYztRQUNiLHdHQUdvQjtRQUNyQixpQkFBZTs7UUFIZ0IsZUFBYztRQUFkLHlDQUFjOzt1RkRLaEMsMkJBQTJCO2NBTnZDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NkRBSUEsV0FBVztrQkFEVixLQUFLO1lBSU4sa0JBQWtCO2tCQURqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLXR5cGUtc2VsZWN0b3JdW2ZpbHRlclR5cGVzXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlclR5cGVzOiBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPjtcblxuXHRAT3V0cHV0KClcblx0ZmlsdGVyVHlwZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWx0ZXJUeXBlSWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0b25TZWxlY3RDaGFuZ2UoZmlsdGVyVHlwZTogRmlsdGVyVHlwZVJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyVHlwZVNlbGVjdGVkLmVtaXQoZmlsdGVyVHlwZS5nZXRJZCgpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcic7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lcj5cblx0RmlsdGVyIFR5cGU6XG48L25nLWNvbnRhaW5lcj5cblxuPGd1aS1kcm9wZG93bj5cblx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJvblNlbGVjdENoYW5nZShmaWx0ZXJUeXBlKVwiXG5cdFx0XHRcdFx0ICAgKm5nRm9yPVwibGV0IGZpbHRlclR5cGUgb2YgZmlsdGVyVHlwZXNcIj5cblx0XHR7e2ZpbHRlclR5cGUuZ2V0TmFtZSgpfX1cblx0PC9ndWktZHJvcGRvd24taXRlbT5cbjwvZ3VpLWRyb3Bkb3duPlxuIl19