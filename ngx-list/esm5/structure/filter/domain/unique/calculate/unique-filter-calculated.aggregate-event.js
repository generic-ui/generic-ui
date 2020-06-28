/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { UniqueFilterCalculatedEvent } from './unique-filter-calculated.event';
var UniqueFilterCalculatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueFilterCalculatedAggregateEvent, _super);
    function UniqueFilterCalculatedAggregateEvent(aggregateId, map) {
        var _this = _super.call(this, aggregateId, 'UniqueFilterCalculatedAggregateEvent') || this;
        _this.map = map;
        return _this;
    }
    /**
     * @return {?}
     */
    UniqueFilterCalculatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new UniqueFilterCalculatedEvent(this.getAggregateId(), this.map);
    };
    return UniqueFilterCalculatedAggregateEvent;
}(AggregateEvent));
export { UniqueFilterCalculatedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedAggregateEvent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9FO0lBQTBELGdFQUEyQjtJQUVwRiw4Q0FBWSxXQUF3QixFQUNoQixHQUFvQztRQUR4RCxZQUVDLGtCQUFNLFdBQVcsRUFBRSxzQ0FBc0MsQ0FBQyxTQUMxRDtRQUZtQixTQUFHLEdBQUgsR0FBRyxDQUFpQzs7SUFFeEQsQ0FBQzs7OztJQUVELDREQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSwyQkFBMkIsQ0FDckMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsR0FBRyxDQUNSLENBQUM7SUFDSCxDQUFDO0lBRUYsMkNBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBMEQsY0FBYyxHQWN2RTs7Ozs7OztJQVhHLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCB9IGZyb20gJy4vdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi4vdW5pcXVlLXZhbHVlJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHR0aGlzLm1hcFxuXHRcdCk7XG5cdH1cblxufVxuIl19