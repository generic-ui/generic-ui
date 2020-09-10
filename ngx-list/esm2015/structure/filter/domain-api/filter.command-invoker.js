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
export class FilterCommandInvoker {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setFilteringEnabled(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigFilterCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @param {?} structureId
     * @return {?}
     */
    add(fieldId, filterTypeId, value, structureId) {
        this.commandDispatcher.dispatch(new AddFilterCommand(structureId, fieldId, filterTypeId, value));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    removeAllFilters(structureId) {
        this.commandDispatcher.dispatch(new RemoveAllFiltersCommand(structureId));
    }
    /**
     * @param {?} filterId
     * @param {?} structureId
     * @return {?}
     */
    removeFilter(filterId, structureId) {
        this.commandDispatcher.dispatch(new RemoveFilterCommand(structureId, filterId));
    }
    /**
     * @param {?} fieldId
     * @param {?} structureId
     * @return {?}
     */
    selectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new SelectAllUniqueFilterCommand(structureId, fieldId));
    }
    /**
     * @param {?} fieldId
     * @param {?} structureId
     * @return {?}
     */
    unselectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new UnselectAllUniqueFilterCommand(structureId, fieldId));
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @param {?} structureId
     * @return {?}
     */
    selectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new SelectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @param {?} structureId
     * @return {?}
     */
    unselectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new UnselectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
}
FilterCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FilterCommandInvoker.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterCommandInvoker.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixNQUFNLG9CQUFvQixDQUFDO0FBSXZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRWxILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBSXZHLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsTUFBb0IsRUFBRSxXQUF3QjtRQUNqRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBZ0IsRUFBRSxZQUEwQixFQUFFLEtBQVUsRUFBRSxXQUF3QjtRQUNyRixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFdBQXdCO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxRQUFrQixFQUFFLFdBQXdCO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw4QkFBOEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBZ0IsRUFBRSxhQUE0QixFQUFFLFdBQXdCO1FBQzFGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQzs7Ozs7OztJQUVELG9CQUFvQixDQUFDLE9BQWdCLEVBQUUsYUFBNEIsRUFBRSxXQUF3QjtRQUM1RixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7OztZQXBDRCxVQUFVOzs7O1lBbEJGLGlCQUFpQjs7Ozs7OztJQXFCYixpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4vZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZXRDb25maWdGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL3JlbW92ZS1hbGwvcmVtb3ZlLWFsbC1maWx0ZXJzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgQWRkRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL2FkZC9hZGQtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi9kb21haW4vZmlsdGVyLmlkJztcbmltcG9ydCB7IFJlbW92ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29yZS9yZW1vdmUvcmVtb3ZlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdW5pcXVlL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUtaWQnO1xuaW1wb3J0IHsgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi91bmlxdWUvc2VsZWN0L3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bnNlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRhZGQoZmllbGRJZDogRmllbGRJZCwgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEFkZEZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUpKTtcblx0fVxuXG5cdHJlbW92ZUFsbEZpbHRlcnMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdHJlbW92ZUZpbHRlcihmaWx0ZXJJZDogRmlsdGVySWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFJlbW92ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpbHRlcklkKSk7XG5cdH1cblxuXHRzZWxlY3RBbGxVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCkpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkKSk7XG5cdH1cblxuXHRzZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCwgdW5pcXVlVmFsdWVJZCkpO1xuXHR9XG5cblx0dW5zZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKSk7XG5cdH1cblxuXG59XG4iXX0=