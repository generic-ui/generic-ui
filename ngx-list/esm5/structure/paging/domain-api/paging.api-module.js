/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { PagingCommandDispatcher } from './paging.command-dispatcher';
import { PagingWarehouse } from './paging.warehouse';
import { PagingEventRepository } from './paging.event-repository';
import { PagingDomainModule } from '../domain/paging.domain-module';
import { PagingConverter } from './read/paging.converter';
import { PagingRepository } from './read/paging.repository';
var PagingApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(PagingApiModule, _super);
    function PagingApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagingApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        PagingDomainModule
                    ],
                    providers: [
                        PagingCommandDispatcher,
                        PagingWarehouse,
                        PagingEventRepository,
                        PagingRepository,
                        PagingConverter
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return PagingApiModule;
}(ApiModule));
export { PagingApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVEO0lBZ0JxQywyQ0FBUztJQWhCOUM7O0lBbUJBLENBQUM7O2dCQW5CQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osa0JBQWtCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsdUJBQXVCO3dCQUN2QixlQUFlO3dCQUNmLHFCQUFxQjt3QkFFckIsZ0JBQWdCO3dCQUNoQixlQUFlO3FCQUNmO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFJRCxzQkFBQztDQUFBLEFBbkJELENBZ0JxQyxTQUFTLEdBRzdDO1NBSFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vcGFnaW5nLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9yZWFkL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUGFnaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9wYWdpbmcucmVwb3NpdG9yeSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UGFnaW5nRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFBhZ2luZ1dhcmVob3VzZSxcblx0XHRQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cblx0XHRQYWdpbmdSZXBvc2l0b3J5LFxuXHRcdFBhZ2luZ0NvbnZlcnRlclxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG5cbn1cbiJdfQ==