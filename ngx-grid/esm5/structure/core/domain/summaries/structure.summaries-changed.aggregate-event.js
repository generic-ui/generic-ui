/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { StructureSummariesChangedEvent } from './structure.summaries-changed.event';
/** @type {?} */
export var StructureSummariesChangedAggregateEventName = 'StructureSummariesChangedAggregateEvent';
var StructureSummariesChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesChangedAggregateEvent, _super);
    function StructureSummariesChangedAggregateEvent(aggregateId, summarizedValues) {
        var _this = _super.call(this, aggregateId, StructureSummariesChangedAggregateEventName) || this;
        _this.summarizedValues = summarizedValues;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummariesChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new StructureSummariesChangedEvent(this.getAggregateId(), this.summarizedValues);
    };
    /**
     * @return {?}
     */
    StructureSummariesChangedAggregateEvent.prototype.getSummaries = /**
     * @return {?}
     */
    function () {
        return this.summarizedValues;
    };
    return StructureSummariesChangedAggregateEvent;
}(AggregateEvent));
export { StructureSummariesChangedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesChangedAggregateEvent.prototype.summarizedValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFckYsTUFBTSxLQUFPLDJDQUEyQyxHQUFHLHlDQUF5QztBQUVwRztJQUE2RCxtRUFBMkI7SUFFdkYsaURBQVksV0FBd0IsRUFDaEIsZ0JBQThDO1FBRGxFLFlBRUMsa0JBQU0sV0FBVyxFQUFFLDJDQUEyQyxDQUFDLFNBQy9EO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBOEI7O0lBRWxFLENBQUM7Ozs7SUFFRCwrREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksOEJBQThCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7SUFFRCw4REFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBQ0YsOENBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBNkQsY0FBYyxHQWMxRTs7Ozs7OztJQVhHLG1FQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNWYWx1ZXMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N1bW1hcmllcy52YWx1ZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQnO1xuXG5leHBvcnQgY29uc3QgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50TmFtZSA9ICdTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaXplZFZhbHVlczogTWFwPHN0cmluZywgU3VtbWFyaWVzVmFsdWVzPikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnROYW1lKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMuc3VtbWFyaXplZFZhbHVlcyk7XG5cdH1cblxuXHRnZXRTdW1tYXJpZXMoKTogTWFwPHN0cmluZywgU3VtbWFyaWVzVmFsdWVzPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3VtbWFyaXplZFZhbHVlcztcblx0fVxufVxuIl19