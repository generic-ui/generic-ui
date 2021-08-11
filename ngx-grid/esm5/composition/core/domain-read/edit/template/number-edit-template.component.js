/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
var NumberEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumberEditTemplateComponent, _super);
    function NumberEditTemplateComponent(changeDetectorRef, elementRef, fb) {
        return _super.call(this, changeDetectorRef, elementRef, fb) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    NumberEditTemplateComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-number-edit';
    };
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
        { type: ElementRef },
        { type: FormBuilder }
    ]; };
    return NumberEditTemplateComponent;
}(InputEditTemplateComponent));
export { NumberEditTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdFO0lBWWlELHVEQUFrQztJQUVsRixxQ0FBWSxpQkFBb0MsRUFDN0MsVUFBc0IsRUFDdEIsRUFBZTtlQUNqQixrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRVMscURBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7O2dCQXRCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLCtKQU1UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBaEJpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFDakUsV0FBVzs7SUEyQnBCLGtDQUFDO0NBQUEsQUF2QkQsQ0FZaUQsMEJBQTBCLEdBVzFFO1NBWFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW51bWJlci1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiPlxuXHRcdFx0PGlucHV0ICNpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImd1aS1pbnB1dFwiLz5cblx0XHQ8L2Zvcm0+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8bnVtYmVyPiB7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRmYjogRm9ybUJ1aWxkZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZiwgZmIpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLW51bWJlci1lZGl0Jztcblx0fVxufVxuIl19