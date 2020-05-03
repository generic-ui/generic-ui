/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { RowColoringSetEvent } from './row-coloring-set.event';
var RowColoringSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(RowColoringSetAggregateEvent, _super);
    function RowColoringSetAggregateEvent(schemaId, rowColoring) {
        var _this = _super.call(this, schemaId, 'RowColoringSetEvent') || this;
        _this.rowColoring = rowColoring;
        return _this;
    }
    /**
     * @return {?}
     */
    RowColoringSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new RowColoringSetEvent(this.getAggregateId(), this.rowColoring);
    };
    return RowColoringSetAggregateEvent;
}(AggregateEvent));
export { RowColoringSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RowColoringSetAggregateEvent.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRy9EO0lBQWtELHdEQUF3QjtJQUV6RSxzQ0FBWSxRQUFrQixFQUNWLFdBQThCO1FBRGxELFlBRUMsa0JBQU0sUUFBUSxFQUFFLHFCQUFxQixDQUFDLFNBQ3RDO1FBRm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFtQjs7SUFFbEQsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRixtQ0FBQztBQUFELENBQUMsQUFYRCxDQUFrRCxjQUFjLEdBVy9EOzs7Ozs7O0lBUkcsbURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmdTZXRFdmVudCB9IGZyb20gJy4vcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFJvd0NvbG9yaW5nU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1Jvd0NvbG9yaW5nU2V0RXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U2NoZW1hSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFJvd0NvbG9yaW5nU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnJvd0NvbG9yaW5nKTtcblx0fVxuXG59XG4iXX0=