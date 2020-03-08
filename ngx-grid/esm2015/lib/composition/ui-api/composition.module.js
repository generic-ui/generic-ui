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
import { SanitizeModule } from '../../../common/cdk/sanitize/sanitize.module';
import { HermesModule } from '@generic-ui/hermes';
import { CompositionAggregateFactory } from '../domain/command/composition.aggregate-factory';
import { InMemoryCompositionAggregateRepository } from '../infrastructure/in-memory/command/in-memory.composition.aggregate-repository';
import { CreateCompositionCommandHandler } from '../domain/command/create-composition/create-composition.command-handler';
import { CompositionSetColumnEnabledCommandHandler } from '../domain/command/column/set-enabled/composition.set-column-enabled.command-handler';
import { SetColumnsCommandHandler } from '../domain/command/column/set-columns/set-columns.command-handler';
import { SetCompositionWidthCommandHandler } from '../domain/command/width/set-width/set-composition-width.command-handler';
import { CompositionMoveLeftColumnCommandHandler } from '../domain/command/column/move/left/composition.move-left-column.command-handler';
import { CompositionMoveRightColumnCommandHandler } from '../domain/command/column/move/right/composition.move-right-column.command-handler';
import { CompositionChangeSortStatusCommandHandler } from '../domain/command/column/sort/composition-change-sort-status.command-handler';
import { SetCompositionContainerWidthCommandHandler } from '../domain/command/width/set-container-width/set-composition-container-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from '../domain/command/width/resize-width/set-composition-resize-width.command-handler';
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
/** @type {?} */
export const compositionKey = 'CompositionAggregate';
export class CompositionModule {
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
                    FabricInputModule,
                    HermesModule.defineAggregate(compositionKey, CompositionAggregateFactory, InMemoryCompositionAggregateRepository, CreateCompositionCommandHandler, [
                        ...HermesModule.registerCommandHandler(SetColumnsCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionResizeWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionContainerWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionSetColumnEnabledCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionChangeSortStatusCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveLeftColumnCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveRightColumnCommandHandler, compositionKey),
                    ]),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUNOLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3hJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzFILE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ2hKLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzVILE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzFJLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQzdJLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDZGQUE2RixDQUFDO0FBQ3pKLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG1GQUFtRixDQUFDOztNQUd0SSxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3JCOztNQUVLLGtCQUFrQixHQUFHO0lBQzFCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBRXBCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDckI7O0FBRUQsTUFBTSxPQUFPLGNBQWMsR0FBRyxzQkFBc0I7QUFnRHBELE1BQU0sT0FBTyxpQkFBaUI7OztZQTlDN0IsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLG1CQUFtQjtvQkFFbkIsY0FBYztvQkFFZCxnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBRWpCLFlBQVksQ0FBQyxlQUFlLENBQzNCLGNBQWMsRUFDZCwyQkFBMkIsRUFDM0Isc0NBQXNDLEVBQ3RDLCtCQUErQixFQUUvQjt3QkFDQyxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLENBQUM7d0JBQ2hGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGlDQUFpQyxFQUFFLGNBQWMsQ0FBQzt3QkFDekYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsdUNBQXVDLEVBQUUsY0FBYyxDQUFDO3dCQUMvRixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQ0FBMEMsRUFBRSxjQUFjLENBQUM7d0JBQ2xHLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHlDQUF5QyxFQUFFLGNBQWMsQ0FBQzt3QkFDakcsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMseUNBQXlDLEVBQUUsY0FBYyxDQUFDO3dCQUNqRyxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx1Q0FBdUMsRUFBRSxjQUFjLENBQUM7d0JBQy9GLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdDQUF3QyxFQUFFLGNBQWMsQ0FBQztxQkFDaEcsQ0FDRDtpQkFDRDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxvQkFBb0I7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRTtvQkFDYixVQUFVO2lCQUNWO2dCQUNELE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWUsRUFBRTtvQkFDaEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtpQkFDcEI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcblx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQ2hpcENvbXBvbmVudCxcblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljSW5wdXRDb21wb25lbnQsXG5cdEZhYnJpY0lucHV0TW9kdWxlXG59IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZWRpdC90ZW1wbGF0ZS9udW1iZXItZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uUXVlcnlDb21wb25lbnQgfSBmcm9tICcuLi91aS9jb2x1bW4tcXVlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL3ZpZXcvZnVuY3Rpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgY29tcG9zaXRpb25Qcm92aWRlcnMgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTYW5pdGl6ZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlJztcbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWNvbXBvc2l0aW9uL2NyZWF0ZS1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb2x1bW5zQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC13aWR0aC9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLm1vdmUtcmlnaHQtY29sdW1uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0TnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRGdW5jdGlvblZpZXdDb21wb25lbnRcbl07XG5cbmV4cG9ydCBjb25zdCBjb21wb3NpdGlvbktleSA9ICdDb21wb3NpdGlvbkFnZ3JlZ2F0ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuXHRcdFNhbml0aXplTW9kdWxlLFxuXG5cdFx0RmFicmljQ2hpcE1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGUsXG5cblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0Y29tcG9zaXRpb25LZXksXG5cdFx0XHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsXG5cblx0XHRcdFtcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29sdW1uc0NvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRdXG5cdFx0KSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uY29tcG9zaXRpb25Qcm92aWRlcnNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRcdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNJbnB1dENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW9kdWxlIHtcblxufVxuIl19