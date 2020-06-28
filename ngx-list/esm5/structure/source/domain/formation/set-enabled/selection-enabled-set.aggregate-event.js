/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { SelectionEnabledSetEvent } from './selection-enabled-set.event';
var SelectionEnabledSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionEnabledSetAggregateEvent, _super);
    function SelectionEnabledSetAggregateEvent(structureId, enabled) {
        var _this = _super.call(this, structureId, 'SelectionEnabledSetAggregateEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectionEnabledSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SelectionEnabledSetEvent(this.getAggregateId(), this.enabled);
    };
    return SelectionEnabledSetAggregateEvent;
}(AggregateEvent));
export { SelectionEnabledSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionEnabledSetAggregateEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWVuYWJsZWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NlbGVjdGlvbi1lbmFibGVkLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekU7SUFBdUQsNkRBQTJCO0lBRWpGLDJDQUFZLFdBQXdCLEVBQ2hCLE9BQWdCO1FBRHBDLFlBRUMsa0JBQU0sV0FBVyxFQUFFLG1DQUFtQyxDQUFDLFNBQ3ZEO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7Ozs7SUFFRCx5REFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0Ysd0NBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBdUQsY0FBYyxHQVVwRTs7Ozs7OztJQVBHLG9EQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGlvbkVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4vc2VsZWN0aW9uLWVuYWJsZWQtc2V0LmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5lbmFibGVkKTtcblx0fVxufVxuIl19