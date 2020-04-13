/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionColumnSetEnabledEvent } from './composition.column-set-enabled.event';
var CompositionColumnSetEnabledAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionColumnSetEnabledAggregateEvent, _super);
    function CompositionColumnSetEnabledAggregateEvent(aggregateId, activeColumns) {
        var _this = _super.call(this, aggregateId, 'CompositionColumnSetEnabledAggregateEvent') || this;
        _this.activeColumns = activeColumns;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionColumnSetEnabledEvent(this.getAggregateId());
    };
    /**
     * @return {?}
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.getActiveColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    return CompositionColumnSetEnabledAggregateEvent;
}(AggregateEvent));
export { CompositionColumnSetEnabledAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionColumnSetEnabledAggregateEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFJOUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUY7SUFBK0QscUVBQTZCO0lBRTNGLG1EQUFZLFdBQXdCLEVBQ2hCLGFBQXdDO1FBRDVELFlBRUMsa0JBQU0sV0FBVyxFQUFFLDJDQUEyQyxDQUFDLFNBQy9EO1FBRm1CLG1CQUFhLEdBQWIsYUFBYSxDQUEyQjs7SUFFNUQsQ0FBQzs7OztJQUVELGlFQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsb0VBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVGLGdEQUFDO0FBQUQsQ0FBQyxBQWZELENBQStELGNBQWMsR0FlNUU7Ozs7Ozs7SUFaRyxrRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCB9IGZyb20gJy4vY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxDb21wb3NpdGlvbklkPiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHR9XG5cbn1cbiJdfQ==