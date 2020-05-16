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
    return SchemaModule;
}());
export { SchemaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUV6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRWxFLE1BQU0sS0FBTyxTQUFTLEdBQUcsaUJBQWlCO0FBRTFDO0lBQUE7SUErQ0EsQ0FBQzs7Z0JBL0NBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixTQUFTLEVBQ1Qsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQywwQkFBMEIsbUJBRXRCLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsRUFDNUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxFQUM1RSxZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLEVBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUMsRUFFdkY7cUJBRUQ7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCOzRCQUNDLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7eUJBQzNDO3dCQUNELDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3dCQUVuQix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUVyQjs0QkFDQyxPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixRQUFRLEVBQUUsNEJBQTRCOzRCQUN0QyxLQUFLLEVBQUUsSUFBSTt5QkFDWCxFQUFFOzRCQUNGLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSwwQkFBMEI7NEJBQ3BDLEtBQUssRUFBRSxJQUFJO3lCQUNYO3dCQUVELDBCQUEwQjt3QkFDMUIscUJBQXFCO3FCQUNyQjtpQkFDRDs7SUFFRCxtQkFBQztDQUFBLEFBL0NELElBK0NDO1NBRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcblxuaW1wb3J0IHsgQ3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY3JlYXRlL2NyZWF0ZS1zY2hlbWEuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYVRoZW1lQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vdGhlbWUvc2V0LXNjaGVtYS10aGVtZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLnN0b3JlJztcblxuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sb3Jpbmcvc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzZXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hS2V5ID0gJ1NjaGVtYUFnZ3JlZ2F0ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0c2NoZW1hS2V5LFxuXHRcdFx0U2NoZW1hQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZVNjaGVtYUNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0W1xuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFUaGVtZUNvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dDb2xvcmluZ0NvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KVxuXHRcdFx0XVxuXHRcdClcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdFx0fSxcblx0XHRJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLFxuXHRcdEluTWVtb3J5U2NoZW1hU3RvcmUsXG5cblx0XHRTY2hlbWFDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRTY2hlbWFXYXJlaG91c2UsXG5cdFx0U2NoZW1hRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdFx0dXNlQ2xhc3M6IFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH0sIHtcblx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHVzZUNsYXNzOiBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlcixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fSxcblxuXHRcdFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYVRoZW1lUmVwb3NpdG9yeVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYU1vZHVsZSB7XG59XG4iXX0=