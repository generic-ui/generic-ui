/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class FieldSelectorComponent {
    constructor() {
        this.fieldSelected = new EventEmitter();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onSelectChange(field) {
        this.fieldSelected.emit(field);
    }
}
FieldSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-field-selector[fields]',
                template: `

		Field:

		<gui-dropdown>
			<gui-dropdown-item *ngFor="let field of fields"
							   (click)="onSelectChange(field)">
				{{field.getName()}}
			</gui-dropdown-item>
		</gui-dropdown>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
FieldSelectorComponent.propDecorators = {
    fields: [{ type: Input }],
    fieldSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FieldSelectorComponent.prototype.fields;
    /** @type {?} */
    FieldSelectorComponent.prototype.fieldSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBb0JuSCxNQUFNLE9BQU8sc0JBQXNCO0lBakJuQztRQXVCQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBS3BELENBQUM7Ozs7O0lBSEEsY0FBYyxDQUFDLEtBQXFCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQTNCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztFQVdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O3FCQUdDLEtBQUs7NEJBR0wsTUFBTTs7OztJQUhQLHdDQUNzQzs7SUFFdEMsK0NBQ21EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL3JlYWQvZmllbGQucmVhZC1tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1maWVsZC1zZWxlY3RvcltmaWVsZHNdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdEZpZWxkOlxuXG5cdFx0PGd1aS1kcm9wZG93bj5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCJcblx0XHRcdFx0XHRcdFx0ICAgKGNsaWNrKT1cIm9uU2VsZWN0Q2hhbmdlKGZpZWxkKVwiPlxuXHRcdFx0XHR7e2ZpZWxkLmdldE5hbWUoKX19XG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXHRcdDwvZ3VpLWRyb3Bkb3duPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkU2VsZWN0b3JDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogUmVhZG9ubHlBcnJheTxGaWVsZFJlYWRNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpZWxkU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkUmVhZE1vZGVsPigpO1xuXG5cdG9uU2VsZWN0Q2hhbmdlKGZpZWxkOiBGaWVsZFJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRTZWxlY3RlZC5lbWl0KGZpZWxkKTtcblx0fVxufVxuIl19