import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FilterCommandInvoker } from './filter.command-invoker';
import { FilterDomainModule } from '../domain/filter.domain-module';
import { FilterWarehouse } from './filter.warehouse';
import { FilterTypeArchive } from './type/filter-type.archive';
import { ActiveFilterArchive } from './active/active-filter.archive';
import { UniqueValuesArchive } from './unique/unique-values.archive';
import { FilterEnabledArchive } from './read/filter-enabled.archive';
import { QuickFilterEnabledArchive } from './read/quick-filter-enabled.archive';
import * as i0 from "@angular/core";
export class FilterApiModule extends ApiModule {
}
FilterApiModule.ɵfac = /*@__PURE__*/ function () { let ɵFilterApiModule_BaseFactory; return function FilterApiModule_Factory(t) { return (ɵFilterApiModule_BaseFactory || (ɵFilterApiModule_BaseFactory = i0.ɵɵgetInheritedFactory(FilterApiModule)))(t || FilterApiModule); }; }();
FilterApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FilterApiModule });
FilterApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FilterCommandInvoker,
        FilterWarehouse,
        FilterTypeArchive,
        ActiveFilterArchive,
        UniqueValuesArchive,
        FilterEnabledArchive,
        QuickFilterEnabledArchive
    ], imports: [[
            CommonModule,
            FilterDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterApiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FilterDomainModule
                ],
                providers: [
                    FilterCommandInvoker,
                    FilterWarehouse,
                    FilterTypeArchive,
                    ActiveFilterArchive,
                    UniqueValuesArchive,
                    FilterEnabledArchive,
                    QuickFilterEnabledArchive
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterApiModule, { imports: [CommonModule,
        FilterDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFtQmhGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7O21PQUFqQyxlQUFlLFNBQWYsZUFBZTtpRUFBZixlQUFlO3NFQVpoQjtRQUNWLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtLQUN6QixZQVpRO1lBQ1IsWUFBWTtZQUNaLGtCQUFrQjtTQUNsQjt1RkFhVyxlQUFlO2NBakIzQixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIseUJBQXlCO2lCQUN6QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWDs7d0ZBQ1ksZUFBZSxjQWYxQixZQUFZO1FBQ1osa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpbHRlckRvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9maWx0ZXIuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUFyY2hpdmUgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJBcmNoaXZlIH0gZnJvbSAnLi9hY3RpdmUvYWN0aXZlLWZpbHRlci5hcmNoaXZlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc0FyY2hpdmUgfSBmcm9tICcuL3VuaXF1ZS91bmlxdWUtdmFsdWVzLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3JlYWQvZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9yZWFkL3F1aWNrLWZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZpbHRlckRvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRGaWx0ZXJXYXJlaG91c2UsXG5cdFx0RmlsdGVyVHlwZUFyY2hpdmUsXG5cdFx0QWN0aXZlRmlsdGVyQXJjaGl2ZSxcblx0XHRVbmlxdWVWYWx1ZXNBcmNoaXZlLFxuXHRcdEZpbHRlckVuYWJsZWRBcmNoaXZlLFxuXHRcdFF1aWNrRmlsdGVyRW5hYmxlZEFyY2hpdmVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcblxufVxuIl19