/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureSummariesChangedAggregateEvent } from './structure.summaries-changed.aggregate-event';
var SummariesManager = /** @class */ (function () {
    function SummariesManager(structureId, calculators) {
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
    SummariesManager.prototype.calculate = /**
     * @param {?} fields
     * @param {?} entities
     * @return {?}
     */
    function (fields, entities) {
        if (!this.enabled) {
            return [];
        }
        /** @type {?} */
        var calculations = new Map();
        this.calculators.forEach((/**
         * @param {?} calc
         * @return {?}
         */
        function (calc) {
            /** @type {?} */
            var aggregatedValues = calc.calculate(fields, entities);
            if (aggregatedValues) {
                Array.from(aggregatedValues.keys())
                    .forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
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
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SummariesManager.prototype.setEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
    };
    /**
     * @return {?}
     */
    SummariesManager.prototype.add = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SummariesManager.prototype.remove = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SummariesManager.prototype.update = /**
     * @return {?}
     */
    function () {
    };
    SummariesManager.DEFAULT_ENABLED = false;
    return SummariesManager;
}());
export { SummariesManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdW1tYXJpZXMvc3VtbWFyaWVzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSXhHO0lBVUMsMEJBQVksV0FBd0IsRUFDaEIsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO1FBSHBELFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBZ0IsQ0FBQztRQUlqRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFRCxvQ0FBUzs7Ozs7SUFBVCxVQUFVLE1BQW9CLEVBQUUsUUFBaUM7UUFFaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDVjs7WUFFSyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFtQzs7Z0JBRXRELGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUV6RCxJQUFJLGdCQUFnQixFQUFFO2dCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNoQyxPQUFPOzs7O2dCQUFDLFVBQUMsR0FBUTtvQkFDakIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUMsRUFBQyxDQUFDO2FBQ0w7UUFDRixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDMUIsT0FBTztnQkFDTixJQUFJLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO2FBQzNFLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUM7U0FDVjtJQUVGLENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw4QkFBRzs7O0lBQUg7SUFDQSxDQUFDOzs7O0lBRUQsaUNBQU07OztJQUFOO0lBQ0EsQ0FBQzs7OztJQUVELGlDQUFNOzs7SUFBTjtJQUNBLENBQUM7SUF2RE0sZ0NBQWUsR0FBRyxLQUFLLENBQUM7SUF5RGhDLHVCQUFDO0NBQUEsQUEzREQsSUEyREM7U0EzRFksZ0JBQWdCOzs7SUFFNUIsaUNBQStCOzs7OztJQUUvQix1Q0FBMEM7Ozs7O0lBRTFDLG1DQUF5Qjs7Ozs7SUFFekIsa0NBQWtEOzs7OztJQUcvQyx1Q0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzTWFuYWdlciB7XG5cblx0c3RhdGljIERFRkFVTFRfRU5BQkxFRCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlcyA9IG5ldyBNYXA8RmllbGRJZCwgYW55PigpO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxjdWxhdG9yczogQXJyYXk8U3VtbWFyaWVzQ2FsY3VsYXRvcjxhbnksIGFueT4+KSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUlkO1xuXHRcdHRoaXMuZW5hYmxlZCA9IFN1bW1hcmllc01hbmFnZXIuREVGQVVMVF9FTkFCTEVEO1xuXHR9XG5cblx0Y2FsY3VsYXRlKGZpZWxkczogQXJyYXk8RmllbGQ+LCBlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FsY3VsYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdG9ycy5mb3JFYWNoKChjYWxjOiBTdW1tYXJpZXNDYWxjdWxhdG9yPGFueSwgYW55PikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGVkVmFsdWVzID0gY2FsYy5jYWxjdWxhdGUoZmllbGRzLCBlbnRpdGllcyk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGVkVmFsdWVzKSB7XG5cdFx0XHRcdEFycmF5LmZyb20oYWdncmVnYXRlZFZhbHVlcy5rZXlzKCkpXG5cdFx0XHRcdFx0IC5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0IGNhbGN1bGF0aW9ucy5zZXQoa2V5LCBhZ2dyZWdhdGVkVmFsdWVzLmdldChrZXkpKTtcblx0XHRcdFx0XHQgfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoY2FsY3VsYXRpb25zLnNpemUgPiAwKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRuZXcgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuc3RydWN0dXJlSWQsIGNhbGN1bGF0aW9ucylcblx0XHRcdF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRhZGQoKSB7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdH1cblxufVxuIl19