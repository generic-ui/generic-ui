/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { SelectionEnabledSetEvent } from './selection-enabled-set.event';
export class SelectionEnabledSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     * @param {?} enabled
     */
    constructor(structureId, enabled) {
        super(structureId, 'SelectionEnabledSetAggregateEvent');
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SelectionEnabledSetEvent(this.getAggregateId(), this.enabled);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionEnabledSetAggregateEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWVuYWJsZWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NlbGVjdGlvbi1lbmFibGVkLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsY0FBMkI7Ozs7O0lBRWpGLFlBQVksV0FBd0IsRUFDaEIsT0FBZ0I7UUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRHJDLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0Q7Ozs7OztJQVBHLG9EQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGlvbkVuYWJsZWRTZXRFdmVudCB9IGZyb20gJy4vc2VsZWN0aW9uLWVuYWJsZWQtc2V0LmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5lbmFibGVkKTtcblx0fVxufVxuIl19