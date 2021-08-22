/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule, HermesModule } from '@generic-ui/hermes';
import { compositionKey } from '../domain/composition.key';
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
import { CompositionDomainCommandInvoker } from '../domain/compositon.domain-command-invoker';
import { CompositionDomainEventRepository } from '../domain/composition.domain-event-repository';
import { CompositionDomainWarehouse } from '../domain-read/composition.domain-warehouse';
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
                    {
                        provide: CompositionCommandInvoker,
                        useClass: CompositionDomainCommandInvoker
                    },
                    {
                        provide: CompositionWarehouse,
                        useClass: CompositionDomainWarehouse
                    },
                    {
                        provide: CompositionEventRepository,
                        useClass: CompositionDomainEventRepository
                    }
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDdkksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEosT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFvRHpGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxTQUFTOzs7WUFqRGxELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixjQUFjLEVBQ2QsMkJBQTJCLEVBQzNCLHNDQUFzQyxFQUN0QywrQkFBK0IsRUFDL0I7d0JBQ0MsdUJBQXVCLENBQUMsZUFBZSxFQUFFO3FCQUN6QyxFQUFFO3dCQUNGLHVCQUF1QixDQUFDLG1CQUFtQixFQUFFO3FCQUM3QyxDQUNEO29CQUVELHVCQUF1QjtpQkFFdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcscUNBQXFDO29CQUN4Qyx1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFFdEIsR0FBRyw0QkFBNEI7b0JBRS9CLGlDQUFpQztvQkFFakMsMEJBQTBCO29CQUUxQjt3QkFDQyxPQUFPLEVBQUUseUJBQXlCO3dCQUNsQyxRQUFRLEVBQUUsK0JBQStCO3FCQUN6QztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUUsMEJBQTBCO3FCQUNwQztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsMEJBQTBCO3dCQUNuQyxRQUFRLEVBQUUsZ0NBQWdDO3FCQUMxQztpQkFDRDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGNvbXBvc2l0aW9uS2V5IH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmtleSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgaW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycywgaW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVycyB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25GYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIgfSBmcm9tICcuLi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4vY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0b24uZG9tYWluLWNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5kb21haW4tZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2NvbXBvc2l0aW9uLmRvbWFpbi13YXJlaG91c2UnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0Y29tcG9zaXRpb25LZXksXG5cdFx0XHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdENvbXBvc2l0aW9uRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpXG5cdFx0XHRdLCBbXG5cdFx0XHRcdENvbXBvc2l0aW9uRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKVxuXHRcdFx0XVxuXHRcdCksXG5cblx0XHRDb21wb3NpdGlvbkRvbWFpbk1vZHVsZVxuXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnMsXG5cdFx0Q29sdW1uRGVmaW5pdGlvbkZhY3RvcnksXG5cdFx0Vmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRWaWV3VGVtcGxhdGVGYWN0b3J5LFxuXHRcdEVkaXRUZW1wbGF0ZUZhY3RvcnksXG5cdFx0RWRpdFRlbXBsYXRlUmVwb3NpdG9yeSxcblxuXHRcdC4uLmluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsXG5cblx0XHRDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIsXG5cblx0XHRDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSxcblxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlclxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25Eb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=