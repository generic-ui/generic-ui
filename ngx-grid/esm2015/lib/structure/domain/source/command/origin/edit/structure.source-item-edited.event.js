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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzlELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxXQUFXOzs7Ozs7SUFFOUQsWUFBWSxXQUF3QixFQUNoQixVQUE0QixFQUM1QixTQUEyQjtRQUM5QyxLQUFLLENBQUMsV0FBVyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFGbEMsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDNUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFL0MsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztDQUVEOzs7Ozs7SUFiRyxvREFBNkM7Ozs7O0lBQzdDLG1EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGJlZm9yZUl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWZ0ZXJJdGVtOiBPcmlnaW5JdGVtRW50aXR5KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldEJlZm9yZUl0ZW0oKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuYmVmb3JlSXRlbTtcblx0fVxuXG5cdGdldEFmdGVySXRlbSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5hZnRlckl0ZW07XG5cdH1cblxufVxuIl19