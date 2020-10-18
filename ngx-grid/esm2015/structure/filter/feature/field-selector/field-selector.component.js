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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBb0JuSCxNQUFNLE9BQU8sc0JBQXNCO0lBakJuQztRQXVCQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBS3BELENBQUM7Ozs7O0lBSEEsY0FBYyxDQUFDLEtBQXFCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQTNCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztFQVdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O3FCQUdDLEtBQUs7NEJBR0wsTUFBTTs7OztJQUhQLHdDQUNzQzs7SUFFdEMsK0NBQ21EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZmllbGQtc2VsZWN0b3JbZmllbGRzXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHRGaWVsZDpcblxuXHRcdDxndWktZHJvcGRvd24+XG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiXG5cdFx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJvblNlbGVjdENoYW5nZShmaWVsZClcIj5cblx0XHRcdFx0e3tmaWVsZC5nZXROYW1lKCl9fVxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZFNlbGVjdG9yQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IFJlYWRvbmx5QXJyYXk8RmllbGRSZWFkTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRmaWVsZFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWVsZFJlYWRNb2RlbD4oKTtcblxuXHRvblNlbGVjdENoYW5nZShmaWVsZDogRmllbGRSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkU2VsZWN0ZWQuZW1pdChmaWVsZCk7XG5cdH1cbn1cbiJdfQ==