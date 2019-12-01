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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUs5RDtJQUFvRCwwREFBVztJQUU5RCx3Q0FBWSxXQUF3QixFQUNoQixVQUE0QixFQUM1QixTQUEyQjtRQUYvQyxZQUdDLGtCQUFNLFdBQVcsRUFBRSxnQ0FBZ0MsQ0FBQyxTQUNwRDtRQUhtQixnQkFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDNUIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7O0lBRS9DLENBQUM7Ozs7SUFFRCxzREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHFEQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUYscUNBQUM7QUFBRCxDQUFDLEFBaEJELENBQW9ELFdBQVcsR0FnQjlEOzs7Ozs7O0lBYkcsb0RBQTZDOzs7OztJQUM3QyxtREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBiZWZvcmVJdGVtOiBPcmlnaW5JdGVtRW50aXR5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFmdGVySXRlbTogT3JpZ2luSXRlbUVudGl0eSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRCZWZvcmVJdGVtKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmJlZm9yZUl0ZW07XG5cdH1cblxuXHRnZXRBZnRlckl0ZW0oKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuYWZ0ZXJJdGVtO1xuXHR9XG5cbn1cbiJdfQ==