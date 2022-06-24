import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/cdk/component/pure-component';
import { ifChanged } from '../../../../../feature/common/cdk/component/check.input';
import * as i0 from "@angular/core";
import * as i1 from "../percentage/percentage-view.component";
import * as i2 from "@angular/common";
export class BarViewComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.showPercentage = false;
    }
    ngOnChanges(changes) {
        ifChanged(changes.value, () => {
            this.width = this.value > 100 ? 100 : this.value;
        });
    }
    getSelectorName() {
        return 'gui-bar-view';
    }
}
BarViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BarViewComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BarViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: BarViewComponent, selector: "gui-bar-view[value]", inputs: { value: "value", showPercentage: "showPercentage" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`, isInline: true, components: [{ type: i1.PercentageViewComponent, selector: "gui-percentage-view[value]", inputs: ["value"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BarViewComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input
            }], showPercentage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi1yZWFkL3ZpZXcvYmFyL2Jhci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFM0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7O0FBZ0JwRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsYUFBYTtJQVVsRCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUxuQixtQkFBYyxHQUFZLEtBQUssQ0FBQztJQU1oQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQW9DO1FBRS9DLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs4R0F2QlcsZ0JBQWdCO2tHQUFoQixnQkFBZ0IscUtBWmxCOzs7Ozs7OztFQVFUOzRGQUlXLGdCQUFnQjtrQkFkNUIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7Ozs7O0VBUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQztpR0FJQSxLQUFLO3NCQURKLEtBQUs7Z0JBSU4sY0FBYztzQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBpZkNoYW5nZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJhci12aWV3W3ZhbHVlXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlLWJhclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgKm5nSWY9XCJzaG93UGVyY2VudGFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0IFt2YWx1ZV09XCJ2YWx1ZVwiPlxuXHRcdFx0PC9ndWktcGVyY2VudGFnZS12aWV3PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCYXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRzaG93UGVyY2VudGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEJhclZpZXdDb21wb25lbnQ+KSB7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy52YWx1ZSwgKCkgPT4ge1xuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMudmFsdWUgPiAxMDAgPyAxMDAgOiB0aGlzLnZhbHVlO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWJhci12aWV3Jztcblx0fVxuXG59XG4iXX0=