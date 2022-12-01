import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../cdk/component/lib/src/icon-component';
import { StyleModifier } from '../../cdk/component/lib/src/dom/style/style-modifier';
import { ifChanged } from '../../cdk/component/lib/src/check.input';
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
StructureArrowIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureArrowIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
StructureArrowIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: { position: "position", sort: "sort" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
			<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureArrowIconComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbW1vbi9zcmMvaWNvbnMvYXJyb3cvc3RydWN0dXJlLmFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFnQnBFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxhQUFhO0lBVTdELFlBQVksVUFBc0IsRUFDL0IsaUJBQW9DO1FBQ3RDLEtBQUssQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQVR0QyxhQUFRLEdBQXVDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQztRQVV4RSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQStDO1FBRTFELFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2FBQ25GO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHNDQUFzQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxpQkFBaUI7UUFDeEIsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNuRCxDQUFDO0lBRU8sY0FBYztRQUVyQixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFFdEIsS0FBSyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLENBQUM7YUFDVDtZQUVELEtBQUssc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sR0FBRyxDQUFDO2FBQ1g7WUFFRCxLQUFLLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ1g7WUFFRCxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQzthQUNWO1lBRUQsT0FBTyxDQUFDLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLENBQUM7YUFDVDtTQUNEO0lBQ0YsQ0FBQzs7d0hBNURXLDJCQUEyQjs0R0FBM0IsMkJBQTJCLGlLQVY3Qjs7Ozs7O0VBTVQ7MkZBSVcsMkJBQTJCO2tCQVp2QyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQztpSUFJQSxRQUFRO3NCQURQLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2RrL2NvbXBvbmVudC9saWIvc3JjL2ljb24tY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi9jZGsvY29tcG9uZW50L2xpYi9zcmMvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uL2Nkay9jb21wb25lbnQvbGliL3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uL2Nkay9jb21wb25lbnQvbGliL3NyYy9jaGVjay5pbnB1dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uIH0gZnJvbSAnLi9zdHJ1Y3V0cmUuYXJyb3ctcG9zaXRpb24nO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWFycm93LWljb25dJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwLjA0IDExLjcyXCI+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIyLjE1XCIgeDI9XCI1LjAyXCIgeTI9XCIxMC45N1wiLz5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjkuMjlcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCI1LjAyXCIvPlxuXHRcdDwvc3ZnPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBcnJvd0ljb25Db21wb25lbnQgZXh0ZW5kcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbjogU3RydWN0dXJlQXJyb3dQb3NpdGlvbiB8IFNvcnRPcmRlciA9IFN0cnVjdHVyZUFycm93UG9zaXRpb24uVVA7XG5cblx0QElucHV0KClcblx0c29ydDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0eWxlTW9kaWZpZXI6IFN0eWxlTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHRcdGlmICh0aGlzLnNvcnQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtc29ydC1pY29uJyk7XG5cdFx0fVxuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlQXJyb3dJY29uQ29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMucG9zaXRpb24sICgpID0+IHtcblx0XHRcdGlmICh0aGlzLnBvc2l0aW9uKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0U3R5bGVCeU5hbWUoJ3RyYW5zZm9ybScsIHRoaXMuZ2V0VHJhbnNmb3JtVmFsdWUoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24nO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRUcmFuc2Zvcm1WYWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAncm90YXRlKCcgKyB0aGlzLmdldFJvdGF0aW9uRGVnKCkgKyAnZGVnKSc7XG5cdH1cblxuXHRwcml2YXRlIGdldFJvdGF0aW9uRGVnKCk6IG51bWJlciB7XG5cblx0XHRzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcblxuXHRcdFx0Y2FzZSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLlVQOiB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFN0cnVjdHVyZUFycm93UG9zaXRpb24uRE9XTjoge1xuXHRcdFx0XHRyZXR1cm4gMTgwO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFN0cnVjdHVyZUFycm93UG9zaXRpb24uTEVGVDoge1xuXHRcdFx0XHRyZXR1cm4gLTkwO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFN0cnVjdHVyZUFycm93UG9zaXRpb24uUklHSFQ6IHtcblx0XHRcdFx0cmV0dXJuIDkwO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19