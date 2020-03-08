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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNcEQ7SUFBZ0Qsc0RBQWM7SUFFN0Qsb0NBQVksV0FBd0IsRUFDaEIsT0FBNEIsRUFBRSxhQUFhO0lBQzNDLE1BQW9CO1FBRnhDLFlBR0Msa0JBQU0sV0FBVyxFQUFFLDRCQUE0QixDQUFDLFNBQ2hEO1FBSG1CLGFBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLFlBQU0sR0FBTixNQUFNLENBQWM7O0lBRXhDLENBQUM7Ozs7SUFFRCwrQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBQ0YsaUNBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBZ0QsY0FBYyxHQWU3RDs7Ozs7OztJQVpHLDZDQUE2Qzs7Ozs7SUFDN0MsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8RmllbGQ+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0Z2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW5Db25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zO1xuXHR9XG5cblx0Z2V0RmllbGRzKCk6IEFycmF5PEZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG59XG4iXX0=