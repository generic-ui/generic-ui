import { ContentChild, Directive, EventEmitter, Input, Output } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewCardTemplate } from '../../../feature-view/list-view/card/template/list-view.card-template';
import { ListViewTemplate } from '../../../feature-view/list-view/source/template/list-view-template';
import { ifChanged } from '../../../feature/common/cdk/component/check.input';
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
        ifChanged(changes.paging, () => {
            if (typeof this.paging !== 'boolean') {
                this.paging = this.guiListPagingConverter.convert(this.paging);
            }
        });
        ifChanged(changes.view, () => {
            if (this.view.active !== undefined) {
                this.listViewMode = this.guiListModeConverter.convert(this.view.active);
            }
            if (this.view.selector !== undefined) {
                this.listViewModeSelector = this.view.selector;
            }
        });
        ifChanged(changes.fields, () => {
            this.listFields = this.fields.map((f) => {
                return {
                    field: f.field,
                    type: f.type // DataType
                };
            });
        });
        ifChanged(changes.searching, () => {
            this.searchConfig = this.searching;
        });
    }
}
GuiListGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiListGateway, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GuiListGateway.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: GuiListGateway, inputs: { source: "source", template: "template", cardTemplate: "cardTemplate", paging: "paging", view: "view", fields: "fields", searching: "searching", localization: "localization" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged", searchPhraseChanged: "searchPhraseChanged" }, queries: [{ propertyName: "listItem", first: true, predicate: GuiListItemComponent, descendants: true, static: true }, { propertyName: "listCard", first: true, predicate: GuiListCardComponent, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiListGateway, decorators: [{
            type: Directive
        }], propDecorators: { listItem: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBS3RHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFHOUUsTUFBTSxPQUFnQixjQUFjO0lBRHBDO1FBa0NDLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHL0Qsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUduRSx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQVV2RSwyQkFBc0IsR0FBMkIsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBRTlFLHlCQUFvQixHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUM7S0FnRHhFO0lBMUNBLFdBQVcsQ0FBQyxPQUFrQztRQUU3QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXJFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFMUUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUV6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXJGLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0Q7UUFDRixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUU1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEU7WUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQy9DO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxPQUFPO29CQUNOLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztvQkFDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQVcsQ0FBQyxXQUFXO2lCQUMvQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUF5QixDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQzs7NEdBakdvQixjQUFjO2dHQUFkLGNBQWMsbVhBRXJCLG9CQUFvQix5RkFHcEIsb0JBQW9COzRGQUxiLGNBQWM7a0JBRG5DLFNBQVM7OEJBSVQsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJcEQsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJcEQsTUFBTTtzQkFETCxLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLO2dCQUlOLFlBQVk7c0JBRFgsS0FBSztnQkFJTixXQUFXO3NCQURWLE1BQU07Z0JBSVAsZUFBZTtzQkFEZCxNQUFNO2dCQUlQLG1CQUFtQjtzQkFEbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUxpc3RGaWVsZCwgR3VpTGlzdExvY2FsaXphdGlvbiwgR3VpTGlzdFBhZ2luZywgR3VpTGlzdFNlYXJjaGluZywgR3VpTGlzdFZpZXcgfSBmcm9tICcuLi9jb3JlL2FwaS9ndWkubGlzdC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWktbGlzdC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUxpc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2d1aS5saXN0LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUxpc3RNb2RlQ29udmVydGVyIH0gZnJvbSAnLi9tb2RlL2d1aS1saXN0Lm1vZGUuY29udmVydGVyJztcblxuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2xpc3Qtdmlldy9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL2FwaS9jb25maWcvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9hcGkvY29uZmlnL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvY2hlY2suaW5wdXQnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHdWlMaXN0R2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QENvbnRlbnRDaGlsZChHdWlMaXN0SXRlbUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcblx0bGlzdEl0ZW06IEd1aUxpc3RJdGVtQ29tcG9uZW50O1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdENhcmRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RDYXJkOiBHdWlMaXN0Q2FyZENvbXBvbmVudDtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT47XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IChpdGVtOiBhbnkpID0+IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjYXJkVGVtcGxhdGU6IChpdGVtOiBhbnkpID0+IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IGJvb2xlYW4gfCBHdWlMaXN0UGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHZpZXc6IEd1aUxpc3RWaWV3O1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogQXJyYXk8R3VpTGlzdEZpZWxkPjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IEd1aUxpc3RTZWFyY2hpbmc7XG5cblx0QElucHV0KClcblx0bG9jYWxpemF0aW9uOiBHdWlMaXN0TG9jYWxpemF0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdGNvbnRhaW5lclRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGxpc3RDYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGxpc3RWaWV3TW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdGxpc3RWaWV3TW9kZVNlbGVjdG9yOiBib29sZWFuO1xuXG5cdGd1aUxpc3RQYWdpbmdDb252ZXJ0ZXI6IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlcigpO1xuXG5cdGd1aUxpc3RNb2RlQ29udmVydGVyOiBHdWlMaXN0TW9kZUNvbnZlcnRlciA9IG5ldyBHdWlMaXN0TW9kZUNvbnZlcnRlcigpO1xuXG5cdGxpc3RGaWVsZHM6IEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZztcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8R3VpTGlzdEdhdGV3YXk+KSB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZVJlZiA9IHRoaXMubGlzdEl0ZW0gPyB0aGlzLmxpc3RJdGVtLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGUgPSBuZXcgTGlzdFZpZXdUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlLCB0ZW1wbGF0ZVJlZik7XG5cblx0XHRjb25zdCBjYXJkVGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RDYXJkID8gdGhpcy5saXN0Q2FyZC50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGUgPSBuZXcgTGlzdFZpZXdDYXJkVGVtcGxhdGUodGhpcy5jYXJkVGVtcGxhdGUsIGNhcmRUZW1wbGF0ZVJlZik7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5wYWdpbmcsICgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3VpTGlzdFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnZpZXcsICgpID0+IHtcblxuXHRcdFx0aWYgKHRoaXMudmlldy5hY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZSA9IHRoaXMuZ3VpTGlzdE1vZGVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnZpZXcuYWN0aXZlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudmlldy5zZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlU2VsZWN0b3IgPSB0aGlzLnZpZXcuc2VsZWN0b3I7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5maWVsZHMsICgpID0+IHtcblx0XHRcdHRoaXMubGlzdEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcCgoZikgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGZpZWxkOiBmLmZpZWxkLFxuXHRcdFx0XHRcdHR5cGU6IGYudHlwZSBhcyBhbnkgLy8gRGF0YVR5cGVcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuc2VhcmNoaW5nLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoaW5nIGFzIFNlYXJjaENvbmZpZztcblx0XHR9KTtcblxuXHR9XG5cbn1cbiJdfQ==