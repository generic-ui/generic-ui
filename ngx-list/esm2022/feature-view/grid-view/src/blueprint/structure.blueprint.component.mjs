import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/component/src/smart-component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure-tokens';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../structure/structure-definition";
import * as i2 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../core/structure/structure-core/src/api/structure.warehouse";
import * as i4 from "../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive";
import * as i5 from "../../../../core/structure/paging/src/api/paging.warehouse";
import * as i6 from "../../../../core/structure/summaries/src/api/summaries.warehouse";
import * as i7 from "../../../../core/structure/filter/src/api/filter.warehouse";
import * as i8 from "../../../../core/structure/search/src/api/search.warehouse";
import * as i9 from "../header/structure-header-top-enabled.archive";
import * as i10 from "../header/structure-header-bottom-enabled.archive";
import * as i11 from "../panel/banner-panels/title-panel/structure.title-panel.config-archive";
import * as i12 from "../panel/banner-panels/footer-panel/structure.footer-panel.config-archive";
import * as i13 from "@angular/common";
import * as i14 from "../../../../feature/gui-angular/template/let/gui.let.directive";
import * as i15 from "../../../../feature/gui-angular/template/if/gui.if.directive";
import * as i16 from "../../../../feature/structure/paging/src/paging.component";
import * as i17 from "../../../../feature/structure/summaries/src/panel/structure.summaries-panel.component";
import * as i18 from "../panel/info/structure.info-panel.component";
import * as i19 from "../panel/top/structure.top-panel.component";
import * as i20 from "../../../../feature/structure/source/src/empty/empty-source.component";
import * as i21 from "../header/structure-header.component";
import * as i22 from "../content/container/structure-container.component";
import * as i23 from "../panel/banner-panels/title-panel/structure.title-panel.component";
import * as i24 from "../panel/banner-panels/footer-panel/structure.footer-panel.component";
import * as i25 from "../../../../feature/gui-angular/template/push/gui.push.pipe";
export class StructureBlueprintComponent extends SmartComponent {
    changeDetectorRef;
    structureDefinition;
    structureId;
    structureWarehouse;
    structureInfoPanelArchive;
    pagingWarehouse;
    summariesWarehouse;
    filterWarehouse;
    searchWarehouse;
    structureHeaderTopEnabledArchive;
    structureHeaderBottomEnabledArchive;
    structureTitlePanelConfigArchive;
    structureFooterPanelConfigArchive;
    className;
    // @ts-ignore
    bottomSummariesPanelEnabled$ = this.summariesWarehouse.onBottomEnabled(this.structureId);
    contentCssClass;
    headerCssClass;
    headerTopClasses;
    headerBottomClasses;
    // @ts-ignore
    topHeaderEnabled$ = this.structureHeaderTopEnabledArchive.on();
    // @ts-ignore
    bottomHeaderEnabled$ = this.structureHeaderBottomEnabledArchive.on();
    footerPanelEnabled$ = this.selectFooterPanelEnabled();
    items$ = this.selectItems();
    // @ts-ignore
    topSummariesPanelEnabled$ = this.summariesWarehouse.onTopEnabled(this.structureId);
    // @ts-ignore
    searchEnabled$ = this.searchWarehouse.onSearchEnabled(this.structureId);
    titlePanelEnabled$ = this.selectTitlePanelEnabled();
    infoPanelEnabled$ = this.selectInfoPanelEnabled();
    // @ts-ignore
    pagingModel$ = this.pagingWarehouse.onPaging(this.structureId);
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
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
        this.headerTopClasses = this.headerCssClass + ' gui-header-top';
        this.headerBottomClasses = this.headerCssClass + ' gui-header-bottom';
    }
    isColumnHeaderTopEnabled(topHeaderEnabled) {
        return this.structureDefinition.isHeaderEnabled() && topHeaderEnabled;
    }
    isColumnHeaderBottomEnabled(bottomHeaderEnabled) {
        return this.structureDefinition.isHeaderEnabled() && bottomHeaderEnabled;
    }
    isPagingTopEnabled(pagingModel) {
        return this.structureDefinition.getTopPaging().isEnabled() && pagingModel.isPagerTop();
    }
    isPagingBottomEnabled(pagingModel) {
        return this.structureDefinition.getBottomPaging().isEnabled() && pagingModel.isPagerBottom();
    }
    getSelectorName() {
        return 'gui-structure-blueprint';
    }
    selectTitlePanelEnabled() {
        return this.structureTitlePanelConfigArchive
            .on()
            .pipe(hermesMap((titlePanel) => {
            return titlePanel.enabled;
        }));
    }
    selectInfoPanelEnabled() {
        return this.structureInfoPanelArchive
            .on()
            .pipe(hermesMap((infoPanel) => {
            return infoPanel.isEnabled();
        }));
    }
    selectFooterPanelEnabled() {
        return this.structureFooterPanelConfigArchive
            .on()
            .pipe(hermesMap((footerPanel) => {
            return footerPanel.enabled;
        }));
    }
    selectItems() {
        return this.structureWarehouse.on(this.structureId)
            .pipe(hermesMap((structure) => {
            return structure.getEntities();
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureBlueprintComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureDefinition }, { token: i2.StructureId }, { token: i3.StructureWarehouse }, { token: i4.StructureInfoPanelArchive }, { token: i5.PagingWarehouse }, { token: i6.SummariesWarehouse }, { token: i7.FilterWarehouse }, { token: i8.SearchWarehouse }, { token: i9.StructureHeaderTopEnabledArchive }, { token: i10.StructureHeaderBottomEnabledArchive }, { token: i11.StructureTitlePanelConfigArchive }, { token: i12.StructureFooterPanelConfigArchive }, { token: STRUCTURE_CSS_CLASS_NAME }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureBlueprintComponent, selector: "div[gui-structure-blueprint]", usesInheritance: true, ngImport: i0, template: "<!---------- TOP ---------->\n<div *guiIf=\"titlePanelEnabled$\" gui-structure-title-panel></div>\n\n<div *guiIf=\"searchEnabled$\" gui-structure-top-panel></div>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingTopEnabled(pagingModel)\" [position]=\"0\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"topSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"topHeaderEnabled$; let topHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderTopEnabled(topHeaderEnabled)\" [ngClass]=\"headerTopClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items$ | guiPush\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<ng-container *guiLet=\"bottomHeaderEnabled$; let bottomHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderBottomEnabled(bottomHeaderEnabled)\" [ngClass]=\"headerBottomClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"bottomSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"footerPanelEnabled$; let footerPanelEnabled\">\n\t<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n</ng-container>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingBottomEnabled(pagingModel)\" [position]=\"1\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div *guiIf=\"infoPanelEnabled$\" gui-structure-info-panel></div>\n", dependencies: [{ kind: "directive", type: i13.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i13.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i14.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "directive", type: i15.GuiIfDirective, selector: "[guiIf]", inputs: ["guiIf"] }, { kind: "component", type: i16.PagingComponent, selector: "div[gui-paging][position]", inputs: ["position", "minimal"] }, { kind: "component", type: i17.StructureSummariesPanelComponent, selector: "div[gui-structure-summaries-panel][enabled]", inputs: ["enabled"] }, { kind: "component", type: i18.StructureInfoPanelComponent, selector: "div[gui-structure-info-panel]" }, { kind: "component", type: i19.StructureTopPanelComponent, selector: "div[gui-structure-top-panel]" }, { kind: "component", type: i20.EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: i21.StructureHeaderComponent, selector: "div[gui-structure-header]" }, { kind: "component", type: i22.StructureContainerComponent, selector: "div[gui-structure-container]" }, { kind: "component", type: i23.StructureTitlePanelComponent, selector: "div[gui-structure-title-panel]" }, { kind: "component", type: i24.StructureFooterPanelComponent, selector: "div[gui-structure-footer-panel]" }, { kind: "pipe", type: i25.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureBlueprintComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-blueprint]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!---------- TOP ---------->\n<div *guiIf=\"titlePanelEnabled$\" gui-structure-title-panel></div>\n\n<div *guiIf=\"searchEnabled$\" gui-structure-top-panel></div>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingTopEnabled(pagingModel)\" [position]=\"0\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"topSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"topHeaderEnabled$; let topHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderTopEnabled(topHeaderEnabled)\" [ngClass]=\"headerTopClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items$ | guiPush\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<ng-container *guiLet=\"bottomHeaderEnabled$; let bottomHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderBottomEnabled(bottomHeaderEnabled)\" [ngClass]=\"headerBottomClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"bottomSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"footerPanelEnabled$; let footerPanelEnabled\">\n\t<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n</ng-container>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingBottomEnabled(pagingModel)\" [position]=\"1\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div *guiIf=\"infoPanelEnabled$\" gui-structure-info-panel></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureDefinition }, { type: i2.StructureId }, { type: i3.StructureWarehouse }, { type: i4.StructureInfoPanelArchive }, { type: i5.PagingWarehouse }, { type: i6.SummariesWarehouse }, { type: i7.FilterWarehouse }, { type: i8.SearchWarehouse }, { type: i9.StructureHeaderTopEnabledArchive }, { type: i10.StructureHeaderBottomEnabledArchive }, { type: i11.StructureTitlePanelConfigArchive }, { type: i12.StructureFooterPanelConfigArchive }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [STRUCTURE_CSS_CLASS_NAME]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQVUxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVM5RCxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUFvQ2pDO0lBRVQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ3lCO0lBaEQ3QyxhQUFhO0lBQ0osNEJBQTRCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekYsZUFBZSxDQUFTO0lBRXhCLGNBQWMsQ0FBUztJQUV2QixnQkFBZ0IsQ0FBUztJQUV6QixtQkFBbUIsQ0FBUztJQUVyQyxhQUFhO0lBQ0osaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUs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QUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQW9EakMsTUFBTTsyQkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBQYWdpbmdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL21vZGVsL3BhZ2luZy5tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlL3N0cnVjdHVyZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLWJvdHRvbS1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3VtbWFyaWVzV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9hcGkvc3VtbWFyaWVzLndhcmVob3VzZSc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWJsdWVwcmludF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJlYWRvbmx5IGJvdHRvbVN1bW1hcmllc1BhbmVsRW5hYmxlZCQgPSB0aGlzLnN1bW1hcmllc1dhcmVob3VzZS5vbkJvdHRvbUVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0cmVhZG9ubHkgY29udGVudENzc0NsYXNzOiBzdHJpbmc7XG5cblx0cmVhZG9ubHkgaGVhZGVyQ3NzQ2xhc3M6IHN0cmluZztcblxuXHRyZWFkb25seSBoZWFkZXJUb3BDbGFzc2VzOiBzdHJpbmc7XG5cblx0cmVhZG9ubHkgaGVhZGVyQm90dG9tQ2xhc3Nlczogc3RyaW5nO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cmVhZG9ubHkgdG9wSGVhZGVyRW5hYmxlZCQgPSB0aGlzLnN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLm9uKCk7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZWFkb25seSBib3R0b21IZWFkZXJFbmFibGVkJCA9IHRoaXMuc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUub24oKTtcblxuXHRyZWFkb25seSBmb290ZXJQYW5lbEVuYWJsZWQkID0gdGhpcy5zZWxlY3RGb290ZXJQYW5lbEVuYWJsZWQoKTtcblxuXHRyZWFkb25seSBpdGVtcyQgPSB0aGlzLnNlbGVjdEl0ZW1zKCk7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZWFkb25seSB0b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWQkID0gdGhpcy5zdW1tYXJpZXNXYXJlaG91c2Uub25Ub3BFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cmVhZG9ubHkgc2VhcmNoRW5hYmxlZCQgPSB0aGlzLnNlYXJjaFdhcmVob3VzZS5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0cmVhZG9ubHkgdGl0bGVQYW5lbEVuYWJsZWQkID0gdGhpcy5zZWxlY3RUaXRsZVBhbmVsRW5hYmxlZCgpO1xuXG5cdHJlYWRvbmx5IGluZm9QYW5lbEVuYWJsZWQkID0gdGhpcy5zZWxlY3RJbmZvUGFuZWxFbmFibGVkKCk7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZWFkb25seSBwYWdpbmdNb2RlbCQgPSB0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZWZpbml0aW9uOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc1dhcmVob3VzZTogU3VtbWFyaWVzV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSkgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuaGVhZGVyQ3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWhlYWRlcmA7XG5cdFx0dGhpcy5jb250ZW50Q3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWNvbnRlbnRgO1xuXG5cdFx0dGhpcy5oZWFkZXJUb3BDbGFzc2VzID0gdGhpcy5oZWFkZXJDc3NDbGFzcyArICcgZ3VpLWhlYWRlci10b3AnO1xuXHRcdHRoaXMuaGVhZGVyQm90dG9tQ2xhc3NlcyA9IHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItYm90dG9tJztcblx0fVxuXG5cdGlzQ29sdW1uSGVhZGVyVG9wRW5hYmxlZCh0b3BIZWFkZXJFbmFibGVkOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0b3BIZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKGJvdHRvbUhlYWRlckVuYWJsZWQ6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmlzSGVhZGVyRW5hYmxlZCgpICYmIGJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQocGFnaW5nTW9kZWw6IFBhZ2luZ01vZGVsKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiBwYWdpbmdNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQocGFnaW5nTW9kZWw6IFBhZ2luZ01vZGVsKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiBwYWdpbmdNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWJsdWVwcmludCc7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdFRpdGxlUGFuZWxFbmFibGVkKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlXG5cdFx0XHRcdCAgIC5vbigpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgodGl0bGVQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aXRsZVBhbmVsLmVuYWJsZWQ7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0SW5mb1BhbmVsRW5hYmxlZCgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlXG5cdFx0XHRcdCAgIC5vbigpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoaW5mb1BhbmVsOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBpbmZvUGFuZWwuaXNFbmFibGVkKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0Rm9vdGVyUGFuZWxFbmFibGVkKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZVxuXHRcdFx0XHQgICAub24oKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGZvb3RlclBhbmVsOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGZvb3RlclBhbmVsLmVuYWJsZWQ7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0SXRlbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlV2FyZWhvdXNlLm9uKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gc3RydWN0dXJlLmdldEVudGl0aWVzKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iLCI8IS0tLS0tLS0tLS0gVE9QIC0tLS0tLS0tLS0+XG48ZGl2ICpndWlJZj1cInRpdGxlUGFuZWxFbmFibGVkJFwiIGd1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWw+PC9kaXY+XG5cbjxkaXYgKmd1aUlmPVwic2VhcmNoRW5hYmxlZCRcIiBndWktc3RydWN0dXJlLXRvcC1wYW5lbD48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwicGFnaW5nTW9kZWwkOyBsZXQgcGFnaW5nTW9kZWxcIj5cblx0PGRpdiAqbmdJZj1cImlzUGFnaW5nVG9wRW5hYmxlZChwYWdpbmdNb2RlbClcIiBbcG9zaXRpb25dPVwiMFwiXG5cdFx0IGd1aS1wYWdpbmc+XG5cdDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cbjxkaXYgW2VuYWJsZWRdPVwidG9wU3VtbWFyaWVzUGFuZWxFbmFibGVkJCB8IGd1aVB1c2hcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsLXRvcFwiXG5cdCBndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbD5cbjwvZGl2PlxuXG48bmctY29udGFpbmVyICpndWlMZXQ9XCJ0b3BIZWFkZXJFbmFibGVkJDsgbGV0IHRvcEhlYWRlckVuYWJsZWRcIj5cblx0PGRpdiAqbmdJZj1cImlzQ29sdW1uSGVhZGVyVG9wRW5hYmxlZCh0b3BIZWFkZXJFbmFibGVkKVwiIFtuZ0NsYXNzXT1cImhlYWRlclRvcENsYXNzZXNcIlxuXHRcdCBndWktc3RydWN0dXJlLWhlYWRlcj5cblx0PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuXG48IS0tLS0tLS0tLS0gTUFJTiAtLS0tLS0tLS0tPlxuPGRpdiBbbmdDbGFzc109XCJjb250ZW50Q3NzQ2xhc3NcIiBndWktc3RydWN0dXJlLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2IFtpdGVtc109XCJpdGVtcyQgfCBndWlQdXNoXCIgZ3VpLWVtcHR5LXNvdXJjZT5cbjwvZGl2PlxuXG5cbjwhLS0tLS0tLS0tLSBCT1RUT00gLS0tLS0tLS0tLT5cbjxuZy1jb250YWluZXIgKmd1aUxldD1cImJvdHRvbUhlYWRlckVuYWJsZWQkOyBsZXQgYm90dG9tSGVhZGVyRW5hYmxlZFwiPlxuXHQ8ZGl2ICpuZ0lmPVwiaXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKGJvdHRvbUhlYWRlckVuYWJsZWQpXCIgW25nQ2xhc3NdPVwiaGVhZGVyQm90dG9tQ2xhc3Nlc1wiXG5cdFx0IGd1aS1zdHJ1Y3R1cmUtaGVhZGVyPlxuXHQ8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48ZGl2IFtlbmFibGVkXT1cImJvdHRvbVN1bW1hcmllc1BhbmVsRW5hYmxlZCQgfCBndWlQdXNoXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbC1ib3R0b21cIlxuXHQgZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWw+XG48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwiZm9vdGVyUGFuZWxFbmFibGVkJDsgbGV0IGZvb3RlclBhbmVsRW5hYmxlZFwiPlxuXHQ8ZGl2ICpuZ0lmPVwiZm9vdGVyUGFuZWxFbmFibGVkXCIgZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWw+PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwicGFnaW5nTW9kZWwkOyBsZXQgcGFnaW5nTW9kZWxcIj5cblx0PGRpdiAqbmdJZj1cImlzUGFnaW5nQm90dG9tRW5hYmxlZChwYWdpbmdNb2RlbClcIiBbcG9zaXRpb25dPVwiMVwiXG5cdFx0IGd1aS1wYWdpbmc+XG5cdDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cbjxkaXYgKmd1aUlmPVwiaW5mb1BhbmVsRW5hYmxlZCRcIiBndWktc3RydWN0dXJlLWluZm8tcGFuZWw+PC9kaXY+XG4iXX0=