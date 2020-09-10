/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
export class BooleanEditTemplateComponent extends EditCommunicationComponent {
    constructor() {
        super();
        this.filterFieldName = 'booleanEdit';
    }
    /**
     * @param {?} changed
     * @return {?}
     */
    toggle(changed) {
        this.valueChanges.emit(changed);
        this.submit();
    }
}
BooleanEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-boolean-edit',
                template: `

		<span class="gui-cell-boolean">
			<gui-checkbox #checkbox
						  [checked]="value"
						  [name]="filterFieldName"
						  (changed)="toggle($event)">
			</gui-checkbox>
		</span>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
BooleanEditTemplateComponent.ctorParameters = () => [];
BooleanEditTemplateComponent.propDecorators = {
    checkboxRef: [{ type: ViewChild, args: ['checkbox', { read: ElementRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.checkboxRef;
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.filterFieldName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBbUI3RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsMEJBQW1DO0lBT3BGO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFIQSxvQkFBZSxHQUFHLGFBQWEsQ0FBQztJQUl6QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFnQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDOzs7WUE5QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztFQVVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7Ozs7MEJBR0MsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUF6RCxtREFDd0I7O0lBRXhCLHVEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYm9vbGVhbi1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtYm9vbGVhblwiPlxuXHRcdFx0PGd1aS1jaGVja2JveCAjY2hlY2tib3hcblx0XHRcdFx0XHRcdCAgW2NoZWNrZWRdPVwidmFsdWVcIlxuXHRcdFx0XHRcdFx0ICBbbmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIlxuXHRcdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuXHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0PC9zcGFuPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxib29sZWFuPiB7XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFJlZjogRWxlbWVudFJlZjtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAnYm9vbGVhbkVkaXQnO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHR0b2dnbGUoY2hhbmdlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQoY2hhbmdlZCk7XG5cdFx0dGhpcy5zdWJtaXQoKTtcblx0fVxuXG59XG4iXX0=