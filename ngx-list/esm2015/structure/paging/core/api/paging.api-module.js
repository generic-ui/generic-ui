import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { PagingCommandInvoker } from './paging.command-invoker';
import { PagingWarehouse } from './paging.warehouse';
import { PagingEventRepository } from './paging.event-repository';
import { PagingDomainModule } from '../domain/paging.domain-module';
import { PagingConverter } from './read/paging.converter';
import { PagingRepository } from './read/paging.repository';
import { PagingDomainWarehouse } from '../domain-read/paging.domain-warehouse';
import { PagingDomainCommandInvoker } from '../domain/paging.domain.command-invoker';
import { PagingDomainEventRepository } from '../domain-read/paging.domain.event-repository';
import * as i0 from "@angular/core";
export class PagingApiModule extends ApiModule {
}
PagingApiModule.ɵfac = /*@__PURE__*/ function () { let ɵPagingApiModule_BaseFactory; return function PagingApiModule_Factory(t) { return (ɵPagingApiModule_BaseFactory || (ɵPagingApiModule_BaseFactory = i0.ɵɵgetInheritedFactory(PagingApiModule)))(t || PagingApiModule); }; }();
PagingApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PagingApiModule });
PagingApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        {
            provide: PagingCommandInvoker,
            useClass: PagingDomainCommandInvoker
        },
        {
            provide: PagingWarehouse,
            useClass: PagingDomainWarehouse
        },
        {
            provide: PagingEventRepository,
            useClass: PagingDomainEventRepository
        },
        PagingRepository,
        PagingConverter
    ], imports: [[
            CommonModule,
            PagingDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagingApiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    PagingDomainModule
                ],
                providers: [
                    {
                        provide: PagingCommandInvoker,
                        useClass: PagingDomainCommandInvoker
                    },
                    {
                        provide: PagingWarehouse,
                        useClass: PagingDomainWarehouse
                    },
                    {
                        provide: PagingEventRepository,
                        useClass: PagingDomainEventRepository
                    },
                    PagingRepository,
                    PagingConverter
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PagingApiModule, { imports: [CommonModule,
        PagingDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7O0FBMkI1RixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUFTOzttT0FBakMsZUFBZSxTQUFmLGVBQWU7aUVBQWYsZUFBZTtzRUFwQmhCO1FBQ1Y7WUFDQyxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFFBQVEsRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNDLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7U0FDL0I7UUFDRDtZQUNDLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLDJCQUEyQjtTQUNyQztRQUVELGdCQUFnQjtRQUNoQixlQUFlO0tBQ2YsWUFwQlE7WUFDUixZQUFZO1lBQ1osa0JBQWtCO1NBQ2xCO3VGQXFCVyxlQUFlO2NBekIzQixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLDBCQUEwQjtxQkFDcEM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQy9CO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFFBQVEsRUFBRSwyQkFBMkI7cUJBQ3JDO29CQUVELGdCQUFnQjtvQkFDaEIsZUFBZTtpQkFDZjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWDs7d0ZBQ1ksZUFBZSxjQXZCMUIsWUFBWTtRQUNaLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4vcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vcGFnaW5nLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9yZWFkL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9wYWdpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC9wYWdpbmcuZG9tYWluLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9wYWdpbmcuZG9tYWluLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9wYWdpbmcuZG9tYWluLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFBhZ2luZ0RvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdHVzZUNsYXNzOiBQYWdpbmdEb21haW5Db21tYW5kSW52b2tlclxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0dXNlQ2xhc3M6IFBhZ2luZ0RvbWFpbldhcmVob3VzZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogUGFnaW5nRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0dXNlQ2xhc3M6IFBhZ2luZ0RvbWFpbkV2ZW50UmVwb3NpdG9yeVxuXHRcdH0sXG5cblx0XHRQYWdpbmdSZXBvc2l0b3J5LFxuXHRcdFBhZ2luZ0NvbnZlcnRlclxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG5cbn1cbiJdfQ==