import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../percentage/percentage-view.component";
const _c0 = ["value", ""];
function BarViewComponent_gui_percentage_view_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "gui-percentage-view", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r0.value);
} }
export class BarViewComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.showPercentage = false;
    }
    ngOnChanges(changes) {
        if (changes.value !== undefined && changes.value !== null) {
            this.width = this.value > 100 ? 100 : this.value;
        }
    }
    getSelectorName() {
        return 'gui-bar-view';
    }
}
BarViewComponent.ɵfac = function BarViewComponent_Factory(t) { return new (t || BarViewComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
BarViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarViewComponent, selectors: [["gui-bar-view", "value", ""]], inputs: { value: "value", showPercentage: "showPercentage" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 3, consts: [[1, "gui-percentage-bar"], [1, "gui-percentage"], [3, "value", 4, "ngIf"], [3, "value"]], template: function BarViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵtemplate(2, BarViewComponent_gui_percentage_view_2_Template, 1, 1, "gui-percentage-view", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.width, "%");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showPercentage);
    } }, directives: [i1.NgIf, i2.PercentageViewComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarViewComponent, [{
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
    }], function () { return [{ type: i0.ElementRef }]; }, { value: [{
            type: Input
        }], showPercentage: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvYmFyL2Jhci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7OztJQVNoRix5Q0FFc0I7OztJQURoQixvQ0FBZTs7QUFPeEIsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGFBQWE7SUFVbEQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFMbkIsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFNaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFvQztRQUMvQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqRDtJQUNGLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7O2dGQXRCVyxnQkFBZ0I7bUVBQWhCLGdCQUFnQjtRQVgzQiw4QkFBZ0M7UUFDL0IseUJBQ007UUFDTixpR0FFc0I7UUFDdkIsaUJBQU07O1FBTHVCLGVBQXVCO1FBQXZCLHVDQUF1QjtRQUU3QixlQUFvQjtRQUFwQix5Q0FBb0I7O3VGQVFoQyxnQkFBZ0I7Y0FkNUIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NkRBSUEsS0FBSztrQkFESixLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJhci12aWV3W3ZhbHVlXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlLWJhclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgKm5nSWY9XCJzaG93UGVyY2VudGFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0IFt2YWx1ZV09XCJ2YWx1ZVwiPlxuXHRcdFx0PC9ndWktcGVyY2VudGFnZS12aWV3PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCYXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRzaG93UGVyY2VudGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEJhclZpZXdDb21wb25lbnQ+KSB7XG5cdFx0aWYgKGNoYW5nZXMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy52YWx1ZSA+IDEwMCA/IDEwMCA6IHRoaXMudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWJhci12aWV3Jztcblx0fVxuXG59XG4iXX0=