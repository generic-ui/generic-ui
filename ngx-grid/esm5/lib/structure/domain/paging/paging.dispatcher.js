/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetPagingCommand } from './set/set-paging.command';
import { ChangePagesizeCommand } from './change-pagesize/change-pagesize.command';
import { NextPageCommand } from './next-page/next-page.command';
import { PrevPageCommand } from './prev-page/prev-page.command';
var PagingDispatcher = /** @class */ (function () {
    function PagingDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} paging
     * @return {?}
     */
    PagingDispatcher.prototype.setPaging = /**
     * @param {?} structureId
     * @param {?} paging
     * @return {?}
     */
    function (structureId, paging) {
        this.commandDispatcher.dispatch(new SetPagingCommand(structureId, paging));
    };
    /**
     * @param {?} structureId
     * @param {?} pageSize
     * @return {?}
     */
    PagingDispatcher.prototype.changePageSize = /**
     * @param {?} structureId
     * @param {?} pageSize
     * @return {?}
     */
    function (structureId, pageSize) {
        this.commandDispatcher.dispatch(new ChangePagesizeCommand(structureId, pageSize));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDispatcher.prototype.nextPage = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new NextPageCommand(structureId));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDispatcher.prototype.prevPage = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new PrevPageCommand(structureId));
    };
    PagingDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return PagingDispatcher;
}());
export { PagingDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3BhZ2luZy9wYWdpbmcuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR2hFO0lBR0MsMEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELG9DQUFTOzs7OztJQUFULFVBQVUsV0FBd0IsRUFBRSxNQUFvQjtRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQseUNBQWM7Ozs7O0lBQWQsVUFBZSxXQUF3QixFQUFFLFFBQWdCO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQVZGLGlCQUFpQjs7SUErQjFCLHVCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksZ0JBQWdCOzs7Ozs7SUFFaEIsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTZXRQYWdpbmdDb21tYW5kIH0gZnJvbSAnLi9zZXQvc2V0LXBhZ2luZy5jb21tYW5kJztcbmltcG9ydCB7IENoYW5nZVBhZ2VzaXplQ29tbWFuZCB9IGZyb20gJy4vY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kJztcbmltcG9ydCB7IE5leHRQYWdlQ29tbWFuZCB9IGZyb20gJy4vbmV4dC1wYWdlL25leHQtcGFnZS5jb21tYW5kJztcbmltcG9ydCB7IFByZXZQYWdlQ29tbWFuZCB9IGZyb20gJy4vcHJldi1wYWdlL3ByZXYtcGFnZS5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldFBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHBhZ2luZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0UGFnaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGFnaW5nKSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQoc3RydWN0dXJlSWQsIHBhZ2VTaXplKSk7XG5cdH1cblxuXHRuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBOZXh0UGFnZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdHByZXZQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFByZXZQYWdlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG59XG4iXX0=