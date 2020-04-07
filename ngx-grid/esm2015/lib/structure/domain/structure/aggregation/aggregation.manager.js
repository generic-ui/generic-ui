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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSTlHLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBUTlCLFlBQVksV0FBd0IsRUFDaEIsV0FBbUQ7UUFBbkQsZ0JBQVcsR0FBWCxXQUFXLENBQXdDO1FBTC9ELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFaEIsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFnQixDQUFDO1FBSWpELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUF3QixFQUFFLFFBQWlDO1FBRXBFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7O2NBRUssWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFO1FBRTlCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBcUMsRUFBRSxFQUFFOztrQkFFNUQsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUM7O2tCQUV0RSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7WUFFNUQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDaEMsT0FBTzs7OztnQkFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUNyQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUFDLENBQUM7YUFDTDtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPO2dCQUNOLElBQUksMENBQTBDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7YUFDOUUsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBRUYsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELEdBQUc7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtJQUNOLENBQUM7Ozs7SUFFRCxNQUFNO0lBQ04sQ0FBQztDQUVEOzs7Ozs7SUF4REEseUNBQTBDOzs7OztJQUUxQyxxQ0FBaUM7Ozs7O0lBRWpDLG9DQUFrRDs7Ozs7SUFHL0MseUNBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRpb25NYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlcyA9IG5ldyBNYXA8RmllbGRJZCwgYW55PigpO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxjdWxhdG9yczogQXJyYXk8QWdncmVnYXRpb25DYWxjdWxhdG9yPGFueSwgYW55Pj4pIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdH1cblxuXHRjYWxjdWxhdGUoZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+LCBlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FsY3VsYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdG9ycy5mb3JFYWNoKChjYWxjOiBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBhbnk+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFsbEZpZWxkcyA9IGZpZWxkcy5tYXAoKHR5cGVGaWVsZDogVHlwZUZpZWxkKSA9PiB0eXBlRmllbGQuZ2V0RmllbGQoKSk7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSBjYWxjLmNhbGN1bGF0ZShhbGxGaWVsZHMsIGVudGl0aWVzKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZWRWYWx1ZXMpIHtcblx0XHRcdFx0QXJyYXkuZnJvbShhZ2dyZWdhdGVkVmFsdWVzLmtleXMoKSlcblx0XHRcdFx0XHQgLmZvckVhY2goKGtleTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgY2FsY3VsYXRpb25zLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMuZ2V0KGtleSkpO1xuXHRcdFx0XHRcdCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChjYWxjdWxhdGlvbnMuc2l6ZSA+IDApIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQodGhpcy5zdHJ1Y3R1cmVJZCwgY2FsY3VsYXRpb25zKVxuXHRcdFx0XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGFkZCgpIHtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0fVxuXG59XG4iXX0=