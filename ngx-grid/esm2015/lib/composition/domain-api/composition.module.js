/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { HermesModule } from '@generic-ui/hermes';
import { ViewTemplatesComponent } from './read/view/view-templates.component';
import { NumberEditTemplateComponent } from './read/edit/template/number-edit-template.component';
import { StringEditTemplateComponent } from './read/edit/template/string-edit-template.component';
import { EditTemplatesComponent } from './read/edit/edit-templates.component';
import { BooleanEditTemplateComponent } from './read/edit/template/boolean-edit-template.component';
import { ColumnQueryComponent } from '../feature/column-query.component';
import { FunctionViewComponent } from './read/view/function/function-view.component';
import { compositionProviders } from './composition.providers';
import { SanitizeModule } from '../../../common/cdk/sanitize/sanitize.module';
import { CompositionAggregateFactory } from '../domain/composition.aggregate-factory';
import { InMemoryCompositionAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.composition.aggregate-repository';
import { CreateCompositionCommandHandler } from '../domain/create/create-composition.command-handler';
import { CompositionSetColumnEnabledCommandHandler } from '../domain/column/set-enabled/composition.set-column-enabled.command-handler';
import { SetColumnsCommandHandler } from '../domain/column/set-columns/set-columns.command-handler';
import { SetCompositionWidthCommandHandler } from '../domain/width/set-width/set-composition-width.command-handler';
import { CompositionMoveLeftColumnCommandHandler } from '../domain/column/move/left/composition.move-left-column.command-handler';
import { CompositionMoveRightColumnCommandHandler } from '../domain/column/move/right/composition.move-right-column.command-handler';
import { CompositionChangeSortStatusCommandHandler } from '../domain/column/sort/composition-change-sort-status.command-handler';
import { SetCompositionContainerWidthCommandHandler } from '../domain/width/set-container-width/set-composition-container-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from '../domain/width/resize-width/set-composition-resize-width.command-handler';
import { DateEditTemplateComponent } from './read/edit/template/date-edit-template.component';
import { BarViewComponent } from './read/view/bar/bar-view.component';
import { PercentageViewComponent } from './read/view/percentage/percentage-view.component';
import { TextViewComponent } from './read/view/text/text-view.component';
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
    PercentageViewComponent,
    TextViewComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7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VTtpQkFDVjtnQkFDRCxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixlQUFlLEVBQUU7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3BCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG5cdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUsXG5cdEZhYnJpY0lucHV0Q29tcG9uZW50LFxuXHRGYWJyaWNJbnB1dE1vZHVsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFkL2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5RdWVyeUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvY29sdW1uLXF1ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvdmlldy9mdW5jdGlvbi9mdW5jdGlvbi12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb21wb3NpdGlvblByb3ZpZGVycyB9IGZyb20gJy4vY29tcG9zaXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IFNhbml0aXplTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb2x1bW5zQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vd2lkdGgvc2V0LXdpZHRoL3NldC1jb21wb3NpdGlvbi13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5tb3ZlLXJpZ2h0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vd2lkdGgvcmVzaXplLXdpZHRoL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvZWRpdC90ZW1wbGF0ZS9kYXRlLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEJhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9yZWFkL3ZpZXcvcGVyY2VudGFnZS9wZXJjZW50YWdlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9yZWFkL3ZpZXcvdGV4dC90ZXh0LXZpZXcuY29tcG9uZW50JztcblxuXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Qm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0RGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50LFxuXHRCYXJWaWV3Q29tcG9uZW50LFxuXHRQZXJjZW50YWdlVmlld0NvbXBvbmVudCxcblx0VGV4dFZpZXdDb21wb25lbnRcbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljSW5wdXRNb2R1bGUsXG5cblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50LFxuXHRCYXJWaWV3Q29tcG9uZW50LFxuXHRQZXJjZW50YWdlVmlld0NvbXBvbmVudFxuXTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2l0aW9uS2V5ID0gJ0NvbXBvc2l0aW9uQWdncmVnYXRlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG5cdFx0U2FuaXRpemVNb2R1bGUsXG5cblx0XHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRcdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0XHRGYWJyaWNJbnB1dE1vZHVsZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyTW9kdWxlLFxuXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdGNvbXBvc2l0aW9uS2V5LFxuXHRcdFx0Q29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyLFxuXG5cdFx0XHRbXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbHVtbnNDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpXG5cdFx0XHRdXG5cdFx0KVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5jb21wb3NpdGlvblByb3ZpZGVyc1xuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRjb21wb25lbnRzXG5cdF0sXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdFx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdFx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRcdEZhYnJpY0lucHV0Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Nb2R1bGUge1xuXG59XG4iXX0=