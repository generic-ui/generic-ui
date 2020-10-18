/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
var NumberEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumberEditTemplateComponent, _super);
    function NumberEditTemplateComponent(changeDetectorRef, fb) {
        return _super.call(this, changeDetectorRef, fb) || this;
    }
    NumberEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-number-edit',
                    template: "\n\n\t\t<form [formGroup]=\"filterForm\">\n\t\t\t<input #input [formControlName]=\"filterFieldName\" type=\"number\" class=\"gui-input\"/>\n\t\t</form>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NumberEditTemplateComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FormBuilder }
    ]; };
    return NumberEditTemplateComponent;
}(InputEditTemplateComponent));
export { NumberEditTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0U7SUFZaUQsdURBQWtDO0lBRWxGLHFDQUFZLGlCQUFvQyxFQUM3QyxFQUFlO2VBQ2pCLGtCQUFNLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkFqQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwrSkFNVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQWhCaUMsaUJBQWlCO2dCQUMxQyxXQUFXOztJQXNCcEIsa0NBQUM7Q0FBQSxBQWxCRCxDQVlpRCwwQkFBMEIsR0FNMUU7U0FOWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbnVtYmVyLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG5cdFx0XHQ8aW5wdXQgI2lucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmlsdGVyRmllbGROYW1lXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZ3VpLWlucHV0XCIvPlxuXHRcdDwvZm9ybT5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudDxudW1iZXI+IHtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGZiOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBmYik7XG5cdH1cbn1cbiJdfQ==