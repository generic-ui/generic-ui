/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class FilterApiModule extends ApiModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFtQnRGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQWpCN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLDRCQUE0QjtpQkFDNUI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2ZpbHRlci5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4vZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVwb3NpdG9yeSB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSB9IGZyb20gJy4vdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9maWx0ZXItZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFF1aWNrRmlsdGVyRW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvcXVpY2stZmlsdGVyLWVuYWJsZWQucmVwb3NpdG9yeSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmlsdGVyRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdEZpbHRlcldhcmVob3VzZSxcblx0XHRGaWx0ZXJUeXBlUmVwb3NpdG9yeSxcblx0XHRBY3RpdmVGaWx0ZXJSZXBvc2l0b3J5LFxuXHRcdFVuaXF1ZVZhbHVlc1JlcG9zaXRvcnksXG5cdFx0RmlsdGVyRW5hYmxlZFJlcG9zaXRvcnksXG5cdFx0UXVpY2tGaWx0ZXJFbmFibGVkUmVwb3NpdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG5cbn1cbiJdfQ==