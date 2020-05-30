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
import { SchemaHorizontalGridSetEventHandler } from './horizontal-grid/schema.horizontal-grid-set.event-handler';
import { SchemaRowColoringSetEventHandler } from './row-coloring/schema.row-coloring-set.event-handler';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
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
                    ], [
                        ...HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler),
                        ...HermesModule.registerDomainEventHandler(SchemaHorizontalGridSetEventHandler),
                        ...HermesModule.registerDomainEventHandler(SchemaRowColoringSetEventHandler),
                        ...HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler),
                        ...HermesModule.registerMultiDomainEventHandler(SchemaCssClassesEventHandler)
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
                    SchemaCssClassesRepository,
                    SchemaThemeRepository,
                    SchemaHorizontalGridRepository,
                    SchemaRowColoringRepository,
                    SchemaVerticalGridRepository,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM3SCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFFL0YsTUFBTSxPQUFPLFNBQVMsR0FBRyxpQkFBaUI7QUFpRDFDLE1BQU0sT0FBTyxZQUFZOzs7WUEvQ3hCLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixTQUFTLEVBQ1Qsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQywwQkFBMEIsRUFDMUI7d0JBQ0MsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDO3dCQUMvRSxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7d0JBQy9FLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHFDQUFxQyxFQUFFLFNBQVMsQ0FBQzt3QkFDeEYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsbUNBQW1DLEVBQUUsU0FBUyxDQUFDO3FCQUN0RixFQUNEO3dCQUNDLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO3dCQUN0RSxHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxtQ0FBbUMsQ0FBQzt3QkFDL0UsR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsZ0NBQWdDLENBQUM7d0JBQzVFLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO3dCQUN0RSxHQUFHLFlBQVksQ0FBQywrQkFBK0IsQ0FBQyw0QkFBNEIsQ0FBQztxQkFDN0UsQ0FDRDtpQkFFRDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsU0FBUyxFQUFFO29CQUNWLGdCQUFnQjtvQkFDaEI7d0JBQ0MsT0FBTyxFQUFFLHlCQUF5Qjt3QkFDbEMsUUFBUSxFQUFFLGlDQUFpQztxQkFDM0M7b0JBQ0QsNEJBQTRCO29CQUM1QixtQkFBbUI7b0JBRW5CLHVCQUF1QjtvQkFDdkIsZUFBZTtvQkFDZixxQkFBcUI7b0JBRXJCLDBCQUEwQjtvQkFDMUIscUJBQXFCO29CQUNyQiw4QkFBOEI7b0JBQzlCLDJCQUEyQjtvQkFDM0IsNEJBQTRCO2lCQUU1QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcblxuaW1wb3J0IHsgQ3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY3JlYXRlL2NyZWF0ZS1zY2hlbWEuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYVRoZW1lQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vdGhlbWUvc2V0LXNjaGVtYS10aGVtZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLnN0b3JlJztcblxuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sb3Jpbmcvc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzZXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBzY2hlbWFLZXkgPSAnU2NoZW1hQWdncmVnYXRlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRzY2hlbWFLZXksXG5cdFx0XHRTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYVRoZW1lQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFJvd0NvbG9yaW5nQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVGhlbWVTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hUm93Q29sb3JpbmdTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVGhlbWVTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJNdWx0aURvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyKVxuXHRcdFx0XVxuXHRcdClcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdFx0fSxcblx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLFxuXHRcdEluTWVtb3J5U2NoZW1hU3RvcmUsXG5cblx0XHRTY2hlbWFDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRTY2hlbWFXYXJlaG91c2UsXG5cdFx0U2NoZW1hRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0U2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0U2NoZW1hVGhlbWVSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnksXG5cdFx0U2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSxcblxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYU1vZHVsZSB7XG59XG4iXX0=