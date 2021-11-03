import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../core/api/filter.warehouse";
import * as i3 from "../../core/api/filter.command-invoker";
import * as i4 from "@generic-ui/fabric";
import * as i5 from "@angular/common";
const _c0 = ["gui-unique-value-list", "", "fieldId", ""];
function UniqueValueListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "gui-checkbox", 5);
    i0.ɵɵlistener("changed", function UniqueValueListComponent_div_3_Template_gui_checkbox_changed_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const value_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.toggleSelect(value_r1); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", value_r1.isEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r1.getValue(), " ");
} }
export class UniqueValueListComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.uniqueValues = [];
    }
    ngOnInit() {
        this.hermesSubscribe(this.filterWarehouse.onUniqueValues(this.structureId), (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.fieldId);
            this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(this.fieldId);
            this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(this.fieldId);
        });
    }
    toggleAllSelect() {
        event.stopPropagation();
        if (this.selectAllChecked) {
            this.filterCommandInvoker.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
        }
    }
    toggleSelect(uniqueValueReadModel) {
        event.stopPropagation();
        if (uniqueValueReadModel.isEnabled()) {
            this.filterCommandInvoker.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandInvoker.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    }
    clearFilters() {
        this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
    }
    getSelectorName() {
        return 'gui-unique-value-list';
    }
}
UniqueValueListComponent.ɵfac = function UniqueValueListComponent_Factory(t) { return new (t || UniqueValueListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.FilterWarehouse), i0.ɵɵdirectiveInject(i3.FilterCommandInvoker)); };
UniqueValueListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UniqueValueListComponent, selectors: [["div", "gui-unique-value-list", "", "fieldId", ""]], inputs: { fieldId: "fieldId" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 7, vars: 5, consts: [[3, "checked", "indeterminate", "changed"], [1, "gui-unique-value-list-container", "gui-overflow-y-scroll", "gui-overflow-x-hidden"], [4, "ngFor", "ngForOf"], [1, "gui-unique-value-list-actions", "gui-p-6", "gui-flex", "gui-justify-end"], ["gui-button", "", 3, "outline", "primary", "click"], [3, "checked", "changed"]], template: function UniqueValueListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-checkbox", 0);
        i0.ɵɵlistener("changed", function UniqueValueListComponent_Template_gui_checkbox_changed_0_listener() { return ctx.toggleAllSelect(); });
        i0.ɵɵtext(1, " Select all\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, UniqueValueListComponent_div_3_Template, 3, 2, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵlistener("click", function UniqueValueListComponent_Template_button_click_5_listener() { return ctx.clearFilters(); });
        i0.ɵɵtext(6, " Clear ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("checked", ctx.selectAllChecked)("indeterminate", ctx.selectAllIndeterminate);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.uniqueValues);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("outline", true)("primary", true);
    } }, directives: [i4.FabricCheckboxComponent, i5.NgForOf, i4.FabricButtonComponent], styles: [".gui-unique-value-list-container{max-height:300px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniqueValueListComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-unique-value-list][fieldId]',
                templateUrl: './unique-value-list.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styleUrls: [
                    '../style/unique-value-list.ngx.scss'
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.FilterWarehouse }, { type: i3.FilterCommandInvoker }]; }, { fieldId: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL3VuaXF1ZS91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7O0lDS2pGLDJCQUF3QztJQUN2Qyx1Q0FDbUM7SUFEckIsNFFBQStCO0lBRTVDLFlBQ0Q7SUFBQSxpQkFBZTtJQUNoQixpQkFBTTs7O0lBSEEsZUFBNkI7SUFBN0IsOENBQTZCO0lBQ2pDLGVBQ0Q7SUFEQyxvREFDRDs7QURRRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYztJQVczRCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxvQkFBMEM7UUFDN0QsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU45RCxpQkFBWSxHQUFnQyxFQUFFLENBQUM7SUFRL0MsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZUFBZSxDQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ3JELENBQUMscUJBQTRDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ04sSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0YsQ0FBQztJQUVELFlBQVksQ0FBQyxvQkFBMEM7UUFDdEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksb0JBQW9CLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdHO2FBQU07WUFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0c7SUFDRixDQUFDO0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7O2dHQTFEVyx3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ25CckMsdUNBRThDO1FBRmhDLCtHQUFXLHFCQUFpQixJQUFDO1FBRzFDLDZCQUNEO1FBQUEsaUJBQWU7UUFFZiw4QkFBeUY7UUFDeEYseUVBS007UUFDUCxpQkFBTTtRQUVOLDhCQUE0RTtRQUMzRSxpQ0FHYTtRQUhMLHFHQUFTLGtCQUFjLElBQUM7UUFJL0IsdUJBQ0Q7UUFBQSxpQkFBUztRQUNWLGlCQUFNOztRQXJCRCw4Q0FBNEIsNkNBQUE7UUFNVCxlQUFlO1FBQWYsMENBQWU7UUFVcEMsZUFBZ0I7UUFBaEIsOEJBQWdCLGlCQUFBOzt1RkRFTix3QkFBd0I7Y0FUcEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFO29CQUNWLHFDQUFxQztpQkFDckM7YUFDRDt3TEFJQSxPQUFPO2tCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXVuaXF1ZS12YWx1ZS1saXN0XVtmaWVsZElkXScsXG5cdHRlbXBsYXRlVXJsOiAnLi91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vc3R5bGUvdW5pcXVlLXZhbHVlLWxpc3Qubmd4LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkSWQ6IEZpZWxkSWQ7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmRJbnZva2VyOiBGaWx0ZXJDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpbHRlcldhcmVob3VzZS5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdCh1bmlxdWVWYWx1ZXNSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuaXF1ZVZhbHVlcyA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5nZXRWYWx1ZXModGhpcy5maWVsZElkKTtcblxuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuaXNTZWxlY3RBbGxDaGVja2VkKHRoaXMuZmllbGRJZCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUodGhpcy5maWVsZElkKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlQWxsU2VsZWN0KCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci51bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVNlbGVjdCh1bmlxdWVWYWx1ZVJlYWRNb2RlbDogVW5pcXVlVmFsdWVSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh1bmlxdWVWYWx1ZVJlYWRNb2RlbC5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci51bnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXVuaXF1ZS12YWx1ZS1saXN0Jztcblx0fVxuXG59XG4iLCI8Z3VpLWNoZWNrYm94IChjaGFuZ2VkKT1cInRvZ2dsZUFsbFNlbGVjdCgpXCJcblx0XHRcdCAgW2NoZWNrZWRdPVwic2VsZWN0QWxsQ2hlY2tlZFwiXG5cdFx0XHQgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdEFsbEluZGV0ZXJtaW5hdGVcIj5cblx0U2VsZWN0IGFsbFxuPC9ndWktY2hlY2tib3g+XG5cbjxkaXYgY2xhc3M9XCJndWktdW5pcXVlLXZhbHVlLWxpc3QtY29udGFpbmVyIGd1aS1vdmVyZmxvdy15LXNjcm9sbCBndWktb3ZlcmZsb3cteC1oaWRkZW5cIj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdW5pcXVlVmFsdWVzXCI+XG5cdFx0PGd1aS1jaGVja2JveCAoY2hhbmdlZCk9XCJ0b2dnbGVTZWxlY3QodmFsdWUpXCJcblx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInZhbHVlLmlzRW5hYmxlZCgpXCI+XG5cdFx0XHR7e3ZhbHVlLmdldFZhbHVlKCl9fVxuXHRcdDwvZ3VpLWNoZWNrYm94PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZ3VpLXVuaXF1ZS12YWx1ZS1saXN0LWFjdGlvbnMgZ3VpLXAtNiBndWktZmxleCBndWktanVzdGlmeS1lbmRcIj5cblx0PGJ1dHRvbiAoY2xpY2spPVwiY2xlYXJGaWx0ZXJzKClcIlxuXHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiXG5cdFx0XHRbcHJpbWFyeV09XCJ0cnVlXCJcblx0XHRcdGd1aS1idXR0b24+XG5cdFx0Q2xlYXJcblx0PC9idXR0b24+XG48L2Rpdj5cbiJdfQ==