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
        super(structureId, 'StructureSummariesChangedEvent');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFHbkYsTUFBTSxPQUFPLDhCQUErQixTQUFRLG9CQUFvQjs7Ozs7SUFFdkUsWUFBWSxXQUF3QixFQUNoQixNQUFvQztRQUN2RCxLQUFLLENBQUMsV0FBVyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFEbEMsV0FBTSxHQUFOLE1BQU0sQ0FBOEI7SUFFeEQsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNWYWx1ZXMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N1bW1hcmllcy52YWx1ZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXM6IE1hcDxzdHJpbmcsIFN1bW1hcmllc1ZhbHVlcz4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1N0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0U3VtbWFyaWVzKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcztcblx0fVxuXG59XG4iXX0=