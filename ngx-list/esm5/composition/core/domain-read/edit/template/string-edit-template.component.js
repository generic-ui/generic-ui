/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Override } from '../../../../../common/cdk/decorators';
import { InputEditTemplateComponent } from './input-edit-template.component';
var StringEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StringEditTemplateComponent, _super);
    function StringEditTemplateComponent(changeDetectorRef, elementRef, fb) {
        return _super.call(this, changeDetectorRef, elementRef, fb) || this;
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    StringEditTemplateComponent.prototype.focusField = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        if (this.focus) {
            inputElement.focus();
            inputElement.setSelectionRange(0, inputElement.value.length);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    StringEditTemplateComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-string-edit';
    };
    StringEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-string-edit',
                    template: "\n\n\t\t<form [formGroup]=\"filterForm\">\n\t\t\t<input #input [formControlName]=\"filterFieldName\" type=\"type\" class=\"gui-input\"/>\n\t\t</form>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StringEditTemplateComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FormBuilder }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], StringEditTemplateComponent.prototype, "focusField", null);
    return StringEditTemplateComponent;
}(InputEditTemplateComponent));
export { StringEditTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvdGVtcGxhdGUvc3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc3RTtJQVlpRCx1REFBa0M7SUFFbEYscUNBQVksaUJBQW9DLEVBQzdDLFVBQXNCLEVBQ3RCLEVBQWU7ZUFDakIsa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUdELGdEQUFVOzs7O0lBQVYsVUFBVyxZQUFpQjtRQUUzQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO0lBQ0YsQ0FBQzs7Ozs7SUFFUyxxREFBZTs7OztJQUF6QjtRQUNDLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQzs7Z0JBL0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsNkpBTVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFuQmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQUNqRSxXQUFXOztJQTRCbkI7UUFEQyxRQUFROzs7O2lFQU9SO0lBS0Ysa0NBQUM7Q0FBQSxBQWhDRCxDQVlpRCwwQkFBMEIsR0FvQjFFO1NBcEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RyaW5nLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG5cdFx0XHQ8aW5wdXQgI2lucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmlsdGVyRmllbGROYW1lXCIgdHlwZT1cInR5cGVcIiBjbGFzcz1cImd1aS1pbnB1dFwiLz5cblx0XHQ8L2Zvcm0+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8c3RyaW5nPiB7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRmYjogRm9ybUJ1aWxkZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZiwgZmIpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGZvY3VzRmllbGQoaW5wdXRFbGVtZW50OiBhbnkpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmZvY3VzKSB7XG5cdFx0XHRpbnB1dEVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdGlucHV0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBpbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RyaW5nLWVkaXQnO1xuXHR9XG59XG4iXX0=