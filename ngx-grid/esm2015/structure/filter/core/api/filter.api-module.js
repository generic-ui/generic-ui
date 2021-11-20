import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FilterCommandInvoker } from './filter.command-invoker';
import { FilterDomainModule } from '../domain/filter.domain-module';
import { FilterWarehouse } from './filter.warehouse';
import { FilterTypeArchive } from '../domain-read/type/filter-type.archive';
import { ActiveFilterArchive } from '../domain-read/active/active-filter.archive';
import { UniqueValueCollectionArchive } from '../domain-read/unique/unique-value-collection.archive';
import { FilterEnabledArchive } from '../domain-read/config/filter-enabled.archive';
import { QuickFilterEnabledArchive } from '../domain-read/quick-filter/quick-filter-enabled.archive';
import { FilterDomainWarehouse } from '../domain-read/filter.domain-warehouse';
import { FilterDomainCommandInvoker } from '../domain/filter.domain-command-invoker';
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
                        useClass: FilterDomainCommandInvoker
                    },
                    {
                        provide: FilterWarehouse,
                        useClass: FilterDomainWarehouse
                    },
                    FilterTypeArchive,
                    ActiveFilterArchive,
                    UniqueValueCollectionArchive,
                    FilterEnabledArchive,
                    QuickFilterEnabledArchive,
                    FilterIntegration
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQTBCMUUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUzs7O1lBeEI3QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLDBCQUEwQjtxQkFDcEM7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQy9CO29CQUNELGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQiw0QkFBNEI7b0JBQzVCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixpQkFBaUI7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpbHRlckRvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9maWx0ZXIuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4tcmVhZC90eXBlL2ZpbHRlci10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVDb2xsZWN0aW9uQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3VuaXF1ZS91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvY29uZmlnL2ZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3F1aWNrLWZpbHRlci9xdWljay1maWx0ZXItZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlckRvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2ZpbHRlci5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlckRvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL2ZpbHRlci5kb21haW4tY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpbHRlckludGVncmF0aW9uIH0gZnJvbSAnLi4vYXBpLWludGVncmF0aW9uL2ZpbHRlci5pbnRlZ3JhdGlvbic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmlsdGVyRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IEZpbHRlckRvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogRmlsdGVyRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHRGaWx0ZXJUeXBlQXJjaGl2ZSxcblx0XHRBY3RpdmVGaWx0ZXJBcmNoaXZlLFxuXHRcdFVuaXF1ZVZhbHVlQ29sbGVjdGlvbkFyY2hpdmUsXG5cdFx0RmlsdGVyRW5hYmxlZEFyY2hpdmUsXG5cdFx0UXVpY2tGaWx0ZXJFbmFibGVkQXJjaGl2ZSxcblx0XHRGaWx0ZXJJbnRlZ3JhdGlvblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG59XG4iXX0=