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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvZmllbGQtc2VsZWN0b3IvZmllbGQtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25IO0lBQUE7UUF1QkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQUtwRCxDQUFDOzs7OztJQUhBLCtDQUFjOzs7O0lBQWQsVUFBZSxLQUFxQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkEzQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSx3T0FXVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7eUJBR0MsS0FBSztnQ0FHTCxNQUFNOztJQU1SLDZCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FYWSxzQkFBc0I7OztJQUVsQyx3Q0FDc0M7O0lBRXRDLCtDQUNtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWZpZWxkLXNlbGVjdG9yW2ZpZWxkc10nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0RmllbGQ6XG5cblx0XHQ8Z3VpLWRyb3Bkb3duPlxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIlxuXHRcdFx0XHRcdFx0XHQgICAoY2xpY2spPVwib25TZWxlY3RDaGFuZ2UoZmllbGQpXCI+XG5cdFx0XHRcdHt7ZmllbGQuZ2V0TmFtZSgpfX1cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC9ndWktZHJvcGRvd24+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRTZWxlY3RvckNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZmllbGRzOiBSZWFkb25seUFycmF5PEZpZWxkUmVhZE1vZGVsPjtcblxuXHRAT3V0cHV0KClcblx0ZmllbGRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmllbGRSZWFkTW9kZWw+KCk7XG5cblx0b25TZWxlY3RDaGFuZ2UoZmllbGQ6IEZpZWxkUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZFNlbGVjdGVkLmVtaXQoZmllbGQpO1xuXHR9XG59XG4iXX0=