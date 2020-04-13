/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaVerticalGridSetEvent } from './schema-vertical-grid-set.event';
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
}(AggregateEvent));
export { SchemaVerticalGridSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetAggregateEvent.prototype.verticalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBSWpFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTlFO0lBQXlELCtEQUF3QjtJQUVoRiw2Q0FBWSxRQUFrQixFQUNWLFlBQXFCO1FBRHpDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLDhCQUE4QixDQUFDLFNBQy9DO1FBRm1CLGtCQUFZLEdBQVosWUFBWSxDQUFTOztJQUV6QyxDQUFDOzs7O0lBRUQsMkRBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNGLDBDQUFDO0FBQUQsQ0FBQyxBQVZELENBQXlELGNBQWMsR0FVdEU7Ozs7Ozs7SUFQRywyREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4vc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVZlcnRpY2FsR3JpZFNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxHcmlkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMudmVydGljYWxHcmlkKTtcblx0fVxufVxuIl19