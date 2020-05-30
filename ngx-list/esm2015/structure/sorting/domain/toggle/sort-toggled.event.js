/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SortToggledEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} directions
     */
    constructor(aggregateId, compositionId, directions) {
        super(aggregateId, 'SortToggledEvent');
        this.compositionId = compositionId;
        this.directions = directions;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getDirections() {
        return this.directions;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC10b2dnbGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vdG9nZ2xlL3NvcnQtdG9nZ2xlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxXQUF3Qjs7Ozs7O0lBRTdELFlBQVksV0FBd0IsRUFDaEIsYUFBNEIsRUFDNUIsVUFBMkQ7UUFDOUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnBCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQWlEO0lBRS9FLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztDQUNEOzs7Ozs7SUFaRyx5Q0FBNkM7Ozs7O0lBQzdDLHNDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU29ydFRvZ2dsZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uczogQXJyYXk8eyBmaWVsZElkOiBGaWVsZElkLCBkaXJlY3Rpb246IGJvb2xlYW4gfT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1NvcnRUb2dnbGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldERpcmVjdGlvbnMoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb25zO1xuXHR9XG59XG4iXX0=