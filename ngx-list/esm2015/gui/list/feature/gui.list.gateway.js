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
export class GuiListGateway {
    constructor() {
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
    ngOnChanges(changes) {
        /** @type {?} */
        const templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ListViewTemplate(this.template, templateRef);
        /** @type {?} */
        const cardTemplateRef = this.listCard ? this.listCard.templateRef : null;
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
            (f) => {
                return {
                    field: f.field,
                    type: (/** @type {?} */ (f.type)) // DataType
                };
            }));
        }
        if (changes.searching !== undefined && changes.searching.currentValue !== undefined) {
            this.searchConfig = (/** @type {?} */ (this.searching));
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
    view: [{ type: Input }],
    fields: [{ type: Input }],
    searching: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7OztBQU10RyxNQUFNLE9BQWdCLGNBQWM7SUFBcEM7UUE4QkMsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR25FLHdCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBVXZFLDJCQUFzQixHQUEyQixJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFFOUUseUJBQW9CLEdBQXlCLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQW9EekUsQ0FBQzs7Ozs7SUE5Q0EsV0FBVyxDQUFDLE9BQXNCOztjQUUzQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFcEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZ0JBQWdC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Q2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpTGlzdEZpZWxkLCBHdWlMaXN0UGFnaW5nLCBHdWlMaXN0U2VhcmNoaW5nLCBHdWlMaXN0VmlldyB9IGZyb20gJy4uL2RvbWFpbi1hcGkvZ3VpLmxpc3QuYXBpJztcbmltcG9ydCB7IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWktbGlzdC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUxpc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2d1aS5saXN0LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUxpc3RNb2RlQ29udmVydGVyIH0gZnJvbSAnLi9tb2RlL2d1aS1saXN0Lm1vZGUuY29udmVydGVyJztcblxuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvc2VhcmNoLWNvbmZpZyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUxpc3RHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAQ29udGVudENoaWxkKEd1aUxpc3RJdGVtQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRsaXN0SXRlbTogR3VpTGlzdEl0ZW1Db21wb25lbnQ7XG5cblx0QENvbnRlbnRDaGlsZChHdWlMaXN0Q2FyZENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcblx0bGlzdENhcmQ6IEd1aUxpc3RDYXJkQ29tcG9uZW50O1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PjtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNhcmRUZW1wbGF0ZTogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aUxpc3RQYWdpbmc7XG5cblx0QElucHV0KClcblx0dmlldzogR3VpTGlzdFZpZXc7XG5cblx0QElucHV0KClcblx0ZmllbGRzOiBBcnJheTxHdWlMaXN0RmllbGQ+O1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogR3VpTGlzdFNlYXJjaGluZztcblxuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRjb250YWluZXJUZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRsaXN0Q2FyZFRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRsaXN0Vmlld01vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRsaXN0Vmlld01vZGVTZWxlY3RvcjogYm9vbGVhbjtcblxuXHRndWlMaXN0UGFnaW5nQ29udmVydGVyOiBHdWlMaXN0UGFnaW5nQ29udmVydGVyID0gbmV3IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRndWlMaXN0TW9kZUNvbnZlcnRlcjogR3VpTGlzdE1vZGVDb252ZXJ0ZXIgPSBuZXcgR3VpTGlzdE1vZGVDb252ZXJ0ZXIoKTtcblxuXHRsaXN0RmllbGRzOiBBcnJheTxGaWVsZENvbmZpZz47XG5cblx0c2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWc7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0Y29uc3QgdGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RJdGVtID8gdGhpcy5saXN0SXRlbS50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlID0gbmV3IExpc3RWaWV3VGVtcGxhdGUodGhpcy50ZW1wbGF0ZSwgdGVtcGxhdGVSZWYpO1xuXG5cdFx0Y29uc3QgY2FyZFRlbXBsYXRlUmVmID0gdGhpcy5saXN0Q2FyZCA/IHRoaXMubGlzdENhcmQudGVtcGxhdGVSZWYgOiBudWxsO1xuXG5cdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlID0gbmV3IExpc3RWaWV3Q2FyZFRlbXBsYXRlKHRoaXMuY2FyZFRlbXBsYXRlLCBjYXJkVGVtcGxhdGVSZWYpO1xuXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gdGhpcy5ndWlMaXN0UGFnaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5wYWdpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZpZXcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHRoaXMudmlldy5hY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZSA9IHRoaXMuZ3VpTGlzdE1vZGVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnZpZXcuYWN0aXZlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudmlldy5zZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlU2VsZWN0b3IgPSB0aGlzLnZpZXcuc2VsZWN0b3I7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5maWVsZHMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmZpZWxkcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLmxpc3RGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoKGYpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRmaWVsZDogZi5maWVsZCxcblx0XHRcdFx0XHR0eXBlOiBmLnR5cGUgYXMgYW55IC8vIERhdGFUeXBlXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWFyY2hpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnNlYXJjaGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoaW5nIGFzIFNlYXJjaENvbmZpZztcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=