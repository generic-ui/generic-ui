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
export class FilterCommandDispatcher {
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
FilterCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FilterCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterCommandDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDNUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFbEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFJdkcsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVuQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFvQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Ozs7OztJQUVELEdBQUcsQ0FBQyxPQUFnQixFQUFFLFlBQTBCLEVBQUUsS0FBVSxFQUFFLFdBQXdCO1FBQ3JGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsV0FBd0I7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFFBQWtCLEVBQUUsV0FBd0I7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDL0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVELHVCQUF1QixDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxPQUFnQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFDMUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDOzs7Ozs7O0lBRUQsb0JBQW9CLENBQUMsT0FBZ0IsRUFBRSxhQUE0QixFQUFFLFdBQXdCO1FBQzVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7O1lBcENELFVBQVU7Ozs7WUFsQkYsaUJBQWlCOzs7Ozs7O0lBcUJiLG9EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jb25maWcvc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29yZS9yZW1vdmUtYWxsL3JlbW92ZS1hbGwtZmlsdGVycy5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEFkZEZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY29yZS9hZGQvYWRkLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi4vZG9tYWluL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBSZW1vdmVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2NvcmUvcmVtb3ZlL3JlbW92ZS1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3VuaXF1ZS9zZWxlY3QtYWxsL3NlbGVjdC1hbGwtdW5pcXVlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi91bmlxdWUvdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4uL2RvbWFpbi91bmlxdWUvdW5pcXVlLXZhbHVlLWlkJztcbmltcG9ydCB7IFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdW5pcXVlL3NlbGVjdC9zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi91bmlxdWUvdW5zZWxlY3QvdW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRGaWx0ZXJpbmdFbmFibGVkKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb25maWdGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdGFkZChmaWVsZElkOiBGaWVsZElkLCBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQWRkRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSkpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcklkOiBGaWx0ZXJJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVtb3ZlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmlsdGVySWQpKTtcblx0fVxuXG5cdHNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQpKTtcblx0fVxuXG5cdHNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKSk7XG5cdH1cblxuXHR1bnNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQpKTtcblx0fVxuXG5cbn1cbiJdfQ==