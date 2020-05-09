/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HermesModule } from '@generic-ui/hermes';
import { PagingManagerFactory } from './paging.manager-factory';
import { PagingDispatcher } from './paging.dispatcher';
import { SetPagingCommandHandler } from './set/set-paging.command-handler';
import { NextPageCommandHandler } from './next-page/next-page.command-handler';
import { PrevPageCommandHandler } from './prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from './change-pagesize/change-pagesize.command-handler';
var PagingDomainModule = /** @class */ (function () {
    function PagingDomainModule() {
    }
    /**
     * @return {?}
     */
    PagingDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SetPagingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(NextPageCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(PrevPageCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(ChangePagesizeCommandHandler, 'StructureAggregate'));
    };
    PagingDomainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        PagingDispatcher,
                        PagingManagerFactory
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return PagingDomainModule;
}());
export { PagingDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR2pHO0lBQUE7SUFzQkEsQ0FBQzs7OztJQVRPLGtDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsRUFDbEYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLEVBQ2pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUNqRixZQUFZLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsb0JBQW9CLENBQUMsRUFDekY7SUFDSCxDQUFDOztnQkFwQkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFNBQVMsRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOztJQVlELHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FYWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4vcGFnaW5nLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2V0UGFnaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC9zZXQtcGFnaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBQcmV2UGFnZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9wcmV2LXBhZ2UvcHJldi1wYWdlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRQYWdpbmdEaXNwYXRjaGVyLFxuXHRcdFBhZ2luZ01hbmFnZXJGYWN0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RvbWFpbk1vZHVsZSB7XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0UGFnaW5nQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKE5leHRQYWdlQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFByZXZQYWdlQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENoYW5nZVBhZ2VzaXplQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKVxuXHRcdF07XG5cdH1cblxufVxuIl19