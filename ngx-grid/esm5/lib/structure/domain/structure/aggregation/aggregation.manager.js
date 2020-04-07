/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureAggregationsChangedAggregateEvent } from './structure.aggregations-changed.aggregate-event';
var AggregationManager = /** @class */ (function () {
    function AggregationManager(structureId, calculators) {
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
    AggregationManager.prototype.calculate = /**
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
            var allFields = fields.map((/**
             * @param {?} typeField
             * @return {?}
             */
            function (typeField) { return typeField.getField(); }));
            /** @type {?} */
            var aggregatedValues = calc.calculate(allFields, entities);
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
                new StructureAggregationsChangedAggregateEvent(this.structureId, calculations)
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
    AggregationManager.prototype.setEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
    };
    /**
     * @return {?}
     */
    AggregationManager.prototype.add = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AggregationManager.prototype.remove = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AggregationManager.prototype.update = /**
     * @return {?}
     */
    function () {
    };
    return AggregationManager;
}());
export { AggregationManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSTlHO0lBUUMsNEJBQVksV0FBd0IsRUFDaEIsV0FBbUQ7UUFBbkQsZ0JBQVcsR0FBWCxXQUFXLENBQXdDO1FBTC9ELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFaEIsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFnQixDQUFDO1FBSWpELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELHNDQUFTOzs7OztJQUFULFVBQVUsTUFBd0IsRUFBRSxRQUFpQztRQUVwRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztTQUNWOztZQUVLLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUU5QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQXFDOztnQkFFeEQsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFwQixDQUFvQixFQUFDOztnQkFFdEUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBRTVELElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2hDLE9BQU87Ozs7Z0JBQUMsVUFBQyxHQUFRO29CQUNqQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUFDLENBQUM7YUFDTDtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPO2dCQUNOLElBQUksMENBQTBDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7YUFDOUUsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBRUYsQ0FBQzs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGdDQUFHOzs7SUFBSDtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBTTs7O0lBQU47SUFDQSxDQUFDOzs7O0lBRUQsbUNBQU07OztJQUFOO0lBQ0EsQ0FBQztJQUVGLHlCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQzs7Ozs7OztJQXhEQSx5Q0FBMEM7Ozs7O0lBRTFDLHFDQUFpQzs7Ozs7SUFFakMsb0NBQWtEOzs7OztJQUcvQyx5Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9hZ2dyZWdhdGlvbi5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbnMtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGlvbk1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzID0gbmV3IE1hcDxGaWVsZElkLCBhbnk+KCk7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGN1bGF0b3JzOiBBcnJheTxBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0fVxuXG5cdGNhbGN1bGF0ZShmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4sIGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRjb25zdCBjYWxjdWxhdGlvbnMgPSBuZXcgTWFwKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0b3JzLmZvckVhY2goKGNhbGM6IEFnZ3JlZ2F0aW9uQ2FsY3VsYXRvcjxhbnksIGFueT4pID0+IHtcblxuXHRcdFx0Y29uc3QgYWxsRmllbGRzID0gZmllbGRzLm1hcCgodHlwZUZpZWxkOiBUeXBlRmllbGQpID0+IHR5cGVGaWVsZC5nZXRGaWVsZCgpKTtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRlZFZhbHVlcyA9IGNhbGMuY2FsY3VsYXRlKGFsbEZpZWxkcywgZW50aXRpZXMpO1xuXG5cdFx0XHRpZiAoYWdncmVnYXRlZFZhbHVlcykge1xuXHRcdFx0XHRBcnJheS5mcm9tKGFnZ3JlZ2F0ZWRWYWx1ZXMua2V5cygpKVxuXHRcdFx0XHRcdCAuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCBjYWxjdWxhdGlvbnMuc2V0KGtleSwgYWdncmVnYXRlZFZhbHVlcy5nZXQoa2V5KSk7XG5cdFx0XHRcdFx0IH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGNhbGN1bGF0aW9ucy5zaXplID4gMCkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0bmV3IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCh0aGlzLnN0cnVjdHVyZUlkLCBjYWxjdWxhdGlvbnMpXG5cdFx0XHRdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0YWRkKCkge1xuXHR9XG5cblx0cmVtb3ZlKCkge1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHR9XG5cbn1cbiJdfQ==