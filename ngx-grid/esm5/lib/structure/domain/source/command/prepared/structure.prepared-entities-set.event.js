/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var StructurePreparedEntitiesSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePreparedEntitiesSetEvent, _super);
    function StructurePreparedEntitiesSetEvent(aggregateId, preparedItems) {
        var _this = _super.call(this, aggregateId, 'StructurePreparedEntitiesSetEvent') || this;
        _this.preparedItems = preparedItems;
        return _this;
    }
    /**
     * @return {?}
     */
    StructurePreparedEntitiesSetEvent.prototype.getPreparedItems = /**
     * @return {?}
     */
    function () {
        return this.preparedItems;
    };
    return StructurePreparedEntitiesSetEvent;
}(DomainEvent));
export { StructurePreparedEntitiesSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedEntitiesSetEvent.prototype.preparedItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2NvbW1hbmQvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBZSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RDtJQUF1RCw2REFBVztJQUVqRSwyQ0FBWSxXQUF3QixFQUNoQixhQUFzQztRQUQxRCxZQUVDLGtCQUFNLFdBQVcsRUFBRSxtQ0FBbUMsQ0FBQyxTQUN2RDtRQUZtQixtQkFBYSxHQUFiLGFBQWEsQ0FBeUI7O0lBRTFELENBQUM7Ozs7SUFFRCw0REFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ0Ysd0NBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBdUQsV0FBVyxHQVVqRTs7Ozs7OztJQVBHLDBEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcHJlcGFyZWRJdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0UHJlcGFyZWRJdGVtcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlcGFyZWRJdGVtcztcblx0fVxufVxuIl19