/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export class FilterTypeSelectorComponent extends PureComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.filterTypeSelected = new EventEmitter();
    }
    /**
     * @param {?} filterType
     * @return {?}
     */
    onSelectChange(filterType) {
        this.filterTypeSelected.emit(filterType.getId());
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-filter-type-selector';
    }
}
FilterTypeSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-type-selector][filterTypes]',
                template: "<ng-container>\n\tFilter Type:\n</ng-container>\n\n<gui-dropdown>\n\t<gui-dropdown-item (click)=\"onSelectChange(filterType)\"\n\t\t\t\t\t   *ngFor=\"let filterType of filterTypes\">\n\t\t{{filterType.getName()}}\n\t</gui-dropdown-item>\n</gui-dropdown>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FilterTypeSelectorComponent.ctorParameters = () => [
    { type: ElementRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItc2VsZWN0b3IvZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFRbkYsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGFBQWE7Ozs7SUFRN0QsWUFBWSxVQUFzQjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFIbkIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFJdEQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsVUFBK0I7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTywwQkFBMEIsQ0FBQztJQUNuQyxDQUFDOzs7WUF4QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELDJRQUFvRDtnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBVjRDLFVBQVU7OzswQkFhckQsS0FBSztpQ0FHTCxNQUFNOzs7O0lBSFAsa0RBQ3dDOztJQUV4Qyx5REFDc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcl1bZmlsdGVyVHlwZXNdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRmaWx0ZXJUeXBlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlclR5cGVJZD4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRvblNlbGVjdENoYW5nZShmaWx0ZXJUeXBlOiBGaWx0ZXJUeXBlUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJUeXBlU2VsZWN0ZWQuZW1pdChmaWx0ZXJUeXBlLmdldElkKCkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yJztcblx0fVxuXG59XG4iXX0=