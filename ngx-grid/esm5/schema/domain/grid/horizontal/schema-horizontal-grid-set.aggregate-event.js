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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHbEY7SUFBMkQsaUVBQXdCO0lBRWxGLCtDQUFZLFFBQWtCLEVBQ1YsY0FBdUI7UUFEM0MsWUFFQyxrQkFBTSxRQUFRLEVBQUUsOEJBQThCLENBQUMsU0FDL0M7UUFGbUIsb0JBQWMsR0FBZCxjQUFjLENBQVM7O0lBRTNDLENBQUM7Ozs7SUFFRCw2REFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBQ0YsNENBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBMkQsY0FBYyxHQVV4RTs7Ozs7OztJQVBHLCtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFNjaGVtYUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGhvcml6b250YWxHcmlkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5ob3Jpem9udGFsR3JpZCk7XG5cdH1cbn1cbiJdfQ==