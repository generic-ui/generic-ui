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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRy9EO0lBQWtELHdEQUF3QjtJQUV6RSxzQ0FBWSxRQUFrQixFQUNWLFdBQThCO1FBRGxELFlBRUMsa0JBQU0sUUFBUSxFQUFFLHFCQUFxQixDQUFDLFNBQ3RDO1FBRm1CLGlCQUFXLEdBQVgsV0FBVyxDQUFtQjs7SUFFbEQsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRixtQ0FBQztBQUFELENBQUMsQUFYRCxDQUFrRCxjQUFjLEdBVy9EOzs7Ozs7O0lBUkcsbURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBSb3dDb2xvcmluZ1NldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdSb3dDb2xvcmluZ1NldEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBSb3dDb2xvcmluZ1NldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5yb3dDb2xvcmluZyk7XG5cdH1cblxufVxuIl19