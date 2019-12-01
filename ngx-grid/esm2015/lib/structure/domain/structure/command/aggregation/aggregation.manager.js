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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHOUcsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFROUIsWUFBWSxXQUF3QixFQUNoQixXQUFtRDtRQUFuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBd0M7UUFML0QsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVoQixXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7UUFJakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CLEVBQUUsUUFBaUM7UUFFaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDVjs7Y0FFSyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFxQyxFQUFFLEVBQUU7O2tCQUU1RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFFekQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDaEMsT0FBTzs7OztnQkFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUNyQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUFDLENBQUM7YUFDTDtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPO2dCQUNOLElBQUksMENBQTBDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7YUFDOUUsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBRUYsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELEdBQUc7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtJQUNOLENBQUM7Ozs7SUFFRCxNQUFNO0lBQ04sQ0FBQztDQUVEOzs7Ozs7SUF0REEseUNBQTBDOzs7OztJQUUxQyxxQ0FBaUM7Ozs7O0lBRWpDLG9DQUFrRDs7Ozs7SUFHL0MseUNBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbnMtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGlvbk1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzID0gbmV3IE1hcDxGaWVsZElkLCBhbnk+KCk7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGN1bGF0b3JzOiBBcnJheTxBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0fVxuXG5cdGNhbGN1bGF0ZShmaWVsZHM6IEFycmF5PEZpZWxkPiwgZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FsY3VsYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdG9ycy5mb3JFYWNoKChjYWxjOiBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBhbnk+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZWRWYWx1ZXMgPSBjYWxjLmNhbGN1bGF0ZShmaWVsZHMsIGVudGl0aWVzKTtcblxuXHRcdFx0aWYgKGFnZ3JlZ2F0ZWRWYWx1ZXMpIHtcblx0XHRcdFx0QXJyYXkuZnJvbShhZ2dyZWdhdGVkVmFsdWVzLmtleXMoKSlcblx0XHRcdFx0XHQgLmZvckVhY2goKGtleTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgY2FsY3VsYXRpb25zLnNldChrZXksIGFnZ3JlZ2F0ZWRWYWx1ZXMuZ2V0KGtleSkpO1xuXHRcdFx0XHRcdCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChjYWxjdWxhdGlvbnMuc2l6ZSA+IDApIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQodGhpcy5zdHJ1Y3R1cmVJZCwgY2FsY3VsYXRpb25zKVxuXHRcdFx0XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGFkZCgpIHtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0fVxuXG59XG4iXX0=