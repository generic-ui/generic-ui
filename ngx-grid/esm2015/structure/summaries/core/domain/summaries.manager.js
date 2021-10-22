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
            const aggregatedValues = calc.calculate(fields, entities);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSXhHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBVTVCLFlBQVksV0FBd0IsRUFDaEIsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO1FBSHBELFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBZ0IsQ0FBQztRQUlqRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBb0IsRUFBRSxRQUFpQztRQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztTQUNWOztjQUVLLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUU5QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQW1DLEVBQUUsRUFBRTs7a0JBRTFELGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUV6RCxJQUFJLGdCQUFnQixFQUFFO2dCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNoQyxPQUFPOzs7O2dCQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7b0JBQ3JCLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLEVBQUMsQ0FBQzthQUNMO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE9BQU87Z0JBQ04sSUFBSSx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQzthQUMzRSxDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7SUFFRixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsR0FBRztJQUNILENBQUM7Ozs7SUFFRCxNQUFNO0lBQ04sQ0FBQzs7OztJQUVELE1BQU07SUFDTixDQUFDOztBQXZEZSxnQ0FBZSxHQUFHLEtBQUssQ0FBQzs7O0lBQXhDLGlDQUF3Qzs7Ozs7SUFFeEMsdUNBQTBDOzs7OztJQUUxQyxtQ0FBeUI7Ozs7O0lBRXpCLGtDQUFrRDs7Ozs7SUFHL0MsdUNBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzTWFuYWdlciB7XG5cblx0c3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRU5BQkxFRCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlcyA9IG5ldyBNYXA8RmllbGRJZCwgYW55PigpO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxjdWxhdG9yczogQXJyYXk8U3VtbWFyaWVzQ2FsY3VsYXRvcjxhbnksIGFueT4+KSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUlkO1xuXHRcdHRoaXMuZW5hYmxlZCA9IFN1bW1hcmllc01hbmFnZXIuREVGQVVMVF9FTkFCTEVEO1xuXHR9XG5cblx0Y2FsY3VsYXRlKGZpZWxkczogQXJyYXk8RmllbGQ+LCBlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FsY3VsYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdG9ycy5mb3JFYWNoKChjYWxjOiBTdW1tYXJpZXNDYWxjdWxhdG9yPGFueSwgYW55PikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGVkVmFsdWVzID0gY2FsYy5jYWxjdWxhdGUoZmllbGRzLCBlbnRpdGllcyk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGVkVmFsdWVzKSB7XG5cdFx0XHRcdEFycmF5LmZyb20oYWdncmVnYXRlZFZhbHVlcy5rZXlzKCkpXG5cdFx0XHRcdFx0IC5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0IGNhbGN1bGF0aW9ucy5zZXQoa2V5LCBhZ2dyZWdhdGVkVmFsdWVzLmdldChrZXkpKTtcblx0XHRcdFx0XHQgfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoY2FsY3VsYXRpb25zLnNpemUgPiAwKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRuZXcgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuc3RydWN0dXJlSWQsIGNhbGN1bGF0aW9ucylcblx0XHRcdF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRhZGQoKSB7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdH1cblxufVxuIl19