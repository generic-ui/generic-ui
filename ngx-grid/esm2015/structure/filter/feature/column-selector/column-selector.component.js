/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class ColumnSelectorComponent {
    constructor() {
        this.columnSelected = new EventEmitter();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    onSelectChange(column) {
        this.columnSelected.emit(column);
    }
}
ColumnSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-column-selector[columns]',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2NvbHVtbi1zZWxlY3Rvci9jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUJuSCxNQUFNLE9BQU8sdUJBQXVCO0lBcEJwQztRQTBCQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO0lBSzlELENBQUM7Ozs7O0lBSEEsY0FBYyxDQUFDLE1BQStCO1FBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTlCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztFQWNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O3NCQUdDLEtBQUs7NkJBR0wsTUFBTTs7OztJQUhQLDBDQUN3Qzs7SUFFeEMsaURBQzZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jb2x1bW4tc2VsZWN0b3JbY29sdW1uc10nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0Q29sdW1uOlxuXG5cdFx0PGd1aS1kcm9wZG93bj5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIlxuXHRcdFx0XHRcdFx0XHQgICAoY2xpY2spPVwib25TZWxlY3RDaGFuZ2UoY29sdW1uKVwiPlxuXHRcdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHQgICBjb250ZXh0OiBjb2x1bW4uY29udGV4dFwiPlxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC9ndWktZHJvcGRvd24+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uU2VsZWN0b3JDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PigpO1xuXG5cdG9uU2VsZWN0Q2hhbmdlKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtblNlbGVjdGVkLmVtaXQoY29sdW1uKTtcblx0fVxufVxuIl19