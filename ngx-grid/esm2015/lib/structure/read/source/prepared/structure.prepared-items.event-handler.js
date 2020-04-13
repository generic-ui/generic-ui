/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from '../../../domain/source/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
export class StructurePreparedItemsEventHandler extends DomainEventHandler {
    /**
     * @param {?} structurePreparedItemsRepository
     */
    constructor(structurePreparedItemsRepository) {
        super();
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event instanceof StructurePreparedEntitiesSetEvent) {
            /** @type {?} */
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.setItems(preparedItems, event.getAggregateId());
        }
    }
}
StructurePreparedItemsEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePreparedItemsEventHandler.ctorParameters = () => [
    { type: StructurePreparedItemsRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsEventHandler.prototype.structurePreparedItemsRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFLekYsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGtCQUErQjs7OztJQUV0RixZQUFvQixnQ0FBa0U7UUFDckYsS0FBSyxFQUFFLENBQUM7UUFEVyxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO0lBRXRGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXdDO1FBRTlDLElBQUksS0FBSyxZQUFZLGlDQUFpQyxFQUFFOztrQkFFakQsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUU5QyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN0RjtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBSkYsZ0NBQWdDOzs7Ozs7O0lBTzVCLDhFQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCkge1xuXG5cdFx0XHRjb25zdCBwcmVwYXJlZEl0ZW1zID0gZXZlbnQuZ2V0UHJlcGFyZWRJdGVtcygpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5LnNldEl0ZW1zKHByZXBhcmVkSXRlbXMsIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=