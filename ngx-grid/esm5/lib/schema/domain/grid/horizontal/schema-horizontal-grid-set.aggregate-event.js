/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaHorizontalGridSetEvent } from './schema-horizontal-grid-set.event';
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
}(AggregateEvent));
export { SchemaHorizontalGridSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetAggregateEvent.prototype.horizontalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR2xGO0lBQTJELGlFQUF3QjtJQUVsRiwrQ0FBWSxRQUFrQixFQUNWLGNBQXVCO1FBRDNDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLDhCQUE4QixDQUFDLFNBQy9DO1FBRm1CLG9CQUFjLEdBQWQsY0FBYyxDQUFTOztJQUUzQyxDQUFDOzs7O0lBRUQsNkRBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNGLDRDQUFDO0FBQUQsQ0FBQyxBQVZELENBQTJELGNBQWMsR0FVeEU7Ozs7Ozs7SUFQRywrREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFNjaGVtYUhvcml6b250YWxHcmlkU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTY2hlbWFJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBob3Jpem9udGFsR3JpZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMuaG9yaXpvbnRhbEdyaWQpO1xuXHR9XG59XG4iXX0=