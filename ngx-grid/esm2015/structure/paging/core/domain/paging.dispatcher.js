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
export class PagingDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} paging
     * @return {?}
     */
    setPaging(structureId, paging) {
        this.commandDispatcher.dispatch(new SetPagingCommand(structureId, paging));
    }
    /**
     * @param {?} structureId
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(structureId, pageSize) {
        this.commandDispatcher.dispatch(new ChangePagesizeCommand(structureId, pageSize));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    nextPage(structureId) {
        this.commandDispatcher.dispatch(new NextPageCommand(structureId));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    prevPage(structureId) {
        this.commandDispatcher.dispatch(new PrevPageCommand(structureId));
    }
}
PagingDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUloRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxXQUF3QixFQUFFLE1BQW9CO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBd0IsRUFBRSxRQUFnQjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUFwQkQsVUFBVTs7OztZQVZGLGlCQUFpQjs7Ozs7OztJQWFiLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTZXRQYWdpbmdDb21tYW5kIH0gZnJvbSAnLi9zZXQvc2V0LXBhZ2luZy5jb21tYW5kJztcbmltcG9ydCB7IENoYW5nZVBhZ2VzaXplQ29tbWFuZCB9IGZyb20gJy4vY2hhbmdlLXBhZ2VzaXplL2NoYW5nZS1wYWdlc2l6ZS5jb21tYW5kJztcbmltcG9ydCB7IE5leHRQYWdlQ29tbWFuZCB9IGZyb20gJy4vbmV4dC1wYWdlL25leHQtcGFnZS5jb21tYW5kJztcbmltcG9ydCB7IFByZXZQYWdlQ29tbWFuZCB9IGZyb20gJy4vcHJldi1wYWdlL3ByZXYtcGFnZS5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldFBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHBhZ2luZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0UGFnaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGFnaW5nKSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQoc3RydWN0dXJlSWQsIHBhZ2VTaXplKSk7XG5cdH1cblxuXHRuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBOZXh0UGFnZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdHByZXZQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFByZXZQYWdlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG59XG4iXX0=