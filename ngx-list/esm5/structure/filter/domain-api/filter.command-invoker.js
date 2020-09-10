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
var FilterCommandInvoker = /** @class */ (function () {
    function FilterCommandInvoker(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    FilterCommandInvoker.prototype.setFilteringEnabled = /**
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
    FilterCommandInvoker.prototype.add = /**
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
    FilterCommandInvoker.prototype.removeAllFilters = /**
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
    FilterCommandInvoker.prototype.removeFilter = /**
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
    FilterCommandInvoker.prototype.selectAllUniqueFilter = /**
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
    FilterCommandInvoker.prototype.unselectAllUniqueFilter = /**
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
    FilterCommandInvoker.prototype.selectUniqueFilter = /**
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
    FilterCommandInvoker.prototype.unselectUniqueFilter = /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new UnselectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    };
    FilterCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FilterCommandInvoker.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return FilterCommandInvoker;
}());
export { FilterCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterCommandInvoker.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixNQUFNLG9CQUFvQixDQUFDO0FBSXZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRWxILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBR3ZHO0lBR0MsOEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELGtEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsTUFBb0IsRUFBRSxXQUF3QjtRQUNqRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7Ozs7SUFFRCxrQ0FBRzs7Ozs7OztJQUFILFVBQUksT0FBZ0IsRUFBRSxZQUEwQixFQUFFLEtBQVUsRUFBRSxXQUF3QjtRQUNyRixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixXQUF3QjtRQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFRCwyQ0FBWTs7Ozs7SUFBWixVQUFhLFFBQWtCLEVBQUUsV0FBd0I7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7OztJQUVELG9EQUFxQjs7Ozs7SUFBckIsVUFBc0IsT0FBZ0IsRUFBRSxXQUF3QjtRQUMvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsc0RBQXVCOzs7OztJQUF2QixVQUF3QixPQUFnQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw4QkFBOEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7O0lBRUQsaURBQWtCOzs7Ozs7SUFBbEIsVUFBbUIsT0FBZ0IsRUFBRSxhQUE0QixFQUFFLFdBQXdCO1FBQzFGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQzs7Ozs7OztJQUVELG1EQUFvQjs7Ozs7O0lBQXBCLFVBQXFCLE9BQWdCLEVBQUUsYUFBNEIsRUFBRSxXQUF3QjtRQUM1RixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7O2dCQXBDRCxVQUFVOzs7O2dCQWxCRixpQkFBaUI7O0lBeUQxQiwyQkFBQztDQUFBLEFBdkNELElBdUNDO1NBdENZLG9CQUFvQjs7Ozs7O0lBRXBCLGlEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29uZmlnL3NldC1jb25maWctZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFJlbW92ZUFsbEZpbHRlcnNDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvcmUvcmVtb3ZlLWFsbC9yZW1vdmUtYWxsLWZpbHRlcnMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBBZGRGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvcmUvYWRkL2FkZC1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uL2RvbWFpbi9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgUmVtb3ZlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL3JlbW92ZS9yZW1vdmUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi91bmlxdWUvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdW5pcXVlL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtdW5pcXVlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuLi9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS9zZWxlY3Qvc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRGaWx0ZXJpbmdFbmFibGVkKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb25maWdGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdGFkZChmaWVsZElkOiBGaWVsZElkLCBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQWRkRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSkpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcklkOiBGaWx0ZXJJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVtb3ZlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmlsdGVySWQpKTtcblx0fVxuXG5cdHNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQpKTtcblx0fVxuXG5cdHNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKSk7XG5cdH1cblxuXHR1bnNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQpKTtcblx0fVxuXG5cbn1cbiJdfQ==