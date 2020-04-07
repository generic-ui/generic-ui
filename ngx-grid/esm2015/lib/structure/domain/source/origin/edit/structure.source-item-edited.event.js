/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class StructureSourceItemEditedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} beforeItem
     * @param {?} afterItem
     */
    constructor(aggregateId, beforeItem, afterItem) {
        super(aggregateId, 'StructureSourceItemEditedEvent');
        this.beforeItem = beforeItem;
        this.afterItem = afterItem;
    }
    /**
     * @return {?}
     */
    getBeforeItem() {
        return this.beforeItem;
    }
    /**
     * @return {?}
     */
    getAfterItem() {
        return this.afterItem;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs5RCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsV0FBVzs7Ozs7O0lBRTlELFlBQVksV0FBd0IsRUFDaEIsVUFBNEIsRUFDNUIsU0FBMkI7UUFDOUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRmxDLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRS9DLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Q0FFRDs7Ozs7O0lBYkcsb0RBQTZDOzs7OztJQUM3QyxtREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBiZWZvcmVJdGVtOiBPcmlnaW5JdGVtRW50aXR5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFmdGVySXRlbTogT3JpZ2luSXRlbUVudGl0eSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRCZWZvcmVJdGVtKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmJlZm9yZUl0ZW07XG5cdH1cblxuXHRnZXRBZnRlckl0ZW0oKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuYWZ0ZXJJdGVtO1xuXHR9XG5cbn1cbiJdfQ==