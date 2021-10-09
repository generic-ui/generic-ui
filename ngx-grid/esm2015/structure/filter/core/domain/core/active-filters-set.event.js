/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class ActiveFiltersSetEvent extends StructureDomainEvent {
    /**
     * @param {?} structureId
     * @param {?} filters
     */
    constructor(structureId, filters) {
        super(structureId, filters, 'ActiveFiltersSetEvent');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV0RixNQUFNLE9BQU8scUJBQXNCLFNBQVEsb0JBQW9COzs7OztJQUU5RCxZQUFZLFdBQXdCLEVBQ2hCLE9BQTZDO1FBQ2hFLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFEbEMsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7SUFFakUsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7Ozs7SUFSRyx3Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyc1NldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgZmlsdGVycywgJ0FjdGl2ZUZpbHRlcnNTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0RmlsdGVycygpOiBSZWFkb25seUFycmF5PGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcnM7XG5cdH1cblxufVxuIl19