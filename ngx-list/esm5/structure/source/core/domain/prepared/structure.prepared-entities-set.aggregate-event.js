/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructurePreparedEntitiesSetEvent } from './structure.prepared-entities-set.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
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
}(StructureAggregateEvent));
export { StructurePreparedEntitiesSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetAggregateEvent.prototype.preparedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUc1RjtJQUFnRSxzRUFBdUI7SUFFdEYsb0RBQVksV0FBd0IsRUFDaEIsYUFBc0M7UUFEMUQsWUFFQyxrQkFBTSxXQUFXLEVBQUUsNENBQTRDLENBQUMsU0FDaEU7UUFGbUIsbUJBQWEsR0FBYixhQUFhLENBQXlCOztJQUUxRCxDQUFDOzs7O0lBRUQsa0VBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELHFFQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFRixpREFBQztBQUFELENBQUMsQUFmRCxDQUFnRSx1QkFBdUIsR0FldEY7Ozs7Ozs7SUFaRyxtRUFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwcmVwYXJlZEl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnByZXBhcmVkSXRlbXMpO1xuXHR9XG5cblx0Z2V0UHJlcGFyZWRJdGVtcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlcGFyZWRJdGVtcztcblx0fVxuXG59XG4iXX0=