/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { PagingCommandInvoker } from './paging.command-invoker';
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
    return PagingApiModule;
}(ApiModule));
export { PagingApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RDtJQWdCcUMsMkNBQVM7SUFoQjlDOztJQW1CQSxDQUFDOztnQkFuQkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixxQkFBcUI7d0JBRXJCLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDZjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBSUQsc0JBQUM7Q0FBQSxBQW5CRCxDQWdCcUMsU0FBUyxHQUc3QztTQUhZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvcGFnaW5nLnJlcG9zaXRvcnknO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFBhZ2luZ0RvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRQYWdpbmdXYXJlaG91c2UsXG5cdFx0UGFnaW5nRXZlbnRSZXBvc2l0b3J5LFxuXG5cdFx0UGFnaW5nUmVwb3NpdG9yeSxcblx0XHRQYWdpbmdDb252ZXJ0ZXJcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcblxuXG59XG4iXX0=