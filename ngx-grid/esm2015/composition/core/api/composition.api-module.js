/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule, HermesModule } from '@generic-ui/hermes';
import { compositionKey } from './composition.api';
import { CompositionAggregateFactory } from '../domain/composition.aggregate-factory';
import { InMemoryCompositionAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.composition.aggregate-repository';
import { CreateCompositionCommandHandler } from '../domain/create/create-composition.command-handler';
import { CompositionDomainModule } from '../domain/composition.domain-module';
import { inMemoryCompositionProviders, inMemoryCompositionReadModelProviders } from '../infrastructure/in-memory/in-memory.composition.providers';
import { ColumnDefinitionFactory } from '../domain-read/definition/column-definition.factory';
import { ViewTemplateRepository } from '../domain-read/view/view-template.repository';
import { ViewTemplateFactory } from '../domain-read/view/view-template.factory';
import { EditTemplateFactory } from '../domain-read/edit/edit-template.factory';
import { EditTemplateRepository } from '../domain-read/edit/edit-template.repository';
import { CompositionReadModelRootConverter } from '../domain-read/composition.read-model-root-converter';
import { CompositionCommandInvoker } from './composition.command-invoker';
import { CompositionWarehouse } from './composition.warehouse';
import { CompositionEventRepository } from './composition.event-repository';
import { CompositionGroupRepository } from '../domain-read/group/composition.group.repository';
export class CompositionApiModule extends ApiModule {
}
CompositionApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HermesModule.defineAggregate(compositionKey, CompositionAggregateFactory, InMemoryCompositionAggregateRepository, CreateCompositionCommandHandler, [
                        CompositionDomainModule.commandHandlers()
                    ], [
                        CompositionDomainModule.domainEventHandlers()
                    ]),
                    CompositionDomainModule
                ],
                providers: [
                    ...inMemoryCompositionReadModelProviders,
                    ColumnDefinitionFactory,
                    ViewTemplateRepository,
                    ViewTemplateFactory,
                    EditTemplateFactory,
                    EditTemplateRepository,
                    ...inMemoryCompositionProviders,
                    CompositionReadModelRootConverter,
                    CompositionGroupRepository,
                    CompositionCommandInvoker,
                    CompositionWarehouse,
                    CompositionEventRepository
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDdkksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUNOLDRCQUE0QixFQUM1QixxQ0FBcUMsRUFDckMsTUFBTSw2REFBNkQsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQTJDL0YsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7OztZQXhDbEQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUVaLFlBQVksQ0FBQyxlQUFlLENBQzNCLGNBQWMsRUFDZCwyQkFBMkIsRUFDM0Isc0NBQXNDLEVBQ3RDLCtCQUErQixFQUMvQjt3QkFDQyx1QkFBdUIsQ0FBQyxlQUFlLEVBQUU7cUJBQ3pDLEVBQUU7d0JBQ0YsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUU7cUJBQzdDLENBQ0Q7b0JBRUQsdUJBQXVCO2lCQUV2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxxQ0FBcUM7b0JBQ3hDLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUV0QixHQUFHLDRCQUE0QjtvQkFFL0IsaUNBQWlDO29CQUVqQywwQkFBMEI7b0JBRTFCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQiwwQkFBMEI7aUJBQzFCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgY29tcG9zaXRpb25LZXkgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmFwaSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHtcblx0aW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycyxcblx0aW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVyc1xufSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLnJlcG9zaXRvcnknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0Y29tcG9zaXRpb25LZXksXG5cdFx0XHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdENvbXBvc2l0aW9uRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpXG5cdFx0XHRdLCBbXG5cdFx0XHRcdENvbXBvc2l0aW9uRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKVxuXHRcdFx0XVxuXHRcdCksXG5cblx0XHRDb21wb3NpdGlvbkRvbWFpbk1vZHVsZVxuXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnMsXG5cdFx0Q29sdW1uRGVmaW5pdGlvbkZhY3RvcnksXG5cdFx0Vmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRWaWV3VGVtcGxhdGVGYWN0b3J5LFxuXHRcdEVkaXRUZW1wbGF0ZUZhY3RvcnksXG5cdFx0RWRpdFRlbXBsYXRlUmVwb3NpdG9yeSxcblxuXHRcdC4uLmluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsXG5cblx0XHRDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIsXG5cblx0XHRDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSxcblxuXHRcdENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0Q29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0Q29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25BcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19