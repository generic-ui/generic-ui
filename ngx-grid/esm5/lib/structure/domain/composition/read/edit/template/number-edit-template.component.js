/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ViewEncapsulation, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
var NumberEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumberEditTemplateComponent, _super);
    function NumberEditTemplateComponent(fb) {
        return _super.call(this, fb) || this;
    }
    NumberEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-number-edit',
                    template: "\n\n\t\t<form [formGroup]=\"filterForm\" >\n\t\t\t<input #input [formControlName]=\"filterFieldName\" type=\"number\" class=\"gui-input\" />\n\t\t</form>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NumberEditTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return NumberEditTemplateComponent;
}(InputEditTemplateComponent));
export { NumberEditTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFVLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0U7SUFZaUQsdURBQWtDO0lBRWxGLHFDQUFZLEVBQWU7ZUFDMUIsa0JBQU0sRUFBRSxDQUFDO0lBQ1YsQ0FBQzs7Z0JBaEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsaUtBTVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFmUSxXQUFXOztJQXFCcEIsa0NBQUM7Q0FBQSxBQWpCRCxDQVlpRCwwQkFBMEIsR0FLMUU7U0FMWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbnVtYmVyLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCIgPlxuXHRcdFx0PGlucHV0ICNpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImd1aS1pbnB1dFwiIC8+XG5cdFx0PC9mb3JtPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50PG51bWJlcj4ge1xuXG5cdGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGZiKTtcblx0fVxufVxuIl19