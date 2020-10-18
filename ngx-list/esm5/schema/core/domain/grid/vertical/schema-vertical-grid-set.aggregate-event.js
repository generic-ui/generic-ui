/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaVerticalGridSetEvent } from './schema-vertical-grid-set.event';
import { SchemaAggregateEvent } from '../../schema.aggregate-event';
var SchemaVerticalGridSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaVerticalGridSetAggregateEvent, _super);
    function SchemaVerticalGridSetAggregateEvent(schemaId, verticalGrid) {
        var _this = _super.call(this, schemaId, 'SchemaHorizontalGridSetEvent') || this;
        _this.verticalGrid = verticalGrid;
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaVerticalGridSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SchemaVerticalGridSetEvent(this.getAggregateId(), this.verticalGrid);
    };
    return SchemaVerticalGridSetAggregateEvent;
}(SchemaAggregateEvent));
export { SchemaVerticalGridSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetAggregateEvent.prototype.verticalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXBFO0lBQXlELCtEQUFvQjtJQUU1RSw2Q0FBWSxRQUFrQixFQUNWLFlBQXFCO1FBRHpDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLDhCQUE4QixDQUFDLFNBQy9DO1FBRm1CLGtCQUFZLEdBQVosWUFBWSxDQUFTOztJQUV6QyxDQUFDOzs7O0lBRUQsMkRBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNGLDBDQUFDO0FBQUQsQ0FBQyxBQVZELENBQXlELG9CQUFvQixHQVU1RTs7Ozs7OztJQVBHLDJEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zY2hlbWEuYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVZlcnRpY2FsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU2NoZW1hQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1NjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U2NoZW1hSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy52ZXJ0aWNhbEdyaWQpO1xuXHR9XG59XG4iXX0=