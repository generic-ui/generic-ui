/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var UniqueFilterCalculatedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueFilterCalculatedEvent, _super);
    function UniqueFilterCalculatedEvent(aggregateId, map) {
        var _this = _super.call(this, aggregateId, 'UniqueFilterCalculatedEvent') || this;
        _this.map = map;
        return _this;
    }
    /**
     * @return {?}
     */
    UniqueFilterCalculatedEvent.prototype.getUniqueValues = /**
     * @return {?}
     */
    function () {
        return this.map;
    };
    return UniqueFilterCalculatedEvent;
}(DomainEvent));
export { UniqueFilterCalculatedEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedEvent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtqRDtJQUFpRCx1REFBd0I7SUFFeEUscUNBQVksV0FBd0IsRUFDaEIsR0FBb0M7UUFEeEQsWUFFQyxrQkFBTSxXQUFXLEVBQUUsNkJBQTZCLENBQUMsU0FDakQ7UUFGbUIsU0FBRyxHQUFILEdBQUcsQ0FBaUM7O0lBRXhELENBQUM7Ozs7SUFFRCxxREFBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVGLGtDQUFDO0FBQUQsQ0FBQyxBQVhELENBQWlELFdBQVcsR0FXM0Q7Ozs7Ozs7SUFSRywwQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi4vdW5pcXVlLXZhbHVlJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRVbmlxdWVWYWx1ZXMoKTogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+PiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwO1xuXHR9XG5cbn1cbiJdfQ==