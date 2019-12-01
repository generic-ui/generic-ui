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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9ucy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsV0FBVzs7Ozs7SUFFakUsWUFBWSxXQUF3QixFQUNoQixNQUFxQztRQUN4RCxLQUFLLENBQUMsV0FBVyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFEckMsV0FBTSxHQUFOLE1BQU0sQ0FBK0I7SUFFekQsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxtREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZWRWYWx1ZXMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0ZWQudmFsdWVzJztcblxuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogTWFwPHN0cmluZywgQWdncmVnYXRlZFZhbHVlcz4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1N0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0QWdncmVnYXRpb25zKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcztcblx0fVxuXG59XG4iXX0=