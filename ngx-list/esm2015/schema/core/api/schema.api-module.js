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
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class SchemaApiModule extends ApiModule {
    constructor() {
        super();
    }
}
SchemaApiModule.ɵfac = function SchemaApiModule_Factory(t) { return new (t || SchemaApiModule)(); };
SchemaApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SchemaApiModule });
SchemaApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
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
    ], imports: [[
            CommonModule,
            HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, SchemaDomainModule.commandHandlers(), SchemaDomainModule.domainEventHandlers()),
            SchemaDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaApiModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchemaApiModule, { imports: [CommonModule, i1.HermesDomainModule, SchemaDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQTRDdkYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUztJQUU3QztRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OEVBSlcsZUFBZTtpRUFBZixlQUFlO3NFQTNCaEI7UUFDVixnQkFBZ0I7UUFDaEI7WUFDQyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7U0FDM0M7UUFDRCw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBRW5CO1lBQ0MsT0FBTyxFQUFFLG9CQUFvQjtZQUM3QixRQUFRLEVBQUUsMEJBQTBCO1NBQ3BDO1FBQ0Q7WUFDQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixRQUFRLEVBQUUscUJBQXFCO1NBQy9CO1FBQ0Q7WUFDQyxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSwyQkFBMkI7U0FDckM7UUFFRCwwQkFBMEI7S0FDMUIsWUFwQ1E7WUFDUixZQUFZO1lBQ1osWUFBWSxDQUFDLGVBQWUsQ0FDM0IsU0FBUyxFQUNULHNCQUFzQixFQUN0QixpQ0FBaUMsRUFDakMsMEJBQTBCLEVBQzFCLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxFQUNwQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUN4QztZQUVELGtCQUFrQjtTQUNsQjt1RkE0QlcsZUFBZTtjQXpDM0IsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVksQ0FBQyxlQUFlLENBQzNCLFNBQVMsRUFDVCxzQkFBc0IsRUFDdEIsaUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQixrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsRUFDcEMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsQ0FDeEM7b0JBRUQsa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsZ0JBQWdCO29CQUNoQjt3QkFDQyxPQUFPLEVBQUUseUJBQXlCO3dCQUNsQyxRQUFRLEVBQUUsaUNBQWlDO3FCQUMzQztvQkFDRCw0QkFBNEI7b0JBQzVCLG1CQUFtQjtvQkFFbkI7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLDBCQUEwQjtxQkFDcEM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQy9CO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFFBQVEsRUFBRSwyQkFBMkI7cUJBQ3JDO29CQUVELDBCQUEwQjtpQkFDMUI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLGVBQWUsY0F2QzFCLFlBQVkseUJBVVosa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvc2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZVNjaGVtYUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtc2NoZW1hLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5zdG9yZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4vc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2Nzcy1jbGFzc2VzL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IHNjaGVtYUtleSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEua2V5JztcbmltcG9ydCB7IFNjaGVtYURvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kb21haW4tY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYURvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NjaGVtYS5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYURvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuZG9tYWluLWV2ZW50LXJlcG9zaXRvcnknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdHNjaGVtYUtleSxcblx0XHRcdFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlcixcblx0XHRcdFNjaGVtYURvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdFNjaGVtYURvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKClcblx0XHQpLFxuXG5cdFx0U2NoZW1hRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnlcblx0XHR9LFxuXHRcdEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUsXG5cdFx0SW5NZW1vcnlTY2hlbWFTdG9yZSxcblxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IFNjaGVtYURvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogU2NoZW1hRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTY2hlbWFFdmVudFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogU2NoZW1hRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fSxcblxuXHRcdFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxufVxuIl19