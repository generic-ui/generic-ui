/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterTypeRepository } from './filter-type.repository';
import { FilterTypeMap } from './filter-type-map';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
var FilterTypeConfigFilterSetEventHandler = /** @class */ (function () {
    function FilterTypeConfigFilterSetEventHandler(filterTypeRepository) {
        this.filterTypeRepository = filterTypeRepository;
    }
    /**
     * @return {?}
     */
    FilterTypeConfigFilterSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return FilterTypesInitedEvent;
    };
    /**
     * @param {?} filterTypesInitedEvent
     * @return {?}
     */
    FilterTypeConfigFilterSetEventHandler.prototype.handle = /**
     * @param {?} filterTypesInitedEvent
     * @return {?}
     */
    function (filterTypesInitedEvent) {
        if (filterTypesInitedEvent.ofMessageType('FilterTypesInitedEvent')) {
            /** @type {?} */
            var map = filterTypesInitedEvent.getMap();
            this.filterTypeRepository.next(filterTypesInitedEvent.getAggregateId(), new FilterTypeMap(map));
        }
    };
    FilterTypeConfigFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FilterTypeConfigFilterSetEventHandler.ctorParameters = function () { return [
        { type: FilterTypeRepository }
    ]; };
    return FilterTypeConfigFilterSetEventHandler;
}());
export { FilterTypeConfigFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypeConfigFilterSetEventHandler.prototype.filterTypeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL3R5cGUvZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJMUY7SUFHQywrQ0FBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELHdEQUFROzs7SUFBUjtRQUNDLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxzREFBTTs7OztJQUFOLFVBQU8sc0JBQThDO1FBRXBELElBQUksc0JBQXNCLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7O2dCQUU3RCxHQUFHLEdBQTRDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTtZQUVwRixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEc7SUFDRixDQUFDOztnQkFsQkQsVUFBVTs7OztnQkFORixvQkFBb0I7O0lBMEI3Qiw0Q0FBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLHFDQUFxQzs7Ozs7O0lBRXJDLHFFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVwb3NpdG9yeSB9IGZyb20gJy4vZmlsdGVyLXR5cGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFwIH0gZnJvbSAnLi9maWx0ZXItdHlwZS1tYXAnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZXNJbml0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi90eXBlL2luaXQvZmlsdGVyLXR5cGVzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmlsdGVyVHlwZXNJbml0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZVJlcG9zaXRvcnk6IEZpbHRlclR5cGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8RmlsdGVyVHlwZXNJbml0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGZpbHRlclR5cGVzSW5pdGVkRXZlbnQ6IEZpbHRlclR5cGVzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChmaWx0ZXJUeXBlc0luaXRlZEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpbHRlclR5cGVzSW5pdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBtYXA6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+PiA9IGZpbHRlclR5cGVzSW5pdGVkRXZlbnQuZ2V0TWFwKCk7XG5cblx0XHRcdHRoaXMuZmlsdGVyVHlwZVJlcG9zaXRvcnkubmV4dChmaWx0ZXJUeXBlc0luaXRlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIG5ldyBGaWx0ZXJUeXBlTWFwKG1hcCkpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=