/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetSchemaThemeCommandHandler } from './theme/set-schema-theme.command-handler';
import { SetRowColoringCommandHandler } from './row-coloring/set-row-coloring.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from './grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaVerticalGridCommandHandler } from './grid/vertical/set-schema-vertical-grid.command-handler';
import { SchemaThemeSetEventHandler } from '../domain-read/theme/schema-theme-set.event-handler';
import { SchemaHorizontalGridSetEventHandler } from '../domain-read/horizontal-grid/schema.horizontal-grid-set.event-handler';
import { SchemaRowColoringSetEventHandler } from '../domain-read/row-coloring/schema.row-coloring-set.event-handler';
import { SchemaVerticalGridSetEventHandler } from '../domain-read/vertical-grid/schema.vertical-grid-set.event-handler';
import { SchemaCssClassesEventHandler } from '../domain-read/css-classes/schema-css-classes.event-handler';
import { schemaKey } from '../api/schema.api';
var SchemaDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaDomainModule, _super);
    function SchemaDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SchemaDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetRowColoringCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, schemaKey), HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, schemaKey));
    };
    /**
     * @return {?}
     */
    SchemaDomainModule.domainEventHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler), HermesModule.registerDomainEventHandler(SchemaHorizontalGridSetEventHandler), HermesModule.registerDomainEventHandler(SchemaRowColoringSetEventHandler), HermesModule.registerDomainEventHandler(SchemaVerticalGridSetEventHandler), HermesModule.registerMultiDomainEventHandler(SchemaCssClassesEventHandler));
    };
    SchemaDomainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SchemaDomainModule.ctorParameters = function () { return []; };
    return SchemaDomainModule;
}(DomainModule));
export { SchemaDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDckgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDckgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDeEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDM0csT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzlDO0lBUXdDLDhDQUFZO0lBRW5EO2VBQ0MsaUJBQU87SUFDUixDQUFDOzs7O0lBRU0sa0NBQWU7OztJQUF0QjtRQUNDLHdCQUNJLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsRUFDNUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxFQUM1RSxZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLEVBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUMsRUFDckY7SUFDSCxDQUFDOzs7O0lBRU0sc0NBQW1COzs7SUFBMUI7UUFDQyx3QkFDSSxZQUFZLENBQUMsMEJBQTBCLENBQUMsMEJBQTBCLENBQUMsRUFDbkUsWUFBWSxDQUFDLDBCQUEwQixDQUFDLG1DQUFtQyxDQUFDLEVBQzVFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUN6RSxZQUFZLENBQUMsMEJBQTBCLENBQUMsaUNBQWlDLENBQUMsRUFDMUUsWUFBWSxDQUFDLCtCQUErQixDQUFDLDRCQUE0QixDQUFDLEVBQzVFO0lBQ0gsQ0FBQzs7Z0JBL0JELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7SUEwQkQseUJBQUM7Q0FBQSxBQWpDRCxDQVF3QyxZQUFZLEdBeUJuRDtTQXpCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U2NoZW1hVGhlbWVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdGhlbWUvc2V0LXNjaGVtYS10aGVtZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vcm93LWNvbG9yaW5nL3NldC1yb3ctY29sb3JpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3Jpbmctc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgc2NoZW1hS2V5IH0gZnJvbSAnLi4vYXBpL3NjaGVtYS5hcGknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFUaGVtZUNvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVGhlbWVTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFSb3dDb2xvcmluZ1NldEV2ZW50SGFuZGxlciksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyKFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=