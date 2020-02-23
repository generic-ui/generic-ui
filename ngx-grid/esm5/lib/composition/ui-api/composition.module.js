/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { ViewTemplatesComponent } from '../domain/read/view/view-templates.component';
import { NumberEditTemplateComponent } from '../domain/read/edit/template/number-edit-template.component';
import { StringEditTemplateComponent } from '../domain/read/edit/template/string-edit-template.component';
import { EditTemplatesComponent } from '../domain/read/edit/edit-templates.component';
import { BooleanEditTemplateComponent } from '../domain/read/edit/template/boolean-edit-template.component';
import { ColumnQueryComponent } from '../ui/column-query.component';
import { FunctionViewComponent } from '../domain/read/view/function-view.component';
import { compositionProviders } from './composition.providers';
import { SanitizeModule } from '../../../common/cdk/sanitize/sanitize.module';
/** @type {?} */
var components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent
];
/** @type {?} */
var exportDeclarations = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    ColumnQueryComponent,
    FabricChipModule,
    FabricCheckboxModule,
    FabricButtonModule,
    FabricInputModule,
    FunctionViewComponent
];
var CompositionModule = /** @class */ (function () {
    function CompositionModule() {
    }
    CompositionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        SanitizeModule,
                        FabricChipModule,
                        FabricCheckboxModule,
                        FabricButtonModule,
                        FabricInputModule
                    ],
                    providers: tslib_1.__spread(compositionProviders),
                    declarations: [
                        components
                    ],
                    exports: exportDeclarations,
                    entryComponents: [
                        ViewTemplatesComponent,
                        EditTemplatesComponent,
                        FabricChipComponent,
                        FabricCheckboxComponent,
                        FabricButtonComponent,
                        FabricInputComponent
                    ]
                },] }
    ];
    return CompositionModule;
}());
export { CompositionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztJQUd4RSxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3JCOztJQUVLLGtCQUFrQixHQUFHO0lBQzFCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBRXBCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDckI7QUFFRDtJQUFBO0lBOEJBLENBQUM7O2dCQTlCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUVuQixjQUFjO3dCQUVkLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjtxQkFDakI7b0JBQ0QsU0FBUyxtQkFDTCxvQkFBb0IsQ0FDdkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFVBQVU7cUJBQ1Y7b0JBQ0QsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZSxFQUFFO3dCQUNoQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUNwQjtpQkFDRDs7SUFHRCx3QkFBQztDQUFBLEFBOUJELElBOEJDO1NBRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuXHRGYWJyaWNCdXR0b25Db21wb25lbnQsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNJbnB1dENvbXBvbmVudCxcblx0RmFicmljSW5wdXRNb2R1bGVcbn0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC92aWV3L3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC9lZGl0L3RlbXBsYXRlL3N0cmluZy1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5RdWVyeUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL2NvbHVtbi1xdWVyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVuY3Rpb25WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvdmlldy9mdW5jdGlvbi12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb21wb3NpdGlvblByb3ZpZGVycyB9IGZyb20gJy4vY29tcG9zaXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IFNhbml0aXplTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGUnO1xuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0TnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRGdW5jdGlvblZpZXdDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuXHRcdFNhbml0aXplTW9kdWxlLFxuXG5cdFx0RmFicmljQ2hpcE1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uY29tcG9zaXRpb25Qcm92aWRlcnNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRcdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNJbnB1dENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW9kdWxlIHtcblxufVxuIl19