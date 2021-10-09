/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBMkI1RixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUFTOzs7WUF6QjdDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixrQkFBa0I7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUUsMEJBQTBCO3FCQUNwQztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLHFCQUFxQjtxQkFDL0I7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsUUFBUSxFQUFFLDJCQUEyQjtxQkFDckM7b0JBRUQsZ0JBQWdCO29CQUNoQixlQUFlO2lCQUNmO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4vcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9wYWdpbmcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3BhZ2luZy5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL3BhZ2luZy5kb21haW4uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3BhZ2luZy5kb21haW4uZXZlbnQtcmVwb3NpdG9yeSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UGFnaW5nRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IFBhZ2luZ0RvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBQYWdpbmdXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogUGFnaW5nRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogUGFnaW5nRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fSxcblxuXHRcdFBhZ2luZ1JlcG9zaXRvcnksXG5cdFx0UGFnaW5nQ29udmVydGVyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0FwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblxufVxuIl19