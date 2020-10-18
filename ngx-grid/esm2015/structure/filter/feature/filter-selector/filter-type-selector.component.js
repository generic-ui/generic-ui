/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/pure-component';
export class FilterTypeSelectorComponent extends PureComponent {
    constructor() {
        super(...arguments);
        this.filterTypeSelected = new EventEmitter();
    }
    /**
     * @param {?} filterType
     * @return {?}
     */
    onSelectChange(filterType) {
        this.filterTypeSelected.emit(filterType.getId());
    }
}
FilterTypeSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-filter-type-selector[filterTypes]',
                template: `

		<ng-container>
			Filter Type:
		</ng-container>

		<gui-dropdown>
			<gui-dropdown-item *ngFor="let filterType of filterTypes"
							   (click)="onSelectChange(filterType)">
				{{filterType.getName()}}
			</gui-dropdown-item>
		</gui-dropdown>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
FilterTypeSelectorComponent.propDecorators = {
    filterTypes: [{ type: Input }],
    filterTypeSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FilterTypeSelectorComponent.prototype.filterTypes;
    /** @type {?} */
    FilterTypeSelectorComponent.prototype.filterTypeSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvZmlsdGVyLXNlbGVjdG9yL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFxQnRFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxhQUFhO0lBbkI5RDs7UUF5QkMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFLdkQsQ0FBQzs7Ozs7SUFIQSxjQUFjLENBQUMsVUFBK0I7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUE3QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztFQWFUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OzBCQUdDLEtBQUs7aUNBR0wsTUFBTTs7OztJQUhQLGtEQUN3Qzs7SUFFeEMseURBQ3NEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yW2ZpbHRlclR5cGVzXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyPlxuXHRcdFx0RmlsdGVyIFR5cGU6XG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8Z3VpLWRyb3Bkb3duPlxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtICpuZ0Zvcj1cImxldCBmaWx0ZXJUeXBlIG9mIGZpbHRlclR5cGVzXCJcblx0XHRcdFx0XHRcdFx0ICAgKGNsaWNrKT1cIm9uU2VsZWN0Q2hhbmdlKGZpbHRlclR5cGUpXCI+XG5cdFx0XHRcdHt7ZmlsdGVyVHlwZS5nZXROYW1lKCl9fVxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRmaWx0ZXJUeXBlczogQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpbHRlclR5cGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsdGVyVHlwZUlkPigpO1xuXG5cdG9uU2VsZWN0Q2hhbmdlKGZpbHRlclR5cGU6IEZpbHRlclR5cGVSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlclR5cGVTZWxlY3RlZC5lbWl0KGZpbHRlclR5cGUuZ2V0SWQoKSk7XG5cdH1cbn1cbiJdfQ==