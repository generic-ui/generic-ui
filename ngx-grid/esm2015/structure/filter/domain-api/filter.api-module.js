/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FilterCommandDispatcher } from './filter.command-dispatcher';
import { FilterDomainModule } from '../domain/filter.domain-module';
import { FilterWarehouse } from './filter.warehouse';
import { FilterTypeRepository } from './type/filter-type.repository';
import { ActiveFilterRepository } from './active/active-filter.repository';
import { UniqueValuesRepository } from './unique/unique-values.repository';
import { FilterEnabledRepository } from './read/filter-enabled.repository';
import { QuickFilterEnabledRepository } from './read/quick-filter-enabled.repository';
export class FilterApiModule extends ApiModule {
}
FilterApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FilterDomainModule
                ],
                providers: [
                    FilterCommandDispatcher,
                    FilterWarehouse,
                    FilterTypeRepository,
                    ActiveFilterRepository,
                    UniqueValuesRepository,
                    FilterEnabledRepository,
                    QuickFilterEnabledRepository
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluLWFwaS9maWx0ZXIuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQW1CdEYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUzs7O1lBakI3QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsdUJBQXVCO29CQUN2QixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsNEJBQTRCO2lCQUM1QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vZmlsdGVyLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZmlsdGVyLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZXBvc2l0b3J5IH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpbHRlckVuYWJsZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2ZpbHRlci1lbmFibGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9xdWljay1maWx0ZXItZW5hYmxlZC5yZXBvc2l0b3J5JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGaWx0ZXJEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmlsdGVyQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0RmlsdGVyV2FyZWhvdXNlLFxuXHRcdEZpbHRlclR5cGVSZXBvc2l0b3J5LFxuXHRcdEFjdGl2ZUZpbHRlclJlcG9zaXRvcnksXG5cdFx0VW5pcXVlVmFsdWVzUmVwb3NpdG9yeSxcblx0XHRGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSxcblx0XHRRdWlja0ZpbHRlckVuYWJsZWRSZXBvc2l0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblxufVxuIl19