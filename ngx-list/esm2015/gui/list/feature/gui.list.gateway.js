/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, Input } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { ListCardTemplate } from '../../../structure/list/feature/card/template/list.card-template';
import { ContainerTemplate } from '../../../structure/list/feature/source/template/container-template';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
/**
 * @abstract
 */
export class GuiListGateway {
    constructor() {
        this.guiListPagingConverter = new GuiListPagingConverter();
        this.guiListModeConverter = new GuiListModeConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ContainerTemplate(this.template, templateRef);
        /** @type {?} */
        const cardTemplateRef = this.listCard ? this.listCard.templateRef : null;
        this.listCardTemplate = new ListCardTemplate(this.cardTemplate, cardTemplateRef);
        if (changes.paging !== undefined && changes.paging.currentValue !== undefined) {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.guiListPagingConverter.convert(this.paging);
            }
        }
        if (changes.view !== undefined && changes.view.currentValue !== undefined) {
            if (this.view.active !== undefined) {
                this.listViewMode = this.guiListModeConverter.convert(this.view.active);
            }
            if (this.view.selector !== undefined) {
                this.listViewModeSelector = this.view.selector;
            }
        }
    }
}
GuiListGateway.propDecorators = {
    listItem: [{ type: ContentChild, args: [GuiListItemComponent, { static: true },] }],
    listCard: [{ type: ContentChild, args: [GuiListCardComponent, { static: true },] }],
    source: [{ type: Input }],
    template: [{ type: Input }],
    cardTemplate: [{ type: Input }],
    paging: [{ type: Input }],
    view: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GuiListGateway.prototype.listItem;
    /** @type {?} */
    GuiListGateway.prototype.listCard;
    /** @type {?} */
    GuiListGateway.prototype.source;
    /** @type {?} */
    GuiListGateway.prototype.template;
    /** @type {?} */
    GuiListGateway.prototype.cardTemplate;
    /** @type {?} */
    GuiListGateway.prototype.paging;
    /** @type {?} */
    GuiListGateway.prototype.view;
    /** @type {?} */
    GuiListGateway.prototype.containerTemplate;
    /** @type {?} */
    GuiListGateway.prototype.listCardTemplate;
    /** @type {?} */
    GuiListGateway.prototype.listViewMode;
    /** @type {?} */
    GuiListGateway.prototype.listViewModeSelector;
    /** @type {?} */
    GuiListGateway.prototype.guiListPagingConverter;
    /** @type {?} */
    GuiListGateway.prototype.guiListModeConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDdkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFJdEUsTUFBTSxPQUFnQixjQUFjO0lBQXBDO1FBK0JDLDJCQUFzQixHQUEyQixJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFFOUUseUJBQW9CLEdBQXlCLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQWtDekUsQ0FBQzs7Ozs7SUFoQ0EsV0FBVyxDQUFDLE9BQXNCOztjQUUzQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFcEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7Y0FFckUsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXhFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakYsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFOUUsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9EO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUUxRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEU7WUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQy9DO1NBR0Q7SUFFRixDQUFDOzs7dUJBL0RBLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBR25ELFlBQVksU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBR25ELEtBQUs7dUJBR0wsS0FBSzsyQkFHTCxLQUFLO3FCQUdMLEtBQUs7bUJBR0wsS0FBSzs7OztJQWxCTixrQ0FDK0I7O0lBRS9CLGtDQUMrQjs7SUFFL0IsZ0NBQ21COztJQUVuQixrQ0FDZ0M7O0lBRWhDLHNDQUNvQzs7SUFFcEMsZ0NBQ2dDOztJQUVoQyw4QkFDa0I7O0lBRWxCLDJDQUFxQzs7SUFFckMsMENBQW1DOztJQUVuQyxzQ0FBMkI7O0lBRTNCLDhDQUE4Qjs7SUFFOUIsZ0RBQThFOztJQUU5RSw4Q0FBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50Q2hpbGQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0vZ3VpLmxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBHdWlMaXN0TW9kZSwgR3VpTGlzdFBhZ2luZywgR3VpTGlzdFZpZXcgfSBmcm9tICcuLi9kb21haW4tYXBpL2d1aS5saXN0LmFwaSc7XG5pbXBvcnQgeyBHdWlMaXN0UGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlMaXN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9ndWkubGlzdC1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL3RlbXBsYXRlL2xpc3QuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL3RlbXBsYXRlL2NvbnRhaW5lci10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBHdWlMaXN0TW9kZUNvbnZlcnRlciB9IGZyb20gJy4vbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUxpc3RHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAQ29udGVudENoaWxkKEd1aUxpc3RJdGVtQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRsaXN0SXRlbTogR3VpTGlzdEl0ZW1Db21wb25lbnQ7XG5cblx0QENvbnRlbnRDaGlsZChHdWlMaXN0Q2FyZENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcblx0bGlzdENhcmQ6IEd1aUxpc3RDYXJkQ29tcG9uZW50O1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PjtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNhcmRUZW1wbGF0ZTogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aUxpc3RQYWdpbmc7XG5cblx0QElucHV0KClcblx0dmlldzogR3VpTGlzdFZpZXc7XG5cblx0Y29udGFpbmVyVGVtcGxhdGU6IENvbnRhaW5lclRlbXBsYXRlO1xuXG5cdGxpc3RDYXJkVGVtcGxhdGU6IExpc3RDYXJkVGVtcGxhdGU7XG5cblx0bGlzdFZpZXdNb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0bGlzdFZpZXdNb2RlU2VsZWN0b3I6IGJvb2xlYW47XG5cblx0Z3VpTGlzdFBhZ2luZ0NvbnZlcnRlcjogR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciA9IG5ldyBHdWlMaXN0UGFnaW5nQ29udmVydGVyKCk7XG5cblx0Z3VpTGlzdE1vZGVDb252ZXJ0ZXI6IEd1aUxpc3RNb2RlQ29udmVydGVyID0gbmV3IEd1aUxpc3RNb2RlQ29udmVydGVyKCk7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0Y29uc3QgdGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RJdGVtID8gdGhpcy5saXN0SXRlbS50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlID0gbmV3IENvbnRhaW5lclRlbXBsYXRlKHRoaXMudGVtcGxhdGUsIHRlbXBsYXRlUmVmKTtcblxuXHRcdGNvbnN0IGNhcmRUZW1wbGF0ZVJlZiA9IHRoaXMubGlzdENhcmQgPyB0aGlzLmxpc3RDYXJkLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZSA9IG5ldyBMaXN0Q2FyZFRlbXBsYXRlKHRoaXMuY2FyZFRlbXBsYXRlLCBjYXJkVGVtcGxhdGVSZWYpO1xuXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gdGhpcy5ndWlMaXN0UGFnaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5wYWdpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZpZXcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHRoaXMudmlldy5hY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZSA9IHRoaXMuZ3VpTGlzdE1vZGVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnZpZXcuYWN0aXZlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudmlldy5zZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlU2VsZWN0b3IgPSB0aGlzLnZpZXcuc2VsZWN0b3I7XG5cdFx0XHR9XG5cblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==