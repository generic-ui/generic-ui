/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule, HermesModule } from '@generic-ui/hermes';
import { SchemaAggregateFactory } from '../domain/schema.aggregate-factory';
import { InMemorySchemaAggregateRepository } from '../infrastructure/in-memory/in-memory.schema.aggregate-repository';
import { CreateSchemaCommandHandler } from '../domain/create/create-schema.command-handler';
import { SchemaDomainModule } from '../domain/schema.domain-module';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaAggregateRepository } from '../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from '../infrastructure/in-memory/in-memory.schema.aggregate-store';
import { InMemorySchemaStore } from '../infrastructure/in-memory/in-memory.schema.store';
import { SchemaCommandInvoker } from './schema.command-invoker';
import { SchemaWarehouse } from './schema.warehouse';
import { SchemaEventRepository } from './schema.event-repository';
import { SchemaCssClassesRepository } from '../domain-read/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../domain-read/theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from '../domain-read/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../domain-read/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../domain-read/vertical-grid/schema.vertical-grid.repository';
import { schemaKey } from './schema.api';
export class SchemaApiModule extends ApiModule {
}
SchemaApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, [
                        ...SchemaDomainModule.commandHandlers()
                    ], [
                        ...SchemaDomainModule.domainEventHandlers()
                    ]),
                    SchemaDomainModule
                ],
                providers: [
                    SchemaDispatcher,
                    {
                        provide: SchemaAggregateRepository,
                        useClass: InMemorySchemaAggregateRepository
                    },
                    InMemorySchemaAggregateStore,
                    InMemorySchemaStore,
                    SchemaCommandInvoker,
                    SchemaWarehouse,
                    SchemaEventRepository,
                    SchemaCssClassesRepository,
                    SchemaThemeRepository,
                    SchemaHorizontalGridRepository,
                    SchemaRowColoringRepository,
                    SchemaVerticalGridRepository
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2FwaS9zY2hlbWEuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDbEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTRDekMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUzs7O1lBekM3QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBRVosWUFBWSxDQUFDLGVBQWUsQ0FDM0IsU0FBUyxFQUNULHNCQUFzQixFQUN0QixpQ0FBaUMsRUFDakMsMEJBQTBCLEVBQzFCO3dCQUNDLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxFQUFFO3FCQUN2QyxFQUNEO3dCQUNDLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUU7cUJBQzNDLENBQ0Q7b0JBRUQsa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsZ0JBQWdCO29CQUNoQjt3QkFDQyxPQUFPLEVBQUUseUJBQXlCO3dCQUNsQyxRQUFRLEVBQUUsaUNBQWlDO3FCQUMzQztvQkFDRCw0QkFBNEI7b0JBQzVCLG1CQUFtQjtvQkFFbkIsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLHFCQUFxQjtvQkFFckIsMEJBQTBCO29CQUMxQixxQkFBcUI7b0JBQ3JCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiw0QkFBNEI7aUJBQzVCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY3JlYXRlL2NyZWF0ZS1zY2hlbWEuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYURvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLnN0b3JlJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4vc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvY3NzLWNsYXNzZXMvc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdGhlbWUvc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC92ZXJ0aWNhbC1ncmlkL3NjaGVtYS52ZXJ0aWNhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgc2NoZW1hS2V5IH0gZnJvbSAnLi9zY2hlbWEuYXBpJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdHNjaGVtYUtleSxcblx0XHRcdFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlcixcblx0XHRcdFtcblx0XHRcdFx0Li4uU2NoZW1hRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQuLi5TY2hlbWFEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpXG5cdFx0XHRdXG5cdFx0KSxcblxuXHRcdFNjaGVtYURvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdFx0fSxcblx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLFxuXHRcdEluTWVtb3J5U2NoZW1hU3RvcmUsXG5cblx0XHRTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRTY2hlbWFXYXJlaG91c2UsXG5cdFx0U2NoZW1hRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0U2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0U2NoZW1hVGhlbWVSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnksXG5cdFx0U2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19