/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ViewEncapsulation, Component } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWU3RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsMEJBQWtDOzs7O0lBRWxGLFlBQVksRUFBZTtRQUMxQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUFoQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0VBTVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBZlEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1udW1iZXItZWRpdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Zm9ybSBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIiA+XG5cdFx0XHQ8aW5wdXQgI2lucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmlsdGVyRmllbGROYW1lXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZ3VpLWlucHV0XCIgLz5cblx0XHQ8L2Zvcm0+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRFZGl0VGVtcGxhdGVDb21wb25lbnQ8bnVtYmVyPiB7XG5cblx0Y29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoZmIpO1xuXHR9XG59XG4iXX0=