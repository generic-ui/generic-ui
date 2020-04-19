/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOMAIN_EVENT_HANDLERS, HermesModule } from '@generic-ui/hermes';
import { SchemaAggregateFactory } from '../domain/schema.aggregate-factory';
import { CreateSchemaCommandHandler } from '../domain/create/create-schema.command-handler';
import { SetSchemaThemeCommandHandler } from '../domain/theme/set-schema-theme.command-handler';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaAggregateRepository } from '../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateRepository } from '../infrastructure/in-memory/in-memory.schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from '../infrastructure/in-memory/in-memory.schema.aggregate-store';
import { InMemorySchemaStore } from '../infrastructure/in-memory/in-memory.schema.store';
import { SchemaCommandDispatcher } from './schema.command-dispatcher';
import { SchemaWarehouse } from './schema.warehouse';
import { SetRowColoringCommandHandler } from '../domain/coloring/set-row-coloring.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from '../domain/grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaVerticalGridCommandHandler } from '../domain/grid/vertical/set-schema-vertical-grid.command-handler';
import { SchemaCssClassesEventHandler } from './css-classes/schema-css-classes.event-handler';
import { SchemaThemeSetEventHandler } from './theme/schema-theme-set.event-handler';
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaEventRepository } from './schema.event-repository';
/** @type {?} */
export const schemaKey = 'SchemaAggregate';
export class SchemaModule {
}
SchemaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, [
                        ...HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, schemaKey),
                        ...HermesModule.registerCommandHandler(SetRowColoringCommandHandler, schemaKey),
                        ...HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, schemaKey),
                        ...HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, schemaKey)
                    ])
                ],
                declarations: [],
                providers: [
                    SchemaDispatcher,
                    {
                        provide: SchemaAggregateRepository,
                        useClass: InMemorySchemaAggregateRepository
                    },
                    InMemorySchemaAggregateStore,
                    InMemorySchemaStore,
                    SchemaCommandDispatcher,
                    SchemaWarehouse,
                    SchemaEventRepository,
                    {
                        provide: DOMAIN_EVENT_HANDLERS,
                        useClass: SchemaCssClassesEventHandler,
                        multi: true
                    }, {
                        provide: DOMAIN_EVENT_HANDLERS,
                        useClass: SchemaThemeSetEventHandler,
                        multi: true
                    },
                    SchemaCssClassesRepository,
                    SchemaThemeRepository
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9mZWF0dXJlLWFwaS9zY2hlbWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFNUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzdILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUVsRSxNQUFNLE9BQU8sU0FBUyxHQUFHLGlCQUFpQjtBQWdEMUMsTUFBTSxPQUFPLFlBQVk7OztZQTlDeEIsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUVaLFlBQVksQ0FBQyxlQUFlLENBQzNCLFNBQVMsRUFDVCxzQkFBc0IsRUFDdEIsaUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQjt3QkFDQyxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7d0JBQy9FLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQzt3QkFDL0UsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDO3dCQUN4RixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUM7cUJBQ3RGLENBQ0Q7aUJBRUQ7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLFNBQVMsRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCO3dCQUNDLE9BQU8sRUFBRSx5QkFBeUI7d0JBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7cUJBQzNDO29CQUNELDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUVuQix1QkFBdUI7b0JBQ3ZCLGVBQWU7b0JBQ2YscUJBQXFCO29CQUVyQjt3QkFDQyxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsNEJBQTRCO3dCQUN0QyxLQUFLLEVBQUUsSUFBSTtxQkFDWCxFQUFFO3dCQUNGLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLEtBQUssRUFBRSxJQUFJO3FCQUNYO29CQUVELDBCQUEwQjtvQkFDMUIscUJBQXFCO2lCQUNyQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERPTUFJTl9FVkVOVF9IQU5ETEVSUywgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLWZhY3RvcnknO1xuXG5pbXBvcnQgeyBDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLXNjaGVtYS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hVGhlbWVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi90aGVtZS9zZXQtc2NoZW1hLXRoZW1lLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuc3RvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2xvcmluZy9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zZXQtc2NoZW1hLXZlcnRpY2FsLWdyaWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIgfSBmcm9tICcuL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuL2Nzcy1jbGFzc2VzL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBzY2hlbWFLZXkgPSAnU2NoZW1hQWdncmVnYXRlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRzY2hlbWFLZXksXG5cdFx0XHRTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYVRoZW1lQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFJvd0NvbG9yaW5nQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpXG5cdFx0XHRdXG5cdFx0KVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnlcblx0XHR9LFxuXHRcdEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUsXG5cdFx0SW5NZW1vcnlTY2hlbWFTdG9yZSxcblxuXHRcdFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFNjaGVtYVdhcmVob3VzZSxcblx0XHRTY2hlbWFFdmVudFJlcG9zaXRvcnksXG5cblx0XHR7XG5cdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHR1c2VDbGFzczogU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50SGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fSwge1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IFNjaGVtYVRoZW1lU2V0RXZlbnRIYW5kbGVyLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9LFxuXG5cdFx0U2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0U2NoZW1hVGhlbWVSZXBvc2l0b3J5XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hTW9kdWxlIHtcbn1cbiJdfQ==