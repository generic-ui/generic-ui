/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaHorizontalGridSetEvent } from './schema-horizontal-grid-set.event';
import { SchemaAggregateEvent } from '../../schema.aggregate-event';
var SchemaHorizontalGridSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaHorizontalGridSetAggregateEvent, _super);
    function SchemaHorizontalGridSetAggregateEvent(schemaId, horizontalGrid) {
        var _this = _super.call(this, schemaId, 'SchemaHorizontalGridSetEvent') || this;
        _this.horizontalGrid = horizontalGrid;
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaHorizontalGridSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SchemaHorizontalGridSetEvent(this.getAggregateId(), this.horizontalGrid);
    };
    return SchemaHorizontalGridSetAggregateEvent;
}(SchemaAggregateEvent));
export { SchemaHorizontalGridSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetAggregateEvent.prototype.horizontalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3BFO0lBQTJELGlFQUFvQjtJQUU5RSwrQ0FBWSxRQUFrQixFQUNWLGNBQXVCO1FBRDNDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLDhCQUE4QixDQUFDLFNBQy9DO1FBRm1CLG9CQUFjLEdBQWQsY0FBYyxDQUFTOztJQUUzQyxDQUFDOzs7O0lBRUQsNkRBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNGLDRDQUFDO0FBQUQsQ0FBQyxBQVZELENBQTJELG9CQUFvQixHQVU5RTs7Ozs7OztJQVBHLCtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc2NoZW1hLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFNjaGVtYUhvcml6b250YWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGhvcml6b250YWxHcmlkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5ob3Jpem9udGFsR3JpZCk7XG5cdH1cbn1cbiJdfQ==