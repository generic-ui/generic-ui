import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SummariesCommandInvoker } from './summaries.command-invoker';
import { SummariesEventRepository } from './summaries.event-repository';
import { SummariesDomainModule } from '../domain/summaries.domain-module';
import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from './summaries.warehouse';
import { SummariesDomainWarehouse } from '../domain-read/summaries.domain-warehouse';
import { SummariesDomainCommandInvoker } from '../domain/summaries.domain-command-invoker';
import { SummariesDomainEventRepository } from '../domain-read/summaries.domain-event-repository';
import * as i0 from "@angular/core";
export class SummariesApiModule extends ApiModule {
}
SummariesApiModule.ɵfac = /*@__PURE__*/ function () { let ɵSummariesApiModule_BaseFactory; return function SummariesApiModule_Factory(t) { return (ɵSummariesApiModule_BaseFactory || (ɵSummariesApiModule_BaseFactory = i0.ɵɵgetInheritedFactory(SummariesApiModule)))(t || SummariesApiModule); }; }();
SummariesApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SummariesApiModule });
SummariesApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        {
            provide: SummariesCommandInvoker,
            useClass: SummariesDomainCommandInvoker
        },
        {
            provide: SummariesEventRepository,
            useClass: SummariesDomainEventRepository
        },
        {
            provide: SummariesWarehouse,
            useClass: SummariesDomainWarehouse
        },
        SummariesEnabledArchive
    ], imports: [[
            CommonModule,
            SummariesDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummariesApiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SummariesDomainModule
                ],
                providers: [
                    {
                        provide: SummariesCommandInvoker,
                        useClass: SummariesDomainCommandInvoker
                    },
                    {
                        provide: SummariesEventRepository,
                        useClass: SummariesDomainEventRepository
                    },
                    {
                        provide: SummariesWarehouse,
                        useClass: SummariesDomainWarehouse
                    },
                    SummariesEnabledArchive
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SummariesApiModule, { imports: [CommonModule,
        SummariesDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQTBCbEcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7O2tQQUFwQyxrQkFBa0IsU0FBbEIsa0JBQWtCO29FQUFsQixrQkFBa0I7eUVBbEJuQjtRQUNWO1lBQ0MsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxRQUFRLEVBQUUsNkJBQTZCO1NBQ3ZDO1FBQ0Q7WUFDQyxPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLFFBQVEsRUFBRSw4QkFBOEI7U0FDeEM7UUFDRDtZQUNDLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsUUFBUSxFQUFFLHdCQUF3QjtTQUNsQztRQUNELHVCQUF1QjtLQUN2QixZQWxCUTtZQUNSLFlBQVk7WUFDWixxQkFBcUI7U0FDckI7dUZBbUJXLGtCQUFrQjtjQXZCOUIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHFCQUFxQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSx1QkFBdUI7d0JBQ2hDLFFBQVEsRUFBRSw2QkFBNkI7cUJBQ3ZDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSx3QkFBd0I7d0JBQ2pDLFFBQVEsRUFBRSw4QkFBOEI7cUJBQ3hDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBRSx3QkFBd0I7cUJBQ2xDO29CQUNELHVCQUF1QjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLGtCQUFrQixjQXJCN0IsWUFBWTtRQUNaLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDb21tYW5kSW52b2tlciB9IGZyb20gJy4vc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3N1bW1hcmllcy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zdW1tYXJpZXMuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9lbmFibGVkL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNXYXJlaG91c2UgfSBmcm9tICcuL3N1bW1hcmllcy53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc3VtbWFyaWVzLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRG9tYWluQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3VtbWFyaWVzRG9tYWluRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc3VtbWFyaWVzLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFN1bW1hcmllc0RvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTdW1tYXJpZXNDb21tYW5kSW52b2tlcixcblx0XHRcdHVzZUNsYXNzOiBTdW1tYXJpZXNEb21haW5Db21tYW5kSW52b2tlclxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU3VtbWFyaWVzRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0dXNlQ2xhc3M6IFN1bW1hcmllc0RvbWFpbkV2ZW50UmVwb3NpdG9yeVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU3VtbWFyaWVzV2FyZWhvdXNlLFxuXHRcdFx0dXNlQ2xhc3M6IFN1bW1hcmllc0RvbWFpbldhcmVob3VzZVxuXHRcdH0sXG5cdFx0U3VtbWFyaWVzRW5hYmxlZEFyY2hpdmVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==