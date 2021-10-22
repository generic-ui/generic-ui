/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export class ColumnSelectorComponent extends PureComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.columnSelected = new EventEmitter();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    onSelectChange(column) {
        this.columnSelected.emit(column);
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-column-selector';
    }
}
ColumnSelectorComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
ColumnSelectorComponent.ctorParameters = () => [
    { type: ElementRef }
];
ColumnSelectorComponent.propDecorators = {
    columns: [{ type: Input }],
    columnSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    ColumnSelectorComponent.prototype.columnSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL21lbnUvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQXNCbkYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7Ozs7SUFRekQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFIbkIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztJQUk3RCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUErQjtRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7WUF0Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7RUFjVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUF2QjRDLFVBQVU7OztzQkEwQnJELEtBQUs7NkJBR0wsTUFBTTs7OztJQUhQLDBDQUN3Qzs7SUFFeEMsaURBQzZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1jb2x1bW4tc2VsZWN0b3JdW2NvbHVtbnNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdENvbHVtbjpcblxuXHRcdDxndWktZHJvcGRvd24+XG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0ICAgKGNsaWNrKT1cIm9uU2VsZWN0Q2hhbmdlKGNvbHVtbilcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLnZpZXdUZW1wbGF0ZTtcblx0XHRcdFx0XHRcdCAgIGNvbnRleHQ6IGNvbHVtbi5jb250ZXh0XCI+XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5TZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtblNlbGVjdGVkLmVtaXQoY29sdW1uKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jb2x1bW4tc2VsZWN0b3InO1xuXHR9XG59XG4iXX0=