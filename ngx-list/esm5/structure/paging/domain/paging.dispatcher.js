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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHaEU7SUFHQywwQkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsb0NBQVM7Ozs7O0lBQVQsVUFBVSxXQUF3QixFQUFFLE1BQW9CO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCx5Q0FBYzs7Ozs7SUFBZCxVQUFlLFdBQXdCLEVBQUUsUUFBZ0I7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRUQsbUNBQVE7Ozs7SUFBUixVQUFTLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBVkYsaUJBQWlCOztJQStCMUIsdUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxnQkFBZ0I7Ozs7OztJQUVoQiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFNldFBhZ2luZ0NvbW1hbmQgfSBmcm9tICcuL3NldC9zZXQtcGFnaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb21tYW5kIH0gZnJvbSAnLi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmNvbW1hbmQnO1xuaW1wb3J0IHsgUHJldlBhZ2VDb21tYW5kIH0gZnJvbSAnLi9wcmV2LXBhZ2UvcHJldi1wYWdlLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmdEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0UGFnaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgcGFnaW5nOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRQYWdpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBwYWdpbmcpKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgcGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENoYW5nZVBhZ2VzaXplQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGFnZVNpemUpKTtcblx0fVxuXG5cdG5leHRQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IE5leHRQYWdlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0cHJldlBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUHJldlBhZ2VDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cbn1cbiJdfQ==