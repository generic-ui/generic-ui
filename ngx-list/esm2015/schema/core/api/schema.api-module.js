import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule, HermesModule } from '@generic-ui/hermes';
import { SchemaAggregateFactory } from '../domain/create/schema.aggregate-factory';
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
import { schemaKey } from '../domain/schema.key';
import { SchemaDomainCommandInvoker } from '../domain/schema.domain-command-invoker';
import { SchemaDomainWarehouse } from '../domain-read/schema.domain-warehouse';
import { SchemaDomainEventRepository } from '../domain/schema.domain-event-repository';
export class SchemaApiModule extends ApiModule {
    constructor() {
        super();
    }
}
SchemaApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, SchemaDomainModule.commandHandlers(), SchemaDomainModule.domainEventHandlers()),
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
                    {
                        provide: SchemaCommandInvoker,
                        useClass: SchemaDomainCommandInvoker
                    },
                    {
                        provide: SchemaWarehouse,
                        useClass: SchemaDomainWarehouse
                    },
                    {
                        provide: SchemaEventRepository,
                        useClass: SchemaDomainEventRepository
                    },
                    SchemaCssClassesRepository
                ],
                declarations: [],
                exports: []
            },] }
];
SchemaApiModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUE0Q3ZGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7SUFFN0M7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7OztZQTdDRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWSxDQUFDLGVBQWUsQ0FDM0IsU0FBUyxFQUNULHNCQUFzQixFQUN0QixpQ0FBaUMsRUFDakMsMEJBQTBCLEVBQzFCLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxFQUNwQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUN4QztvQkFFRCxrQkFBa0I7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCO3dCQUNDLE9BQU8sRUFBRSx5QkFBeUI7d0JBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7cUJBQzNDO29CQUNELDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUVuQjt3QkFDQyxPQUFPLEVBQUUsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUUsMEJBQTBCO3FCQUNwQztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLHFCQUFxQjtxQkFDL0I7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsUUFBUSxFQUFFLDJCQUEyQjtxQkFDckM7b0JBRUQsMEJBQTBCO2lCQUMxQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY3JlYXRlL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLXNjaGVtYS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuc3RvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBzY2hlbWFLZXkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmtleSc7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuZG9tYWluLWNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zY2hlbWEuZG9tYWluLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRzY2hlbWFLZXksXG5cdFx0XHRTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRTY2hlbWFEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHRTY2hlbWFEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpXG5cdFx0KSxcblxuXHRcdFNjaGVtYURvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdFx0fSxcblx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLFxuXHRcdEluTWVtb3J5U2NoZW1hU3RvcmUsXG5cblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdHVzZUNsYXNzOiBTY2hlbWFEb21haW5Db21tYW5kSW52b2tlclxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hV2FyZWhvdXNlLFxuXHRcdFx0dXNlQ2xhc3M6IFNjaGVtYURvbWFpbldhcmVob3VzZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0dXNlQ2xhc3M6IFNjaGVtYURvbWFpbkV2ZW50UmVwb3NpdG9yeVxuXHRcdH0sXG5cblx0XHRTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cbn1cbiJdfQ==