import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SourceConverter } from './source.converter';
import { SourceCommandInvoker } from './source.command-invoker';
import { SourceWarehouse } from './source.warehouse';
import { SourceEventService } from './event/source-event.service';
import { SourceDomainModule } from '../domain/source.domain-module';
import { FormationEventRepository } from './formation/formation.event-repository';
import { FormationCommandInvoker } from './formation/formation.command-invoker';
import { FormationWarehouse } from './formation/formation.warehouse';
import { RowSelectedRepository } from './formation/row-selected/row-selected.repository';
import { RowSelectionModeRepository } from './formation/mode/row-selection-mode.repository';
import { SourceDomainWarehouse } from '../domain-read/source.domain-warehouse';
import { SourceDomainCommandInvoker } from '../domain/source.domain.command-invoker';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
import * as i0 from "@angular/core";
export class SourceApiModule extends ApiModule {
}
SourceApiModule.ɵfac = /*@__PURE__*/ function () { let ɵSourceApiModule_BaseFactory; return function SourceApiModule_Factory(t) { return (ɵSourceApiModule_BaseFactory || (ɵSourceApiModule_BaseFactory = i0.ɵɵgetInheritedFactory(SourceApiModule)))(t || SourceApiModule); }; }();
SourceApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SourceApiModule });
SourceApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        StructureSourceOriginArchive,
        StructurePreparedItemsArchive,
        SourceConverter,
        {
            provide: SourceCommandInvoker,
            useClass: SourceDomainCommandInvoker
        },
        {
            provide: SourceWarehouse,
            useClass: SourceDomainWarehouse
        },
        SourceEventService,
        RowSelectedRepository,
        FormationEventRepository,
        FormationCommandInvoker,
        FormationWarehouse,
        RowSelectionModeRepository
    ], imports: [[
            CommonModule,
            SourceDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceApiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SourceDomainModule
                ],
                providers: [
                    StructureSourceOriginArchive,
                    StructurePreparedItemsArchive,
                    SourceConverter,
                    {
                        provide: SourceCommandInvoker,
                        useClass: SourceDomainCommandInvoker
                    },
                    {
                        provide: SourceWarehouse,
                        useClass: SourceDomainWarehouse
                    },
                    SourceEventService,
                    RowSelectedRepository,
                    FormationEventRepository,
                    FormationCommandInvoker,
                    FormationWarehouse,
                    RowSelectionModeRepository
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SourceApiModule, { imports: [CommonModule,
        SourceDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDaEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7O0FBa0NwRyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUFTOzttT0FBakMsZUFBZSxTQUFmLGVBQWU7aUVBQWYsZUFBZTtzRUExQmhCO1FBQ1YsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixlQUFlO1FBRWY7WUFDQyxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFFBQVEsRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNDLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7U0FDL0I7UUFDRCxrQkFBa0I7UUFFbEIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUV4Qix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLDBCQUEwQjtLQUUxQixZQTFCUTtZQUNSLFlBQVk7WUFDWixrQkFBa0I7U0FDbEI7dUZBMkJXLGVBQWU7Y0EvQjNCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixrQkFBa0I7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRTtvQkFDViw0QkFBNEI7b0JBQzVCLDZCQUE2QjtvQkFDN0IsZUFBZTtvQkFFZjt3QkFDQyxPQUFPLEVBQUUsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUUsMEJBQTBCO3FCQUNwQztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLHFCQUFxQjtxQkFDL0I7b0JBQ0Qsa0JBQWtCO29CQUVsQixxQkFBcUI7b0JBQ3JCLHdCQUF3QjtvQkFFeEIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLDBCQUEwQjtpQkFFMUI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLGVBQWUsY0E3QjFCLFlBQVk7UUFDWixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2UuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZURvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NvdXJjZS5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5kb21haW4uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U291cmNlRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUsXG5cdFx0U3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUsXG5cdFx0U291cmNlQ29udmVydGVyLFxuXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogU291cmNlRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBTb3VyY2VEb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdFNvdXJjZUV2ZW50U2VydmljZSxcblxuXHRcdFJvd1NlbGVjdGVkUmVwb3NpdG9yeSxcblx0XHRGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cblx0XHRGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0Um93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnlcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19