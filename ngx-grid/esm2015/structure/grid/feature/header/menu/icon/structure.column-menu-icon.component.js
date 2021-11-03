import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../../../common/cdk/component/icon-component';
export class StructureColumnMenuIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-structure-column-menu-icon';
    }
}
StructureColumnMenuIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-menu-icon]',
                template: `
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.46">
			<line class="cls-1" x1="9.57" y1="3.73" x2="0.75" y2="3.73"/>
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="9.57" y1="6.71" x2="0.75" y2="6.71"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureColumnMenuIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQWV0RixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsYUFBYTtJQUVsRSxZQUFZLFVBQXNCLEVBQy9CLGlCQUFvQztRQUN0QyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxnQ0FBZ0MsQ0FBQztJQUN6QyxDQUFDOzs7WUFyQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7WUFmK0QsVUFBVTtZQUF4QyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9pY29uLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtaWNvbl0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzdmcgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwLjMyIDcuNDZcIj5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjkuNTdcIiB5MT1cIjMuNzNcIiB4Mj1cIjAuNzVcIiB5Mj1cIjMuNzNcIi8+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI5LjU3XCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCIwLjc1XCIvPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiOS41N1wiIHkxPVwiNi43MVwiIHgyPVwiMC43NVwiIHkyPVwiNi43MVwiLz5cblx0XHQ8L3N2Zz5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUljb25Db21wb25lbnQgZXh0ZW5kcyBJY29uQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWljb24nO1xuXHR9XG59XG4iXX0=