/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructurePreparedEntitiesSetEvent } from '../../../domain/source/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
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
            this.structurePreparedItemsRepository.setItems(preparedItems, event.getAggregateId());
        }
    };
    StructurePreparedItemsEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructurePreparedItemsEventHandler.ctorParameters = function () { return [
        { type: StructurePreparedItemsRepository }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFJekY7SUFHQyw0Q0FBb0IsZ0NBQWtFO1FBQWxFLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7SUFDdEYsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUNDLE9BQU8saUNBQWlDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxtREFBTTs7OztJQUFOLFVBQU8sS0FBd0M7UUFFOUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7O2dCQUV2RCxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBRTlDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3RGO0lBRUYsQ0FBQzs7Z0JBbkJELFVBQVU7Ozs7Z0JBSkYsZ0NBQWdDOztJQXdCekMseUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSxrQ0FBa0M7Ozs7OztJQUVsQyw4RUFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IFR5cGU8U3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgcHJlcGFyZWRJdGVtcyA9IGV2ZW50LmdldFByZXBhcmVkSXRlbXMoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeS5zZXRJdGVtcyhwcmVwYXJlZEl0ZW1zLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxufVxuIl19