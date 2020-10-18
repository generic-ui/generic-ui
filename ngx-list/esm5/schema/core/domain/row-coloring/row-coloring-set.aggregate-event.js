/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RowColoringSetEvent } from './row-coloring-set.event';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
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
}(SchemaAggregateEvent));
export { RowColoringSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RowColoringSetAggregateEvent.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRTtJQUFrRCx3REFBb0I7SUFFckUsc0NBQVksUUFBa0IsRUFDVixXQUE4QjtRQURsRCxZQUVDLGtCQUFNLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxTQUN0QztRQUZtQixpQkFBVyxHQUFYLFdBQVcsQ0FBbUI7O0lBRWxELENBQUM7Ozs7SUFFRCxvREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUYsbUNBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBa0Qsb0JBQW9CLEdBV3JFOzs7Ozs7O0lBUkcsbURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9hcGkvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc2NoZW1hLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFJvd0NvbG9yaW5nU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnUm93Q29sb3JpbmdTZXRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgUm93Q29sb3JpbmdTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMucm93Q29sb3JpbmcpO1xuXHR9XG5cbn1cbiJdfQ==