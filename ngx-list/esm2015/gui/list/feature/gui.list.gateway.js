import { ContentChild, Directive, EventEmitter, Input, Output } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewCardTemplate } from '../../../structure/list/feature/card/template/list-view.card-template';
import { ListViewTemplate } from '../../../structure/list/feature/source/template/list-view-template';
import * as i0 from "@angular/core";
export class GuiListGateway {
    constructor() {
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.searchPhraseChanged = new EventEmitter();
        this.guiListPagingConverter = new GuiListPagingConverter();
        this.guiListModeConverter = new GuiListModeConverter();
    }
    ngOnChanges(changes) {
        const templateRef = this.listItem ? this.listItem.templateRef : null;
        this.containerTemplate = new ListViewTemplate(this.template, templateRef);
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
            this.listFields = this.fields.map((f) => {
                return {
                    field: f.field,
                    type: f.type // DataType
                };
            });
        }
        if (changes.searching !== undefined && changes.searching.currentValue !== undefined) {
            this.searchConfig = this.searching;
        }
    }
}
GuiListGateway.ɵfac = function GuiListGateway_Factory(t) { return new (t || GuiListGateway)(); };
GuiListGateway.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: GuiListGateway, contentQueries: function GuiListGateway_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, GuiListItemComponent, 7);
        i0.ɵɵcontentQuery(dirIndex, GuiListCardComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listItem = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listCard = _t.first);
    } }, inputs: { source: "source", template: "template", cardTemplate: "cardTemplate", paging: "paging", view: "view", fields: "fields", searching: "searching", localization: "localization" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged", searchPhraseChanged: "searchPhraseChanged" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiListGateway, [{
        type: Directive
    }], null, { listItem: [{
            type: ContentChild,
            args: [GuiListItemComponent, { static: true }]
        }], listCard: [{
            type: ContentChild,
            args: [GuiListCardComponent, { static: true }]
        }], source: [{
            type: Input
        }], template: [{
            type: Input
        }], cardTemplate: [{
            type: Input
        }], paging: [{
            type: Input
        }], view: [{
            type: Input
        }], fields: [{
            type: Input
        }], searching: [{
            type: Input
        }], localization: [{
            type: Input
        }], pageChanged: [{
            type: Output
        }], pageSizeChanged: [{
            type: Output
        }], searchPhraseChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDOztBQU90RyxNQUFNLE9BQWdCLGNBQWM7SUFEcEM7UUFrQ0MsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR25FLHdCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBVXZFLDJCQUFzQixHQUEyQixJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFFOUUseUJBQW9CLEdBQXlCLElBQUksb0JBQW9CLEVBQUUsQ0FBQztLQW9EeEU7SUE5Q0EsV0FBVyxDQUFDLE9BQWtDO1FBRTdDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFckUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUUxRSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXpFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFckYsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFOUUsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9EO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUUxRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEU7WUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQy9DO1NBRUQ7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUU5RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLE9BQU87b0JBQ04sS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO29CQUNkLElBQUksRUFBRSxDQUFDLENBQUMsSUFBVyxDQUFDLFdBQVc7aUJBQy9CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNIO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFcEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBeUIsQ0FBQztTQUNuRDtJQUVGLENBQUM7OzRFQXJHb0IsY0FBYztpRUFBZCxjQUFjO29DQUVyQixvQkFBb0I7b0NBR3BCLG9CQUFvQjs7Ozs7O3VGQUxiLGNBQWM7Y0FEbkMsU0FBUztnQkFJVCxRQUFRO2tCQURQLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSXBELFFBQVE7a0JBRFAsWUFBWTttQkFBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJcEQsTUFBTTtrQkFETCxLQUFLO1lBSU4sUUFBUTtrQkFEUCxLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLO1lBSU4sTUFBTTtrQkFETCxLQUFLO1lBSU4sSUFBSTtrQkFESCxLQUFLO1lBSU4sTUFBTTtrQkFETCxLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLO1lBSU4sV0FBVztrQkFEVixNQUFNO1lBSVAsZUFBZTtrQkFEZCxNQUFNO1lBSVAsbUJBQW1CO2tCQURsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2d1aS5saXN0LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpTGlzdEZpZWxkLCBHdWlMaXN0TG9jYWxpemF0aW9uLCBHdWlMaXN0UGFnaW5nLCBHdWlMaXN0U2VhcmNoaW5nLCBHdWlMaXN0VmlldyB9IGZyb20gJy4uL2NvcmUvYXBpL2d1aS5saXN0LnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4vcGFnaW5nL2d1aS1saXN0LnBhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgR3VpTGlzdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvZ3VpLmxpc3QtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VpTGlzdE1vZGVDb252ZXJ0ZXIgfSBmcm9tICcuL21vZGUvZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXInO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2xpc3QvZmVhdHVyZS9zb3VyY2UvdGVtcGxhdGUvbGlzdC12aWV3LXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpTGlzdEdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdEl0ZW1Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RJdGVtOiBHdWlMaXN0SXRlbUNvbXBvbmVudDtcblxuXHRAQ29udGVudENoaWxkKEd1aUxpc3RDYXJkQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRsaXN0Q2FyZDogR3VpTGlzdENhcmRDb21wb25lbnQ7XG5cblx0QElucHV0KClcblx0c291cmNlOiBBcnJheTxhbnk+O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0Y2FyZFRlbXBsYXRlOiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgR3VpTGlzdFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHR2aWV3OiBHdWlMaXN0VmlldztcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IEFycmF5PEd1aUxpc3RGaWVsZD47XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBHdWlMaXN0U2VhcmNoaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTGlzdExvY2FsaXphdGlvbjtcblxuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRjb250YWluZXJUZW1wbGF0ZTogTGlzdFZpZXdUZW1wbGF0ZTtcblxuXHRsaXN0Q2FyZFRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRsaXN0Vmlld01vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRsaXN0Vmlld01vZGVTZWxlY3RvcjogYm9vbGVhbjtcblxuXHRndWlMaXN0UGFnaW5nQ29udmVydGVyOiBHdWlMaXN0UGFnaW5nQ29udmVydGVyID0gbmV3IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIoKTtcblxuXHRndWlMaXN0TW9kZUNvbnZlcnRlcjogR3VpTGlzdE1vZGVDb252ZXJ0ZXIgPSBuZXcgR3VpTGlzdE1vZGVDb252ZXJ0ZXIoKTtcblxuXHRsaXN0RmllbGRzOiBBcnJheTxGaWVsZENvbmZpZz47XG5cblx0c2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWc7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPEd1aUxpc3RHYXRld2F5Pikge1xuXG5cdFx0Y29uc3QgdGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RJdGVtID8gdGhpcy5saXN0SXRlbS50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlID0gbmV3IExpc3RWaWV3VGVtcGxhdGUodGhpcy50ZW1wbGF0ZSwgdGVtcGxhdGVSZWYpO1xuXG5cdFx0Y29uc3QgY2FyZFRlbXBsYXRlUmVmID0gdGhpcy5saXN0Q2FyZCA/IHRoaXMubGlzdENhcmQudGVtcGxhdGVSZWYgOiBudWxsO1xuXG5cdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlID0gbmV3IExpc3RWaWV3Q2FyZFRlbXBsYXRlKHRoaXMuY2FyZFRlbXBsYXRlLCBjYXJkVGVtcGxhdGVSZWYpO1xuXG5cdFx0aWYgKGNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gdGhpcy5ndWlMaXN0UGFnaW5nQ29udmVydGVyLmNvbnZlcnQodGhpcy5wYWdpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnZpZXcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnZpZXcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0aWYgKHRoaXMudmlldy5hY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZSA9IHRoaXMuZ3VpTGlzdE1vZGVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnZpZXcuYWN0aXZlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudmlldy5zZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlU2VsZWN0b3IgPSB0aGlzLnZpZXcuc2VsZWN0b3I7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5maWVsZHMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmZpZWxkcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLmxpc3RGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoKGYpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRmaWVsZDogZi5maWVsZCxcblx0XHRcdFx0XHR0eXBlOiBmLnR5cGUgYXMgYW55IC8vIERhdGFUeXBlXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWFyY2hpbmcgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnNlYXJjaGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoaW5nIGFzIFNlYXJjaENvbmZpZztcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=