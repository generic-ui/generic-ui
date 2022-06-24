import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../cdk/component/icon-component';
import { StyleModifier } from '../../cdk/dom/style/style-modifier';
import { ifChanged } from '../../cdk/component/check.input';
import { StructureArrowPosition } from './strucutre.arrow-position';
import * as i0 from "@angular/core";
export class StructureArrowIconComponent extends IconComponent {
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
        this.position = StructureArrowPosition.UP;
        if (this.sort) {
            this.addClassToHost('gui-structure-column-menu-sort-icon');
        }
        this.styleModifier = new StyleModifier(elementRef.nativeElement);
    }
    ngOnChanges(changes) {
        ifChanged(changes.position, () => {
            if (this.position) {
                this.styleModifier.getHost().setStyleByName('transform', this.getTransformValue());
            }
        });
    }
    getSelectorName() {
        return 'gui-structure-column-menu-arrow-icon';
    }
    getTransformValue() {
        return 'rotate(' + this.getRotationDeg() + 'deg)';
    }
    getRotationDeg() {
        switch (this.position) {
            case StructureArrowPosition.UP: {
                return 0;
            }
            case StructureArrowPosition.DOWN: {
                return 180;
            }
            case StructureArrowPosition.LEFT: {
                return -90;
            }
            case StructureArrowPosition.RIGHT: {
                return 90;
            }
            default: {
                return 0;
            }
        }
    }
}
StructureArrowIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureArrowIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureArrowIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: { position: "position", sort: "sort" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
			<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureArrowIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-arrow-icon]',
                    template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
			<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
		</svg>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { position: [{
                type: Input
            }], sort: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3R1cmUuYXJyb3ctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQWdCcEUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGFBQWE7SUFVN0QsWUFBWSxVQUFzQixFQUMvQixpQkFBb0M7UUFDdEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBVHRDLGFBQVEsR0FBdUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDO1FBVXhFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBK0M7UUFFMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7YUFDbkY7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0NBQXNDLENBQUM7SUFDL0MsQ0FBQztJQUVPLGlCQUFpQjtRQUN4QixPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBQ25ELENBQUM7SUFFTyxjQUFjO1FBRXJCLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUV0QixLQUFLLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsQ0FBQzthQUNUO1lBRUQsS0FBSyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTyxHQUFHLENBQUM7YUFDWDtZQUVELEtBQUssc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDWDtZQUVELEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDO2FBQ1Y7WUFFRCxPQUFPLENBQUMsQ0FBQztnQkFDUixPQUFPLENBQUMsQ0FBQzthQUNUO1NBQ0Q7SUFDRixDQUFDOzt5SEE1RFcsMkJBQTJCOzZHQUEzQiwyQkFBMkIsaUtBVjdCOzs7Ozs7RUFNVDs0RkFJVywyQkFBMkI7a0JBWnZDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFOzs7Ozs7RUFNVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDO2lJQUlBLFFBQVE7c0JBRFAsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jZGsvY29tcG9uZW50L2ljb24tY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi9jZGsvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcbmltcG9ydCB7IFN0cnVjdHVyZUFycm93UG9zaXRpb24gfSBmcm9tICcuL3N0cnVjdXRyZS5hcnJvdy1wb3NpdGlvbic7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1hcnJvdy1pY29uXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMC4wNCAxMS43MlwiPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMi4xNVwiIHgyPVwiNS4wMlwiIHkyPVwiMTAuOTdcIi8+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCI5LjI5XCIgeTI9XCI1LjAyXCIvPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMC43NVwiIHgyPVwiMC43NVwiIHkyPVwiNS4wMlwiLz5cblx0XHQ8L3N2Zz5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQXJyb3dJY29uQ29tcG9uZW50IGV4dGVuZHMgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cG9zaXRpb246IFN0cnVjdHVyZUFycm93UG9zaXRpb24gfCBTb3J0T3JkZXIgPSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLlVQO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHlsZU1vZGlmaWVyOiBTdHlsZU1vZGlmaWVyO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmKTtcblx0XHRpZiAodGhpcy5zb3J0KSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LXNvcnQtaWNvbicpO1xuXHRcdH1cblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIgPSBuZXcgU3R5bGVNb2RpZmllcihlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUFycm93SWNvbkNvbXBvbmVudD4pIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnBvc2l0aW9uLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5wb3NpdGlvbikge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnNldFN0eWxlQnlOYW1lKCd0cmFuc2Zvcm0nLCB0aGlzLmdldFRyYW5zZm9ybVZhbHVlKCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uJztcblx0fVxuXG5cdHByaXZhdGUgZ2V0VHJhbnNmb3JtVmFsdWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ3JvdGF0ZSgnICsgdGhpcy5nZXRSb3RhdGlvbkRlZygpICsgJ2RlZyknO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRSb3RhdGlvbkRlZygpOiBudW1iZXIge1xuXG5cdFx0c3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XG5cblx0XHRcdGNhc2UgU3RydWN0dXJlQXJyb3dQb3NpdGlvbi5VUDoge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLkRPV046IHtcblx0XHRcdFx0cmV0dXJuIDE4MDtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLkxFRlQ6IHtcblx0XHRcdFx0cmV0dXJuIC05MDtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLlJJR0hUOiB7XG5cdFx0XHRcdHJldHVybiA5MDtcblx0XHRcdH1cblxuXHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==