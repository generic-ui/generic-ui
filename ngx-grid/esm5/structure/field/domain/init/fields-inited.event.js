/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var FieldsInitedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldsInitedEvent, _super);
    function FieldsInitedEvent(aggregateId, fieldConfigs, // TODO merge
    fields) {
        var _this = _super.call(this, aggregateId, 'FieldsInitedEvent') || this;
        _this.fieldConfigs = fieldConfigs;
        _this.fields = fields;
        return _this;
    }
    /**
     * @return {?}
     */
    FieldsInitedEvent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        return this.fields;
    };
    return FieldsInitedEvent;
}(DomainEvent));
export { FieldsInitedEvent };
if (false) {
    /** @type {?} */
    FieldsInitedEvent.prototype.fieldConfigs;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFTakQ7SUFBdUMsNkNBQXdCO0lBRTlELDJCQUFZLFdBQXdCLEVBQ2pCLFlBQWdDLEVBQUUsYUFBYTtJQUM5QyxNQUF3QjtRQUY1QyxZQUdDLGtCQUFNLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxTQUN2QztRQUhrQixrQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDL0IsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7O0lBRTVDLENBQUM7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXVDLFdBQVcsR0FXakQ7Ozs7SUFSRyx5Q0FBZ0Q7Ozs7O0lBQ2hELG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+LCAvLyBUT0RPIG1lcmdlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdGaWVsZHNJbml0ZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0RmllbGRzKCk6IEFycmF5PFR5cGVGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19