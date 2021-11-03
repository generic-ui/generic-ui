import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetSchemaThemeCommandHandler } from './theme/set-schema-theme.command-handler';
import { SetRowColoringCommandHandler } from './row-coloring/set-row-coloring.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from './grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaVerticalGridCommandHandler } from './grid/vertical/set-schema-vertical-grid.command-handler';
import { SchemaCssClassesEventHandler } from '../domain-read/css-classes/schema-css-classes.event-handler';
import { schemaKey } from './schema.key';
import { SchemaVerticalGridRepository } from '../domain-read/vertical-grid/schema.vertical-grid.repository';
import { SchemaThemeRepository } from '../domain-read/theme/schema.theme.repository';
import { SchemaRowColoringRepository } from '../domain-read/row-coloring/schema.row-coloring.repository';
import { SchemaHorizontalGridRepository } from '../domain-read/horizontal-grid/schema.horizontal-grid.repository';
import * as i0 from "@angular/core";
export class SchemaDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetSchemaThemeCommandHandler, schemaKey),
            HermesModule.registerCommandHandler(SetRowColoringCommandHandler, schemaKey),
            HermesModule.registerCommandHandler(SetSchemaHorizontalGridCommandHandler, schemaKey),
            HermesModule.registerCommandHandler(SetSchemaVerticalGridCommandHandler, schemaKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(SchemaThemeRepository),
            HermesModule.registerDomainEventHandler(SchemaHorizontalGridRepository),
            HermesModule.registerDomainEventHandler(SchemaRowColoringRepository),
            HermesModule.registerDomainEventHandler(SchemaVerticalGridRepository),
            HermesModule.registerMultiDomainEventHandler(SchemaCssClassesEventHandler)
        ];
    }
}
SchemaDomainModule.ɵfac = function SchemaDomainModule_Factory(t) { return new (t || SchemaDomainModule)(); };
SchemaDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SchemaDomainModule });
SchemaDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaDomainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchemaDomainModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3NjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDekcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7O0FBV2xILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBRW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7WUFDNUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQztZQUM1RSxZQUFZLENBQUMsc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDO1lBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUM7U0FDbkYsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsbUJBQW1CO1FBQ3pCLE9BQU87WUFDTixZQUFZLENBQUMsMEJBQTBCLENBQUMscUJBQXFCLENBQUM7WUFDOUQsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDhCQUE4QixDQUFDO1lBQ3ZFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQztZQUNwRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsNEJBQTRCLENBQUM7WUFDckUsWUFBWSxDQUFDLCtCQUErQixDQUFDLDRCQUE0QixDQUFDO1NBQzFFLENBQUM7SUFDSCxDQUFDOztvRkF2Qlcsa0JBQWtCO29FQUFsQixrQkFBa0I7eUVBSm5CLEVBQUUsWUFISjtZQUNSLFlBQVk7U0FDWjt1RkFLVyxrQkFBa0I7Y0FSOUIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOzt3RkFDWSxrQkFBa0IsY0FON0IsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRTY2hlbWFUaGVtZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi90aGVtZS9zZXQtc2NoZW1hLXRoZW1lLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRSb3dDb2xvcmluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZ3JpZC9ob3Jpem9udGFsL3NldC1zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZ3JpZC92ZXJ0aWNhbC9zZXQtc2NoZW1hLXZlcnRpY2FsLWdyaWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4tcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzZXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBzY2hlbWFLZXkgfSBmcm9tICcuL3NjaGVtYS5rZXknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLnJlcG9zaXRvcnknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFUaGVtZUNvbW1hbmRIYW5kbGVyLCBzY2hlbWFLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Um93Q29sb3JpbmdDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZEhhbmRsZXIsIHNjaGVtYUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kSGFuZGxlciwgc2NoZW1hS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVGhlbWVSZXBvc2l0b3J5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJNdWx0aURvbWFpbkV2ZW50SGFuZGxlcihTY2hlbWFDc3NDbGFzc2VzRXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19