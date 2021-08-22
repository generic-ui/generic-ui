/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CompositionApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionApiModule, _super);
    function CompositionApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
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
                    providers: tslib_1.__spread(inMemoryCompositionReadModelProviders, [
                        ColumnDefinitionFactory,
                        ViewTemplateRepository,
                        ViewTemplateFactory,
                        EditTemplateFactory,
                        EditTemplateRepository
                    ], inMemoryCompositionProviders, [
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
                    ]),
                    declarations: [],
                    exports: []
                },] }
    ];
    return CompositionApiModule;
}(ApiModule));
export { CompositionApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xKLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBR3pGO0lBaUQwQyxnREFBUztJQWpEbkQ7O0lBa0RBLENBQUM7O2dCQWxEQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBRVosWUFBWSxDQUFDLGVBQWUsQ0FDM0IsY0FBYyxFQUNkLDJCQUEyQixFQUMzQixzQ0FBc0MsRUFDdEMsK0JBQStCLEVBQy9COzRCQUNDLHVCQUF1QixDQUFDLGVBQWUsRUFBRTt5QkFDekMsRUFBRTs0QkFDRix1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRTt5QkFDN0MsQ0FDRDt3QkFFRCx1QkFBdUI7cUJBRXZCO29CQUNELFNBQVMsbUJBQ0wscUNBQXFDO3dCQUN4Qyx1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt1QkFFbkIsNEJBQTRCO3dCQUUvQixpQ0FBaUM7d0JBRWpDLDBCQUEwQjt3QkFFMUI7NEJBQ0MsT0FBTyxFQUFFLHlCQUF5Qjs0QkFDbEMsUUFBUSxFQUFFLCtCQUErQjt5QkFDekM7d0JBQ0Q7NEJBQ0MsT0FBTyxFQUFFLG9CQUFvQjs0QkFDN0IsUUFBUSxFQUFFLDBCQUEwQjt5QkFDcEM7d0JBQ0Q7NEJBQ0MsT0FBTyxFQUFFLDBCQUEwQjs0QkFDbkMsUUFBUSxFQUFFLGdDQUFnQzt5QkFDMUM7c0JBQ0Q7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOztJQUVELDJCQUFDO0NBQUEsQUFsREQsQ0FpRDBDLFNBQVMsR0FDbEQ7U0FEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBjb21wb3NpdGlvbktleSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5rZXknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IGluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsIGluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnMgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdG9uLmRvbWFpbi1jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uZG9tYWluLWV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5kb21haW4td2FyZWhvdXNlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdGNvbXBvc2l0aW9uS2V5LFxuXHRcdFx0Q29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0W1xuXHRcdFx0XHRDb21wb3NpdGlvbkRvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKVxuXHRcdFx0XSwgW1xuXHRcdFx0XHRDb21wb3NpdGlvbkRvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKClcblx0XHRcdF1cblx0XHQpLFxuXG5cdFx0Q29tcG9zaXRpb25Eb21haW5Nb2R1bGVcblxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uUmVhZE1vZGVsUHJvdmlkZXJzLFxuXHRcdENvbHVtbkRlZmluaXRpb25GYWN0b3J5LFxuXHRcdFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFx0Vmlld1RlbXBsYXRlRmFjdG9yeSxcblx0XHRFZGl0VGVtcGxhdGVGYWN0b3J5LFxuXHRcdEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnksXG5cblx0XHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uUHJvdmlkZXJzLFxuXG5cdFx0Q29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyLFxuXG5cdFx0Q29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnksXG5cblx0XHR7XG5cdFx0XHRwcm92aWRlOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBDb21wb3NpdGlvbkRvbWFpbkV2ZW50UmVwb3NpdG9yeVxuXHRcdH1cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25BcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19