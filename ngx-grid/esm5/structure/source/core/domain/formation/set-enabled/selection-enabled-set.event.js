/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
var SelectionEnabledSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionEnabledSetEvent, _super);
    function SelectionEnabledSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, enabled, 'SelectionEnabledSetEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectionEnabledSetEvent.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return SelectionEnabledSetEvent;
}(StructureDomainEvent));
export { SelectionEnabledSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionEnabledSetEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWVuYWJsZWQtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV6RjtJQUE4QyxvREFBb0I7SUFFakUsa0NBQVksV0FBd0IsRUFDaEIsT0FBZ0I7UUFEcEMsWUFFQyxrQkFBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixDQUFDLFNBQ3ZEO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7Ozs7SUFFRCw0Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLCtCQUFDO0FBQUQsQ0FBQyxBQVhELENBQThDLG9CQUFvQixHQVdqRTs7Ozs7OztJQVJHLDJDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25FbmFibGVkU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgZW5hYmxlZCwgJ1NlbGVjdGlvbkVuYWJsZWRTZXRFdmVudCcpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19