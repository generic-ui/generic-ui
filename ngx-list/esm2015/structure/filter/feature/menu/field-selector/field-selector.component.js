/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export class FieldSelectorComponent extends PureComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.fieldSelected = new EventEmitter();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onSelectChange(field) {
        this.fieldSelected.emit(field);
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-field-selector';
    }
}
FieldSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-field-selector][fields]',
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
/** @nocollapse */
FieldSelectorComponent.ctorParameters = () => [
    { type: ElementRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQW1CbkYsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7Ozs7SUFReEQsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFIbkIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQUluRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFxQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxvQkFBb0IsQ0FBQztJQUM3QixDQUFDOzs7WUFuQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7RUFXVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFwQjRDLFVBQVU7OztxQkF1QnJELEtBQUs7NEJBR0wsTUFBTTs7OztJQUhQLHdDQUNzQzs7SUFFdEMsK0NBQ21EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWVsZC1zZWxlY3Rvcl1bZmllbGRzXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHRGaWVsZDpcblxuXHRcdDxndWktZHJvcGRvd24+XG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiXG5cdFx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJvblNlbGVjdENoYW5nZShmaWVsZClcIj5cblx0XHRcdFx0e3tmaWVsZC5nZXROYW1lKCl9fVxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZFNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZmllbGRzOiBSZWFkb25seUFycmF5PEZpZWxkUmVhZE1vZGVsPjtcblxuXHRAT3V0cHV0KClcblx0ZmllbGRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmllbGRSZWFkTW9kZWw+KCk7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0b25TZWxlY3RDaGFuZ2UoZmllbGQ6IEZpZWxkUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZFNlbGVjdGVkLmVtaXQoZmllbGQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpZWxkLXNlbGVjdG9yJztcblx0fVxufVxuIl19