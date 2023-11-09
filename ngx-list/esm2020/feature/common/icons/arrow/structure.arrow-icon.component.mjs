import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../component/src/icon-component';
import { StyleModifier } from '../../component/src/dom/style/style-modifier';
import { ifChanged } from '../../component/src/check.input';
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
StructureArrowIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureArrowIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureArrowIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: { position: "position", sort: "sort" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
			<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureArrowIconComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3R1cmUuYXJyb3ctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQWdCcEUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGFBQWE7SUFVN0QsWUFBWSxVQUFzQixFQUMvQixpQkFBb0M7UUFDdEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBVHRDLGFBQVEsR0FBdUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDO1FBVXhFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBK0M7UUFFMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7YUFDbkY7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0NBQXNDLENBQUM7SUFDL0MsQ0FBQztJQUVPLGlCQUFpQjtRQUN4QixPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBQ25ELENBQUM7SUFFTyxjQUFjO1FBRXJCLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUV0QixLQUFLLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsQ0FBQzthQUNUO1lBRUQsS0FBSyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTyxHQUFHLENBQUM7YUFDWDtZQUVELEtBQUssc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDWDtZQUVELEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDO2FBQ1Y7WUFFRCxPQUFPLENBQUMsQ0FBQztnQkFDUixPQUFPLENBQUMsQ0FBQzthQUNUO1NBQ0Q7SUFDRixDQUFDOzt5SEE1RFcsMkJBQTJCOzZHQUEzQiwyQkFBMkIsaUtBVjdCOzs7Ozs7RUFNVDs0RkFJVywyQkFBMkI7a0JBWnZDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFOzs7Ozs7RUFNVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDO2lJQUlBLFFBQVE7c0JBRFAsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvc3JjL2ljb24tY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvc3JjL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L3NyYy9jaGVjay5pbnB1dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uIH0gZnJvbSAnLi9zdHJ1Y3V0cmUuYXJyb3ctcG9zaXRpb24nO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWFycm93LWljb25dJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwLjA0IDExLjcyXCI+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIyLjE1XCIgeDI9XCI1LjAyXCIgeTI9XCIxMC45N1wiLz5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjkuMjlcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCI1LjAyXCIvPlxuXHRcdDwvc3ZnPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBcnJvd0ljb25Db21wb25lbnQgZXh0ZW5kcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbjogU3RydWN0dXJlQXJyb3dQb3NpdGlvbiB8IFNvcnRPcmRlciA9IFN0cnVjdHVyZUFycm93UG9zaXRpb24uVVA7XG5cblx0QElucHV0KClcblx0c29ydDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHRcdGlmICh0aGlzLnNvcnQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtc29ydC1pY29uJyk7XG5cdFx0fVxuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlQXJyb3dJY29uQ29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucG9zaXRpb24sICgpID0+IHtcblx0XHRcdGlmICh0aGlzLnBvc2l0aW9uKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0U3R5bGVCeU5hbWUoJ3RyYW5zZm9ybScsIHRoaXMuZ2V0VHJhbnNmb3JtVmFsdWUoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24nO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRUcmFuc2Zvcm1WYWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAncm90YXRlKCcgKyB0aGlzLmdldFJvdGF0aW9uRGVnKCkgKyAnZGVnKSc7XG5cdH1cblxuXHRwcml2YXRlIGdldFJvdGF0aW9uRGVnKCk6IG51bWJlciB7XG5cblx0XHRzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcblxuXHRcdFx0Y2FzZSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLlVQOiB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFN0cnVjdHVyZUFycm93UG9zaXRpb24uRE9XTjoge1xuXHRcdFx0XHRyZXR1cm4gMTgwO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFN0cnVjdHVyZUFycm93UG9zaXRpb24uTEVGVDoge1xuXHRcdFx0XHRyZXR1cm4gLTkwO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFN0cnVjdHVyZUFycm93UG9zaXRpb24uUklHSFQ6IHtcblx0XHRcdFx0cmV0dXJuIDkwO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19