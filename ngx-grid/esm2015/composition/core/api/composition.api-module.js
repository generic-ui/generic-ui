import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
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
import { CompositionGroupArchive } from '../domain-read/group/composition-group.archive';
import { CompositionDomainCommandInvoker } from '../domain/compositon.domain-command-invoker';
import { CompositionDomainEventRepository } from '../domain/composition.domain-event-repository';
import { CompositionDomainWarehouse } from '../domain-read/composition.domain-warehouse';
import { ColumnAutoConfigurator } from './column/auto/column-auto.configurator';
import { DomainColumnAutoConfigurator } from '../domain/column/auto/domain.column-auto.configurator';
export class CompositionApiModule {
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
                    inMemoryCompositionReadModelProviders,
                    ColumnDefinitionFactory,
                    ViewTemplateRepository,
                    ViewTemplateFactory,
                    EditTemplateFactory,
                    EditTemplateRepository,
                    inMemoryCompositionProviders,
                    CompositionReadModelRootConverter,
                    CompositionGroupArchive,
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
                    },
                    {
                        provide: ColumnAutoConfigurator,
                        useClass: DomainColumnAutoConfigurator
                    }
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xKLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBd0RyRyxNQUFNLE9BQU8sb0JBQW9COzs7WUFyRGhDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixjQUFjLEVBQ2QsMkJBQTJCLEVBQzNCLHNDQUFzQyxFQUN0QywrQkFBK0IsRUFDL0I7d0JBQ0MsdUJBQXVCLENBQUMsZUFBZSxFQUFFO3FCQUN6QyxFQUFFO3dCQUNGLHVCQUF1QixDQUFDLG1CQUFtQixFQUFFO3FCQUM3QyxDQUNEO29CQUVELHVCQUF1QjtpQkFFdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHFDQUFxQztvQkFDckMsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBRXRCLDRCQUE0QjtvQkFFNUIsaUNBQWlDO29CQUVqQyx1QkFBdUI7b0JBRXZCO3dCQUNDLE9BQU8sRUFBRSx5QkFBeUI7d0JBQ2xDLFFBQVEsRUFBRSwrQkFBK0I7cUJBQ3pDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSwwQkFBMEI7cUJBQ3BDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSwwQkFBMEI7d0JBQ25DLFFBQVEsRUFBRSxnQ0FBZ0M7cUJBQzFDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFFBQVEsRUFBRSw0QkFBNEI7cUJBQ3RDO2lCQUNEO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGNvbXBvc2l0aW9uS2V5IH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmtleSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgaW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycywgaW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVycyB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25GYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIgfSBmcm9tICcuLi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4vY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZ3JvdXAvY29tcG9zaXRpb24tZ3JvdXAuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0b24uZG9tYWluLWNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5kb21haW4tZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2NvbXBvc2l0aW9uLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29sdW1uQXV0b0NvbmZpZ3VyYXRvciB9IGZyb20gJy4vY29sdW1uL2F1dG8vY29sdW1uLWF1dG8uY29uZmlndXJhdG9yJztcbmltcG9ydCB7IERvbWFpbkNvbHVtbkF1dG9Db25maWd1cmF0b3IgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL2F1dG8vZG9tYWluLmNvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRjb21wb3NpdGlvbktleSxcblx0XHRcdENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlcixcblx0XHRcdFtcblx0XHRcdFx0Q29tcG9zaXRpb25Eb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKClcblx0XHRcdF0sIFtcblx0XHRcdFx0Q29tcG9zaXRpb25Eb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpXG5cdFx0XHRdXG5cdFx0KSxcblxuXHRcdENvbXBvc2l0aW9uRG9tYWluTW9kdWxlXG5cblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0aW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVycyxcblx0XHRDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSxcblx0XHRWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRcdFZpZXdUZW1wbGF0ZUZhY3RvcnksXG5cdFx0RWRpdFRlbXBsYXRlRmFjdG9yeSxcblx0XHRFZGl0VGVtcGxhdGVSZXBvc2l0b3J5LFxuXG5cdFx0aW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycyxcblxuXHRcdENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlcixcblxuXHRcdENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlLFxuXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdHVzZUNsYXNzOiBDb21wb3NpdGlvbkRvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBDb21wb3NpdGlvbkRvbWFpbldhcmVob3VzZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25Eb21haW5FdmVudFJlcG9zaXRvcnlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IENvbHVtbkF1dG9Db25maWd1cmF0b3IsXG5cdFx0XHR1c2VDbGFzczogRG9tYWluQ29sdW1uQXV0b0NvbmZpZ3VyYXRvclxuXHRcdH1cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25BcGlNb2R1bGUgeyAvLyBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=