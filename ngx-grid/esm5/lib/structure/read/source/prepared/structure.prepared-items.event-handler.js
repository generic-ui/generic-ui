/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from '../../../domain/source/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
var StructurePreparedItemsEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePreparedItemsEventHandler, _super);
    function StructurePreparedItemsEventHandler(structurePreparedItemsRepository) {
        var _this = _super.call(this) || this;
        _this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructurePreparedItemsEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructurePreparedEntitiesSetEvent) {
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
}(DomainEventHandler));
export { StructurePreparedItemsEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsEventHandler.prototype.structurePreparedItemsRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzFILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSXpGO0lBQ3dELDhEQUErQjtJQUV0Riw0Q0FBb0IsZ0NBQWtFO1FBQXRGLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixzQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDOztJQUV0RixDQUFDOzs7OztJQUVELG1EQUFNOzs7O0lBQU4sVUFBTyxLQUF3QztRQUU5QyxJQUFJLEtBQUssWUFBWSxpQ0FBaUMsRUFBRTs7Z0JBRWpELGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFFOUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFKRixnQ0FBZ0M7O0lBcUJ6Qyx5Q0FBQztDQUFBLEFBakJELENBQ3dELGtCQUFrQixHQWdCekU7U0FoQlksa0NBQWtDOzs7Ozs7SUFFbEMsOEVBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkSXRlbXNFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50KSB7XG5cblx0XHRcdGNvbnN0IHByZXBhcmVkSXRlbXMgPSBldmVudC5nZXRQcmVwYXJlZEl0ZW1zKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkuc2V0SXRlbXMocHJlcGFyZWRJdGVtcywgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==