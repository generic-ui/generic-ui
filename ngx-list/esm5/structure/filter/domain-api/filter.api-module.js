/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FilterCommandInvoker } from './filter.command-invoker';
import { FilterDomainModule } from '../domain/filter.domain-module';
import { FilterWarehouse } from './filter.warehouse';
import { FilterTypeRepository } from './type/filter-type.repository';
import { ActiveFilterRepository } from './active/active-filter.repository';
import { UniqueValuesRepository } from './unique/unique-values.repository';
import { FilterEnabledRepository } from './read/filter-enabled.repository';
import { QuickFilterEnabledRepository } from './read/quick-filter-enabled.repository';
var FilterApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(FilterApiModule, _super);
    function FilterApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FilterDomainModule
                    ],
                    providers: [
                        FilterCommandInvoker,
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
    return FilterApiModule;
}(ApiModule));
export { FilterApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluLWFwaS9maWx0ZXIuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFdEY7SUFpQnFDLDJDQUFTO0lBakI5Qzs7SUFvQkEsQ0FBQzs7Z0JBcEJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixrQkFBa0I7cUJBQ2xCO29CQUNELFNBQVMsRUFBRTt3QkFDVixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2Qiw0QkFBNEI7cUJBQzVCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFJRCxzQkFBQztDQUFBLEFBcEJELENBaUJxQyxTQUFTLEdBRzdDO1NBSFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4vZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZmlsdGVyLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZXBvc2l0b3J5IH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpbHRlckVuYWJsZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2ZpbHRlci1lbmFibGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9xdWljay1maWx0ZXItZW5hYmxlZC5yZXBvc2l0b3J5JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGaWx0ZXJEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0RmlsdGVyV2FyZWhvdXNlLFxuXHRcdEZpbHRlclR5cGVSZXBvc2l0b3J5LFxuXHRcdEFjdGl2ZUZpbHRlclJlcG9zaXRvcnksXG5cdFx0VW5pcXVlVmFsdWVzUmVwb3NpdG9yeSxcblx0XHRGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSxcblx0XHRRdWlja0ZpbHRlckVuYWJsZWRSZXBvc2l0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblxufVxuIl19