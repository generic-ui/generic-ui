/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputEditTemplateComponent } from './input-edit-template.component';
export class NumberEditTemplateComponent extends InputEditTemplateComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        super(fb);
    }
}
NumberEditTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-number-edit',
                template: `

		<form [formGroup]="filterForm" >
			<input #input [formControlName]="filterFieldName" type="number" class="gui-input" />
		</form>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NumberEditTemplateComponent.ctorParameters = () => [
    { type: FormBuilder }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWU3RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsMEJBQWtDOzs7O0lBRWxGLFlBQVksRUFBZTtRQUMxQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUFoQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBZlEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW51bWJlci1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiID5cblx0XHRcdDxpbnB1dCAjaW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJndWktaW5wdXRcIiAvPlxuXHRcdDwvZm9ybT5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudDxudW1iZXI+IHtcblxuXHRjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcblx0XHRzdXBlcihmYik7XG5cdH1cbn1cbiJdfQ==