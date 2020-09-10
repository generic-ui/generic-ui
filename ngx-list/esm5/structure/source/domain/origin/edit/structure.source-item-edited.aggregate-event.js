/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { StructureSourceItemEditedEvent } from './structure.source-item-edited.event';
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
    StructureSourceItemEditedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new StructureSourceItemEditedEvent(this.getAggregateId(), this.beforeItem, this.afterItem);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUd0RjtJQUE2RCxtRUFBMkI7SUFFdkYsaURBQVksV0FBd0IsRUFDaEIsVUFBNEIsRUFDNUIsU0FBMkI7UUFGL0MsWUFHQyxrQkFBTSxXQUFXLEVBQUUseUNBQXlDLENBQUMsU0FDN0Q7UUFIbUIsZ0JBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVMsR0FBVCxTQUFTLENBQWtCOztJQUUvQyxDQUFDOzs7O0lBRUQsK0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLDhCQUE4QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7O0lBRUQsK0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw4REFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUNGLDhDQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUE2RCxjQUFjLEdBbUIxRTs7Ozs7OztJQWhCRyw2REFBNkM7Ozs7O0lBQzdDLDREQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGJlZm9yZUl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWZ0ZXJJdGVtOiBPcmlnaW5JdGVtRW50aXR5KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMuYmVmb3JlSXRlbSwgdGhpcy5hZnRlckl0ZW0pO1xuXHR9XG5cblx0Z2V0QmVmb3JlSXRlbSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5iZWZvcmVJdGVtO1xuXHR9XG5cblx0Z2V0QWZ0ZXJJdGVtKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmFmdGVySXRlbTtcblx0fVxufVxuIl19