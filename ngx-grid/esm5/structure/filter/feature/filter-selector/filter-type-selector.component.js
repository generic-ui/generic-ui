/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/pure-component';
var FilterTypeSelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterTypeSelectorComponent, _super);
    function FilterTypeSelectorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filterTypeSelected = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} filterType
     * @return {?}
     */
    FilterTypeSelectorComponent.prototype.onSelectChange = /**
     * @param {?} filterType
     * @return {?}
     */
    function (filterType) {
        this.filterTypeSelected.emit(filterType.getId());
    };
    FilterTypeSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-filter-type-selector[filterTypes]',
                    template: "\n\n\t\t<ng-container>\n\t\t\tFilter Type:\n\t\t</ng-container>\n\n\t\t<gui-dropdown>\n\t\t\t<gui-dropdown-item *ngFor=\"let filterType of filterTypes\"\n\t\t\t\t\t\t\t   (click)=\"onSelectChange(filterType)\">\n\t\t\t\t{{filterType.getName()}}\n\t\t\t</gui-dropdown-item>\n\t\t</gui-dropdown>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    FilterTypeSelectorComponent.propDecorators = {
        filterTypes: [{ type: Input }],
        filterTypeSelected: [{ type: Output }]
    };
    return FilterTypeSelectorComponent;
}(PureComponent));
export { FilterTypeSelectorComponent };
if (false) {
    /** @type {?} */
    FilterTypeSelectorComponent.prototype.filterTypes;
    /** @type {?} */
    FilterTypeSelectorComponent.prototype.filterTypeSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvZmlsdGVyLXNlbGVjdG9yL2ZpbHRlci10eXBlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXRFO0lBbUJpRCx1REFBYTtJQW5COUQ7UUFBQSxxRUE4QkM7UUFMQSx3QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQzs7SUFLdkQsQ0FBQzs7Ozs7SUFIQSxvREFBYzs7OztJQUFkLFVBQWUsVUFBK0I7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkE3QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELFFBQVEsRUFBRSw2U0FhVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7OEJBR0MsS0FBSztxQ0FHTCxNQUFNOztJQU1SLGtDQUFDO0NBQUEsQUE5QkQsQ0FtQmlELGFBQWEsR0FXN0Q7U0FYWSwyQkFBMkI7OztJQUV2QyxrREFDd0M7O0lBRXhDLHlEQUNzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1maWx0ZXItdHlwZS1zZWxlY3RvcltmaWx0ZXJUeXBlc10nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lcj5cblx0XHRcdEZpbHRlciBUeXBlOlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PGd1aS1kcm9wZG93bj5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAqbmdGb3I9XCJsZXQgZmlsdGVyVHlwZSBvZiBmaWx0ZXJUeXBlc1wiXG5cdFx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJvblNlbGVjdENoYW5nZShmaWx0ZXJUeXBlKVwiPlxuXHRcdFx0XHR7e2ZpbHRlclR5cGUuZ2V0TmFtZSgpfX1cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC9ndWktZHJvcGRvd24+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZVNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRmaWx0ZXJUeXBlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlclR5cGVJZD4oKTtcblxuXHRvblNlbGVjdENoYW5nZShmaWx0ZXJUeXBlOiBGaWx0ZXJUeXBlUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJUeXBlU2VsZWN0ZWQuZW1pdChmaWx0ZXJUeXBlLmdldElkKCkpO1xuXHR9XG59XG4iXX0=