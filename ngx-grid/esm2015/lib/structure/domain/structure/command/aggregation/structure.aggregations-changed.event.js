/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class StructureAggregationsChangedEvent extends DomainEvent {
    /**
     * @param {?} structureId
     * @param {?} values
     */
    constructor(structureId, values) {
        super(structureId, 'StructureAggregationsChangedEvent');
        this.values = values;
    }
    /**
     * @return {?}
     */
    getAggregations() {
        return this.values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationsChangedEvent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9ucy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsV0FBVzs7Ozs7SUFFakUsWUFBWSxXQUF3QixFQUNoQixNQUFxQztRQUN4RCxLQUFLLENBQUMsV0FBVyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFEckMsV0FBTSxHQUFOLE1BQU0sQ0FBK0I7SUFFekQsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxtREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZWRWYWx1ZXMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0ZWQudmFsdWVzJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXM6IE1hcDxzdHJpbmcsIEFnZ3JlZ2F0ZWRWYWx1ZXM+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkRXZlbnQnKTtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0aW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXM7XG5cdH1cblxufVxuIl19