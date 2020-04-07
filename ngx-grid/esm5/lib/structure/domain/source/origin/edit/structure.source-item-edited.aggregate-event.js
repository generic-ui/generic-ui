/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
var StructureSourceItemEditedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSourceItemEditedAggregateEvent, _super);
    function StructureSourceItemEditedAggregateEvent(aggregateId, beforeItem, afterItem) {
        var _this = _super.call(this, aggregateId, 'StructureSourceItemEditedAggregateEvent') || this;
        _this.beforeItem = beforeItem;
        _this.afterItem = afterItem;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSourceItemEditedAggregateEvent.prototype.getBeforeItem = /**
     * @return {?}
     */
    function () {
        return this.beforeItem;
    };
    /**
     * @return {?}
     */
    StructureSourceItemEditedAggregateEvent.prototype.getAfterItem = /**
     * @return {?}
     */
    function () {
        return this.afterItem;
    };
    return StructureSourceItemEditedAggregateEvent;
}(AggregateEvent));
export { StructureSourceItemEditedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedAggregateEvent.prototype.beforeItem;
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedAggregateEvent.prototype.afterItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUtqRTtJQUE2RCxtRUFBMkI7SUFFdkYsaURBQVksV0FBd0IsRUFDaEIsVUFBNEIsRUFDNUIsU0FBMkI7UUFGL0MsWUFHQyxrQkFBTSxXQUFXLEVBQUUseUNBQXlDLENBQUMsU0FDN0Q7UUFIbUIsZ0JBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVMsR0FBVCxTQUFTLENBQWtCOztJQUUvQyxDQUFDOzs7O0lBRUQsK0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw4REFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUNGLDhDQUFDO0FBQUQsQ0FBQyxBQWZELENBQTZELGNBQWMsR0FlMUU7Ozs7Ozs7SUFaRyw2REFBNkM7Ozs7O0lBQzdDLDREQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYmVmb3JlSXRlbTogT3JpZ2luSXRlbUVudGl0eSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZnRlckl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0Z2V0QmVmb3JlSXRlbSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5iZWZvcmVJdGVtO1xuXHR9XG5cblx0Z2V0QWZ0ZXJJdGVtKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmFmdGVySXRlbTtcblx0fVxufVxuIl19