/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                        CompositionCommandInvoker,
                        CompositionWarehouse,
                        CompositionEventRepository
                    ]),
                    declarations: [],
                    exports: []
                },] }
    ];
    return CompositionApiModule;
}(ApiModule));
export { CompositionApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFDTiw0QkFBNEIsRUFDNUIscUNBQXFDLEVBQ3JDLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHL0Y7SUF3QzBDLGdEQUFTO0lBeENuRDs7SUF5Q0EsQ0FBQzs7Z0JBekNBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixjQUFjLEVBQ2QsMkJBQTJCLEVBQzNCLHNDQUFzQyxFQUN0QywrQkFBK0IsRUFDL0I7NEJBQ0MsdUJBQXVCLENBQUMsZUFBZSxFQUFFO3lCQUN6QyxFQUFFOzRCQUNGLHVCQUF1QixDQUFDLG1CQUFtQixFQUFFO3lCQUM3QyxDQUNEO3dCQUVELHVCQUF1QjtxQkFFdkI7b0JBQ0QsU0FBUyxtQkFDTCxxQ0FBcUM7d0JBQ3hDLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3VCQUVuQiw0QkFBNEI7d0JBRS9CLGlDQUFpQzt3QkFFakMsMEJBQTBCO3dCQUUxQix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3NCQUMxQjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBRUQsMkJBQUM7Q0FBQSxBQXpDRCxDQXdDMEMsU0FBUyxHQUNsRDtTQURZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGNvbXBvc2l0aW9uS2V5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5hcGknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7XG5cdGluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsXG5cdGluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnNcbn0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5jb21wb3NpdGlvbi5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4vY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9ncm91cC9jb21wb3NpdGlvbi5ncm91cC5yZXBvc2l0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdGNvbXBvc2l0aW9uS2V5LFxuXHRcdFx0Q29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0W1xuXHRcdFx0XHRDb21wb3NpdGlvbkRvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKVxuXHRcdFx0XSwgW1xuXHRcdFx0XHRDb21wb3NpdGlvbkRvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKClcblx0XHRcdF1cblx0XHQpLFxuXG5cdFx0Q29tcG9zaXRpb25Eb21haW5Nb2R1bGVcblxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uUmVhZE1vZGVsUHJvdmlkZXJzLFxuXHRcdENvbHVtbkRlZmluaXRpb25GYWN0b3J5LFxuXHRcdFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFx0Vmlld1RlbXBsYXRlRmFjdG9yeSxcblx0XHRFZGl0VGVtcGxhdGVGYWN0b3J5LFxuXHRcdEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnksXG5cblx0XHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uUHJvdmlkZXJzLFxuXG5cdFx0Q29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyLFxuXG5cdFx0Q29tcG9zaXRpb25Hcm91cFJlcG9zaXRvcnksXG5cblx0XHRDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==