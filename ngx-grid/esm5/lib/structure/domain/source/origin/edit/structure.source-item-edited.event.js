/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var StructureSourceItemEditedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSourceItemEditedEvent, _super);
    function StructureSourceItemEditedEvent(aggregateId, beforeItem, afterItem) {
        var _this = _super.call(this, aggregateId, 'StructureSourceItemEditedEvent') || this;
        _this.beforeItem = beforeItem;
        _this.afterItem = afterItem;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSourceItemEditedEvent.prototype.getBeforeItem = /**
     * @return {?}
     */
    function () {
        return this.beforeItem;
    };
    /**
     * @return {?}
     */
    StructureSourceItemEditedEvent.prototype.getAfterItem = /**
     * @return {?}
     */
    function () {
        return this.afterItem;
    };
    return StructureSourceItemEditedEvent;
}(DomainEvent));
export { StructureSourceItemEditedEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.beforeItem;
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.afterItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLOUQ7SUFBb0QsMERBQVc7SUFFOUQsd0NBQVksV0FBd0IsRUFDaEIsVUFBNEIsRUFDNUIsU0FBMkI7UUFGL0MsWUFHQyxrQkFBTSxXQUFXLEVBQUUsZ0NBQWdDLENBQUMsU0FDcEQ7UUFIbUIsZ0JBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVMsR0FBVCxTQUFTLENBQWtCOztJQUUvQyxDQUFDOzs7O0lBRUQsc0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxxREFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVGLHFDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFvRCxXQUFXLEdBZ0I5RDs7Ozs7OztJQWJHLG9EQUE2Qzs7Ozs7SUFDN0MsbURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYmVmb3JlSXRlbTogT3JpZ2luSXRlbUVudGl0eSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZnRlckl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0QmVmb3JlSXRlbSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5iZWZvcmVJdGVtO1xuXHR9XG5cblx0Z2V0QWZ0ZXJJdGVtKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmFmdGVySXRlbTtcblx0fVxuXG59XG4iXX0=