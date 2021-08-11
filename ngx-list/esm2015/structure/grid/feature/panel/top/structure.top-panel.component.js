/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
export class StructureTopPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     */
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.addClassToHost('gui-p-6');
        this.addClassToHost('gui-border-b');
        this.addClassToHost('gui-border-b-solid');
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-top-panel';
    }
}
StructureTopPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-top-panel]',
                template: `

		<div gui-search-bar
			 class="gui-flex gui-items-center gui-h-full gui-w-3/5 gui-mr-auto"></div>
		<!--		<gui-filter-menu-trigger></gui-filter-menu-trigger>-->

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureTopPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureTopPanelComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFjckYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQWM7Ozs7O0lBRTdELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQjtRQUN4QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFGVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBR2hFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7O1lBeEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7OztFQU1UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWZpQyxpQkFBaUI7WUFBYSxVQUFVOzs7Ozs7O0lBa0I3RCx1REFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS10b3AtcGFuZWxdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgZ3VpLXNlYXJjaC1iYXJcblx0XHRcdCBjbGFzcz1cImd1aS1mbGV4IGd1aS1pdGVtcy1jZW50ZXIgZ3VpLWgtZnVsbCBndWktdy0zLzUgZ3VpLW1yLWF1dG9cIj48L2Rpdj5cblx0XHQ8IS0tXHRcdDxndWktZmlsdGVyLW1lbnUtdHJpZ2dlcj48L2d1aS1maWx0ZXItbWVudS10cmlnZ2VyPi0tPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRvcFBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTYnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYm9yZGVyLWInKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYm9yZGVyLWItc29saWQnKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtdG9wLXBhbmVsJztcblx0fVxuXG59XG4iXX0=