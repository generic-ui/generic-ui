/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HermesModule } from '@generic-ui/hermes';
import { SchemaAggregateFactory } from '../domain/schema.aggregate-factory';
import { CreateSchemaCommandHandler } from '../domain/create/create-schema.command-handler';
import { SetSchemaThemeCommandHandler } from '../domain/theme/set-schema-theme.command-handler';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaAggregateRepository } from '../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from '../infrastructure/in-memory/domain/in-memory.schema.aggregate-store';
import { InMemorySchemaStore } from '../infrastructure/in-memory/in-memory.schema.store';
import { InMemorySchemaReadModelRootRepository } from '../infrastructure/in-memory/read/in-memory.schema.read-model-root-repository';
import { SchemaCommandDispatcher } from './schema.command-dispatcher';
import { SchemaReadModelWarehouse } from './schema.read-model-warehouse';
import { SchemaReadModelRootRepository } from '../read/schema.read-model-root-repository';
import { InMemorySchemaReadModelStore } from '../infrastructure/in-memory/read/in-memory.schema.read-model-store';
import { SchemaReadModelRootConverter } from '../read/schema.read-model-root-converter';
import { SetRowColoringCommandHandler } from '../domain/coloring/set-row-coloring.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from '../domain/grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaVerticalGridCommandHandler } from '../domain/grid/vertical/set-schema-vertical-grid.command-handler';
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
                    InMemorySchemaReadModelStore,
                    {
                        provide: SchemaReadModelRootRepository,
                        useClass: InMemorySchemaReadModelRootRepository
                    },
                    SchemaReadModelRootConverter,
                    SchemaCommandDispatcher,
                    SchemaReadModelWarehouse
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS91aS1hcGkvc2NoZW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzdILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBRXJJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzdILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGtFQUFrRSxDQUFDOztBQUV2SCxNQUFNLE9BQU8sU0FBUyxHQUFHLGlCQUFpQjtBQTBDMUMsTUFBTSxPQUFPLFlBQVk7OztZQXhDeEIsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUVaLFlBQVksQ0FBQyxlQUFlLENBQzNCLFNBQVMsRUFDVCxzQkFBc0IsRUFDdEIsaUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQjt3QkFDQyxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7d0JBQy9FLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQzt3QkFDL0UsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDO3dCQUN4RixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUM7cUJBQ3RGLENBQ0Q7aUJBR0Q7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLFNBQVMsRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCO3dCQUNDLE9BQU8sRUFBRSx5QkFBeUI7d0JBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7cUJBQzNDO29CQUNELDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUVuQiw0QkFBNEI7b0JBQzVCO3dCQUNDLE9BQU8sRUFBRSw2QkFBNkI7d0JBQ3RDLFFBQVEsRUFBRSxxQ0FBcUM7cUJBQy9DO29CQUNELDRCQUE0QjtvQkFFNUIsdUJBQXVCO29CQUN2Qix3QkFBd0I7aUJBQ3hCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLWZhY3RvcnknO1xuXG5pbXBvcnQgeyBDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLXNjaGVtYS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hVGhlbWVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi90aGVtZS9zZXQtc2NoZW1hLXRoZW1lLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5zdG9yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L3JlYWQvaW4tbWVtb3J5LnNjaGVtYS5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4vc2NoZW1hLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5zY2hlbWEucmVhZC1tb2RlbC1zdG9yZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTZXRSb3dDb2xvcmluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbG9yaW5nL3NldC1yb3ctY29sb3JpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NldC1zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ncmlkL3ZlcnRpY2FsL3NldC1zY2hlbWEtdmVydGljYWwtZ3JpZC5jb21tYW5kLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hS2V5ID0gJ1NjaGVtYUFnZ3JlZ2F0ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0c2NoZW1hS2V5LFxuXHRcdFx0U2NoZW1hQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZVNjaGVtYUNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0W1xuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFUaGVtZUNvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dDb2xvcmluZ0NvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KVxuXHRcdFx0XVxuXHRcdClcblxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnlcblx0XHR9LFxuXHRcdEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUsXG5cdFx0SW5NZW1vcnlTY2hlbWFTdG9yZSxcblxuXHRcdEluTWVtb3J5U2NoZW1hUmVhZE1vZGVsU3RvcmUsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2NoZW1hUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogSW5NZW1vcnlTY2hlbWFSZWFkTW9kZWxSb290UmVwb3NpdG9yeVxuXHRcdH0sXG5cdFx0U2NoZW1hUmVhZE1vZGVsUm9vdENvbnZlcnRlcixcblxuXHRcdFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFNjaGVtYVJlYWRNb2RlbFdhcmVob3VzZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYU1vZHVsZSB7XG59XG4iXX0=