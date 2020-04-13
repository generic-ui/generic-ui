/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOMAIN_EVENT_HANDLERS, HermesModule } from '@generic-ui/hermes';
import { SchemaAggregateFactory } from '../domain/schema.aggregate-factory';
import { CreateSchemaCommandHandler } from '../domain/create/create-schema.command-handler';
import { SetSchemaThemeCommandHandler } from '../domain/theme/set-schema-theme.command-handler';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaAggregateRepository } from '../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from '../infrastructure/in-memory/domain/in-memory.schema.aggregate-store';
import { InMemorySchemaStore } from '../infrastructure/in-memory/in-memory.schema.store';
import { SchemaCommandDispatcher } from './schema.command-dispatcher';
import { SchemaWarehouse } from './schema.warehouse';
import { SetRowColoringCommandHandler } from '../domain/coloring/set-row-coloring.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from '../domain/grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaVerticalGridCommandHandler } from '../domain/grid/vertical/set-schema-vertical-grid.command-handler';
import { SchemaCssClassesEventHandler } from '../read/css-classes/schema-css-classes.event-handler';
import { SchemaThemeSetEventHandler } from '../read/theme/schema-theme-set.event-handler';
import { SchemaCssClassesRepository } from '../read/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../read/theme/schema.theme.repository';
/** @type {?} */
export var schemaKey = 'SchemaAggregate';
var SchemaModule = /** @class */ (function () {
    function SchemaModule() {
    }
    SchemaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, tslib_1.__spread(HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetRowColoringCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, schemaKey)))
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
    return SchemaModule;
}());
export { SchemaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS91aS1hcGkvc2NoZW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUV6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRTlFLE1BQU0sS0FBTyxTQUFTLEdBQUcsaUJBQWlCO0FBRTFDO0lBQUE7SUE4Q0EsQ0FBQzs7Z0JBOUNBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixTQUFTLEVBQ1Qsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQywwQkFBMEIsbUJBRXRCLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsRUFDNUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxFQUM1RSxZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLEVBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUMsRUFFdkY7cUJBRUQ7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCOzRCQUNDLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7eUJBQzNDO3dCQUNELDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3dCQUVuQix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBRWY7NEJBQ0MsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLDRCQUE0Qjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ1gsRUFBRTs0QkFDRixPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixRQUFRLEVBQUUsMEJBQTBCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDWDt3QkFFRCwwQkFBMEI7d0JBQzFCLHFCQUFxQjtxQkFDckI7aUJBQ0Q7O0lBRUQsbUJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQURZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5cbmltcG9ydCB7IENyZWF0ZVNjaGVtYUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtc2NoZW1hLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY2hlbWFUaGVtZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3RoZW1lL3NldC1zY2hlbWEtdGhlbWUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9kb21haW4vaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLnN0b3JlJztcblxuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sb3Jpbmcvc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzZXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL3JlYWQvdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZWFkL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcblxuZXhwb3J0IGNvbnN0IHNjaGVtYUtleSA9ICdTY2hlbWFBZ2dyZWdhdGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdHNjaGVtYUtleSxcblx0XHRcdFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVTY2hlbWFDb21tYW5kSGFuZGxlcixcblx0XHRcdFtcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2NoZW1hVGhlbWVDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSlcblx0XHRcdF1cblx0XHQpXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2NoZW1hRGlzcGF0Y2hlcixcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0dXNlQ2xhc3M6IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeVxuXHRcdH0sXG5cdFx0SW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSxcblx0XHRJbk1lbW9yeVNjaGVtYVN0b3JlLFxuXG5cdFx0U2NoZW1hQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0U2NoZW1hV2FyZWhvdXNlLFxuXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH0sIHtcblx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHVzZUNsYXNzOiBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fSxcblxuXHRcdFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYVRoZW1lUmVwb3NpdG9yeVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYU1vZHVsZSB7XG59XG4iXX0=