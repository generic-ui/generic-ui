import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../component/src/icon-component';
import { StyleModifier } from '../../component/src/dom/style/style-modifier';
import { ifChanged } from '../../component/src/check.input';
import { StructureArrowPosition } from './strucutre.arrow-position';
import * as i0 from "@angular/core";
export class StructureArrowIconComponent extends IconComponent {
    position = StructureArrowPosition.UP;
    sort;
    styleModifier;
    constructor(elementRef, changeDetectorRef) {
        super(elementRef, changeDetectorRef);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureArrowIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: { position: "position", sort: "sort" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
			<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
			<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
		</svg>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureArrowIconComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], propDecorators: { position: [{
                type: Input
            }], sort: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3R1cmUuYXJyb3ctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQWdCcEUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGFBQWE7SUFHN0QsUUFBUSxHQUF1QyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7SUFHekUsSUFBSSxDQUFVO0lBRUcsYUFBYSxDQUFnQjtJQUU5QyxZQUFZLFVBQXNCLEVBQy9CLGlCQUFvQztRQUN0QyxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUErQztRQUUxRCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQzthQUNuRjtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxzQ0FBc0MsQ0FBQztJQUMvQyxDQUFDO0lBRU8saUJBQWlCO1FBQ3hCLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDbkQsQ0FBQztJQUVPLGNBQWM7UUFFckIsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBRXRCLEtBQUssc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDO2FBQ1Q7WUFFRCxLQUFLLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLEdBQUcsQ0FBQzthQUNYO1lBRUQsS0FBSyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNYO1lBRUQsS0FBSyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUM7YUFDVjtZQUVELE9BQU8sQ0FBQyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxDQUFDO2FBQ1Q7U0FDRDtJQUNGLENBQUM7dUdBNURXLDJCQUEyQjsyRkFBM0IsMkJBQTJCLGlLQVY3Qjs7Ozs7O0VBTVQ7OzJGQUlXLDJCQUEyQjtrQkFadkMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUU7Ozs7OztFQU1UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7K0dBSUEsUUFBUTtzQkFEUCxLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9zcmMvaWNvbi1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9zcmMvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvc3JjL2NoZWNrLmlucHV0JztcbmltcG9ydCB7IFN0cnVjdHVyZUFycm93UG9zaXRpb24gfSBmcm9tICcuL3N0cnVjdXRyZS5hcnJvdy1wb3NpdGlvbic7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtYXJyb3ctaWNvbl0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAuMDQgMTEuNzJcIj5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjIuMTVcIiB4Mj1cIjUuMDJcIiB5Mj1cIjEwLjk3XCIvPlxuXHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMC43NVwiIHgyPVwiOS4yOVwiIHkyPVwiNS4wMlwiLz5cblx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjAuNzVcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0PC9zdmc+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFycm93SWNvbkNvbXBvbmVudCBleHRlbmRzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBvc2l0aW9uOiBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uIHwgU29ydE9yZGVyID0gU3RydWN0dXJlQXJyb3dQb3NpdGlvbi5VUDtcblxuXHRASW5wdXQoKVxuXHRzb3J0OiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvclJlZik7XG5cdFx0aWYgKHRoaXMuc29ydCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1zb3J0LWljb24nKTtcblx0XHR9XG5cdFx0dGhpcy5zdHlsZU1vZGlmaWVyID0gbmV3IFN0eWxlTW9kaWZpZXIoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVBcnJvd0ljb25Db21wb25lbnQ+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5wb3NpdGlvbiwgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMucG9zaXRpb24pIHtcblx0XHRcdFx0dGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRTdHlsZUJ5TmFtZSgndHJhbnNmb3JtJywgdGhpcy5nZXRUcmFuc2Zvcm1WYWx1ZSgpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbic7XG5cdH1cblxuXHRwcml2YXRlIGdldFRyYW5zZm9ybVZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdyb3RhdGUoJyArIHRoaXMuZ2V0Um90YXRpb25EZWcoKSArICdkZWcpJztcblx0fVxuXG5cdHByaXZhdGUgZ2V0Um90YXRpb25EZWcoKTogbnVtYmVyIHtcblxuXHRcdHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xuXG5cdFx0XHRjYXNlIFN0cnVjdHVyZUFycm93UG9zaXRpb24uVVA6IHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU3RydWN0dXJlQXJyb3dQb3NpdGlvbi5ET1dOOiB7XG5cdFx0XHRcdHJldHVybiAxODA7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU3RydWN0dXJlQXJyb3dQb3NpdGlvbi5MRUZUOiB7XG5cdFx0XHRcdHJldHVybiAtOTA7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU3RydWN0dXJlQXJyb3dQb3NpdGlvbi5SSUdIVDoge1xuXHRcdFx0XHRyZXR1cm4gOTA7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=