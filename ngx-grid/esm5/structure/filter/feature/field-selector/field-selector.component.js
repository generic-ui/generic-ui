/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var FieldSelectorComponent = /** @class */ (function () {
    function FieldSelectorComponent() {
        this.fieldSelected = new EventEmitter();
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
    FieldSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-field-selector[fields]',
                    template: "\n\n\t\tField:\n\n\t\t<gui-dropdown>\n\t\t\t<gui-dropdown-item *ngFor=\"let field of fields\"\n\t\t\t\t\t\t\t   (click)=\"onSelectChange(field)\">\n\t\t\t\t{{field.getName()}}\n\t\t\t</gui-dropdown-item>\n\t\t</gui-dropdown>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    FieldSelectorComponent.propDecorators = {
        fields: [{ type: Input }],
        fieldSelected: [{ type: Output }]
    };
    return FieldSelectorComponent;
}());
export { FieldSelectorComponent };
if (false) {
    /** @type {?} */
    FieldSelectorComponent.prototype.fields;
    /** @type {?} */
    FieldSelectorComponent.prototype.fieldSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25IO0lBQUE7UUF1QkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQUtwRCxDQUFDOzs7OztJQUhBLCtDQUFjOzs7O0lBQWQsVUFBZSxLQUFxQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkEzQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSx3T0FXVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7eUJBR0MsS0FBSztnQ0FHTCxNQUFNOztJQU1SLDZCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FYWSxzQkFBc0I7OztJQUVsQyx3Q0FDc0M7O0lBRXRDLCtDQUNtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluLWFwaS9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZmllbGQtc2VsZWN0b3JbZmllbGRzXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHRGaWVsZDpcblxuXHRcdDxndWktZHJvcGRvd24+XG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiXG5cdFx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJvblNlbGVjdENoYW5nZShmaWVsZClcIj5cblx0XHRcdFx0e3tmaWVsZC5nZXROYW1lKCl9fVxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZFNlbGVjdG9yQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IFJlYWRvbmx5QXJyYXk8RmllbGRSZWFkTW9kZWw+O1xuXG5cdEBPdXRwdXQoKVxuXHRmaWVsZFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWVsZFJlYWRNb2RlbD4oKTtcblxuXHRvblNlbGVjdENoYW5nZShmaWVsZDogRmllbGRSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkU2VsZWN0ZWQuZW1pdChmaWVsZCk7XG5cdH1cbn1cbiJdfQ==