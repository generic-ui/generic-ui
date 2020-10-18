/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var StructurePreparedEntitiesSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePreparedEntitiesSetEvent, _super);
    function StructurePreparedEntitiesSetEvent(aggregateId, preparedItems) {
        var _this = _super.call(this, aggregateId, 'StructurePreparedEntitiesSetEvent') || this;
        _this.preparedItems = preparedItems;
        return _this;
    }
    /**
     * @return {?}
     */
    StructurePreparedEntitiesSetEvent.prototype.getPreparedItems = /**
     * @return {?}
     */
    function () {
        return this.preparedItems;
    };
    return StructurePreparedEntitiesSetEvent;
}(StructureDomainEvent));
export { StructurePreparedEntitiesSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetEvent.prototype.preparedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBdUQsNkRBQW9CO0lBRTFFLDJDQUFZLFdBQXdCLEVBQ2hCLGFBQXNDO1FBRDFELFlBRUMsa0JBQU0sV0FBVyxFQUFFLG1DQUFtQyxDQUFDLFNBQ3ZEO1FBRm1CLG1CQUFhLEdBQWIsYUFBYSxDQUF5Qjs7SUFFMUQsQ0FBQzs7OztJQUVELDREQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDRix3Q0FBQztBQUFELENBQUMsQUFWRCxDQUF1RCxvQkFBb0IsR0FVMUU7Ozs7Ozs7SUFQRywwREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwcmVwYXJlZEl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRQcmVwYXJlZEl0ZW1zKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5wcmVwYXJlZEl0ZW1zO1xuXHR9XG59XG4iXX0=