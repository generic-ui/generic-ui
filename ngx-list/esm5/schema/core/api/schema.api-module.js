/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SchemaApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaApiModule, _super);
    function SchemaApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SchemaApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HermesModule.defineAggregate(schemaKey, SchemaAggregateFactory, InMemorySchemaAggregateRepository, CreateSchemaCommandHandler, tslib_1.__spread(SchemaDomainModule.commandHandlers()), tslib_1.__spread(SchemaDomainModule.domainEventHandlers())),
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
    return SchemaApiModule;
}(ApiModule));
export { SchemaApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2FwaS9zY2hlbWEuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekM7SUF5Q3FDLDJDQUFTO0lBekM5Qzs7SUEwQ0EsQ0FBQzs7Z0JBMUNBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFFWixZQUFZLENBQUMsZUFBZSxDQUMzQixTQUFTLEVBQ1Qsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQywwQkFBMEIsbUJBRXRCLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxvQkFHcEMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsRUFFNUM7d0JBRUQsa0JBQWtCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsZ0JBQWdCO3dCQUNoQjs0QkFDQyxPQUFPLEVBQUUseUJBQXlCOzRCQUNsQyxRQUFRLEVBQUUsaUNBQWlDO3lCQUMzQzt3QkFDRCw0QkFBNEI7d0JBQzVCLG1CQUFtQjt3QkFFbkIsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFFckIsMEJBQTBCO3dCQUMxQixxQkFBcUI7d0JBQ3JCLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3dCQUMzQiw0QkFBNEI7cUJBQzVCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFFRCxzQkFBQztDQUFBLEFBMUNELENBeUNxQyxTQUFTLEdBQzdDO1NBRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZVNjaGVtYUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtc2NoZW1hLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5zdG9yZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4vc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2Nzcy1jbGFzc2VzL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3JpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IHNjaGVtYUtleSB9IGZyb20gJy4vc2NoZW1hLmFwaSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRzY2hlbWFLZXksXG5cdFx0XHRTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlU2NoZW1hQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdC4uLlNjaGVtYURvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKVxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0Li4uU2NoZW1hRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKVxuXHRcdFx0XVxuXHRcdCksXG5cblx0XHRTY2hlbWFEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2NoZW1hRGlzcGF0Y2hlcixcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0dXNlQ2xhc3M6IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeVxuXHRcdH0sXG5cdFx0SW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSxcblx0XHRJbk1lbW9yeVNjaGVtYVN0b3JlLFxuXG5cdFx0U2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0U2NoZW1hV2FyZWhvdXNlLFxuXHRcdFNjaGVtYUV2ZW50UmVwb3NpdG9yeSxcblxuXHRcdFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYVRoZW1lUmVwb3NpdG9yeSxcblx0XHRTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnksXG5cdFx0U2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==