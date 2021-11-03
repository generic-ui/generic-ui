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
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class CompositionApiModule {
}
CompositionApiModule.ɵfac = function CompositionApiModule_Factory(t) { return new (t || CompositionApiModule)(); };
CompositionApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CompositionApiModule });
CompositionApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
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
    ], imports: [[
            CommonModule,
            HermesModule.defineAggregate(compositionKey, CompositionAggregateFactory, InMemoryCompositionAggregateRepository, CreateCompositionCommandHandler, [
                CompositionDomainModule.commandHandlers()
            ], [
                CompositionDomainModule.domainEventHandlers()
            ]),
            CompositionDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositionApiModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CompositionApiModule, { imports: [CommonModule, i1.HermesDomainModule, CompositionDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xKLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOzs7QUF3RHJHLE1BQU0sT0FBTyxvQkFBb0I7O3dGQUFwQixvQkFBb0I7c0VBQXBCLG9CQUFvQjsyRUFsQ3JCO1FBQ1YscUNBQXFDO1FBQ3JDLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFFdEIsNEJBQTRCO1FBRTVCLGlDQUFpQztRQUVqQyx1QkFBdUI7UUFFdkI7WUFDQyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLFFBQVEsRUFBRSwrQkFBK0I7U0FDekM7UUFDRDtZQUNDLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsUUFBUSxFQUFFLDBCQUEwQjtTQUNwQztRQUNEO1lBQ0MsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxRQUFRLEVBQUUsZ0NBQWdDO1NBQzFDO1FBQ0Q7WUFDQyxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFFBQVEsRUFBRSw0QkFBNEI7U0FDdEM7S0FDRCxZQWhEUTtZQUNSLFlBQVk7WUFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixjQUFjLEVBQ2QsMkJBQTJCLEVBQzNCLHNDQUFzQyxFQUN0QywrQkFBK0IsRUFDL0I7Z0JBQ0MsdUJBQXVCLENBQUMsZUFBZSxFQUFFO2FBQ3pDLEVBQUU7Z0JBQ0YsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUU7YUFDN0MsQ0FDRDtZQUVELHVCQUF1QjtTQUV2Qjt1RkFtQ1csb0JBQW9CO2NBckRoQyxRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBRVosWUFBWSxDQUFDLGVBQWUsQ0FDM0IsY0FBYyxFQUNkLDJCQUEyQixFQUMzQixzQ0FBc0MsRUFDdEMsK0JBQStCLEVBQy9CO3dCQUNDLHVCQUF1QixDQUFDLGVBQWUsRUFBRTtxQkFDekMsRUFBRTt3QkFDRix1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRTtxQkFDN0MsQ0FDRDtvQkFFRCx1QkFBdUI7aUJBRXZCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixxQ0FBcUM7b0JBQ3JDLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUV0Qiw0QkFBNEI7b0JBRTVCLGlDQUFpQztvQkFFakMsdUJBQXVCO29CQUV2Qjt3QkFDQyxPQUFPLEVBQUUseUJBQXlCO3dCQUNsQyxRQUFRLEVBQUUsK0JBQStCO3FCQUN6QztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUUsMEJBQTBCO3FCQUNwQztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsMEJBQTBCO3dCQUNuQyxRQUFRLEVBQUUsZ0NBQWdDO3FCQUMxQztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsc0JBQXNCO3dCQUMvQixRQUFRLEVBQUUsNEJBQTRCO3FCQUN0QztpQkFDRDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWDs7d0ZBQ1ksb0JBQW9CLGNBbkQvQixZQUFZLHlCQWNaLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBjb21wb3NpdGlvbktleSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5rZXknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IGluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsIGluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnMgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLWdyb3VwLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdG9uLmRvbWFpbi1jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uZG9tYWluLWV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IENvbHVtbkF1dG9Db25maWd1cmF0b3IgfSBmcm9tICcuL2NvbHVtbi9hdXRvL2NvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgeyBEb21haW5Db2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9hdXRvL2RvbWFpbi5jb2x1bW4tYXV0by5jb25maWd1cmF0b3InO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0Y29tcG9zaXRpb25LZXksXG5cdFx0XHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZUNvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdENvbXBvc2l0aW9uRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpXG5cdFx0XHRdLCBbXG5cdFx0XHRcdENvbXBvc2l0aW9uRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKVxuXHRcdFx0XVxuXHRcdCksXG5cblx0XHRDb21wb3NpdGlvbkRvbWFpbk1vZHVsZVxuXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdGluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnMsXG5cdFx0Q29sdW1uRGVmaW5pdGlvbkZhY3RvcnksXG5cdFx0Vmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRWaWV3VGVtcGxhdGVGYWN0b3J5LFxuXHRcdEVkaXRUZW1wbGF0ZUZhY3RvcnksXG5cdFx0RWRpdFRlbXBsYXRlUmVwb3NpdG9yeSxcblxuXHRcdGluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsXG5cblx0XHRDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIsXG5cblx0XHRDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSxcblxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlclxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25Eb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBDb2x1bW5BdXRvQ29uZmlndXJhdG9yLFxuXHRcdFx0dXNlQ2xhc3M6IERvbWFpbkNvbHVtbkF1dG9Db25maWd1cmF0b3Jcblx0XHR9XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQXBpTW9kdWxlIHsgLy8gZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19