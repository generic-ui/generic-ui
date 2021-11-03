import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const _c0 = ["gui-sorting-selector", ""];
export class SortingSelectorComponent extends SmartComponent {
    constructor(detector, elementRef) {
        super(detector, elementRef);
        this.sortingOptions = [
            'Name: A-Z',
            'Name: Z-A',
            'Price: Low to High',
            'Price: High to Low',
            'None'
        ];
        this.selectedSorting = this.sortingOptions[0];
    }
    changeSorting(sorting) {
    }
    getSelectorName() {
        return 'gui-sorting-selector';
    }
}
SortingSelectorComponent.ɵfac = function SortingSelectorComponent_Factory(t) { return new (t || SortingSelectorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
SortingSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SortingSelectorComponent, selectors: [["div", "gui-sorting-selector", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 3, consts: [[3, "options", "selected", "width", "optionChanged"]], template: function SortingSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-select", 0);
        i0.ɵɵlistener("optionChanged", function SortingSelectorComponent_Template_gui_select_optionChanged_0_listener($event) { return ctx.changeSorting($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("options", ctx.sortingOptions)("selected", ctx.selectedSorting)("width", 200);
    } }, directives: [i1.FabricSelectComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortingSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-sorting-selector]',
                templateUrl: './sorting-selector.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7QUFTbEYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7SUFZM0QsWUFBWSxRQUEyQixFQUNwQyxVQUFzQjtRQUN4QixLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBWjdCLG1CQUFjLEdBQUc7WUFDaEIsV0FBVztZQUNYLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLE1BQU07U0FDTixDQUFDO1FBRUYsb0JBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBS3pDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtJQUM3QixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7O2dHQXRCVyx3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1hyQyxxQ0FHaUI7UUFITCwrSEFBaUIseUJBQXFCLElBQUM7UUFJbkQsaUJBQWE7O1FBSFYsNENBQTBCLGlDQUFBLGNBQUE7O3VGRFVoQix3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zb3J0aW5nLXNlbGVjdG9yXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zb3J0aW5nLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHNvcnRpbmdPcHRpb25zID0gW1xuXHRcdCdOYW1lOiBBLVonLFxuXHRcdCdOYW1lOiBaLUEnLFxuXHRcdCdQcmljZTogTG93IHRvIEhpZ2gnLFxuXHRcdCdQcmljZTogSGlnaCB0byBMb3cnLFxuXHRcdCdOb25lJ1xuXHRdO1xuXG5cdHNlbGVjdGVkU29ydGluZyA9IHRoaXMuc29ydGluZ09wdGlvbnNbMF07XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0Y2hhbmdlU29ydGluZyhzb3J0aW5nOiBzdHJpbmcpIHtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zb3J0aW5nLXNlbGVjdG9yJztcblx0fVxufVxuIiwiPGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwiY2hhbmdlU29ydGluZygkZXZlbnQpXCJcblx0XHRcdFtvcHRpb25zXT1cInNvcnRpbmdPcHRpb25zXCJcblx0XHRcdFtzZWxlY3RlZF09XCJzZWxlY3RlZFNvcnRpbmdcIlxuXHRcdFx0W3dpZHRoXT1cIjIwMFwiPlxuPC9ndWktc2VsZWN0PlxuIl19