/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2FwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ04scUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzdILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzdILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQy9ILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUd6RCxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3JCOztJQUVLLGtCQUFrQixHQUFHO0lBQzFCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBRXBCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDckI7QUFFRDtJQUFBO0lBNEJBLENBQUM7O2dCQTVCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUVuQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7cUJBQ2pCO29CQUNELFNBQVMsbUJBQ0wsb0JBQW9CLENBQ3ZCO29CQUNELFlBQVksRUFBRTt3QkFDYixVQUFVO3FCQUNWO29CQUNELE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWUsRUFBRTt3QkFDaEIsc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDcEI7aUJBQ0Q7O0lBR0Qsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQUZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcblx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQ2hpcENvbXBvbmVudCxcblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljSW5wdXRDb21wb25lbnQsXG5cdEZhYnJpY0lucHV0TW9kdWxlXG59IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5RdWVyeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi1xdWVyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVuY3Rpb25WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L3ZpZXcvZnVuY3Rpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgY29tcG9zaXRpb25Qcm92aWRlcnMgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5cblxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0U3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHROdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXHRGdW5jdGlvblZpZXdDb21wb25lbnRcbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljSW5wdXRNb2R1bGUsXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG5cdFx0RmFicmljQ2hpcE1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uY29tcG9zaXRpb25Qcm92aWRlcnNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRcdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNJbnB1dENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW9kdWxlIHtcblxufVxuIl19