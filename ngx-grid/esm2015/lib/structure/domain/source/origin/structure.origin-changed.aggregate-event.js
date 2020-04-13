/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { OriginSetEvent } from './set-origin/origin-set.event';
export class StructureOriginChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     * @param {?} origin
     */
    constructor(aggregateId, origin) {
        super(aggregateId, 'StructureOriginChangedAggregateEvent');
        this.origin = origin;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new OriginSetEvent(this.getAggregateId(), this.origin);
    }
    /**
     * @return {?}
     */
    getOrigin() {
        return this.origin;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedAggregateEvent.prototype.origin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLG9CQUFvQixDQUFDO0FBSTlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsY0FBMkI7Ozs7O0lBRXBGLFlBQVksV0FBd0IsRUFDaEIsTUFBK0I7UUFDbEQsS0FBSyxDQUFDLFdBQVcsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO1FBRHhDLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBRW5ELENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBWEcsc0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBPcmlnaW5TZXRFdmVudCB9IGZyb20gJy4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgT3JpZ2luU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRnZXRPcmlnaW4oKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbjtcblx0fVxufVxuIl19