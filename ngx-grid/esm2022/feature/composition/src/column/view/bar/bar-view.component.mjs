import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/component/src/pure-component';
import { ifChanged } from '../../../../../common/component/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../percentage/percentage-view.component";
export class BarViewComponent extends PureComponent {
    value;
    showPercentage = false;
    width;
    constructor(elementRef) {
        super(elementRef);
    }
    ngOnChanges(changes) {
        ifChanged(changes.value, () => {
            this.width = this.value > 100 ? 100 : this.value;
        });
    }
    getSelectorName() {
        return 'gui-bar-view';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: BarViewComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: BarViewComponent, selector: "gui-bar-view[value]", inputs: { value: "value", showPercentage: "showPercentage" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.PercentageViewComponent, selector: "gui-percentage-view[value]", inputs: ["value"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: BarViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-bar-view[value]',
                    template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { value: [{
                type: Input
            }], showPercentage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7QUFnQjVFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhO0lBR2xELEtBQUssQ0FBUztJQUdkLGNBQWMsR0FBWSxLQUFLLENBQUM7SUFFaEMsS0FBSyxDQUFTO0lBRWQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFvQztRQUUvQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzt1R0F2QlcsZ0JBQWdCOzJGQUFoQixnQkFBZ0IscUtBWmxCOzs7Ozs7OztFQVFUOzsyRkFJVyxnQkFBZ0I7a0JBZDVCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFOzs7Ozs7OztFQVFUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7K0VBSUEsS0FBSztzQkFESixLQUFLO2dCQUlOLGNBQWM7c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9jaGVjay5pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1iYXItdmlld1t2YWx1ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZS1iYXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktcGVyY2VudGFnZVwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxndWktcGVyY2VudGFnZS12aWV3ICpuZ0lmPVwic2hvd1BlcmNlbnRhZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdCBbdmFsdWVdPVwidmFsdWVcIj5cblx0XHRcdDwvZ3VpLXBlcmNlbnRhZ2Utdmlldz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQmFyVmlld0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0c2hvd1BlcmNlbnRhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxCYXJWaWV3Q29tcG9uZW50Pikge1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMudmFsdWUsICgpID0+IHtcblx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnZhbHVlID4gMTAwID8gMTAwIDogdGhpcy52YWx1ZTtcblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1iYXItdmlldyc7XG5cdH1cblxufVxuIl19