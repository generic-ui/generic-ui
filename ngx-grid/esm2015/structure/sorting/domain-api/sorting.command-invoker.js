/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
import { SetSortingCommand } from '../domain/set-config/set-sorting.command';
import { ToggleSortCommand } from '../domain/toggle/toggle-sort.command';
import { SetSortOrderCommand } from '../domain/order/set-sort-order.command';
export class SortingCommandInvoker {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSortingConfig(config, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    toggleSort(fieldId, compositionId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder, compositionId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    }
}
SortingCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SortingCommandInvoker.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortingCommandInvoker.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi1hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixNQUFNLG9CQUFvQixDQUFDO0FBR3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTdFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBNkIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBcUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDbkYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0IsRUFBRSxhQUE2QixFQUFFLGNBQTJCLGlCQUFpQjtRQUN2RyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQWdCLEVBQUUsU0FBb0IsRUFBRSxhQUE2QixFQUFFLGNBQTJCLGlCQUFpQjtRQUMvSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDOzs7WUFoQkQsVUFBVTs7OztZQWJGLGlCQUFpQjs7Ozs7OztJQWdCYixrREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4vc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc2V0LWNvbmZpZy9zZXQtc29ydGluZy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IFNldFNvcnRPcmRlckNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vb3JkZXIvc2V0LXNvcnQtb3JkZXIuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U29ydGluZ0NvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChmaWVsZElkOiBGaWVsZElkLCBjb21wb3NpdGlvbklkPzogQ29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBUb2dnbGVTb3J0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgY29tcG9zaXRpb25JZCwgZmllbGRJZCkpO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRPcmRlcjogU29ydE9yZGVyLCBjb21wb3NpdGlvbklkPzogQ29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTb3J0T3JkZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkLCBzb3J0T3JkZXIpKTtcblx0fVxuXG59XG4iXX0=