/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export class StructureSummariesChangedEvent extends StructureDomainEvent {
    /**
     * @param {?} structureId
     * @param {?} values
     */
    constructor(structureId, values) {
        super(structureId, values, 'StructureSummariesChangedEvent');
        this.values = values;
    }
    /**
     * @return {?}
     */
    getSummaries() {
        return this.values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedEvent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFHbkYsTUFBTSxPQUFPLDhCQUErQixTQUFRLG9CQUFvQjs7Ozs7SUFFdkUsWUFBWSxXQUF3QixFQUNoQixNQUFvQztRQUN2RCxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRDFDLFdBQU0sR0FBTixNQUFNLENBQThCO0lBRXhELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FFRDs7Ozs7O0lBUkcsZ0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMudmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHZhbHVlcywgJ1N0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0U3VtbWFyaWVzKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcztcblx0fVxuXG59XG4iXX0=