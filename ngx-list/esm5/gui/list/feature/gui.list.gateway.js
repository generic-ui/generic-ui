/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewCardTemplate } from '../../../structure/list/feature/card/template/list-view.card-template';
import { ListViewTemplate } from '../../../structure/list/feature/source/template/list-view-template';
/**
 * @abstract
 */
var GuiListGateway = /** @class */ (function () {
    function GuiListGateway() {
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
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
        this.containerTemplate = new ListViewTemplate(this.template, templateRef);
        /** @type {?} */
        var cardTemplateRef = this.listCard ? this.listCard.templateRef : null;
        this.listCardTemplate = new ListViewCardTemplate(this.cardTemplate, cardTemplateRef);
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
        if (changes.fields !== undefined && changes.fields.currentValue !== undefined) {
            this.listFields = this.fields.map((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                return {
                    field: f.field,
                    type: (/** @type {?} */ (f.type)) // DataType
                };
            }));
        }
        if (changes.searching !== undefined && changes.searching.currentValue !== undefined) {
            this.searchConfig = (/** @type {?} */ (this.searching));
        }
    };
    GuiListGateway.propDecorators = {
        listItem: [{ type: ContentChild, args: [GuiListItemComponent, { static: true },] }],
        listCard: [{ type: ContentChild, args: [GuiListCardComponent, { static: true },] }],
        source: [{ type: Input }],
        template: [{ type: Input }],
        cardTemplate: [{ type: Input }],
        paging: [{ type: Input }],
        view: [{ type: Input }],
        fields: [{ type: Input }],
        searching: [{ type: Input }],
        pageChanged: [{ type: Output }],
        pageSizeChanged: [{ type: Output }],
        searchPhraseChanged: [{ type: Output }]
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
    GuiListGateway.prototype.fields;
    /** @type {?} */
    GuiListGateway.prototype.searching;
    /** @type {?} */
    GuiListGateway.prototype.pageChanged;
    /** @type {?} */
    GuiListGateway.prototype.pageSizeChanged;
    /** @type {?} */
    GuiListGateway.prototype.searchPhraseChanged;
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
    /** @type {?} */
    GuiListGateway.prototype.listFields;
    /** @type {?} */
    GuiListGateway.prototype.searchConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7OztBQU10RztJQUFBO1FBOEJDLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0Qsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQVV2RSwyQkFBc0IsR0FBMkIsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBRTlFLHlCQUFvQixHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFvRHpFLENBQUM7Ozs7O0lBOUNBLG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFFM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXBFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7O1lBRXBFLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUV4RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXJGLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBRTlFLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvRDtTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFMUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hFO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMvQztTQUVEO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFOUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLENBQUM7Z0JBQ25DLE9BQU87b0JBQ04sS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO29CQUNkLElBQUksRUFBRSxtQkFBQSxDQUFDLENBQUMsSUFBSSxFQUFPLENBQUMsV0FBVztpQkFDL0IsQ0FBQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUVwRixJQUFJLENBQUMsWUFBWSxHQUFHLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQWdCLENBQUM7U0FDbkQ7SUFFRixDQUFDOzsyQkFoR0EsWUFBWSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHbkQsWUFBWSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFHbkQsS0FBSzsyQkFHTCxLQUFLOytCQUdMLEtBQUs7eUJBR0wsS0FBSzt1QkFHTCxLQUFLO3lCQUdMLEtBQUs7NEJBR0wsS0FBSzs4QkFHTCxNQUFNO2tDQUdOLE1BQU07c0NBR04sTUFBTTs7SUFpRVIscUJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQXBHcUIsY0FBYzs7O0lBRW5DLGtDQUMrQjs7SUFFL0Isa0NBQytCOztJQUUvQixnQ0FDbUI7O0lBRW5CLGtDQUNnQzs7SUFFaEMsc0NBQ29DOztJQUVwQyxnQ0FDZ0M7O0lBRWhDLDhCQUNrQjs7SUFFbEIsZ0NBQzRCOztJQUU1QixtQ0FDNEI7O0lBRTVCLHFDQUMrRDs7SUFFL0QseUNBQ21FOztJQUVuRSw2Q0FDdUU7O0lBRXZFLDJDQUFvQzs7SUFFcEMsMENBQXVDOztJQUV2QyxzQ0FBMkI7O0lBRTNCLDhDQUE4Qjs7SUFFOUIsZ0RBQThFOztJQUU5RSw4Q0FBd0U7O0lBRXhFLG9DQUErQjs7SUFFL0Isc0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUxpc3RGaWVsZCwgR3VpTGlzdFBhZ2luZywgR3VpTGlzdFNlYXJjaGluZywgR3VpTGlzdFZpZXcgfSBmcm9tICcuLi9kb21haW4tYXBpL2d1aS5saXN0LnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFnaW5nL2d1aS1saXN0LnBhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpTGlzdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvZ3VpLmxpc3QtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VpTGlzdE1vZGVDb252ZXJ0ZXIgfSBmcm9tICcuL21vZGUvZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXInO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2gtY29uZmlnJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpTGlzdEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdEl0ZW1Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RJdGVtOiBHdWlMaXN0SXRlbUNvbXBvbmVudDtcblxuXHRAQ29udGVudENoaWxkKEd1aUxpc3RDYXJkQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRsaXN0Q2FyZDogR3VpTGlzdENhcmRDb21wb25lbnQ7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0Y2FyZFRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpTGlzdFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2aWV3OiBHdWlMaXN0VmlldztcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IEFycmF5PEd1aUxpc3RGaWVsZD47XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBHdWlMaXN0U2VhcmNoaW5nO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdGNvbnRhaW5lclRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGxpc3RDYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGxpc3RWaWV3TW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdGxpc3RWaWV3TW9kZVNlbGVjdG9yOiBib29sZWFuO1xuXG5cdGd1aUxpc3RQYWdpbmdDb252ZXJ0ZXI6IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlcigpO1xuXG5cdGd1aUxpc3RNb2RlQ29udmVydGVyOiBHdWlMaXN0TW9kZUNvbnZlcnRlciA9IG5ldyBHdWlMaXN0TW9kZUNvbnZlcnRlcigpO1xuXG5cdGxpc3RGaWVsZHM6IEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZztcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZVJlZiA9IHRoaXMubGlzdEl0ZW0gPyB0aGlzLmxpc3RJdGVtLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGUgPSBuZXcgTGlzdFZpZXdUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlLCB0ZW1wbGF0ZVJlZik7XG5cblx0XHRjb25zdCBjYXJkVGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RDYXJkID8gdGhpcy5saXN0Q2FyZC50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGUgPSBuZXcgTGlzdFZpZXdDYXJkVGVtcGxhdGUodGhpcy5jYXJkVGVtcGxhdGUsIGNhcmRUZW1wbGF0ZVJlZik7XG5cblx0XHRpZiAoY2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSB0aGlzLmd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIuY29udmVydCh0aGlzLnBhZ2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMudmlldyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudmlldy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRpZiAodGhpcy52aWV3LmFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlID0gdGhpcy5ndWlMaXN0TW9kZUNvbnZlcnRlci5jb252ZXJ0KHRoaXMudmlldy5hY3RpdmUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy52aWV3LnNlbGVjdG9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5saXN0Vmlld01vZGVTZWxlY3RvciA9IHRoaXMudmlldy5zZWxlY3Rvcjtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLmZpZWxkcyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZmllbGRzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHRoaXMubGlzdEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcCgoZikgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGZpZWxkOiBmLmZpZWxkLFxuXHRcdFx0XHRcdHR5cGU6IGYudHlwZSBhcyBhbnkgLy8gRGF0YVR5cGVcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnNlYXJjaGluZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuc2VhcmNoaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHRoaXMuc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hpbmcgYXMgU2VhcmNoQ29uZmlnO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==