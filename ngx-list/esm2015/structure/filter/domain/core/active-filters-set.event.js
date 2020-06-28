/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class ActiveFiltersSetEvent extends DomainEvent {
    /**
     * @param {?} structureId
     * @param {?} filters
     */
    constructor(structureId, filters) {
        super(structureId, 'ActiveFiltersSetEvent');
        this.filters = filters;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return this.filters;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveFiltersSetEvent.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9jb3JlL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS2pELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxXQUF3Qjs7Ozs7SUFFbEUsWUFBWSxXQUF3QixFQUNoQixPQUE2QztRQUNoRSxLQUFLLENBQUMsV0FBVyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7SUFFakUsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7Ozs7SUFSRyx3Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0FjdGl2ZUZpbHRlcnNTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0RmlsdGVycygpOiBSZWFkb25seUFycmF5PGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcnM7XG5cdH1cblxufVxuIl19