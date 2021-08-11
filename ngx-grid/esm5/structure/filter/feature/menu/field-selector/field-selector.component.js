/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
var FieldSelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldSelectorComponent, _super);
    function FieldSelectorComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.fieldSelected = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldSelectorComponent.prototype.onSelectChange = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.fieldSelected.emit(field);
    };
    /**
     * @protected
     * @return {?}
     */
    FieldSelectorComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-field-selector';
    };
    FieldSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-field-selector][fields]',
                    template: "\n\n\t\tField:\n\n\t\t<gui-dropdown>\n\t\t\t<gui-dropdown-item *ngFor=\"let field of fields\"\n\t\t\t\t\t\t\t   (click)=\"onSelectChange(field)\">\n\t\t\t\t{{field.getName()}}\n\t\t\t</gui-dropdown-item>\n\t\t</gui-dropdown>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FieldSelectorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FieldSelectorComponent.propDecorators = {
        fields: [{ type: Input }],
        fieldSelected: [{ type: Output }]
    };
    return FieldSelectorComponent;
}(PureComponent));
export { FieldSelectorComponent };
if (false) {
    /** @type {?} */
    FieldSelectorComponent.prototype.fields;
    /** @type {?} */
    FieldSelectorComponent.prototype.fieldSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWVsZC1zZWxlY3Rvci9maWVsZC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFbkY7SUFpQjRDLGtEQUFhO0lBUXhELGdDQUFZLFVBQXNCO1FBQWxDLFlBQ0Msa0JBQU0sVUFBVSxDQUFDLFNBQ2pCO1FBSkQsbUJBQWEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQzs7SUFJbkQsQ0FBQzs7Ozs7SUFFRCwrQ0FBYzs7OztJQUFkLFVBQWUsS0FBcUI7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFUyxnREFBZTs7OztJQUF6QjtRQUNDLE9BQU8sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbkNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxRQUFRLEVBQUUsd09BV1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFwQjRDLFVBQVU7Ozt5QkF1QnJELEtBQUs7Z0NBR0wsTUFBTTs7SUFjUiw2QkFBQztDQUFBLEFBcENELENBaUI0QyxhQUFhLEdBbUJ4RDtTQW5CWSxzQkFBc0I7OztJQUVsQyx3Q0FDc0M7O0lBRXRDLCtDQUNtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmllbGQtc2VsZWN0b3JdW2ZpZWxkc10nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0RmllbGQ6XG5cblx0XHQ8Z3VpLWRyb3Bkb3duPlxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIlxuXHRcdFx0XHRcdFx0XHQgICAoY2xpY2spPVwib25TZWxlY3RDaGFuZ2UoZmllbGQpXCI+XG5cdFx0XHRcdHt7ZmllbGQuZ2V0TmFtZSgpfX1cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC9ndWktZHJvcGRvd24+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogUmVhZG9ubHlBcnJheTxGaWVsZFJlYWRNb2RlbD47XG5cblx0QE91dHB1dCgpXG5cdGZpZWxkU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkUmVhZE1vZGVsPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKGZpZWxkOiBGaWVsZFJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRTZWxlY3RlZC5lbWl0KGZpZWxkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWVsZC1zZWxlY3Rvcic7XG5cdH1cbn1cbiJdfQ==