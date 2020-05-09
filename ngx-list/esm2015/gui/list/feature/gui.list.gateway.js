/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, Input } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { ContanierTemplate } from '../../../structure/list/feature/template/contanier-template';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
/**
 * @abstract
 */
export class GuiListGateway {
    constructor() {
        this.guiListPagingConverter = new GuiListPagingConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ContanierTemplate(this.template, templateRef);
        if (changes.paging !== undefined && changes.paging.currentValue !== undefined) {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.guiListPagingConverter.convert(this.paging);
            }
        }
    }
}
GuiListGateway.propDecorators = {
    listItem: [{ type: ContentChild, args: [GuiListItemComponent, { static: true },] }],
    items: [{ type: Input }],
    template: [{ type: Input }],
    paging: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GuiListGateway.prototype.listItem;
    /** @type {?} */
    GuiListGateway.prototype.items;
    /** @type {?} */
    GuiListGateway.prototype.template;
    /** @type {?} */
    GuiListGateway.prototype.paging;
    /** @type {?} */
    GuiListGateway.prototype.containerTemplate;
    /** @type {?} */
    GuiListGateway.prototype.guiListPagingConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFHNUUsTUFBTSxPQUFnQixjQUFjO0lBQXBDO1FBZ0JDLDJCQUFzQixHQUEyQixJQUFJLHNCQUFzQixFQUFFLENBQUM7SUFpQi9FLENBQUM7Ozs7O0lBZkEsV0FBVyxDQUFDLE9BQXNCOztjQUUzQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFcEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUUzRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUU5RSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0Q7U0FDRDtJQUVGLENBQUM7Ozt1QkE3QkEsWUFBWSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFHbkQsS0FBSzt1QkFHTCxLQUFLO3FCQUdMLEtBQUs7Ozs7SUFUTixrQ0FDK0I7O0lBRS9CLCtCQUNrQjs7SUFFbEIsa0NBQ2dDOztJQUVoQyxnQ0FDZ0M7O0lBRWhDLDJDQUFxQzs7SUFFckMsZ0RBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhbmllclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS90ZW1wbGF0ZS9jb250YW5pZXItdGVtcGxhdGUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0UGFnaW5nIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9ndWkubGlzdC5hcGknO1xuaW1wb3J0IHsgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFnaW5nL2d1aS1saXN0LnBhZ2luZy5jb252ZXJ0ZXInO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHdWlMaXN0R2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QENvbnRlbnRDaGlsZChHdWlMaXN0SXRlbUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcblx0bGlzdEl0ZW06IEd1aUxpc3RJdGVtQ29tcG9uZW50O1xuXG5cdEBJbnB1dCgpXG5cdGl0ZW1zOiBBcnJheTxhbnk+O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpTGlzdFBhZ2luZztcblxuXHRjb250YWluZXJUZW1wbGF0ZTogQ29udGFuaWVyVGVtcGxhdGU7XG5cblx0Z3VpTGlzdFBhZ2luZ0NvbnZlcnRlcjogR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciA9IG5ldyBHdWlMaXN0UGFnaW5nQ29udmVydGVyKCk7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0Y29uc3QgdGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RJdGVtID8gdGhpcy5saXN0SXRlbS50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlID0gbmV3IENvbnRhbmllclRlbXBsYXRlKHRoaXMudGVtcGxhdGUsIHRlbXBsYXRlUmVmKTtcblxuXHRcdGlmIChjaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3VpTGlzdFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=