/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
import { ScrollBarPositionSetEvent } from './scroll-bar-position-set.event';
export class ScrollBarPositionSetAggregateEvent extends StructureAggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} position
     */
    constructor(schemaId, position) {
        super(schemaId, 'ScrollBarPositionSetAggregateEvent');
        this.position = position;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new ScrollBarPositionSetEvent(this.getAggregateId(), this.position);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBarPositionSetAggregateEvent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUU1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc1RSxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsdUJBQXVCOzs7OztJQUU5RSxZQUFZLFFBQXFCLEVBQ2IsUUFBZ0I7UUFDbkMsS0FBSyxDQUFDLFFBQVEsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO1FBRG5DLGFBQVEsR0FBUixRQUFRLENBQVE7SUFFcEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0Q7Ozs7OztJQVBHLHNEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuL3Njcm9sbC1iYXItcG9zaXRpb24tc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmFyUG9zaXRpb25TZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcikge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2Nyb2xsQmFyUG9zaXRpb25TZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMucG9zaXRpb24pO1xuXHR9XG59XG4iXX0=