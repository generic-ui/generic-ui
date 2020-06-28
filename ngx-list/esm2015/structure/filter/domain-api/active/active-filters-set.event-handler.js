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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluLWFwaS9hY3RpdmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJcEUsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUV4QyxZQUE2QixzQkFBOEM7UUFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUMzRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMscUJBQTRDO1FBRWxELElBQUkscUJBQXFCLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7O2dCQUU3RCxhQUFhLEdBQXlDLHFCQUFxQixDQUFDLFVBQVUsRUFBRTtZQUU1RixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0YsQ0FBQzs7O1lBbEJELFVBQVU7Ozs7WUFIRixzQkFBc0I7Ozs7Ozs7SUFNbEIsOERBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb3JlL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyc1NldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgQWN0aXZlRmlsdGVyc1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJSZXBvc2l0b3J5OiBBY3RpdmVGaWx0ZXJSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8QWN0aXZlRmlsdGVyc1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIEFjdGl2ZUZpbHRlcnNTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShhY3RpdmVGaWx0ZXJzU2V0RXZlbnQ6IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGFjdGl2ZUZpbHRlcnNTZXRFdmVudC5vZk1lc3NhZ2VUeXBlKCdBY3RpdmVGaWx0ZXJzU2V0RXZlbnQnKSkge1xuXG5cdFx0XHRsZXQgYWN0aXZlRmlsdGVyczogUmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+ID0gYWN0aXZlRmlsdGVyc1NldEV2ZW50LmdldEZpbHRlcnMoKTtcblxuXHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJSZXBvc2l0b3J5Lm5leHQoYWN0aXZlRmlsdGVyc1NldEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGFjdGl2ZUZpbHRlcnMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=