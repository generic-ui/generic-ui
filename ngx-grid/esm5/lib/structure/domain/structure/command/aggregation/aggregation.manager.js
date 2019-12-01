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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHOUc7SUFRQyw0QkFBWSxXQUF3QixFQUNoQixXQUFtRDtRQUFuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBd0M7UUFML0QsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVoQixXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7UUFJakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsc0NBQVM7Ozs7O0lBQVQsVUFBVSxNQUFvQixFQUFFLFFBQWlDO1FBRWhFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7O1lBRUssWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFO1FBRTlCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBcUM7O2dCQUV4RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFFekQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDaEMsT0FBTzs7OztnQkFBQyxVQUFDLEdBQVE7b0JBQ2pCLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLEVBQUMsQ0FBQzthQUNMO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE9BQU87Z0JBQ04sSUFBSSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQzthQUM5RSxDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7SUFFRixDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsZ0NBQUc7OztJQUFIO0lBQ0EsQ0FBQzs7OztJQUVELG1DQUFNOzs7SUFBTjtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBTTs7O0lBQU47SUFDQSxDQUFDO0lBRUYseUJBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDOzs7Ozs7O0lBdERBLHlDQUEwQzs7Ozs7SUFFMUMscUNBQWlDOzs7OztJQUVqQyxvQ0FBa0Q7Ozs7O0lBRy9DLHlDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRpb25NYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlcyA9IG5ldyBNYXA8RmllbGRJZCwgYW55PigpO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxjdWxhdG9yczogQXJyYXk8QWdncmVnYXRpb25DYWxjdWxhdG9yPGFueSwgYW55Pj4pIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdH1cblxuXHRjYWxjdWxhdGUoZmllbGRzOiBBcnJheTxGaWVsZD4sIGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNhbGN1bGF0aW9ucyA9IG5ldyBNYXAoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRvcnMuZm9yRWFjaCgoY2FsYzogQWdncmVnYXRpb25DYWxjdWxhdG9yPGFueSwgYW55PikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGVkVmFsdWVzID0gY2FsYy5jYWxjdWxhdGUoZmllbGRzLCBlbnRpdGllcyk7XG5cblx0XHRcdGlmIChhZ2dyZWdhdGVkVmFsdWVzKSB7XG5cdFx0XHRcdEFycmF5LmZyb20oYWdncmVnYXRlZFZhbHVlcy5rZXlzKCkpXG5cdFx0XHRcdFx0IC5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0IGNhbGN1bGF0aW9ucy5zZXQoa2V5LCBhZ2dyZWdhdGVkVmFsdWVzLmdldChrZXkpKTtcblx0XHRcdFx0XHQgfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoY2FsY3VsYXRpb25zLnNpemUgPiAwKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRuZXcgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuc3RydWN0dXJlSWQsIGNhbGN1bGF0aW9ucylcblx0XHRcdF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0fVxuXG5cdHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRhZGQoKSB7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdH1cblxufVxuIl19