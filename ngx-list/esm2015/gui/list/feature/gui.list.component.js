import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
import * as i0 from "@angular/core";
import * as i1 from "../../../structure/list/feature/list-view.component";
import * as i2 from "../../../structure/list/feature/gate/field/list-view-field.gate";
import * as i3 from "../../../structure/list/feature/gate/source/list-view-source.gate";
import * as i4 from "../../../structure/list/feature/gate/l10n/list-view-l10n.gate";
import * as i5 from "../../../structure/list/feature/gate/mode/list-view-mode.gate";
import * as i6 from "../../../structure/list/feature/gate/template/list-view-template.gate";
import * as i7 from "../../../structure/list/feature/gate/paging/list-view-paging.gate";
import * as i8 from "../../../structure/list/feature/gate/searching/list-view-searching.gate";
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
GuiListComponent.ɵfac = function GuiListComponent_Factory(t) { return new (t || GuiListComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
GuiListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GuiListComponent, selectors: [["gui-list"]], hostVars: 2, hostBindings: function GuiListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-list", "true");
    } }, features: [i0.ɵɵProvidersFeature(guiListProviders), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 9, consts: [[3, "cardTemplate", "fields", "items", "localization", "modeSelector", "mode", "paging", "searching", "template", "pageChanged", "pageSizeChanged", "searchPhraseChanged"]], template: function GuiListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "gui-list-view", 0);
        i0.ɵɵlistener("pageChanged", function GuiListComponent_Template_gui_list_view_pageChanged_0_listener($event) { return ctx.onPageChange($event); })("pageSizeChanged", function GuiListComponent_Template_gui_list_view_pageSizeChanged_0_listener($event) { return ctx.onPageSizeChange($event); })("searchPhraseChanged", function GuiListComponent_Template_gui_list_view_searchPhraseChanged_0_listener($event) { return ctx.onSearchPhraseChange($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("cardTemplate", ctx.listCardTemplate)("fields", ctx.listFields)("items", ctx.source)("localization", ctx.localization)("modeSelector", ctx.listViewModeSelector)("mode", ctx.listViewMode)("paging", ctx.paging)("searching", ctx.searchConfig)("template", ctx.containerTemplate);
    } }, directives: [i1.ListViewComponent, i2.ListViewFieldGate, i3.ListViewSourceGate, i4.ListViewL10nGate, i5.ListViewModeGate, i6.ListViewTemplateGate, i7.ListViewPagingGate, i8.ListViewSearchingGate], styles: [""], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiListComponent, [{
        type: Component,
        args: [{
                selector: 'gui-list',
                templateUrl: './gui.list.component.html',
                styleUrls: [
                    './gui.list.ngx.scss'
                ],
                providers: guiListProviders,
                host: {
                    '[class.gui-list]': '"true"'
                },
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9ndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZ3VpL2xpc3QvZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7O0FBZXhELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBRW5ELFlBQXlDLFVBQWU7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFEZ0MsZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUV4RCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUFjO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0ZBaEJXLGdCQUFnQix1QkFFUixXQUFXO21FQUZuQixnQkFBZ0I7OzBDQU5qQixnQkFBZ0I7UUNaNUIsd0NBYUM7UUFaQSxzSEFBZSx3QkFBb0IsSUFBQyxpSEFDakIsNEJBQXdCLElBRFAseUhBRWIsZ0NBQTRCLElBRmY7UUFhckMsaUJBQWdCOztRQVZmLG1EQUFpQywwQkFBQSxxQkFBQSxrQ0FBQSwwQ0FBQSwwQkFBQSxzQkFBQSwrQkFBQSxtQ0FBQTs7dUZEY3JCLGdCQUFnQjtjQVo1QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRTtvQkFDVixxQkFBcUI7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLElBQUksRUFBRTtvQkFDTCxrQkFBa0IsRUFBRSxRQUFRO2lCQUM1QjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7c0JBR2EsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlMaXN0R2F0ZXdheSB9IGZyb20gJy4vZ3VpLmxpc3QuZ2F0ZXdheSc7XG5pbXBvcnQgeyBndWlMaXN0UHJvdmlkZXJzIH0gZnJvbSAnLi9ndWkubGlzdC5wcm92aWRlcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2d1aS5saXN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZ3VpLmxpc3Qubmd4LnNjc3MnXG5cdF0sXG5cdHByb3ZpZGVyczogZ3VpTGlzdFByb3ZpZGVycyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3RdJzogJ1widHJ1ZVwiJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RDb21wb25lbnQgZXh0ZW5kcyBHdWlMaXN0R2F0ZXdheSB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2UocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2VDaGFuZ2UocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaFBocmFzZUNoYW5nZWQuZW1pdChwaHJhc2UpO1xuXHR9XG5cbn1cbiIsIjxndWktbGlzdC12aWV3XG5cdChwYWdlQ2hhbmdlZCk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50KVwiXG5cdChwYWdlU2l6ZUNoYW5nZWQpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcblx0KHNlYXJjaFBocmFzZUNoYW5nZWQpPVwib25TZWFyY2hQaHJhc2VDaGFuZ2UoJGV2ZW50KVwiXG5cdFtjYXJkVGVtcGxhdGVdPVwibGlzdENhcmRUZW1wbGF0ZVwiXG5cdFtmaWVsZHNdPVwibGlzdEZpZWxkc1wiXG5cdFtpdGVtc109XCJzb3VyY2VcIlxuXHRbbG9jYWxpemF0aW9uXT1cImxvY2FsaXphdGlvblwiXG5cdFttb2RlU2VsZWN0b3JdPVwibGlzdFZpZXdNb2RlU2VsZWN0b3JcIlxuXHRbbW9kZV09XCJsaXN0Vmlld01vZGVcIlxuXHRbcGFnaW5nXT1cInBhZ2luZ1wiXG5cdFtzZWFyY2hpbmddPVwic2VhcmNoQ29uZmlnXCJcblx0W3RlbXBsYXRlXT1cImNvbnRhaW5lclRlbXBsYXRlXCJcbj5cbjwvZ3VpLWxpc3Qtdmlldz5cbiJdfQ==