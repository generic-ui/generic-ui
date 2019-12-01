/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { ViewTemplatesComponent } from '../../../domain/composition/query/view/view-templates.component';
import { NumberEditTemplateComponent } from '../../../domain/composition/query/edit/template/number-edit-template.component';
import { StringEditTemplateComponent } from '../../../domain/composition/query/edit/template/string-edit-template.component';
import { EditTemplatesComponent } from '../../../domain/composition/query/edit/edit-templates.component';
import { BooleanEditTemplateComponent } from '../../../domain/composition/query/edit/template/boolean-edit-template.component';
import { ColumnQueryComponent } from '../../composition/column-query.component';
import { FunctionViewComponent } from '../../../domain/composition/query/view/function-view.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2FwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDekcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDN0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDN0gsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDL0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O01BR3pELFVBQVUsR0FBRztJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDckI7O01BRUssa0JBQWtCLEdBQUc7SUFDMUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFFcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtDQUNyQjtBQTRCRCxNQUFNLE9BQU8saUJBQWlCOzs7WUExQjdCLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixtQkFBbUI7b0JBRW5CLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcsb0JBQW9CO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsVUFBVTtpQkFDVjtnQkFDRCxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixlQUFlLEVBQUU7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3BCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG5cdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0lucHV0Q29tcG9uZW50LFxuXHRGYWJyaWNJbnB1dE1vZHVsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS92aWV3L3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZWRpdC90ZW1wbGF0ZS9udW1iZXItZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2VkaXQvdGVtcGxhdGUvc3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uUXVlcnlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9jb2x1bW4tcXVlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS92aWV3L2Z1bmN0aW9uLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IGNvbXBvc2l0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5wcm92aWRlcnMnO1xuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0TnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRGdW5jdGlvblZpZXdDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuXHRcdEZhYnJpY0NoaXBNb2R1bGUsXG5cdFx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRcdEZhYnJpY0lucHV0TW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmNvbXBvc2l0aW9uUHJvdmlkZXJzXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdGNvbXBvbmVudHNcblx0XSxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RmFicmljQ2hpcENvbXBvbmVudCxcblx0XHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0XHRGYWJyaWNCdXR0b25Db21wb25lbnQsXG5cdFx0RmFicmljSW5wdXRDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbk1vZHVsZSB7XG5cbn1cbiJdfQ==