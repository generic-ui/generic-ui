/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureSummariesChangedEvent } from '../../domain/structure/summaries/structure.summaries-changed.event';
var StructureSummariesUiEventsRepository = /** @class */ (function () {
    function StructureSummariesUiEventsRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSummariesUiEventsRepository.prototype.onSummariesChanged = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.domainEventBus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof StructureSummariesChangedEvent; })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })));
    };
    StructureSummariesUiEventsRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummariesUiEventsRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return StructureSummariesUiEventsRepository;
}());
export { StructureSummariesUiEventsRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesUiEventsRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMudWktZXZlbnRzLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUdwSDtJQUdDLDhDQUE2QixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpRUFBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBd0I7UUFFMUMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssWUFBWSw4QkFBOEIsRUFBL0MsQ0FBK0MsRUFBQyxFQUM1RixNQUFNOzs7O1FBQUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBNUQsQ0FBNEQsRUFBQyxDQUN6RyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFOVyxjQUFjOztJQW9CcEMsMkNBQUM7Q0FBQSxBQWRELElBY0M7U0FiWSxvQ0FBb0M7Ozs7OztJQUVwQyw4REFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdH1cblxuXHRvblN1bW1hcmllc0NoYW5nZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQgaW5zdGFuY2VvZiBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQpLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG59XG4iXX0=