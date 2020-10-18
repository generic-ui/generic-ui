/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
/** @type {?} */
export var StructureSummariesEnabledSetEventName = 'StructureSummariesEnabledSetEvent';
var StructureSummariesEnabledSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesEnabledSetEvent, _super);
    function StructureSummariesEnabledSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, StructureSummariesEnabledSetEventName) || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummariesEnabledSetEvent.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return StructureSummariesEnabledSetEvent;
}(StructureDomainEvent));
export { StructureSummariesEnabledSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesEnabledSetEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zZXQvc3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUV0RixNQUFNLEtBQU8scUNBQXFDLEdBQUcsbUNBQW1DO0FBRXhGO0lBQXVELDZEQUFvQjtJQUUxRSwyQ0FBWSxXQUF3QixFQUNoQixPQUFnQjtRQURwQyxZQUVDLGtCQUFNLFdBQVcsRUFBRSxxQ0FBcUMsQ0FBQyxTQUN6RDtRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDOzs7O0lBRUQscURBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRix3Q0FBQztBQUFELENBQUMsQUFYRCxDQUF1RCxvQkFBb0IsR0FXMUU7Ozs7Ozs7SUFSRyxvREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY29uc3QgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50TmFtZSA9ICdTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudE5hbWUpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19