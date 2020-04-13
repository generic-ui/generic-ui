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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQTRCLE1BQU0sb0JBQW9CLENBQUM7QUFJOUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHdEY7SUFBNkQsbUVBQTJCO0lBRXZGLGlEQUFZLFdBQXdCLEVBQ2hCLFVBQTRCLEVBQzVCLFNBQTJCO1FBRi9DLFlBR0Msa0JBQU0sV0FBVyxFQUFFLHlDQUF5QyxDQUFDLFNBQzdEO1FBSG1CLGdCQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixlQUFTLEdBQVQsU0FBUyxDQUFrQjs7SUFFL0MsQ0FBQzs7OztJQUVELCtEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7OztJQUVELCtEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsOERBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRiw4Q0FBQztBQUFELENBQUMsQUFuQkQsQ0FBNkQsY0FBYyxHQW1CMUU7Ozs7Ozs7SUFoQkcsNkRBQTZDOzs7OztJQUM3Qyw0REFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBiZWZvcmVJdGVtOiBPcmlnaW5JdGVtRW50aXR5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFmdGVySXRlbTogT3JpZ2luSXRlbUVudGl0eSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLmJlZm9yZUl0ZW0sIHRoaXMuYWZ0ZXJJdGVtKTtcblx0fVxuXG5cdGdldEJlZm9yZUl0ZW0oKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuYmVmb3JlSXRlbTtcblx0fVxuXG5cdGdldEFmdGVySXRlbSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5hZnRlckl0ZW07XG5cdH1cbn1cbiJdfQ==