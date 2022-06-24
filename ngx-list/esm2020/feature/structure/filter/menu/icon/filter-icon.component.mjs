import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../../common/cdk/component/icon-component';
import * as i0 from "@angular/core";
export class FilterIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
    }
    getSelectorName() {
        return 'gui-filter-icon';
    }
}
FilterIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FilterIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FilterIconComponent, selector: "div[gui-filter-icon]", usesInheritance: true, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.23">
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="8.14" y1="3.62" x2="2.18" y2="3.62"/>
			<line class="cls-1" x1="6.71" y1="6.48" x2="3.62" y2="6.48"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-filter-icon]',
                    template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.32 7.23">
			<line class="cls-1" x1="9.57" y1="0.75" x2="0.75" y2="0.75"/>
			<line class="cls-1" x1="8.14" y1="3.62" x2="2.18" y2="3.62"/>
			<line class="cls-1" x1="6.71" y1="6.48" x2="3.62" y2="6.48"/>
		</svg>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9pY29uL2ZpbHRlci1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7O0FBY2hGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBRXJELFlBQVksVUFBc0IsRUFDL0IsaUJBQW9DO1FBQ3RDLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7O2lIQVRXLG1CQUFtQjtxR0FBbkIsbUJBQW1CLG1GQVZyQjs7Ozs7O0VBTVQ7NEZBSVcsbUJBQW1CO2tCQVovQixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2ljb24tY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItaWNvbl0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAuMzIgNy4yM1wiPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiOS41N1wiIHkxPVwiMC43NVwiIHgyPVwiMC43NVwiIHkyPVwiMC43NVwiLz5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjguMTRcIiB5MT1cIjMuNjJcIiB4Mj1cIjIuMThcIiB5Mj1cIjMuNjJcIi8+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI2LjcxXCIgeTE9XCI2LjQ4XCIgeDI9XCIzLjYyXCIgeTI9XCI2LjQ4XCIvPlxuXHRcdDwvc3ZnPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJJY29uQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci1pY29uJztcblx0fVxufVxuIl19