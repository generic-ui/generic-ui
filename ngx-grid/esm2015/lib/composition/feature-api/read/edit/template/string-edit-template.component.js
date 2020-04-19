/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Override } from '../../../../../../common/cdk/decorators';
import { InputEditTemplateComponent } from './input-edit-template.component';
export class StringEditTemplateComponent extends InputEditTemplateComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super(fb);
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    focusField(inputElement) {
        if (this.focus) {
            inputElement.focus();
            inputElement.setSelectionRange(0, inputElement.value.length);
        }
    }
}
StringEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-string-edit',
                template: `

		<form [formGroup]="filterForm" >
			<input #input [formControlName]="filterFieldName" type="type" class="gui-input" />
		</form>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StringEditTemplateComponent.ctorParameters = () => [
    { type: FormBuilder }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StringEditTemplateComponent.prototype, "focusField", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC9lZGl0L3RlbXBsYXRlL3N0cmluZy1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWU3RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsMEJBQWtDOzs7O0lBRWxGLFlBQVksRUFBZTtRQUMxQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxZQUFpQjtRQUUzQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO0lBQ0YsQ0FBQzs7O1lBekJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7OztFQU1UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWxCUSxXQUFXOztBQTBCbkI7SUFEQyxRQUFROzs7OzZEQU9SIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cmluZy1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiID5cblx0XHRcdDxpbnB1dCAjaW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIiB0eXBlPVwidHlwZVwiIGNsYXNzPVwiZ3VpLWlucHV0XCIgLz5cblx0XHQ8L2Zvcm0+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8c3RyaW5nPiB7XG5cblx0Y29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoZmIpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGZvY3VzRmllbGQoaW5wdXRFbGVtZW50OiBhbnkpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmZvY3VzKSB7XG5cdFx0XHRpbnB1dEVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdGlucHV0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBpbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==