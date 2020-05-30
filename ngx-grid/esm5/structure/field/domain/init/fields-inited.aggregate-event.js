/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { FieldsInitedEvent } from './fields-inited.event';
var FieldsInitedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldsInitedAggregateEvent, _super);
    function FieldsInitedAggregateEvent(structureId, fieldConfigs, // TODO merge
    fields) {
        var _this = _super.call(this, structureId, 'FieldsInitedAggregateEvent') || this;
        _this.fieldConfigs = fieldConfigs;
        _this.fields = fields;
        return _this;
    }
    /**
     * @return {?}
     */
    FieldsInitedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new FieldsInitedEvent(this.getAggregateId(), this.fieldConfigs, this.fields);
    };
    /**
     * @return {?}
     */
    FieldsInitedAggregateEvent.prototype.getFieldConfigs = /**
     * @return {?}
     */
    function () {
        return this.fieldConfigs;
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
    FieldsInitedAggregateEvent.prototype.fieldConfigs;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedAggregateEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRDtJQUFnRCxzREFBMkI7SUFFMUUsb0NBQVksV0FBd0IsRUFDaEIsWUFBZ0MsRUFBRSxhQUFhO0lBQy9DLE1BQXdCO1FBRjVDLFlBR0Msa0JBQU0sV0FBVyxFQUFFLDRCQUE0QixDQUFDLFNBQ2hEO1FBSG1CLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxZQUFNLEdBQU4sTUFBTSxDQUFrQjs7SUFFNUMsQ0FBQzs7OztJQUVELGtEQUFhOzs7SUFBYjtRQUVDLE9BQU8sSUFBSSxpQkFBaUIsQ0FDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsb0RBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw4Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLGlDQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUFnRCxjQUFjLEdBd0I3RDs7Ozs7OztJQXJCRyxrREFBaUQ7Ozs7O0lBQ2pELDRDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWVsZC5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+LCAvLyBUT0RPIG1lcmdlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZHNJbml0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKSxcblx0XHRcdHRoaXMuZmllbGRDb25maWdzLFxuXHRcdFx0dGhpcy5maWVsZHNcblx0XHQpO1xuXHR9XG5cblx0Z2V0RmllbGRDb25maWdzKCk6IEFycmF5PEZpZWxkQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb25maWdzO1xuXHR9XG5cblx0Z2V0RmllbGRzKCk6IEFycmF5PFR5cGVGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19