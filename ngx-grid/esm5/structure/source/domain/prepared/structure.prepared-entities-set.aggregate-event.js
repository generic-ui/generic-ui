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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUc1RjtJQUFnRSxzRUFBMkI7SUFFMUYsb0RBQVksV0FBd0IsRUFDaEIsYUFBc0M7UUFEMUQsWUFFQyxrQkFBTSxXQUFXLEVBQUUsNENBQTRDLENBQUMsU0FDaEU7UUFGbUIsbUJBQWEsR0FBYixhQUFhLENBQXlCOztJQUUxRCxDQUFDOzs7O0lBRUQsa0VBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELHFFQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFRixpREFBQztBQUFELENBQUMsQUFmRCxDQUFnRSxjQUFjLEdBZTdFOzs7Ozs7O0lBWkcsbUVBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHByZXBhcmVkSXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMucHJlcGFyZWRJdGVtcyk7XG5cdH1cblxuXHRnZXRQcmVwYXJlZEl0ZW1zKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5wcmVwYXJlZEl0ZW1zO1xuXHR9XG5cbn1cbiJdfQ==