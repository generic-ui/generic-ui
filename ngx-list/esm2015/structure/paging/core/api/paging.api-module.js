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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUEyQjVGLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQXpCN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSwwQkFBMEI7cUJBQ3BDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixRQUFRLEVBQUUscUJBQXFCO3FCQUMvQjtvQkFDRDt3QkFDQyxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsMkJBQTJCO3FCQUNyQztvQkFFRCxnQkFBZ0I7b0JBQ2hCLGVBQWU7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvcGFnaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvcGFnaW5nLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9kb21haW4vcGFnaW5nLmRvbWFpbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvcGFnaW5nLmRvbWFpbi5ldmVudC1yZXBvc2l0b3J5JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRQYWdpbmdEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogUGFnaW5nRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBQYWdpbmdEb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBQYWdpbmdEb21haW5FdmVudFJlcG9zaXRvcnlcblx0XHR9LFxuXG5cdFx0UGFnaW5nUmVwb3NpdG9yeSxcblx0XHRQYWdpbmdDb252ZXJ0ZXJcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcblxuXG59XG4iXX0=