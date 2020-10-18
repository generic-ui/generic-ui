/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ActiveFiltersSetEvent } from '../../domain/core/active-filters-set.event';
import { ActiveFilterRepository } from './active-filter.repository';
export class ActiveFiltersSetEventHandler {
    /**
     * @param {?} activeFilterRepository
     */
    constructor(activeFilterRepository) {
        this.activeFilterRepository = activeFilterRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ActiveFiltersSetEvent;
    }
    /**
     * @param {?} activeFiltersSetEvent
     * @return {?}
     */
    handle(activeFiltersSetEvent) {
        if (activeFiltersSetEvent.ofMessageType('ActiveFiltersSetEvent')) {
            /** @type {?} */
            let activeFilters = activeFiltersSetEvent.getFilters();
            this.activeFilterRepository.next(activeFiltersSetEvent.getAggregateId(), activeFilters);
        }
    }
}
ActiveFiltersSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActiveFiltersSetEventHandler.ctorParameters = () => [
    { type: ActiveFilterRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveFiltersSetEventHandler.prototype.activeFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXBFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFeEMsWUFBNkIsc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDM0UsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLHFCQUE0QztRQUVsRCxJQUFJLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFOztnQkFFN0QsYUFBYSxHQUF5QyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUU7WUFFNUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN4RjtJQUNGLENBQUM7OztZQWxCRCxVQUFVOzs7O1lBSEYsc0JBQXNCOzs7Ozs7O0lBTWxCLDhEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vY29yZS9hY3RpdmUtZmlsdGVycy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vYWN0aXZlLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4vYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlcnNTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEFjdGl2ZUZpbHRlcnNTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyUmVwb3NpdG9yeTogQWN0aXZlRmlsdGVyUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEFjdGl2ZUZpbHRlcnNTZXRFdmVudD4ge1xuXHRcdHJldHVybiBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoYWN0aXZlRmlsdGVyc1NldEV2ZW50OiBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChhY3RpdmVGaWx0ZXJzU2V0RXZlbnQub2ZNZXNzYWdlVHlwZSgnQWN0aXZlRmlsdGVyc1NldEV2ZW50JykpIHtcblxuXHRcdFx0bGV0IGFjdGl2ZUZpbHRlcnM6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiA9IGFjdGl2ZUZpbHRlcnNTZXRFdmVudC5nZXRGaWx0ZXJzKCk7XG5cblx0XHRcdHRoaXMuYWN0aXZlRmlsdGVyUmVwb3NpdG9yeS5uZXh0KGFjdGl2ZUZpbHRlcnNTZXRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBhY3RpdmVGaWx0ZXJzKTtcblx0XHR9XG5cdH1cblxufVxuIl19