import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { STRUCTURE_CSS_CLASS_NAME } from '../../core/api/structure-tokens';
import { StreamCloser } from '../../../../common/cdk/reactive/stream-closer';
import * as i0 from "@angular/core";
import * as i1 from "../structure-definition";
import * as i2 from "../../../core/api/structure.id";
import * as i3 from "../../core/api/structure.warehouse";
import * as i4 from "../../core/api/panel/info/structure.info-panel.archive";
import * as i5 from "../../../paging/core/api/paging.warehouse";
import * as i6 from "../../../summaries/core/api/summaries.warehouse";
import * as i7 from "../../../filter/core/api/filter.warehouse";
import * as i8 from "../../../search/core/api/search.warehouse";
import * as i9 from "../header/structure-header-top-enabled.archive";
import * as i10 from "../header/structure-header-bottom-enabled.archive";
import * as i11 from "../panel/banner-panels/title-panel/structure.title-panel.config-archive";
import * as i12 from "../panel/banner-panels/footer-panel/structure.footer-panel.config-archive";
import * as i13 from "@angular/common";
import * as i14 from "../../../summaries/feature/panel/structure.summaries-panel.component";
import * as i15 from "../content/structure-container.component";
import * as i16 from "../../../source/feature/empty/empty-source.component";
import * as i17 from "../panel/banner-panels/title-panel/structure.title-panel.component";
import * as i18 from "../panel/top/structure.top-panel.component";
import * as i19 from "../../../paging/feature/paging.component";
import * as i20 from "../header/structure-header.component";
import * as i21 from "../panel/banner-panels/footer-panel/structure.footer-panel.component";
import * as i22 from "../panel/info/structure.info-panel.component";
const _c0 = ["gui-structure-blueprint", ""];
function StructureBlueprintComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} }
function StructureBlueprintComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function StructureBlueprintComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} if (rf & 2) {
    i0.ɵɵproperty("position", 0);
} }
function StructureBlueprintComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r3.getHeaderTopClasses());
} }
function StructureBlueprintComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r4.getHeaderBottomClasses());
} }
function StructureBlueprintComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} }
function StructureBlueprintComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} if (rf & 2) {
    i0.ɵɵproperty("position", 1);
} }
function StructureBlueprintComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} }
export class StructureBlueprintComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureDefinition, structureId, structureWarehouse, structureInfoPanelArchive, pagingWarehouse, summariesWarehouse, filterWarehouse, searchWarehouse, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, className) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureWarehouse = structureWarehouse;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.pagingWarehouse = pagingWarehouse;
        this.summariesWarehouse = summariesWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.searchWarehouse = searchWarehouse;
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.className = className;
        this.searchEnabled = false;
        this.topSummariesPanelEnabled = false;
        this.bottomSummariesPanelEnabled = false;
        this.quickFiltersEnabled = false;
        this.infoPanelEnabled = false;
        this.items = [];
        this.localStreamCloser = new StreamCloser();
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
    }
    ngOnInit() {
        this.hermesSubscribe(this.structureHeaderTopEnabledArchive.on(), (topHeaderEnabled) => {
            this.topHeaderEnabled = topHeaderEnabled;
        });
        this.hermesSubscribe(this.structureHeaderBottomEnabledArchive.on(), (bottomHeaderEnabled) => {
            this.bottomHeaderEnabled = bottomHeaderEnabled;
        });
        this.hermesSubscribe(this.structureWarehouse.on(this.structureId), (structure) => {
            this.structure = structure;
            this.items = structure.getEntities();
        });
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.pagingReadModel = paging;
        });
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.pagingReadModel = paging;
        });
        this.hermesSubscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (enabled) => {
            this.searchEnabled = enabled;
        });
        this.hermesSubscribe(this.filterWarehouse.onQuickFiltersEnabled(this.structureId), (enabled) => {
            this.quickFiltersEnabled = enabled;
        });
        this.hermesSubscribe(this.summariesWarehouse.onBottomEnabled(this.structureId), (enabled) => {
            this.bottomSummariesPanelEnabled = enabled;
        });
        this.hermesSubscribe(this.summariesWarehouse.onTopEnabled(this.structureId), (enabled) => {
            this.topSummariesPanelEnabled = enabled;
        });
        this.hermesSubscribe(this.structureInfoPanelArchive.on(), (infoPanel) => {
            this.infoPanelEnabled = infoPanel.isEnabled();
        });
        this.hermesSubscribe(this.structureTitlePanelConfigArchive.on(), (titlePanel) => {
            this.titlePanelEnabled = titlePanel.enabled;
        });
        this.hermesSubscribe(this.structureFooterPanelConfigArchive.on(), (footerPanel) => {
            this.footerPanelEnabled = footerPanel.enabled;
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    getHeaderTopClasses() {
        return this.headerCssClass + ' gui-header-top';
    }
    getHeaderBottomClasses() {
        return this.headerCssClass + ' gui-header-bottom';
    }
    isColumnHeaderTopEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.topHeaderEnabled;
    }
    isColumnHeaderBottomEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.bottomHeaderEnabled;
    }
    isPagingTopEnabled() {
        return this.structureDefinition.getTopPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerTop();
    }
    isPagingBottomEnabled() {
        return this.structureDefinition.getBottomPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerBottom();
    }
    isSourceEmpty() {
        return this.structure && this.structure.getEntities().length === 0;
    }
    getSelectorName() {
        return 'gui-structure-blueprint';
    }
}
StructureBlueprintComponent.ɵfac = function StructureBlueprintComponent_Factory(t) { return new (t || StructureBlueprintComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureDefinition), i0.ɵɵdirectiveInject(i2.StructureId), i0.ɵɵdirectiveInject(i3.StructureWarehouse), i0.ɵɵdirectiveInject(i4.StructureInfoPanelArchive), i0.ɵɵdirectiveInject(i5.PagingWarehouse), i0.ɵɵdirectiveInject(i6.SummariesWarehouse), i0.ɵɵdirectiveInject(i7.FilterWarehouse), i0.ɵɵdirectiveInject(i8.SearchWarehouse), i0.ɵɵdirectiveInject(i9.StructureHeaderTopEnabledArchive), i0.ɵɵdirectiveInject(i10.StructureHeaderBottomEnabledArchive), i0.ɵɵdirectiveInject(i11.StructureTitlePanelConfigArchive), i0.ɵɵdirectiveInject(i12.StructureFooterPanelConfigArchive), i0.ɵɵdirectiveInject(STRUCTURE_CSS_CLASS_NAME)); };
StructureBlueprintComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureBlueprintComponent, selectors: [["div", "gui-structure-blueprint", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 12, vars: 12, consts: [["gui-structure-title-panel", "", 4, "ngIf"], ["gui-structure-top-panel", "", 4, "ngIf"], ["gui-paging", "", 3, "position", 4, "ngIf"], ["gui-structure-summaries-panel", "", 1, "gui-structure-summaries-panel-top", 3, "enabled"], ["gui-structure-header", "", 3, "ngClass", 4, "ngIf"], ["gui-structure-container", "", 3, "ngClass"], ["gui-empty-source", "", 3, "items"], ["gui-structure-summaries-panel", "", 1, "gui-structure-summaries-panel-bottom", 3, "enabled"], ["gui-structure-footer-panel", "", 4, "ngIf"], ["gui-structure-info-panel", "", 4, "ngIf"], ["gui-structure-title-panel", ""], ["gui-structure-top-panel", ""], ["gui-paging", "", 3, "position"], ["gui-structure-header", "", 3, "ngClass"], ["gui-structure-footer-panel", ""], ["gui-structure-info-panel", ""]], template: function StructureBlueprintComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureBlueprintComponent_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵtemplate(1, StructureBlueprintComponent_div_1_Template, 1, 0, "div", 1);
        i0.ɵɵtemplate(2, StructureBlueprintComponent_div_2_Template, 1, 1, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵtemplate(4, StructureBlueprintComponent_div_4_Template, 1, 1, "div", 4);
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelement(6, "div", 6);
        i0.ɵɵtemplate(7, StructureBlueprintComponent_div_7_Template, 1, 1, "div", 4);
        i0.ɵɵelement(8, "div", 7);
        i0.ɵɵtemplate(9, StructureBlueprintComponent_div_9_Template, 1, 0, "div", 8);
        i0.ɵɵtemplate(10, StructureBlueprintComponent_div_10_Template, 1, 1, "div", 2);
        i0.ɵɵtemplate(11, StructureBlueprintComponent_div_11_Template, 1, 0, "div", 9);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.titlePanelEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPagingTopEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("enabled", ctx.topSummariesPanelEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isColumnHeaderTopEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.contentCssClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("items", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isColumnHeaderBottomEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("enabled", ctx.bottomSummariesPanelEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.footerPanelEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPagingBottomEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.infoPanelEnabled);
    } }, directives: [i13.NgIf, i14.StructureSummariesPanelComponent, i15.StructureContainerComponent, i13.NgClass, i16.EmptySourceComponent, i17.StructureTitlePanelComponent, i18.StructureTopPanelComponent, i19.PagingComponent, i20.StructureHeaderComponent, i21.StructureFooterPanelComponent, i22.StructureInfoPanelComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureBlueprintComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-blueprint]',
                templateUrl: './structure.blueprint.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureDefinition }, { type: i2.StructureId }, { type: i3.StructureWarehouse }, { type: i4.StructureInfoPanelArchive }, { type: i5.PagingWarehouse }, { type: i6.SummariesWarehouse }, { type: i7.FilterWarehouse }, { type: i8.SearchWarehouse }, { type: i9.StructureHeaderTopEnabledArchive }, { type: i10.StructureHeaderBottomEnabledArchive }, { type: i11.StructureTitlePanelConfigArchive }, { type: i12.StructureFooterPanelConfigArchive }, { type: undefined, decorators: [{
                type: Inject,
                args: [STRUCTURE_CSS_CLASS_NAME]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLE1BQU0sRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFVbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xCN0UsMEJBQStEOzs7SUFFL0QsMEJBQXlEOzs7SUFLekQsMEJBRU07O0lBRjRCLDRCQUFjOzs7SUFRaEQsMEJBRU07OztJQUZrQyxzREFBaUM7OztJQWN6RSwwQkFFTTs7O0lBRnFDLHlEQUFvQzs7O0lBUS9FLDBCQUFpRTs7O0lBRWpFLDBCQUVNOztJQUYrQiw0QkFBYzs7O0lBSW5ELDBCQUE2RDs7QURkN0QsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUFnQzlELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMseUJBQW9ELEVBQ3BELGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxlQUFnQyxF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QyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7c0dBaExXLDJCQUEyQiwyckJBOEM1Qix3QkFBd0I7OEVBOUN2QiwyQkFBMkI7UUM3QnhDLDRFQUErRDtRQUUvRCw0RUFBeUQ7UUFLekQsNEVBRU07UUFFTix5QkFFTTtRQUVOLDRFQUVNO1FBSU4seUJBQ007UUFFTix5QkFDTTtRQUlOLDRFQUVNO1FBRU4seUJBRU07UUFFTiw0RUFBaUU7UUFFakUsOEVBRU07UUFFTiw4RUFBNkQ7O1FBM0N2RCw0Q0FBdUI7UUFFdkIsZUFBbUI7UUFBbkIsd0NBQW1CO1FBS25CLGVBQTBCO1FBQTFCLCtDQUEwQjtRQUkzQixlQUFvQztRQUFwQyxzREFBb0M7UUFJbkMsZUFBZ0M7UUFBaEMscURBQWdDO1FBTWpDLGVBQTJCO1FBQTNCLDZDQUEyQjtRQUczQixlQUFlO1FBQWYsaUNBQWU7UUFLZCxlQUFtQztRQUFuQyx3REFBbUM7UUFJcEMsZUFBdUM7UUFBdkMseURBQXVDO1FBSXRDLGVBQXdCO1FBQXhCLDZDQUF3QjtRQUV4QixlQUE2QjtRQUE3QixrREFBNkI7UUFJN0IsZUFBc0I7UUFBdEIsMkNBQXNCOzt1RkRkZiwyQkFBMkI7Y0FOdkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7c0JBK0NJLE1BQU07dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci10b3AtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2FwaS9zdW1tYXJpZXMud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1ibHVlcHJpbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290O1xuXG5cdHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0aW5mb1BhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHJlYWRvbmx5IGNvbnRlbnRDc3NDbGFzczogc3RyaW5nO1xuXG5cdHJlYWRvbmx5IGhlYWRlckNzc0NsYXNzOiBzdHJpbmc7XG5cblx0dG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdHRpdGxlUGFuZWxFbmFibGVkOiBib29sZWFuO1xuXG5cdGZvb3RlclBhbmVsRW5hYmxlZDogYm9vbGVhbjtcblxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2NhbFN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZWZpbml0aW9uOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc1dhcmVob3VzZTogU3VtbWFyaWVzV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSkgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuaGVhZGVyQ3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWhlYWRlcmA7XG5cdFx0dGhpcy5jb250ZW50Q3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWNvbnRlbnRgO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUub24oKSxcblx0XHRcdCh0b3BIZWFkZXJFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudG9wSGVhZGVyRW5hYmxlZCA9IHRvcEhlYWRlckVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZS5vbigpLFxuXHRcdFx0KGJvdHRvbUhlYWRlckVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5ib3R0b21IZWFkZXJFbmFibGVkID0gYm90dG9tSGVhZGVyRW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVdhcmVob3VzZS5vbih0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmUgPSBzdHJ1Y3R1cmU7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZS5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlYXJjaEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uUXVpY2tGaWx0ZXJzRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMucXVpY2tGaWx0ZXJzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdW1tYXJpZXNXYXJlaG91c2Uub25Cb3R0b21FbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5ib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3VtbWFyaWVzV2FyZWhvdXNlLm9uVG9wRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudG9wU3VtbWFyaWVzUGFuZWxFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUub24oKSxcblx0XHRcdChpbmZvUGFuZWw6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmluZm9QYW5lbEVuYWJsZWQgPSBpbmZvUGFuZWwuaXNFbmFibGVkKCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHRpdGxlUGFuZWw6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMudGl0bGVQYW5lbEVuYWJsZWQgPSB0aXRsZVBhbmVsLmVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUub24oKSxcblx0XHRcdChmb290ZXJQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5mb290ZXJQYW5lbEVuYWJsZWQgPSBmb290ZXJQYW5lbC5lbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG5cdGdldEhlYWRlclRvcENsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJDc3NDbGFzcyArICcgZ3VpLWhlYWRlci10b3AnO1xuXHR9XG5cblx0Z2V0SGVhZGVyQm90dG9tQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLWJvdHRvbSc7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlclRvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLnRvcEhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlckJvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLmJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxuXHRpc1NvdXJjZUVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSAmJiB0aGlzLnN0cnVjdHVyZS5nZXRFbnRpdGllcygpLmxlbmd0aCA9PT0gMDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtYmx1ZXByaW50Jztcblx0fVxuXG59XG4iLCI8IS0tLS0tLS0tLS0gVE9QIC0tLS0tLS0tLS0+XG48ZGl2ICpuZ0lmPVwidGl0bGVQYW5lbEVuYWJsZWRcIiBndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsPjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwic2VhcmNoRW5hYmxlZFwiIGd1aS1zdHJ1Y3R1cmUtdG9wLXBhbmVsPjwvZGl2PlxuXG48IS0tPGRpdiBndWktc3RydWN0dXJlLXF1aWNrLWZpbHRlcnMgKm5nSWY9XCJxdWlja0ZpbHRlcnNFbmFibGVkXCI+LS0+XG48IS0tPC9kaXY+LS0+XG5cbjxkaXYgKm5nSWY9XCJpc1BhZ2luZ1RvcEVuYWJsZWQoKVwiIFtwb3NpdGlvbl09XCIwXCJcblx0IGd1aS1wYWdpbmc+XG48L2Rpdj5cblxuPGRpdiBbZW5hYmxlZF09XCJ0b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWRcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsLXRvcFwiXG5cdCBndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbD5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiaXNDb2x1bW5IZWFkZXJUb3BFbmFibGVkKClcIiBbbmdDbGFzc109XCJnZXRIZWFkZXJUb3BDbGFzc2VzKClcIlxuXHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXI+XG48L2Rpdj5cblxuXG48IS0tLS0tLS0tLS0gTUFJTiAtLS0tLS0tLS0tPlxuPGRpdiBbbmdDbGFzc109XCJjb250ZW50Q3NzQ2xhc3NcIiBndWktc3RydWN0dXJlLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2IFtpdGVtc109XCJpdGVtc1wiIGd1aS1lbXB0eS1zb3VyY2U+XG48L2Rpdj5cblxuXG48IS0tLS0tLS0tLS0gQk9UVE9NIC0tLS0tLS0tLS0+XG48ZGl2ICpuZ0lmPVwiaXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKClcIiBbbmdDbGFzc109XCJnZXRIZWFkZXJCb3R0b21DbGFzc2VzKClcIlxuXHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXI+XG48L2Rpdj5cblxuPGRpdiBbZW5hYmxlZF09XCJib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWRcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsLWJvdHRvbVwiXG5cdCBndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbD5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiZm9vdGVyUGFuZWxFbmFibGVkXCIgZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWw+PC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKVwiIFtwb3NpdGlvbl09XCIxXCJcblx0IGd1aS1wYWdpbmc+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImluZm9QYW5lbEVuYWJsZWRcIiBndWktc3RydWN0dXJlLWluZm8tcGFuZWw+PC9kaXY+XG4iXX0=