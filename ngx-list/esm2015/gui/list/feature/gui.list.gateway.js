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
    localization: [{ type: Input }],
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
    GuiListGateway.prototype.localization;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDOzs7O0FBT3RHLE1BQU0sT0FBZ0IsY0FBYztJQUFwQztRQWlDQyxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFVdkUsMkJBQXNCLEdBQTJCLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUU5RSx5QkFBb0IsR0FBeUIsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBb0R6RSxDQUFDOzs7OztJQTlDQSxXQUFXLENBQUMsT0FBa0M7O2NBRXZDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUVwRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxnQkFBZ0Is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IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpTGlzdEZpZWxkLCBHdWlMaXN0TG9jYWxpemF0aW9uLCBHdWlMaXN0UGFnaW5nLCBHdWlMaXN0U2VhcmNoaW5nLCBHdWlMaXN0VmlldyB9IGZyb20gJy4uL2NvcmUvYXBpL2d1aS5saXN0LnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFnaW5nL2d1aS1saXN0LnBhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpTGlzdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvZ3VpLmxpc3QtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VpTGlzdE1vZGVDb252ZXJ0ZXIgfSBmcm9tICcuL21vZGUvZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXInO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpTGlzdEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdEl0ZW1Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RJdGVtOiBHdWlMaXN0SXRlbUNvbXBvbmVudDtcblxuXHRAQ29udGVudENoaWxkKEd1aUxpc3RDYXJkQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRsaXN0Q2FyZDogR3VpTGlzdENhcmRDb21wb25lbnQ7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0Y2FyZFRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpTGlzdFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2aWV3OiBHdWlMaXN0VmlldztcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IEFycmF5PEd1aUxpc3RGaWVsZD47XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBHdWlMaXN0U2VhcmNoaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTGlzdExvY2FsaXphdGlvbjtcblxuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRjb250YWluZXJUZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRsaXN0Q2FyZFRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRsaXN0Vmlld01vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRsaXN0Vmlld01vZGVTZWxlY3RvcjogYm9vbGVhbjtcblxuXHRndWlMaXN0UGFnaW5nQ29udmVydGVyOiBHdWlMaXN0UGFnaW5nQ29udmVydGVyID0gbmV3IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRndWlMaXN0TW9kZUNvbnZlcnRlcjogR3VpTGlzdE1vZGVDb252ZXJ0ZXIgPSBuZXcgR3VpTGlzdE1vZGVDb252ZXJ0ZXIoKTtcblxuXHRsaXN0RmllbGRzOiBBcnJheTxGaWVsZENvbmZpZz47XG5cblx0c2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWc7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEd1aUxpc3RHYXRld2F5Pikge1xuXG5cdFx0Y29uc3QgdGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RJdGVtID8gdGhpcy5saXN0SXRlbS50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlID0gbmV3IExpc3RWaWV3VGVtcGxhdGUodGhpcy50ZW1wbGF0ZSwgdGVtcGxhdGVSZWYpO1xuXG5cdFx0Y29uc3QgY2FyZFRlbXBsYXRlUmVmID0gdGhpcy5saXN0Q2FyZCA/IHRoaXMubGlzdENhcmQudGVtcGxhdGVSZWYgOiBudWxsO1xuXG5cdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlID0gbmV3IExpc3RWaWV3Q2FyZFRlbXBsYXRlKHRoaXMuY2FyZFRlbXBsYXRlLCBjYXJkVGVtcGxhdGVSZWYpO1xuXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gdGhpcy5ndWlMaXN0UGFnaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5wYWdpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZpZXcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHRoaXMudmlldy5hY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZSA9IHRoaXMuZ3VpTGlzdE1vZGVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnZpZXcuYWN0aXZlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudmlldy5zZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlU2VsZWN0b3IgPSB0aGlzLnZpZXcuc2VsZWN0b3I7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5maWVsZHMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmZpZWxkcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLmxpc3RGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoKGYpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRmaWVsZDogZi5maWVsZCxcblx0XHRcdFx0XHR0eXBlOiBmLnR5cGUgYXMgYW55IC8vIERhdGFUeXBlXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWFyY2hpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnNlYXJjaGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoaW5nIGFzIFNlYXJjaENvbmZpZztcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=