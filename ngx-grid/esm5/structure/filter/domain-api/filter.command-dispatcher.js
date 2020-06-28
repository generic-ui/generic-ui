/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from '../domain/config/set-config-filter.command';
import { RemoveAllFiltersCommand } from '../domain/core/remove-all/remove-all-filters.command';
import { AddFilterCommand } from '../domain/core/add/add-filter.command';
import { RemoveFilterCommand } from '../domain/core/remove/remove-filter.command';
import { SelectAllUniqueFilterCommand } from '../domain/unique/select-all/select-all-unique-filter.command';
import { UnselectAllUniqueFilterCommand } from '../domain/unique/unselect-all/unselect-all-unique-filter.command';
import { SelectUniqueFilterCommand } from '../domain/unique/select/select-unique-filter.command';
import { UnselectUniqueFilterCommand } from '../domain/unique/unselect/unselect-unique-filter.command';
var FilterCommandDispatcher = /** @class */ (function () {
    function FilterCommandDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.setFilteringEnabled = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigFilterCommand(structureId, config));
    };
    /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.add = /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, filterTypeId, value, structureId) {
        this.commandDispatcher.dispatch(new AddFilterCommand(structureId, fieldId, filterTypeId, value));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.removeAllFilters = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new RemoveAllFiltersCommand(structureId));
    };
    /**
     * @param {?} filterId
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.removeFilter = /**
     * @param {?} filterId
     * @param {?} structureId
     * @return {?}
     */
    function (filterId, structureId) {
        this.commandDispatcher.dispatch(new RemoveFilterCommand(structureId, filterId));
    };
    /**
     * @param {?} fieldId
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.selectAllUniqueFilter = /**
     * @param {?} fieldId
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, structureId) {
        this.commandDispatcher.dispatch(new SelectAllUniqueFilterCommand(structureId, fieldId));
    };
    /**
     * @param {?} fieldId
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.unselectAllUniqueFilter = /**
     * @param {?} fieldId
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, structureId) {
        this.commandDispatcher.dispatch(new UnselectAllUniqueFilterCommand(structureId, fieldId));
    };
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.selectUniqueFilter = /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new SelectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    };
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandDispatcher.prototype.unselectUniqueFilter = /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new UnselectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    };
    FilterCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FilterCommandDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return FilterCommandDispatcher;
}());
export { FilterCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterCommandDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFbEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHdkc7SUFHQyxpQ0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQscURBQW1COzs7OztJQUFuQixVQUFvQixNQUFvQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Ozs7OztJQUVELHFDQUFHOzs7Ozs7O0lBQUgsVUFBSSxPQUFnQixFQUFFLFlBQTBCLEVBQUUsS0FBVSxFQUFFLFdBQXdCO1FBQ3JGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRUQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLFdBQXdCO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVELDhDQUFZOzs7OztJQUFaLFVBQWEsUUFBa0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7O0lBRUQsdURBQXFCOzs7OztJQUFyQixVQUFzQixPQUFnQixFQUFFLFdBQXdCO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFRCx5REFBdUI7Ozs7O0lBQXZCLFVBQXdCLE9BQWdCLEVBQUUsV0FBd0I7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7Ozs7SUFFRCxvREFBa0I7Ozs7OztJQUFsQixVQUFtQixPQUFnQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFDMUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDOzs7Ozs7O0lBRUQsc0RBQW9COzs7Ozs7SUFBcEIsVUFBcUIsT0FBZ0IsRUFBRSxhQUE0QixFQUFFLFdBQXdCO1FBQzVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Z0JBcENELFVBQVU7Ozs7Z0JBbEJGLGlCQUFpQjs7SUF5RDFCLDhCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F0Q1ksdUJBQXVCOzs7Ozs7SUFFdkIsb0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4vZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZXRDb25maWdGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL3JlbW92ZS1hbGwvcmVtb3ZlLWFsbC1maWx0ZXJzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgQWRkRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL2FkZC9hZGQtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi9kb21haW4vZmlsdGVyLmlkJztcbmltcG9ydCB7IFJlbW92ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29yZS9yZW1vdmUvcmVtb3ZlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdW5pcXVlL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUtaWQnO1xuaW1wb3J0IHsgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi91bmlxdWUvc2VsZWN0L3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bnNlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldEZpbHRlcmluZ0VuYWJsZWQoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0YWRkKGZpZWxkSWQ6IEZpZWxkSWQsIGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBBZGRGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlKSk7XG5cdH1cblxuXHRyZW1vdmVBbGxGaWx0ZXJzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFJlbW92ZUFsbEZpbHRlcnNDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHRyZW1vdmVGaWx0ZXIoZmlsdGVySWQ6IEZpbHRlcklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWx0ZXJJZCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQpKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCkpO1xuXHR9XG5cblx0c2VsZWN0VW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQpKTtcblx0fVxuXG5cdHVuc2VsZWN0VW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCwgdW5pcXVlVmFsdWVJZCkpO1xuXHR9XG5cblxufVxuIl19