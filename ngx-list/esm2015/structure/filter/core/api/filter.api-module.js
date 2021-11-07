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
                    QuickFilterEnabledArchive
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQXlCckYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUzs7O1lBdkI3QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLDBCQUEwQjtxQkFDcEM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQy9CO29CQUNELGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIseUJBQXlCO2lCQUN6QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4vZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZmlsdGVyLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlclR5cGVBcmNoaXZlIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyQXJjaGl2ZSB9IGZyb20gJy4vYWN0aXZlL2FjdGl2ZS1maWx0ZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNBcmNoaXZlIH0gZnJvbSAnLi91bmlxdWUvdW5pcXVlLXZhbHVlcy5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9yZWFkL2ZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vcmVhZC9xdWljay1maWx0ZXItZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IERvbWFpbkZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2RvbWFpbi1maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IERvbWFpbkZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL2RvbWFpbi1maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGaWx0ZXJEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogRG9tYWluRmlsdGVyQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBEb21haW5GaWx0ZXJXYXJlaG91c2Vcblx0XHR9LFxuXHRcdEZpbHRlclR5cGVBcmNoaXZlLFxuXHRcdEFjdGl2ZUZpbHRlckFyY2hpdmUsXG5cdFx0VW5pcXVlVmFsdWVzQXJjaGl2ZSxcblx0XHRGaWx0ZXJFbmFibGVkQXJjaGl2ZSxcblx0XHRRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cbn1cbiJdfQ==