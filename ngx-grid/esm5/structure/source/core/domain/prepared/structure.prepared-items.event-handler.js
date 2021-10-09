/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructurePreparedEntitiesSetEvent } from '../../domain/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsArchive } from './structure.prepared-items.archive';
var StructurePreparedItemsEventHandler = /** @class */ (function () {
    function StructurePreparedItemsEventHandler(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    /**
     * @return {?}
     */
    StructurePreparedItemsEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return StructurePreparedEntitiesSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructurePreparedItemsEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
            /** @type {?} */
            var preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.next(event.getAggregateId(), preparedItems);
        }
    };
    StructurePreparedItemsEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructurePreparedItemsEventHandler.ctorParameters = function () { return [
        { type: StructurePreparedItemsArchive }
    ]; };
    return StructurePreparedItemsEventHandler;
}());
export { StructurePreparedItemsEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsEventHandler.prototype.structurePreparedItemsRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJbkY7SUFHQyw0Q0FBb0IsZ0NBQStEO1FBQS9ELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBK0I7SUFDbkYsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUNDLE9BQU8saUNBQWlDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxtREFBTTs7OztJQUFOLFVBQU8sS0FBd0M7UUFFOUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7O2dCQUV2RCxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBRTlDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2xGO0lBRUYsQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBSkYsNkJBQTZCOztJQXdCdEMseUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSxrQ0FBa0M7Ozs7OztJQUVsQyw4RUFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBwcmVwYXJlZEl0ZW1zID0gZXZlbnQuZ2V0UHJlcGFyZWRJdGVtcygpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgcHJlcGFyZWRJdGVtcyk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==