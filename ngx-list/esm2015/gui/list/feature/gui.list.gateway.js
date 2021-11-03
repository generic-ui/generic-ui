import { ContentChild, Directive, EventEmitter, Input, Output } from '@angular/core';
import { GuiListItemComponent } from './item/gui.list-item.component';
import { GuiListPagingConverter } from './paging/gui-list.paging.converter';
import { GuiListCardComponent } from './card/gui.list-card.component';
import { GuiListModeConverter } from './mode/gui-list.mode.converter';
import { ListViewCardTemplate } from '../../../structure/list/feature/card/template/list-view.card-template';
import { ListViewTemplate } from '../../../structure/list/feature/source/template/list-view-template';
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
GuiListGateway.decorators = [
    { type: Directive }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBT3RHLE1BQU0sT0FBZ0IsY0FBYztJQURwQztRQWtDQyxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbkUsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFVdkUsMkJBQXNCLEdBQTJCLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUU5RSx5QkFBb0IsR0FBeUIsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBb0R6RSxDQUFDO0lBOUNBLFdBQVcsQ0FBQyxPQUFrQztRQUU3QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXJFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFMUUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUV6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXJGLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBRTlFLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvRDtTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFMUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hFO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMvQztTQUVEO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFFOUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxPQUFPO29CQUNOLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztvQkFDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQVcsQ0FBQyxXQUFXO2lCQUMvQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSDtRQUVELElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBRXBGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQXlCLENBQUM7U0FDbkQ7SUFFRixDQUFDOzs7WUF0R0QsU0FBUzs7O3VCQUdSLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBR25ELFlBQVksU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBR25ELEtBQUs7dUJBR0wsS0FBSzsyQkFHTCxLQUFLO3FCQUdMLEtBQUs7bUJBR0wsS0FBSztxQkFHTCxLQUFLO3dCQUdMLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxNQUFNOzhCQUdOLE1BQU07a0NBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9ndWkubGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUxpc3RGaWVsZCwgR3VpTGlzdExvY2FsaXphdGlvbiwgR3VpTGlzdFBhZ2luZywgR3VpTGlzdFNlYXJjaGluZywgR3VpTGlzdFZpZXcgfSBmcm9tICcuLi9jb3JlL2FwaS9ndWkubGlzdC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEd1aUxpc3RQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuL3BhZ2luZy9ndWktbGlzdC5wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IEd1aUxpc3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2d1aS5saXN0LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEd1aUxpc3RNb2RlQ29udmVydGVyIH0gZnJvbSAnLi9tb2RlL2d1aS1saXN0Lm1vZGUuY29udmVydGVyJztcblxuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NhcmQvdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9saXN0L2ZlYXR1cmUvc291cmNlL3RlbXBsYXRlL2xpc3Qtdmlldy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUxpc3RHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAQ29udGVudENoaWxkKEd1aUxpc3RJdGVtQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRsaXN0SXRlbTogR3VpTGlzdEl0ZW1Db21wb25lbnQ7XG5cblx0QENvbnRlbnRDaGlsZChHdWlMaXN0Q2FyZENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcblx0bGlzdENhcmQ6IEd1aUxpc3RDYXJkQ29tcG9uZW50O1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PjtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNhcmRUZW1wbGF0ZTogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogYm9vbGVhbiB8IEd1aUxpc3RQYWdpbmc7XG5cblx0QElucHV0KClcblx0dmlldzogR3VpTGlzdFZpZXc7XG5cblx0QElucHV0KClcblx0ZmllbGRzOiBBcnJheTxHdWlMaXN0RmllbGQ+O1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogR3VpTGlzdFNlYXJjaGluZztcblxuXHRASW5wdXQoKVxuXHRsb2NhbGl6YXRpb246IEd1aUxpc3RMb2NhbGl6YXRpb247XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0Y29udGFpbmVyVGVtcGxhdGU6IExpc3RWaWV3VGVtcGxhdGU7XG5cblx0bGlzdENhcmRUZW1wbGF0ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGU7XG5cblx0bGlzdFZpZXdNb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0bGlzdFZpZXdNb2RlU2VsZWN0b3I6IGJvb2xlYW47XG5cblx0Z3VpTGlzdFBhZ2luZ0NvbnZlcnRlcjogR3VpTGlzdFBhZ2luZ0NvbnZlcnRlciA9IG5ldyBHdWlMaXN0UGFnaW5nQ29udmVydGVyKCk7XG5cblx0Z3VpTGlzdE1vZGVDb252ZXJ0ZXI6IEd1aUxpc3RNb2RlQ29udmVydGVyID0gbmV3IEd1aUxpc3RNb2RlQ29udmVydGVyKCk7XG5cblx0bGlzdEZpZWxkczogQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxHdWlMaXN0R2F0ZXdheT4pIHtcblxuXHRcdGNvbnN0IHRlbXBsYXRlUmVmID0gdGhpcy5saXN0SXRlbSA/IHRoaXMubGlzdEl0ZW0udGVtcGxhdGVSZWYgOiBudWxsO1xuXG5cdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZSA9IG5ldyBMaXN0Vmlld1RlbXBsYXRlKHRoaXMudGVtcGxhdGUsIHRlbXBsYXRlUmVmKTtcblxuXHRcdGNvbnN0IGNhcmRUZW1wbGF0ZVJlZiA9IHRoaXMubGlzdENhcmQgPyB0aGlzLmxpc3RDYXJkLnRlbXBsYXRlUmVmIDogbnVsbDtcblxuXHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZSA9IG5ldyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSh0aGlzLmNhcmRUZW1wbGF0ZSwgY2FyZFRlbXBsYXRlUmVmKTtcblxuXHRcdGlmIChjaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgIT09ICdib29sZWFuJykge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHRoaXMuZ3VpTGlzdFBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHRoaXMucGFnaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy52aWV3ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy52aWV3LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGlmICh0aGlzLnZpZXcuYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5saXN0Vmlld01vZGUgPSB0aGlzLmd1aUxpc3RNb2RlQ29udmVydGVyLmNvbnZlcnQodGhpcy52aWV3LmFjdGl2ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnZpZXcuc2VsZWN0b3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RWaWV3TW9kZVNlbGVjdG9yID0gdGhpcy52aWV3LnNlbGVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuZmllbGRzICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5maWVsZHMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5saXN0RmllbGRzID0gdGhpcy5maWVsZHMubWFwKChmKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZmllbGQ6IGYuZmllbGQsXG5cdFx0XHRcdFx0dHlwZTogZi50eXBlIGFzIGFueSAvLyBEYXRhVHlwZVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2VhcmNoaW5nICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zZWFyY2hpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy5zZWFyY2hDb25maWcgPSB0aGlzLnNlYXJjaGluZyBhcyBTZWFyY2hDb25maWc7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19