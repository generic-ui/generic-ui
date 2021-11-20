import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { PagingCommandInvoker } from './paging.command-invoker';
import { PagingWarehouse } from './paging.warehouse';
import { PagingEventRepository } from './paging.event-repository';
import { PagingDomainModule } from '../domain/paging.domain-module';
import { PagingConverter } from '../domain-read/paging.converter';
import { PagingRepository } from '../domain-read/paging.repository';
import { PagingDomainWarehouse } from '../domain-read/paging.domain-warehouse';
import { PagingDomainCommandInvoker } from '../domain/paging.domain.command-invoker';
import { PagingDomainEventRepository } from '../domain-read/paging.domain.event-repository';
export class PagingApiModule extends ApiModule {
}
PagingApiModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUEyQjVGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQXpCN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSwwQkFBMEI7cUJBQ3BDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixRQUFRLEVBQUUscUJBQXFCO3FCQUMvQjtvQkFDRDt3QkFDQyxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsMkJBQTJCO3FCQUNyQztvQkFFRCxnQkFBZ0I7b0JBQ2hCLGVBQWU7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3BhZ2luZy5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL3BhZ2luZy5kb21haW4uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3BhZ2luZy5kb21haW4uZXZlbnQtcmVwb3NpdG9yeSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UGFnaW5nRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IFBhZ2luZ0RvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBQYWdpbmdXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogUGFnaW5nRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogUGFnaW5nRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fSxcblxuXHRcdFBhZ2luZ1JlcG9zaXRvcnksXG5cdFx0UGFnaW5nQ29udmVydGVyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0FwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblxufVxuIl19