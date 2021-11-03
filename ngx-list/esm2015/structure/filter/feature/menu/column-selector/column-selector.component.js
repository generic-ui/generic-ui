import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "@angular/common";
const _c0 = ["gui-column-selector", "", "columns", ""];
function ColumnSelectorComponent_gui_dropdown_item_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ColumnSelectorComponent_gui_dropdown_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-dropdown-item", 1);
    i0.ɵɵlistener("click", function ColumnSelectorComponent_gui_dropdown_item_2_Template_gui_dropdown_item_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const column_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onSelectChange(column_r1); });
    i0.ɵɵtemplate(1, ColumnSelectorComponent_gui_dropdown_item_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", column_r1.viewTemplate)("ngTemplateOutletContext", column_r1.context);
} }
export class ColumnSelectorComponent extends PureComponent {
    constructor(elementRef) {
        super(elementRef);
        this.columnSelected = new EventEmitter();
    }
    onSelectChange(column) {
        this.columnSelected.emit(column);
    }
    getSelectorName() {
        return 'gui-column-selector';
    }
}
ColumnSelectorComponent.ɵfac = function ColumnSelectorComponent_Factory(t) { return new (t || ColumnSelectorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ColumnSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColumnSelectorComponent, selectors: [["div", "gui-column-selector", "", "columns", ""]], inputs: { columns: "columns" }, outputs: { columnSelected: "columnSelected" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 3, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ColumnSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, " Column: ");
        i0.ɵɵelementStart(1, "gui-dropdown");
        i0.ɵɵtemplate(2, ColumnSelectorComponent_gui_dropdown_item_2_Template, 2, 2, "gui-dropdown-item", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.columns);
    } }, directives: [i1.FabricDropdownComponent, i2.NgForOf, i1.DropdownItemComponent, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColumnSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-column-selector][columns]',
                template: `

		Column:

		<gui-dropdown>
			<gui-dropdown-item *ngFor="let column of columns"
							   (click)="onSelectChange(column)">
				<ng-container
					*ngTemplateOutlet="column.viewTemplate;
						   context: column.context">
				</ng-container>
			</gui-dropdown-item>
		</gui-dropdown>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { columns: [{
            type: Input
        }], columnSelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7OztJQVcvRSx3QkFHZTs7OztJQUxoQiw0Q0FDd0M7SUFBakMsOFJBQWdDO0lBQ3RDLDhHQUdlO0lBQ2hCLGlCQUFvQjs7O0lBSGpCLGVBQ0c7SUFESCx5REFDRyw4Q0FBQTs7QUFTVCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTtJQVF6RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUhuQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO0lBSTdELENBQUM7SUFFRCxjQUFjLENBQUMsTUFBK0I7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs4RkFsQlcsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUFoQmxDLHlCQUVBO1FBQUEsb0NBQWM7UUFDYixvR0FNb0I7UUFDckIsaUJBQWU7O1FBUHdCLGVBQVU7UUFBVixxQ0FBVTs7dUZBYXRDLHVCQUF1QjtjQXBCbkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7RUFjVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7NkRBSUEsT0FBTztrQkFETixLQUFLO1lBSU4sY0FBYztrQkFEYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1jb2x1bW4tc2VsZWN0b3JdW2NvbHVtbnNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdENvbHVtbjpcblxuXHRcdDxndWktZHJvcGRvd24+XG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0ICAgKGNsaWNrKT1cIm9uU2VsZWN0Q2hhbmdlKGNvbHVtbilcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLnZpZXdUZW1wbGF0ZTtcblx0XHRcdFx0XHRcdCAgIGNvbnRleHQ6IGNvbHVtbi5jb250ZXh0XCI+XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtblNlbGVjdGVkLmVtaXQoY29sdW1uKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jb2x1bW4tc2VsZWN0b3InO1xuXHR9XG59XG4iXX0=