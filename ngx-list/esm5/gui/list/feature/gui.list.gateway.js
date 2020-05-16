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
var GuiListGateway = /** @class */ (function () {
    function GuiListGateway() {
        this.guiListPagingConverter = new GuiListPagingConverter();
        this.guiListModeConverter = new GuiListModeConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    GuiListGateway.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ContainerTemplate(this.template, templateRef);
        /** @type {?} */
        var cardTemplateRef = this.listCard ? this.listCard.templateRef : null;
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
    };
    GuiListGateway.propDecorators = {
        listItem: [{ type: ContentChild, args: [GuiListItemComponent, { static: true },] }],
        listCard: [{ type: ContentChild, args: [GuiListCardComponent, { static: true },] }],
        source: [{ type: Input }],
        template: [{ type: Input }],
        cardTemplate: [{ type: Input }],
        paging: [{ type: Input }],
        view: [{ type: Input }]
    };
    return GuiListGateway;
}());
export { GuiListGateway };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDdkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFJdEU7SUFBQTtRQStCQywyQkFBc0IsR0FBMkIsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBRTlFLHlCQUFvQixHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFrQ3pFLENBQUM7Ozs7O0lBaENBLG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFFM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXBFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7O1lBRXJFLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUV4RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRWpGLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBRTlFLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvRDtTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFMUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hFO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMvQztTQUdEO0lBRUYsQ0FBQzs7MkJBL0RBLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBR25ELFlBQVksU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBR25ELEtBQUs7MkJBR0wsS0FBSzsrQkFHTCxLQUFLO3lCQUdMLEtBQUs7dUJBR0wsS0FBSzs7SUErQ1AscUJBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQW5FcUIsY0FBYzs7O0lBRW5DLGtDQUMrQjs7SUFFL0Isa0NBQytCOztJQUUvQixnQ0FDbUI7O0lBRW5CLGtDQUNnQzs7SUFFaEMsc0NBQ29DOztJQUVwQyxnQ0FDZ0M7O0lBRWhDLDhCQUNrQjs7SUFFbEIsMkNBQXFDOztJQUVyQywwQ0FBbUM7O0lBRW5DLHNDQUEyQjs7SUFFM0IsOENBQThCOztJQUU5QixnREFBOEU7O0lBRTlFLDhDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUxpc3RNb2RlLCBHdWlMaXN0UGFnaW5nLCBHdWlMaXN0VmlldyB9IGZyb20gJy4uL2RvbWFpbi1hcGkvZ3VpLmxpc3QuYXBpJztcbmltcG9ydCB7IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWktbGlzdC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUxpc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2d1aS5saXN0LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NhcmQvdGVtcGxhdGUvbGlzdC5jYXJkLXRlbXBsYXRlJztcbmltcG9ydCB7IENvbnRhaW5lclRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9zb3VyY2UvdGVtcGxhdGUvY29udGFpbmVyLXRlbXBsYXRlJztcbmltcG9ydCB7IEd1aUxpc3RNb2RlQ29udmVydGVyIH0gZnJvbSAnLi9tb2RlL2d1aS1saXN0Lm1vZGUuY29udmVydGVyJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpTGlzdEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdEl0ZW1Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RJdGVtOiBHdWlMaXN0SXRlbUNvbXBvbmVudDtcblxuXHRAQ29udGVudENoaWxkKEd1aUxpc3RDYXJkQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRsaXN0Q2FyZDogR3VpTGlzdENhcmRDb21wb25lbnQ7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0Y2FyZFRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpTGlzdFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2aWV3OiBHdWlMaXN0VmlldztcblxuXHRjb250YWluZXJUZW1wbGF0ZTogQ29udGFpbmVyVGVtcGxhdGU7XG5cblx0bGlzdENhcmRUZW1wbGF0ZTogTGlzdENhcmRUZW1wbGF0ZTtcblxuXHRsaXN0Vmlld01vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRsaXN0Vmlld01vZGVTZWxlY3RvcjogYm9vbGVhbjtcblxuXHRndWlMaXN0UGFnaW5nQ29udmVydGVyOiBHdWlMaXN0UGFnaW5nQ29udmVydGVyID0gbmV3IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRndWlMaXN0TW9kZUNvbnZlcnRlcjogR3VpTGlzdE1vZGVDb252ZXJ0ZXIgPSBuZXcgR3VpTGlzdE1vZGVDb252ZXJ0ZXIoKTtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZVJlZiA9IHRoaXMubGlzdEl0ZW0gPyB0aGlzLmxpc3RJdGVtLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGUgPSBuZXcgQ29udGFpbmVyVGVtcGxhdGUodGhpcy50ZW1wbGF0ZSwgdGVtcGxhdGVSZWYpO1xuXG5cdFx0Y29uc3QgY2FyZFRlbXBsYXRlUmVmID0gdGhpcy5saXN0Q2FyZCA/IHRoaXMubGlzdENhcmQudGVtcGxhdGVSZWYgOiBudWxsO1xuXG5cdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlID0gbmV3IExpc3RDYXJkVGVtcGxhdGUodGhpcy5jYXJkVGVtcGxhdGUsIGNhcmRUZW1wbGF0ZVJlZik7XG5cblx0XHRpZiAoY2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSB0aGlzLmd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnBhZ2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMudmlldyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudmlldy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRpZiAodGhpcy52aWV3LmFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlID0gdGhpcy5ndWlMaXN0TW9kZUNvbnZlcnRlci5jb252ZXJ0KHRoaXMudmlldy5hY3RpdmUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy52aWV3LnNlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5saXN0Vmlld01vZGVTZWxlY3RvciA9IHRoaXMudmlldy5zZWxlY3Rvcjtcblx0XHRcdH1cblxuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19