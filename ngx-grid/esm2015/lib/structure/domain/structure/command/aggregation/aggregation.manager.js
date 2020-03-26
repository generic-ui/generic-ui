/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureAggregationsChangedAggregateEvent } from './structure.aggregations-changed.aggregate-event';
export class AggregationManager {
    /**
     * @param {?} structureId
     * @param {?} calculators
     */
    constructor(structureId, calculators) {
        this.calculators = calculators;
        this.enabled = false;
        this.values = new Map();
        this.structureId = structureId;
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
                new StructureAggregationsChangedAggregateEvent(this.structureId, calculations)
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.values;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.calculators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJOUcsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFROUIsWUFBWSxXQUF3QixFQUNoQixXQUFtRDtRQUFuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBd0M7UUFML0QsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVoQixXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7UUFJakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQXdCLEVBQUUsUUFBaUM7UUFFcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDVjs7Y0FFSyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFxQyxFQUFFLEVBQUU7O2tCQUU1RCxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBQzs7a0JBRXRFLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztZQUU1RCxJQUFJLGdCQUFnQixFQUFFO2dCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNoQyxPQUFPOzs7O2dCQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7b0JBQ3JCLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLEVBQUMsQ0FBQzthQUNMO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE9BQU87Z0JBQ04sSUFBSSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQzthQUM5RSxDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7SUFFRixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsR0FBRztJQUNILENBQUM7Ozs7SUFFRCxNQUFNO0lBQ04sQ0FBQzs7OztJQUVELE1BQU07SUFDTixDQUFDO0NBRUQ7Ozs7OztJQXhEQSx5Q0FBMEM7Ozs7O0lBRTFDLHFDQUFpQzs7Ozs7SUFFakMsb0NBQWtEOzs7OztJQUcvQyx5Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0aW9ucy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0aW9uTWFuYWdlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQ7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBuZXcgTWFwPEZpZWxkSWQsIGFueT4oKTtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsY3VsYXRvcnM6IEFycmF5PEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxhbnksIGFueT4+KSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUlkO1xuXHR9XG5cblx0Y2FsY3VsYXRlKGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPiwgZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FsY3VsYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdG9ycy5mb3JFYWNoKChjYWxjOiBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBhbnk+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFsbEZpZWxkcyA9IGZpZWxkcy5tYXAoKHR5cGVGaWVsZDogVHlwZUZpZWxkKSA9PiB0eXBlRmllbGQuZ2V0RmllbGQoKSk7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSBjYWxjLmNhbGN1bGF0ZShhbGxGaWVsZHMsIGVudGl0aWVzKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZWRWYWx1ZXMpIHtcblx0XHRcdFx0QXJyYXkuZnJvbShhZ2dyZWdhdGVkVmFsdWVzLmtleXMoKSlcblx0XHRcdFx0XHQgLmZvckVhY2goKGtleTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgY2FsY3VsYXRpb25zLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMuZ2V0KGtleSkpO1xuXHRcdFx0XHRcdCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChjYWxjdWxhdGlvbnMuc2l6ZSA+IDApIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQodGhpcy5zdHJ1Y3R1cmVJZCwgY2FsY3VsYXRpb25zKVxuXHRcdFx0XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGFkZCgpIHtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0fVxuXG59XG4iXX0=