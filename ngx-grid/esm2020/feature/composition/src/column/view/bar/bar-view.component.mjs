import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import { ifChanged } from '../../../../../common/src/cdk/component/lib/src/check.input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../percentage/percentage-view.component";
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
BarViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: BarViewComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BarViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: BarViewComponent, selector: "gui-bar-view[value]", inputs: { value: "value", showPercentage: "showPercentage" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.PercentageViewComponent, selector: "gui-percentage-view[value]", inputs: ["value"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: BarViewComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUUvRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7QUFnQnhGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhO0lBVWxELFlBQVksVUFBc0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBTG5CLG1CQUFjLEdBQVksS0FBSyxDQUFDO0lBTWhDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBb0M7UUFFL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7OzZHQXZCVyxnQkFBZ0I7aUdBQWhCLGdCQUFnQixxS0FabEI7Ozs7Ozs7O0VBUVQ7MkZBSVcsZ0JBQWdCO2tCQWQ1QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDO2lHQUlBLEtBQUs7c0JBREosS0FBSztnQkFJTixjQUFjO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvY2RrL2NvbXBvbmVudC9saWIvc3JjL3B1cmUtY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvY2RrL2NvbXBvbmVudC9saWIvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgaWZDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvY2hlY2suaW5wdXQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYmFyLXZpZXdbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXBlcmNlbnRhZ2UtYmFyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXBlcmNlbnRhZ2VcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Z3VpLXBlcmNlbnRhZ2UtdmlldyAqbmdJZj1cInNob3dQZXJjZW50YWdlXCJcblx0XHRcdFx0XHRcdFx0XHQgW3ZhbHVlXT1cInZhbHVlXCI+XG5cdFx0XHQ8L2d1aS1wZXJjZW50YWdlLXZpZXc+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJhclZpZXdDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHNob3dQZXJjZW50YWdlOiBib29sZWFuID0gZmFsc2U7XG5cblx0d2lkdGg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8QmFyVmlld0NvbXBvbmVudD4pIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnZhbHVlLCAoKSA9PiB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy52YWx1ZSA+IDEwMCA/IDEwMCA6IHRoaXMudmFsdWU7XG5cdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktYmFyLXZpZXcnO1xuXHR9XG5cbn1cbiJdfQ==