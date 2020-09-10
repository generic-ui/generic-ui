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
export class PagingApiModule extends ApiModule {
}
PagingApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    PagingDomainModule
                ],
                providers: [
                    PagingCommandInvoker,
                    PagingWarehouse,
                    PagingEventRepository,
                    PagingRepository,
                    PagingConverter
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFrQjVELE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQWhCN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixxQkFBcUI7b0JBRXJCLGdCQUFnQjtvQkFDaEIsZUFBZTtpQkFDZjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4vcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vcGFnaW5nLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9yZWFkL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9wYWdpbmcucmVwb3NpdG9yeSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UGFnaW5nRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFBhZ2luZ1dhcmVob3VzZSxcblx0XHRQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cblx0XHRQYWdpbmdSZXBvc2l0b3J5LFxuXHRcdFBhZ2luZ0NvbnZlcnRlclxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG5cbn1cbiJdfQ==