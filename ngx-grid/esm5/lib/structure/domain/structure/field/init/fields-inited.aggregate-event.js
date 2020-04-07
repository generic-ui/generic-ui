/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
var FieldsInitedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldsInitedAggregateEvent, _super);
    function FieldsInitedAggregateEvent(structureId, columns, // TODO merge
    fields) {
        var _this = _super.call(this, structureId, 'FieldsInitedAggregateEvent') || this;
        _this.columns = columns;
        _this.fields = fields;
        return _this;
    }
    /**
     * @return {?}
     */
    FieldsInitedAggregateEvent.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    /**
     * @return {?}
     */
    FieldsInitedAggregateEvent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        return this.fields;
    };
    return FieldsInitedAggregateEvent;
}(AggregateEvent));
export { FieldsInitedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3BEO0lBQWdELHNEQUEyQjtJQUUxRSxvQ0FBWSxXQUF3QixFQUNoQixPQUE0QixFQUFFLGFBQWE7SUFDM0MsTUFBd0I7UUFGNUMsWUFHQyxrQkFBTSxXQUFXLEVBQUUsNEJBQTRCLENBQUMsU0FDaEQ7UUFIbUIsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7O0lBRTVDLENBQUM7Ozs7SUFFRCwrQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBQ0YsaUNBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBZ0QsY0FBYyxHQWU3RDs7Ozs7OztJQVpHLDZDQUE2Qzs7Ozs7SUFDN0MsNENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIC8vIFRPRE8gbWVyZ2Vcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0ZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHRnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbkNvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRnZXRGaWVsZHMoKTogQXJyYXk8VHlwZUZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG59XG4iXX0=