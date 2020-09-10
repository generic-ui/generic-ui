/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesRepository } from './structure.summaries.repository';
import { StructureSummariesEnabledSetEvent } from '../../../domain/summaries/set/structure.summaries-enabled-set.event';
var StructureSummariesEnabledSetEventHandler = /** @class */ (function () {
    function StructureSummariesEnabledSetEventHandler(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    StructureSummariesEnabledSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return StructureSummariesEnabledSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructureSummariesEnabledSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureSummariesEnabledSetEvent')) {
            this.structureSummariesRepository.setEnabled(event.isEnabled(), event.getAggregateId());
        }
    };
    StructureSummariesEnabledSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesEnabledSetEventHandler.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureSummariesEnabledSetEventHandler;
}());
export { StructureSummariesEnabledSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesEnabledSetEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1lbmFibGVkLXNldC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4tYXBpL3N1bW1hcmllcy9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMtZW5hYmxlZC1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUl4SDtJQUdDLGtEQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUM5RSxDQUFDOzs7O0lBRUQsMkRBQVE7OztJQUFSO1FBQ0MsT0FBTyxpQ0FBaUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELHlEQUFNOzs7O0lBQU4sVUFBTyxLQUF3QztRQUU5QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUN4RjtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLDRCQUE0Qjs7SUF1QnJDLCtDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksd0NBQXdDOzs7Ozs7SUFFeEMsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3VtbWFyaWVzL3NldC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeTogU3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkuc2V0RW5hYmxlZChldmVudC5pc0VuYWJsZWQoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19