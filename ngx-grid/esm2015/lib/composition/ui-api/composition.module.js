/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
const components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent
];
/** @type {?} */
const exportDeclarations = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    ColumnQueryComponent,
    FabricChipModule,
    FabricCheckboxModule,
    FabricButtonModule,
    FabricInputModule,
    FunctionViewComponent
];
export class CompositionModule {
}
CompositionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FabricChipModule,
                    FabricCheckboxModule,
                    FabricButtonModule,
                    FabricInputModule
                ],
                providers: [
                    ...compositionProviders
                ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUNOLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFHekQsVUFBVSxHQUFHO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUNyQjs7TUFFSyxrQkFBa0IsR0FBRztJQUMxQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUVwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0NBQ3JCO0FBNEJELE1BQU0sT0FBTyxpQkFBaUI7OztZQTFCN0IsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLG1CQUFtQjtvQkFFbkIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxvQkFBb0I7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRTtvQkFDYixVQUFVO2lCQUNWO2dCQUNELE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWUsRUFBRTtvQkFDaEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtpQkFDcEI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcblx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQ2hpcENvbXBvbmVudCxcblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljSW5wdXRDb21wb25lbnQsXG5cdEZhYnJpY0lucHV0TW9kdWxlXG59IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZWRpdC90ZW1wbGF0ZS9udW1iZXItZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uUXVlcnlDb21wb25lbnQgfSBmcm9tICcuLi91aS9jb2x1bW4tcXVlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL3ZpZXcvZnVuY3Rpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgY29tcG9zaXRpb25Qcm92aWRlcnMgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5cblxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0U3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHROdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXHRGdW5jdGlvblZpZXdDb21wb25lbnRcbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljSW5wdXRNb2R1bGUsXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG5cdFx0RmFicmljQ2hpcE1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uY29tcG9zaXRpb25Qcm92aWRlcnNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRcdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNJbnB1dENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW9kdWxlIHtcblxufVxuIl19