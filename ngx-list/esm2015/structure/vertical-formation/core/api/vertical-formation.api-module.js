import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { VerticalFormationDomainModule } from '../domain/vertical-formation.domain-module';
import { VerticalFormationConverter } from './vertical-formation.converter';
import { VerticalFormationRepository } from './vertical-formation.repository';
import { VerticalFormationWarehouse } from './vertical-formation.warehouse';
import { VerticalFormationScrollBarPositionArchive } from '../domain-read/scroll-bar/vertical-formation.scroll-bar-position.archive';
import { VerticalFormationDomainWarehouse } from '../domain-read/vertical-formation.domain-warehouse';
import * as i0 from "@angular/core";
export class VerticalFormationApiModule extends ApiModule {
}
VerticalFormationApiModule.ɵfac = /*@__PURE__*/ function () { let ɵVerticalFormationApiModule_BaseFactory; return function VerticalFormationApiModule_Factory(t) { return (ɵVerticalFormationApiModule_BaseFactory || (ɵVerticalFormationApiModule_BaseFactory = i0.ɵɵgetInheritedFactory(VerticalFormationApiModule)))(t || VerticalFormationApiModule); }; }();
VerticalFormationApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: VerticalFormationApiModule });
VerticalFormationApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        VerticalFormationConverter,
        VerticalFormationRepository,
        {
            provide: VerticalFormationWarehouse,
            useClass: VerticalFormationDomainWarehouse
        },
        VerticalFormationScrollBarPositionArchive
    ], imports: [[
            CommonModule,
            VerticalFormationDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerticalFormationApiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    VerticalFormationDomainModule
                ],
                providers: [
                    VerticalFormationConverter,
                    VerticalFormationRepository,
                    {
                        provide: VerticalFormationWarehouse,
                        useClass: VerticalFormationDomainWarehouse
                    },
                    VerticalFormationScrollBarPositionArchive
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VerticalFormationApiModule, { imports: [CommonModule,
        VerticalFormationDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQW9CdEcsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFNBQVM7OzBSQUE1QywwQkFBMEIsU0FBMUIsMEJBQTBCOzRFQUExQiwwQkFBMEI7aUZBWjNCO1FBQ1YsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQjtZQUNDLE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsUUFBUSxFQUFFLGdDQUFnQztTQUMxQztRQUNELHlDQUF5QztLQUN6QyxZQVpRO1lBQ1IsWUFBWTtZQUNaLDZCQUE2QjtTQUM3Qjt1RkFhVywwQkFBMEI7Y0FqQnRDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWiw2QkFBNkI7aUJBQzdCO2dCQUNELFNBQVMsRUFBRTtvQkFDViwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0I7d0JBQ0MsT0FBTyxFQUFFLDBCQUEwQjt3QkFDbkMsUUFBUSxFQUFFLGdDQUFnQztxQkFDMUM7b0JBQ0QseUNBQXlDO2lCQUN6QztnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWDs7d0ZBQ1ksMEJBQTBCLGNBZnJDLFlBQVk7UUFDWiw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Eb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3Njcm9sbC1iYXIvdmVydGljYWwtZm9ybWF0aW9uLnNjcm9sbC1iYXItcG9zaXRpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi5kb21haW4td2FyZWhvdXNlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbldhcmVob3VzZVxuXHRcdH0sXG5cdFx0VmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvbkFyY2hpdmVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25BcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19