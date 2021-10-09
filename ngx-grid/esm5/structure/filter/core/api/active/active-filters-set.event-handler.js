/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ActiveFiltersSetEvent } from '../../domain/core/active-filters-set.event';
import { ActiveFilterArchive } from './active-filter.archive';
var ActiveFiltersSetEventHandler = /** @class */ (function () {
    function ActiveFiltersSetEventHandler(activeFilterRepository) {
        this.activeFilterRepository = activeFilterRepository;
    }
    /**
     * @return {?}
     */
    ActiveFiltersSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ActiveFiltersSetEvent;
    };
    /**
     * @param {?} activeFiltersSetEvent
     * @return {?}
     */
    ActiveFiltersSetEventHandler.prototype.handle = /**
     * @param {?} activeFiltersSetEvent
     * @return {?}
     */
    function (activeFiltersSetEvent) {
        if (activeFiltersSetEvent.ofMessageType('ActiveFiltersSetEvent')) {
            /** @type {?} */
            var activeFilters = activeFiltersSetEvent.getFilters();
            this.activeFilterRepository.next(activeFiltersSetEvent.getAggregateId(), activeFilters);
        }
    };
    ActiveFiltersSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ActiveFiltersSetEventHandler.ctorParameters = function () { return [
        { type: ActiveFilterArchive }
    ]; };
    return ActiveFiltersSetEventHandler;
}());
export { ActiveFiltersSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveFiltersSetEventHandler.prototype.activeFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlEO0lBR0Msc0NBQTZCLHNCQUEyQztRQUEzQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXFCO0lBQ3hFLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsNkNBQU07Ozs7SUFBTixVQUFPLHFCQUE0QztRQUVsRCxJQUFJLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFOztnQkFFM0QsYUFBYSxHQUF5QyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUU7WUFFOUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN4RjtJQUNGLENBQUM7O2dCQWxCRCxVQUFVOzs7O2dCQUhGLG1CQUFtQjs7SUF1QjVCLG1DQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FuQlksNEJBQTRCOzs7Ozs7SUFFNUIsOERBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb3JlL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJBcmNoaXZlIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyc1NldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgQWN0aXZlRmlsdGVyc1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJSZXBvc2l0b3J5OiBBY3RpdmVGaWx0ZXJBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8QWN0aXZlRmlsdGVyc1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIEFjdGl2ZUZpbHRlcnNTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShhY3RpdmVGaWx0ZXJzU2V0RXZlbnQ6IEFjdGl2ZUZpbHRlcnNTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGFjdGl2ZUZpbHRlcnNTZXRFdmVudC5vZk1lc3NhZ2VUeXBlKCdBY3RpdmVGaWx0ZXJzU2V0RXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBhY3RpdmVGaWx0ZXJzOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBhY3RpdmVGaWx0ZXJzU2V0RXZlbnQuZ2V0RmlsdGVycygpO1xuXG5cdFx0XHR0aGlzLmFjdGl2ZUZpbHRlclJlcG9zaXRvcnkubmV4dChhY3RpdmVGaWx0ZXJzU2V0RXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgYWN0aXZlRmlsdGVycyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==