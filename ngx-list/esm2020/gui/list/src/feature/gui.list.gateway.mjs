import { ContentChild, Directive, EventEmitter, Input, Output } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewCardTemplate } from '../../../../feature-view/list-view/src/card/template/list-view.card-template';
import { ListViewTemplate } from '../../../../feature-view/list-view/src/source/template/list-view-template';
import { ifChanged } from '../../../../feature/common/component/src/check.input';
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
GuiListGateway.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiListGateway, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GuiListGateway.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: GuiListGateway, inputs: { source: "source", template: "template", cardTemplate: "cardTemplate", paging: "paging", view: "view", fields: "fields", searching: "searching", localization: "localization" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged", searchPhraseChanged: "searchPhraseChanged" }, queries: [{ propertyName: "listItem", first: true, predicate: GuiListItemComponent, descendants: true, static: true }, { propertyName: "listCard", first: true, predicate: GuiListCardComponent, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GuiListGateway, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3Qvc3JjL2ZlYXR1cmUvZ3VpLmxpc3QuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUs3RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBR2pGLE1BQU0sT0FBZ0IsY0FBYztJQURwQztRQWtDQyxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFVdkUsMkJBQXNCLEdBQTJCLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUU5RSx5QkFBb0IsR0FBeUIsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0tBZ0R4RTtJQTFDQSxXQUFXLENBQUMsT0FBa0M7UUFFN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVyRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTFFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFekUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVyRixTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9EO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFFNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hFO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMvQztRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsT0FBTztvQkFDTixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7b0JBQ2QsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFXLENBQUMsV0FBVztpQkFDL0IsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBeUIsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7OzRHQWpHb0IsY0FBYztnR0FBZCxjQUFjLG1YQUVyQixvQkFBb0IseUZBR3BCLG9CQUFvQjs0RkFMYixjQUFjO2tCQURuQyxTQUFTOzhCQUlULFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSXBELFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSXBELE1BQU07c0JBREwsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxLQUFLO2dCQUlOLE1BQU07c0JBREwsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sV0FBVztzQkFEVixNQUFNO2dCQUlQLGVBQWU7c0JBRGQsTUFBTTtnQkFJUCxtQkFBbUI7c0JBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0vZ3VpLmxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBHdWlMaXN0RmllbGQsIEd1aUxpc3RMb2NhbGl6YXRpb24sIEd1aUxpc3RQYWdpbmcsIEd1aUxpc3RTZWFyY2hpbmcsIEd1aUxpc3RWaWV3IH0gZnJvbSAnLi4vY29yZS9hcGkvZ3VpLmxpc3QucHVibGljLWFwaSc7XG5pbXBvcnQgeyBHdWlMaXN0UGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi9wYWdpbmcvZ3VpLWxpc3QucGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBHdWlMaXN0Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9ndWkubGlzdC1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlMaXN0TW9kZUNvbnZlcnRlciB9IGZyb20gJy4vbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlcic7XG5cbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS12aWV3L2xpc3Qtdmlldy9zcmMvY2FyZC90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS12aWV3L2xpc3Qtdmlldy9zcmMvc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2xpc3Qtdmlldy9zcmMvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvYXBpL2NvbmZpZy9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9hcGkvY29uZmlnL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvY2hlY2suaW5wdXQnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHdWlMaXN0R2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QENvbnRlbnRDaGlsZChHdWlMaXN0SXRlbUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcblx0bGlzdEl0ZW06IEd1aUxpc3RJdGVtQ29tcG9uZW50O1xuXG5cdEBDb250ZW50Q2hpbGQoR3VpTGlzdENhcmRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG5cdGxpc3RDYXJkOiBHdWlMaXN0Q2FyZENvbXBvbmVudDtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT47XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IChpdGVtOiBhbnkpID0+IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjYXJkVGVtcGxhdGU6IChpdGVtOiBhbnkpID0+IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IGJvb2xlYW4gfCBHdWlMaXN0UGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHZpZXc6IEd1aUxpc3RWaWV3O1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogQXJyYXk8R3VpTGlzdEZpZWxkPjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IEd1aUxpc3RTZWFyY2hpbmc7XG5cblx0QElucHV0KClcblx0bG9jYWxpemF0aW9uOiBHdWlMaXN0TG9jYWxpemF0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdGNvbnRhaW5lclRlbXBsYXRlOiBMaXN0Vmlld1RlbXBsYXRlO1xuXG5cdGxpc3RDYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGxpc3RWaWV3TW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdGxpc3RWaWV3TW9kZVNlbGVjdG9yOiBib29sZWFuO1xuXG5cdGd1aUxpc3RQYWdpbmdDb252ZXJ0ZXI6IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIgPSBuZXcgR3VpTGlzdFBhZ2luZ0NvbnZlcnRlcigpO1xuXG5cdGd1aUxpc3RNb2RlQ29udmVydGVyOiBHdWlMaXN0TW9kZUNvbnZlcnRlciA9IG5ldyBHdWlMaXN0TW9kZUNvbnZlcnRlcigpO1xuXG5cdGxpc3RGaWVsZHM6IEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZztcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8R3VpTGlzdEdhdGV3YXk+KSB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZVJlZiA9IHRoaXMubGlzdEl0ZW0gPyB0aGlzLmxpc3RJdGVtLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGUgPSBuZXcgTGlzdFZpZXdUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlLCB0ZW1wbGF0ZVJlZik7XG5cblx0XHRjb25zdCBjYXJkVGVtcGxhdGVSZWYgPSB0aGlzLmxpc3RDYXJkID8gdGhpcy5saXN0Q2FyZC50ZW1wbGF0ZVJlZiA6IG51bGw7XG5cblx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGUgPSBuZXcgTGlzdFZpZXdDYXJkVGVtcGxhdGUodGhpcy5jYXJkVGVtcGxhdGUsIGNhcmRUZW1wbGF0ZVJlZik7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5wYWdpbmcsICgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3VpTGlzdFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnZpZXcsICgpID0+IHtcblxuXHRcdFx0aWYgKHRoaXMudmlldy5hY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZSA9IHRoaXMuZ3VpTGlzdE1vZGVDb252ZXJ0ZXIuY29udmVydCh0aGlzLnZpZXcuYWN0aXZlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudmlldy5zZWxlY3RvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubGlzdFZpZXdNb2RlU2VsZWN0b3IgPSB0aGlzLnZpZXcuc2VsZWN0b3I7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy5maWVsZHMsICgpID0+IHtcblx0XHRcdHRoaXMubGlzdEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcCgoZikgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGZpZWxkOiBmLmZpZWxkLFxuXHRcdFx0XHRcdHR5cGU6IGYudHlwZSBhcyBhbnkgLy8gRGF0YVR5cGVcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuc2VhcmNoaW5nLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoaW5nIGFzIFNlYXJjaENvbmZpZztcblx0XHR9KTtcblxuXHR9XG5cbn1cbiJdfQ==