/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureSummariesChangedAggregateEvent } from './structure.summaries-changed.aggregate-event';
export class SummariesManager {
    /**
     * @param {?} structureId
     * @param {?} calculators
     */
    constructor(structureId, calculators) {
        this.calculators = calculators;
        this.values = new Map();
        this.structureId = structureId;
        this.enabled = SummariesManager.DEFAULT_ENABLED;
    }
    /**
     * @param {?} fields
     * @param {?} entities
     * @return {?}
     */
    calculate(fields, entities) {
        if (!this.enabled) {
            return [];
        }
        /** @type {?} */
        const calculations = new Map();
        this.calculators.forEach((/**
         * @param {?} calc
         * @return {?}
         */
        (calc) => {
            /** @type {?} */
            const allFields = fields.map((/**
             * @param {?} typeField
             * @return {?}
             */
            (typeField) => typeField.getField()));
            /** @type {?} */
            const aggregatedValues = calc.calculate(allFields, entities);
            if (aggregatedValues) {
                Array.from(aggregatedValues.keys())
                    .forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    calculations.set(key, aggregatedValues.get(key));
                }));
            }
        }));
        if (calculations.size > 0) {
            return [
                new StructureSummariesChangedAggregateEvent(this.structureId, calculations)
            ];
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    add() {
    }
    /**
     * @return {?}
     */
    remove() {
    }
    /**
     * @return {?}
     */
    update() {
    }
}
SummariesManager.DEFAULT_ENABLED = false;
if (false) {
    /** @type {?} */
    SummariesManager.DEFAULT_ENABLED;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.values;
    /**
     * @type {?}
     * @private
     */
    SummariesManager.prototype.calculators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3VtbWFyaWVzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSXhHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBVTVCLFlBQVksV0FBd0IsRUFDaEIsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO1FBSHBELFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBZ0IsQ0FBQztRQUlqRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBd0IsRUFBRSxRQUFpQztRQUVwRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztTQUNWOztjQUVLLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUU5QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQW1DLEVBQUUsRUFBRTs7a0JBRTFELFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFDOztrQkFFdEUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBRTVELElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2hDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtvQkFDckIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUMsRUFBQyxDQUFDO2FBQ0w7UUFDRixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDMUIsT0FBTztnQkFDTixJQUFJLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO2FBQzNFLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUM7U0FDVjtJQUVGLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxHQUFHO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07SUFDTixDQUFDOzs7O0lBRUQsTUFBTTtJQUNOLENBQUM7O0FBekRNLGdDQUFlLEdBQUcsS0FBSyxDQUFDOzs7SUFBL0IsaUNBQStCOzs7OztJQUUvQix1Q0FBMEM7Ozs7O0lBRTFDLG1DQUF5Qjs7Ozs7SUFFekIsa0NBQWtEOzs7OztJQUcvQyx1Q0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc01hbmFnZXIge1xuXG5cdHN0YXRpYyBERUZBVUxUX0VOQUJMRUQgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBuZXcgTWFwPEZpZWxkSWQsIGFueT4oKTtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsY3VsYXRvcnM6IEFycmF5PFN1bW1hcmllc0NhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0XHR0aGlzLmVuYWJsZWQgPSBTdW1tYXJpZXNNYW5hZ2VyLkRFRkFVTFRfRU5BQkxFRDtcblx0fVxuXG5cdGNhbGN1bGF0ZShmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4sIGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRjb25zdCBjYWxjdWxhdGlvbnMgPSBuZXcgTWFwKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0b3JzLmZvckVhY2goKGNhbGM6IFN1bW1hcmllc0NhbGN1bGF0b3I8YW55LCBhbnk+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFsbEZpZWxkcyA9IGZpZWxkcy5tYXAoKHR5cGVGaWVsZDogVHlwZUZpZWxkKSA9PiB0eXBlRmllbGQuZ2V0RmllbGQoKSk7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSBjYWxjLmNhbGN1bGF0ZShhbGxGaWVsZHMsIGVudGl0aWVzKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZWRWYWx1ZXMpIHtcblx0XHRcdFx0QXJyYXkuZnJvbShhZ2dyZWdhdGVkVmFsdWVzLmtleXMoKSlcblx0XHRcdFx0XHQgLmZvckVhY2goKGtleTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgY2FsY3VsYXRpb25zLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMuZ2V0KGtleSkpO1xuXHRcdFx0XHRcdCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChjYWxjdWxhdGlvbnMuc2l6ZSA+IDApIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQodGhpcy5zdHJ1Y3R1cmVJZCwgY2FsY3VsYXRpb25zKVxuXHRcdFx0XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGFkZCgpIHtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0fVxuXG59XG4iXX0=