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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPcEQ7SUFBZ0Qsc0RBQWM7SUFFN0Qsb0NBQVksV0FBd0IsRUFDaEIsT0FBNEIsRUFBRSxhQUFhO0lBQzNDLE1BQXdCO1FBRjVDLFlBR0Msa0JBQU0sV0FBVyxFQUFFLDRCQUE0QixDQUFDLFNBQ2hEO1FBSG1CLGFBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLFlBQU0sR0FBTixNQUFNLENBQWtCOztJQUU1QyxDQUFDOzs7O0lBRUQsK0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCw4Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLGlDQUFDO0FBQUQsQ0FBQyxBQWZELENBQWdELGNBQWMsR0FlN0Q7Ozs7Ozs7SUFaRyw2Q0FBNkM7Ozs7O0lBQzdDLDRDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxUeXBlRmllbGQ+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZHM7XG5cdH1cbn1cbiJdfQ==