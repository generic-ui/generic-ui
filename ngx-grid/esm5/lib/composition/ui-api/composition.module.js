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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBR3pELFVBQVUsR0FBRztJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDckI7O0lBRUssa0JBQWtCLEdBQUc7SUFDMUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFFcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtDQUNyQjtBQUVEO0lBQUE7SUE0QkEsQ0FBQzs7Z0JBNUJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixtQkFBbUI7d0JBRW5CLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjtxQkFDakI7b0JBQ0QsU0FBUyxtQkFDTCxvQkFBb0IsQ0FDdkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFVBQVU7cUJBQ1Y7b0JBQ0QsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZSxFQUFFO3dCQUNoQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUNwQjtpQkFDRDs7SUFHRCx3QkFBQztDQUFBLEFBNUJELElBNEJDO1NBRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuXHRGYWJyaWNCdXR0b25Db21wb25lbnQsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNJbnB1dENvbXBvbmVudCxcblx0RmFicmljSW5wdXRNb2R1bGVcbn0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC92aWV3L3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC9lZGl0L3RlbXBsYXRlL3N0cmluZy1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5RdWVyeUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL2NvbHVtbi1xdWVyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVuY3Rpb25WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvdmlldy9mdW5jdGlvbi12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb21wb3NpdGlvblByb3ZpZGVycyB9IGZyb20gJy4vY29tcG9zaXRpb24ucHJvdmlkZXJzJztcblxuXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Qm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudFxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNJbnB1dE1vZHVsZSxcblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cblx0XHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRcdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0XHRGYWJyaWNJbnB1dE1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5jb21wb3NpdGlvblByb3ZpZGVyc1xuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRjb21wb25lbnRzXG5cdF0sXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdFx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdFx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRcdEZhYnJpY0lucHV0Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Nb2R1bGUge1xuXG59XG4iXX0=