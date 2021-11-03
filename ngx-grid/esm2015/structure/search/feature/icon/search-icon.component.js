import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../common/cdk/component/icon-component';
export class SearchIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-search-icon';
    }
}
SearchIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-search-icon]',
                template: `
		<svg class="gui-search-icon-svg" xmlns="http://www.w3.org/2000/svg" width="10.231" height="10.601" viewBox="0 0 10.231 10.601">
			<line x2="1.77" y2="1.77" transform="translate(7.4 7.77)" fill="none" stroke-linecap="round"
				  stroke-linejoin="round" stroke-width="1.5"/>
			<circle cx="4.02" cy="4.02" r="4.02" transform="translate(0.5 0.5)" stroke-width="1"
					stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		</svg>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
SearchIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc2VhcmNoL2ZlYXR1cmUvaWNvbi9zZWFyY2gtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBZ0JoRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxZQUFZLFVBQXNCLEVBQy9CLGlCQUFvQztRQUN0QyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7WUF0QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7OztFQU9UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBaEIrRCxVQUFVO1lBQXhDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2ljb24tY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlYXJjaC1pY29uXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHN2ZyBjbGFzcz1cImd1aS1zZWFyY2gtaWNvbi1zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMC4yMzFcIiBoZWlnaHQ9XCIxMC42MDFcIiB2aWV3Qm94PVwiMCAwIDEwLjIzMSAxMC42MDFcIj5cblx0XHRcdDxsaW5lIHgyPVwiMS43N1wiIHkyPVwiMS43N1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3LjQgNy43NylcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHQgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxuXHRcdFx0PGNpcmNsZSBjeD1cIjQuMDJcIiBjeT1cIjQuMDJcIiByPVwiNC4wMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjUgMC41KVwiIHN0cm9rZS13aWR0aD1cIjFcIlxuXHRcdFx0XHRcdHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGZpbGw9XCJub25lXCIvPlxuXHRcdDwvc3ZnPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hJY29uQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNlYXJjaC1pY29uJztcblx0fVxufVxuIl19