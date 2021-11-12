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
import { DomainFilterWarehouse } from '../domain-read/domain-filter.warehouse';
import { DomainFilterCommandInvoker } from '../domain/domain-filter.command-invoker';
import { FilterIntegration } from '../api-integration/filter.integration';
export class FilterApiModule extends ApiModule {
}
FilterApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FilterDomainModule
                ],
                providers: [
                    {
                        provide: FilterCommandInvoker,
                        useClass: DomainFilterCommandInvoker
                    },
                    {
                        provide: FilterWarehouse,
                        useClass: DomainFilterWarehouse
                    },
                    FilterTypeArchive,
                    ActiveFilterArchive,
                    UniqueValuesArchive,
                    FilterEnabledArchive,
                    QuickFilterEnabledArchive,
                    FilterIntegration
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQTBCMUUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUzs7O1lBeEI3QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLDBCQUEwQjtxQkFDcEM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQy9CO29CQUNELGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixpQkFBaUI7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpbHRlckRvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9maWx0ZXIuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUFyY2hpdmUgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJBcmNoaXZlIH0gZnJvbSAnLi9hY3RpdmUvYWN0aXZlLWZpbHRlci5hcmNoaXZlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc0FyY2hpdmUgfSBmcm9tICcuL3VuaXF1ZS91bmlxdWUtdmFsdWVzLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3JlYWQvZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9yZWFkL3F1aWNrLWZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgRG9tYWluRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZG9tYWluLWZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRG9tYWluRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9kb21haW4vZG9tYWluLWZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmlsdGVySW50ZWdyYXRpb24gfSBmcm9tICcuLi9hcGktaW50ZWdyYXRpb24vZmlsdGVyLmludGVncmF0aW9uJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGaWx0ZXJEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogRG9tYWluRmlsdGVyQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBEb21haW5GaWx0ZXJXYXJlaG91c2Vcblx0XHR9LFxuXHRcdEZpbHRlclR5cGVBcmNoaXZlLFxuXHRcdEFjdGl2ZUZpbHRlckFyY2hpdmUsXG5cdFx0VW5pcXVlVmFsdWVzQXJjaGl2ZSxcblx0XHRGaWx0ZXJFbmFibGVkQXJjaGl2ZSxcblx0XHRRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlLFxuXHRcdEZpbHRlckludGVncmF0aW9uXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cbn1cbiJdfQ==