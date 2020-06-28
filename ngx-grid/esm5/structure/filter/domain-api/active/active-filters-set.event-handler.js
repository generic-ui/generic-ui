/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ActiveFiltersSetEvent } from '../../domain/core/active-filters-set.event';
import { ActiveFilterRepository } from './active-filter.repository';
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
        { type: ActiveFilterRepository }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluLWFwaS9hY3RpdmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHcEU7SUFHQyxzQ0FBNkIsc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDM0UsQ0FBQzs7OztJQUVELCtDQUFROzs7SUFBUjtRQUNDLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCw2Q0FBTTs7OztJQUFOLFVBQU8scUJBQTRDO1FBRWxELElBQUkscUJBQXFCLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7O2dCQUU3RCxhQUFhLEdBQXlDLHFCQUFxQixDQUFDLFVBQVUsRUFBRTtZQUU1RixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0YsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBSEYsc0JBQXNCOztJQXVCL0IsbUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSw0QkFBNEI7Ozs7OztJQUU1Qiw4REFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvcmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlclJlcG9zaXRvcnk6IEFjdGl2ZUZpbHRlclJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxBY3RpdmVGaWx0ZXJzU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gQWN0aXZlRmlsdGVyc1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGFjdGl2ZUZpbHRlcnNTZXRFdmVudDogQWN0aXZlRmlsdGVyc1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoYWN0aXZlRmlsdGVyc1NldEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0FjdGl2ZUZpbHRlcnNTZXRFdmVudCcpKSB7XG5cblx0XHRcdGxldCBhY3RpdmVGaWx0ZXJzOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBhY3RpdmVGaWx0ZXJzU2V0RXZlbnQuZ2V0RmlsdGVycygpO1xuXG5cdFx0XHR0aGlzLmFjdGl2ZUZpbHRlclJlcG9zaXRvcnkubmV4dChhY3RpdmVGaWx0ZXJzU2V0RXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgYWN0aXZlRmlsdGVycyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==