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
import { FilterTypeArchive } from './type/filter-type.archive';
import { ActiveFilterArchive } from './active/active-filter.archive';
import { UniqueValuesArchive } from './unique/unique-values.archive';
import { FilterEnabledArchive } from './read/filter-enabled.archive';
import { QuickFilterEnabledArchive } from './read/quick-filter-enabled.archive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFtQmhGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQWpCN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtpQkFDekI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2ZpbHRlci5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4vZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlQXJjaGl2ZSB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlckFyY2hpdmUgfSBmcm9tICcuL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzQXJjaGl2ZSB9IGZyb20gJy4vdW5pcXVlL3VuaXF1ZS12YWx1ZXMuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vcmVhZC9maWx0ZXItZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3JlYWQvcXVpY2stZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmlsdGVyRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdEZpbHRlcldhcmVob3VzZSxcblx0XHRGaWx0ZXJUeXBlQXJjaGl2ZSxcblx0XHRBY3RpdmVGaWx0ZXJBcmNoaXZlLFxuXHRcdFVuaXF1ZVZhbHVlc0FyY2hpdmUsXG5cdFx0RmlsdGVyRW5hYmxlZEFyY2hpdmUsXG5cdFx0UXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG59XG4iXX0=