/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdFO0lBWWlELHVEQUFrQztJQUVsRixxQ0FBWSxFQUFlO2VBQzFCLGtCQUFNLEVBQUUsQ0FBQztJQUNWLENBQUM7O2dCQWhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGlLQU1UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZlEsV0FBVzs7SUFxQnBCLGtDQUFDO0NBQUEsQUFqQkQsQ0FZaUQsMEJBQTBCLEdBSzFFO1NBTFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbnVtYmVyLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCIgPlxuXHRcdFx0PGlucHV0ICNpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImd1aS1pbnB1dFwiIC8+XG5cdFx0PC9mb3JtPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50PG51bWJlcj4ge1xuXG5cdGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGZiKTtcblx0fVxufVxuIl19