/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class SchemaDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, schemaKey),
            ...HermesModule.registerCommandHandler(SetRowColoringCommandHandler, schemaKey),
            ...HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, schemaKey),
            ...HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, schemaKey)
        ];
    }
    /**
     * @return {?}
     */
    static domainEventHandlers() {
        return [
            ...HermesModule.registerDomainEventHandler(SchemaThemeSetEventHandler),
            ...HermesModule.registerDomainEventHandler(SchemaHorizontalGridSetEventHandler),
            ...HermesModule.registerDomainEventHandler(SchemaRowColoringSetEventHandler),
            ...HermesModule.registerDomainEventHandler(SchemaVerticalGridSetEventHandler),
            ...HermesModule.registerMultiDomainEventHandler(SchemaCssClassesEventHandler)
        ];
    }
}
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
SchemaDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNySCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNySCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFXOUMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFFbkQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDO1lBQy9FLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQztZQUMvRSxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxxQ0FBcUMsRUFBRSxTQUFTLENBQUM7WUFDeEYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsbUNBQW1DLEVBQUUsU0FBUyxDQUFDO1NBQ3RGLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLG1CQUFtQjtRQUN6QixPQUFPO1lBQ04sR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7WUFDdEUsR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUM7WUFDL0UsR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsZ0NBQWdDLENBQUM7WUFDNUUsR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsaUNBQWlDLENBQUM7WUFDN0UsR0FBRyxZQUFZLENBQUMsK0JBQStCLENBQUMsNEJBQTRCLENBQUM7U0FDN0UsQ0FBQztJQUNILENBQUM7OztZQS9CRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0U2NoZW1hVGhlbWVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdGhlbWUvc2V0LXNjaGVtYS10aGVtZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vcm93LWNvbG9yaW5nL3NldC1yb3ctY29sb3JpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3Jpbmctc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgc2NoZW1hS2V5IH0gZnJvbSAnLi4vYXBpL3NjaGVtYS5hcGknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFUaGVtZUNvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVGhlbWVTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFSb3dDb2xvcmluZ1NldEV2ZW50SGFuZGxlciksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyKFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=