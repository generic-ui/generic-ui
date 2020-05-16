/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { PagingManagerFactory } from './paging.manager-factory';
import { PagingDispatcher } from './paging.dispatcher';
import { SetPagingCommandHandler } from './set/set-paging.command-handler';
import { NextPageCommandHandler } from './next-page/next-page.command-handler';
import { PrevPageCommandHandler } from './prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from './change-pagesize/change-pagesize.command-handler';
var PagingDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(PagingDomainModule, _super);
    function PagingDomainModule() {
        return _super.call(this) || this;
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
    /** @nocollapse */
    PagingDomainModule.ctorParameters = function () { return []; };
    return PagingDomainModule;
}(DomainModule));
export { PagingDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUdqRztJQVd3Qyw4Q0FBWTtJQUVuRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLGtDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsRUFDbEYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLEVBQ2pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUNqRixZQUFZLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsb0JBQW9CLENBQUMsRUFDekY7SUFDSCxDQUFDOztnQkF4QkQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFNBQVMsRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOzs7O0lBZ0JELHlCQUFDO0NBQUEsQUExQkQsQ0FXd0MsWUFBWSxHQWVuRDtTQWZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9wYWdpbmcubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNldFBhZ2luZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQvc2V0LXBhZ2luZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vbmV4dC1wYWdlL25leHQtcGFnZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJldlBhZ2VDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vcHJldi1wYWdlL3ByZXYtcGFnZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kLWhhbmRsZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0UGFnaW5nRGlzcGF0Y2hlcixcblx0XHRQYWdpbmdNYW5hZ2VyRmFjdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdEb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRQYWdpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoTmV4dFBhZ2VDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoUHJldlBhZ2VDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=