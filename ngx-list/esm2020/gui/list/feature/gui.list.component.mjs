import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
import * as i0 from "@angular/core";
import * as i1 from "../../../feature-view/list-view/list-view.component";
import * as i2 from "../../../feature-view/list-view/gate/paging/list-view-paging.gate";
import * as i3 from "../../../feature-view/list-view/gate/mode/list-view-mode.gate";
import * as i4 from "../../../feature-view/list-view/gate/template/list-view-template.gate";
import * as i5 from "../../../feature-view/list-view/gate/field/list-view-field.gate";
import * as i6 from "../../../feature-view/list-view/gate/searching/list-view-searching.gate";
import * as i7 from "../../../feature-view/list-view/gate/l10n/list-view-l10n.gate";
import * as i8 from "../../../feature-view/list-view/gate/source/list-view-source.gate";
export class GuiListComponent extends GuiListGateway {
    constructor(platformId) {
        super();
        this.platformId = platformId;
    }
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    onPageSizeChange(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
    onSearchPhraseChange(phrase) {
        this.searchPhraseChanged.emit(phrase);
    }
}
GuiListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListComponent, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
GuiListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: GuiListComponent, selector: "gui-list", host: { properties: { "class.gui-list": "\"true\"" } }, providers: guiListProviders, usesInheritance: true, ngImport: i0, template: "<gui-list-view\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t[cardTemplate]=\"listCardTemplate\"\n\t[fields]=\"listFields\"\n\t[items]=\"source\"\n\t[localization]=\"localization\"\n\t[modeSelector]=\"listViewModeSelector\"\n\t[mode]=\"listViewMode\"\n\t[paging]=\"paging\"\n\t[searching]=\"searchConfig\"\n\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n", styles: [""], dependencies: [{ kind: "component", type: i1.ListViewComponent, selector: "gui-list-view" }, { kind: "directive", type: i2.ListViewPagingGate, selector: "gui-list-view[paging]" }, { kind: "directive", type: i3.ListViewModeGate, selector: "gui-list-view[mode]", inputs: ["mode", "modeSelector"] }, { kind: "directive", type: i4.ListViewTemplateGate, selector: "gui-list-view[mode]", inputs: ["template", "cardTemplate"] }, { kind: "directive", type: i5.ListViewFieldGate, selector: "gui-list-view[fields]", inputs: ["fields"] }, { kind: "directive", type: i6.ListViewSearchingGate, selector: "gui-list-view[searching]" }, { kind: "directive", type: i7.ListViewL10nGate, selector: "gui-list-view[localization]", inputs: ["localization"] }, { kind: "directive", type: i8.ListViewSourceGate, selector: "gui-list-view[items]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: GuiListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-list', providers: guiListProviders, host: {
                        '[class.gui-list]': '"true"'
                    }, encapsulation: ViewEncapsulation.None, template: "<gui-list-view\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t[cardTemplate]=\"listCardTemplate\"\n\t[fields]=\"listFields\"\n\t[items]=\"source\"\n\t[localization]=\"localization\"\n\t[modeSelector]=\"listViewModeSelector\"\n\t[mode]=\"listViewMode\"\n\t[paging]=\"paging\"\n\t[searching]=\"searchConfig\"\n\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9ndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7O0FBZXhELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBRW5ELFlBQXlDLFVBQWU7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFEZ0MsZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUV4RCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUFjO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7NkdBaEJXLGdCQUFnQixrQkFFUixXQUFXO2lHQUZuQixnQkFBZ0IsMkZBTmpCLGdCQUFnQixpRENaNUIseWRBZUE7MkZER2EsZ0JBQWdCO2tCQVo1QixTQUFTOytCQUNDLFVBQVUsYUFLVCxnQkFBZ0IsUUFDckI7d0JBQ0wsa0JBQWtCLEVBQUUsUUFBUTtxQkFDNUIsaUJBQ2MsaUJBQWlCLENBQUMsSUFBSTs7MEJBSXhCLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3VpTGlzdEdhdGV3YXkgfSBmcm9tICcuL2d1aS5saXN0LmdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpTGlzdFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmxpc3QucHJvdmlkZXJzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ndWkubGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2d1aS5saXN0Lm5neC5zY3NzJ1xuXHRdLFxuXHRwcm92aWRlcnM6IGd1aUxpc3RQcm92aWRlcnMsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0XSc6ICdcInRydWVcIidcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlMaXN0Q29tcG9uZW50IGV4dGVuZHMgR3VpTGlzdEdhdGV3YXkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxuXHRvblBhZ2VTaXplQ2hhbmdlKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlQ2hhbmdlKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkLmVtaXQocGhyYXNlKTtcblx0fVxuXG59XG4iLCI8Z3VpLWxpc3Qtdmlld1xuXHQocGFnZUNoYW5nZWQpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIlxuXHQocGFnZVNpemVDaGFuZ2VkKT1cIm9uUGFnZVNpemVDaGFuZ2UoJGV2ZW50KVwiXG5cdChzZWFyY2hQaHJhc2VDaGFuZ2VkKT1cIm9uU2VhcmNoUGhyYXNlQ2hhbmdlKCRldmVudClcIlxuXHRbY2FyZFRlbXBsYXRlXT1cImxpc3RDYXJkVGVtcGxhdGVcIlxuXHRbZmllbGRzXT1cImxpc3RGaWVsZHNcIlxuXHRbaXRlbXNdPVwic291cmNlXCJcblx0W2xvY2FsaXphdGlvbl09XCJsb2NhbGl6YXRpb25cIlxuXHRbbW9kZVNlbGVjdG9yXT1cImxpc3RWaWV3TW9kZVNlbGVjdG9yXCJcblx0W21vZGVdPVwibGlzdFZpZXdNb2RlXCJcblx0W3BhZ2luZ109XCJwYWdpbmdcIlxuXHRbc2VhcmNoaW5nXT1cInNlYXJjaENvbmZpZ1wiXG5cdFt0ZW1wbGF0ZV09XCJjb250YWluZXJUZW1wbGF0ZVwiXG4+XG48L2d1aS1saXN0LXZpZXc+XG4iXX0=