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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNakQ7SUFBb0QsMERBQXdCO0lBRTNFLHdDQUFZLFdBQXdCLEVBQ2hCLFVBQTRCLEVBQzVCLFNBQTJCO1FBRi9DLFlBR0Msa0JBQU0sV0FBVyxFQUFFLGdDQUFnQyxDQUFDLFNBQ3BEO1FBSG1CLGdCQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixlQUFTLEdBQVQsU0FBUyxDQUFrQjs7SUFFL0MsQ0FBQzs7OztJQUVELHNEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQscURBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRixxQ0FBQztBQUFELENBQUMsQUFoQkQsQ0FBb0QsV0FBVyxHQWdCOUQ7Ozs7Ozs7SUFiRyxvREFBNkM7Ozs7O0lBQzdDLG1EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGJlZm9yZUl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWZ0ZXJJdGVtOiBPcmlnaW5JdGVtRW50aXR5KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldEJlZm9yZUl0ZW0oKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuYmVmb3JlSXRlbTtcblx0fVxuXG5cdGdldEFmdGVySXRlbSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5hZnRlckl0ZW07XG5cdH1cblxufVxuIl19