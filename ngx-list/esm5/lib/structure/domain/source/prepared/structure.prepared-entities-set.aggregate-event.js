/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from './structure.prepared-entities-set.event';
var StructurePreparedEntitiesSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePreparedEntitiesSetAggregateEvent, _super);
    function StructurePreparedEntitiesSetAggregateEvent(aggregateId, preparedItems) {
        var _this = _super.call(this, aggregateId, 'StructurePreparedEntitiesSetAggregateEvent') || this;
        _this.preparedItems = preparedItems;
        return _this;
    }
    /**
     * @return {?}
     */
    StructurePreparedEntitiesSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new StructurePreparedEntitiesSetEvent(this.getAggregateId(), this.preparedItems);
    };
    /**
     * @return {?}
     */
    StructurePreparedEntitiesSetAggregateEvent.prototype.getPreparedItems = /**
     * @return {?}
     */
    function () {
        return this.preparedItems;
    };
    return StructurePreparedEntitiesSetAggregateEvent;
}(AggregateEvent));
export { StructurePreparedEntitiesSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetAggregateEvent.prototype.preparedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFJOUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHNUY7SUFBZ0Usc0VBQTJCO0lBRTFGLG9EQUFZLFdBQXdCLEVBQ2hCLGFBQXNDO1FBRDFELFlBRUMsa0JBQU0sV0FBVyxFQUFFLDRDQUE0QyxDQUFDLFNBQ2hFO1FBRm1CLG1CQUFhLEdBQWIsYUFBYSxDQUF5Qjs7SUFFMUQsQ0FBQzs7OztJQUVELGtFQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7SUFFRCxxRUFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUYsaURBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBZ0UsY0FBYyxHQWU3RTs7Ozs7OztJQVpHLG1FQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwcmVwYXJlZEl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnByZXBhcmVkSXRlbXMpO1xuXHR9XG5cblx0Z2V0UHJlcGFyZWRJdGVtcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlcGFyZWRJdGVtcztcblx0fVxuXG59XG4iXX0=