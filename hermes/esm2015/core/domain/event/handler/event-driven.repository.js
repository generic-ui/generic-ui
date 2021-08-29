/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateArchive } from '../../../../common/aggregate.archive';
/**
 * @abstract
 * @template I, E, V
 */
export class EventDrivenRepository extends AggregateArchive {
    /**
     * @protected
     * @param {?=} defaultValues
     */
    constructor(defaultValues) {
        super(defaultValues);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        this.next(event.getAggregateId(), event.getPayload());
    }
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    EventDrivenRepository.prototype.forEvent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZHJpdmVuLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9ldmVudC9oYW5kbGVyL2V2ZW50LWRyaXZlbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBS2hHLE1BQU0sT0FBZ0IscUJBQ3JCLFNBQVEsZ0JBQW1COzs7OztJQUUzQixZQUFzQixhQUF5QztRQUM5RCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFJRCxNQUFNLENBQUMsS0FBUTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRDs7Ozs7O0lBTEEsMkRBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuaGFuZGxlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFR5cGUgfSBmcm9tICcuL2RvbWFpbi1ldmVudC10eXBlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUFyY2hpdmUsIERlZmF1bHRBZ2dyZWdhdGVWYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vYWdncmVnYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnREcml2ZW5SZXBvc2l0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+LCBWPlxuXHRleHRlbmRzIEFnZ3JlZ2F0ZUFyY2hpdmU8Vj4gaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8SSwgRT4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWVzPzogRGVmYXVsdEFnZ3JlZ2F0ZVZhbHVlczxWPikge1xuXHRcdHN1cGVyKGRlZmF1bHRWYWx1ZXMpO1xuXHR9XG5cblx0YWJzdHJhY3QgZm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEU+O1xuXG5cdGhhbmRsZShldmVudDogRSk6IHZvaWQge1xuXHRcdHRoaXMubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRQYXlsb2FkKCkpO1xuXHR9XG59XG4iXX0=