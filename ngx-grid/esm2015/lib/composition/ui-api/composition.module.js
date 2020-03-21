/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricInputComponent, FabricInputModule, FabricDatePickerModule } from '@generic-ui/fabric';
import { HermesModule } from '@generic-ui/hermes';
import { ViewTemplatesComponent } from '../domain/read/view/view-templates.component';
import { NumberEditTemplateComponent } from '../domain/read/edit/template/number-edit-template.component';
import { StringEditTemplateComponent } from '../domain/read/edit/template/string-edit-template.component';
import { EditTemplatesComponent } from '../domain/read/edit/edit-templates.component';
import { BooleanEditTemplateComponent } from '../domain/read/edit/template/boolean-edit-template.component';
import { ColumnQueryComponent } from '../ui/column-query.component';
import { FunctionViewComponent } from '../domain/read/view/function/function-view.component';
import { compositionProviders } from './composition.providers';
import { SanitizeModule } from '../../../common/cdk/sanitize/sanitize.module';
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
import { DateEditTemplateComponent } from '../domain/read/edit/template/date-edit-template.component';
import { BarViewComponent } from '../domain/read/view/bar/bar-view.component';
import { PercentageViewComponent } from '../domain/read/view/percentage/percentage-view.component';
/** @type {?} */
const components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    DateEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent
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
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent
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
                    FabricDatePickerModule,
                    HermesModule.defineAggregate(compositionKey, CompositionAggregateFactory, InMemoryCompositionAggregateRepository, CreateCompositionCommandHandler, [
                        ...HermesModule.registerCommandHandler(SetColumnsCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionResizeWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionContainerWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionSetColumnEnabledCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionChangeSortStatusCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveLeftColumnCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveRightColumnCommandHandler, compositionKey)
                    ])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUNOLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5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b0JBQ3RCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNwQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuXHRGYWJyaWNCdXR0b25Db21wb25lbnQsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNJbnB1dENvbXBvbmVudCxcblx0RmFicmljSW5wdXRNb2R1bGUsXG5cdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGVcbn0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2VkaXQvdGVtcGxhdGUvc3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvZWRpdC90ZW1wbGF0ZS9ib29sZWFuLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vdWkvY29sdW1uLXF1ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9kb21haW4vcmVhZC92aWV3L2Z1bmN0aW9uL2Z1bmN0aW9uLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IGNvbXBvc2l0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvY3JlYXRlLWNvbXBvc2l0aW9uL2NyZWF0ZS1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb2x1bW5zQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL3dpZHRoL3NldC13aWR0aC9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLm1vdmUtcmlnaHQtY29sdW1uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbW1hbmQvd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29tbWFuZC93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RvbWFpbi9yZWFkL2VkaXQvdGVtcGxhdGUvZGF0ZS1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZG9tYWluL3JlYWQvdmlldy9wZXJjZW50YWdlL3BlcmNlbnRhZ2Utdmlldy5jb21wb25lbnQnO1xuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0TnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHREYXRlRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblxuXHRGdW5jdGlvblZpZXdDb21wb25lbnQsXG5cdEJhclZpZXdDb21wb25lbnQsXG5cdFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0lucHV0TW9kdWxlLFxuXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudCxcblx0QmFyVmlld0NvbXBvbmVudCxcblx0UGVyY2VudGFnZVZpZXdDb21wb25lbnRcbl07XG5cbmV4cG9ydCBjb25zdCBjb21wb3NpdGlvbktleSA9ICdDb21wb3NpdGlvbkFnZ3JlZ2F0ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuXHRcdFNhbml0aXplTW9kdWxlLFxuXG5cdFx0RmFicmljQ2hpcE1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGUsXG5cdFx0RmFicmljRGF0ZVBpY2tlck1vZHVsZSxcblxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRjb21wb3NpdGlvbktleSxcblx0XHRcdENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlcixcblxuXHRcdFx0W1xuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb2x1bW5zQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENvbXBvc2l0aW9uTW92ZVJpZ2h0Q29sdW1uQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KVxuXHRcdFx0XVxuXHRcdClcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uY29tcG9zaXRpb25Qcm92aWRlcnNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRcdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNJbnB1dENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uTW9kdWxlIHtcblxufVxuIl19