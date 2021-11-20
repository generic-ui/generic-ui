import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
export class StructureTopPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.addClassToHost('gui-p-6');
        this.addClassToHost('gui-border-b');
        this.addClassToHost('gui-border-b-solid');
    }
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

		<!--		<div gui-filter-menu-trigger></div>-->

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureTopPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQWVyRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBYztJQUU3RCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUdoRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7O1lBekJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7RUFPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztZQWhCaUMsaUJBQWlCO1lBQWEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXRvcC1wYW5lbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBndWktc2VhcmNoLWJhclxuXHRcdFx0IGNsYXNzPVwiZ3VpLWZsZXggZ3VpLWl0ZW1zLWNlbnRlciBndWktaC1mdWxsIGd1aS13LTMvNSBndWktbXItYXV0b1wiPjwvZGl2PlxuXG5cdFx0PCEtLVx0XHQ8ZGl2IGd1aS1maWx0ZXItbWVudS10cmlnZ2VyPjwvZGl2Pi0tPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRvcFBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTYnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYm9yZGVyLWInKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYm9yZGVyLWItc29saWQnKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtdG9wLXBhbmVsJztcblx0fVxuXG59XG4iXX0=