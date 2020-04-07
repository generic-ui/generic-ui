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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFJekYsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGtCQUFrQjs7OztJQUV6RSxZQUFvQixnQ0FBa0U7UUFDckYsS0FBSyxFQUFFLENBQUM7UUFEVyxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO0lBRXRGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQXdDO1FBRTlDLElBQUksS0FBSyxZQUFZLGlDQUFpQyxFQUFFOztrQkFFakQsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUU5QyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN0RjtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBSEYsZ0NBQWdDOzs7Ozs7O0lBTTVCLDhFQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLnJlcG9zaXRvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50KSB7XG5cblx0XHRcdGNvbnN0IHByZXBhcmVkSXRlbXMgPSBldmVudC5nZXRQcmVwYXJlZEl0ZW1zKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkuc2V0SXRlbXMocHJlcGFyZWRJdGVtcywgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==