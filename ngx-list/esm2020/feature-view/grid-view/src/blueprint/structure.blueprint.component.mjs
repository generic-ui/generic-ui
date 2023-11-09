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
        this.bottomSummariesPanelEnabled$ = this.summariesWarehouse.onBottomEnabled(this.structureId);
        this.topHeaderEnabled$ = this.structureHeaderTopEnabledArchive.on();
        this.bottomHeaderEnabled$ = this.structureHeaderBottomEnabledArchive.on();
        this.footerPanelEnabled$ = this.selectFooterPanelEnabled();
        this.items$ = this.selectItems();
        this.topSummariesPanelEnabled$ = this.summariesWarehouse.onTopEnabled(this.structureId);
        this.searchEnabled$ = this.searchWarehouse.onSearchEnabled(this.structureId);
        this.titlePanelEnabled$ = this.selectTitlePanelEnabled();
        this.infoPanelEnabled$ = this.selectInfoPanelEnabled();
        this.pagingModel$ = this.pagingWarehouse.onPaging(this.structureId);
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
}
StructureBlueprintComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureBlueprintComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureDefinition }, { token: i2.StructureId }, { token: i3.StructureWarehouse }, { token: i4.StructureInfoPanelArchive }, { token: i5.PagingWarehouse }, { token: i6.SummariesWarehouse }, { token: i7.FilterWarehouse }, { token: i8.SearchWarehouse }, { token: i9.StructureHeaderTopEnabledArchive }, { token: i10.StructureHeaderBottomEnabledArchive }, { token: i11.StructureTitlePanelConfigArchive }, { token: i12.StructureFooterPanelConfigArchive }, { token: STRUCTURE_CSS_CLASS_NAME }], target: i0.ɵɵFactoryTarget.Component });
StructureBlueprintComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureBlueprintComponent, selector: "div[gui-structure-blueprint]", usesInheritance: true, ngImport: i0, template: "<!---------- TOP ---------->\n<div *guiIf=\"titlePanelEnabled$\" gui-structure-title-panel></div>\n\n<div *guiIf=\"searchEnabled$\" gui-structure-top-panel></div>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingTopEnabled(pagingModel)\" [position]=\"0\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"topSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"topHeaderEnabled$; let topHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderTopEnabled(topHeaderEnabled)\" [ngClass]=\"headerTopClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items$ | guiPush\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<ng-container *guiLet=\"bottomHeaderEnabled$; let bottomHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderBottomEnabled(bottomHeaderEnabled)\" [ngClass]=\"headerBottomClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"bottomSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"footerPanelEnabled$; let footerPanelEnabled\">\n\t<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n</ng-container>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingBottomEnabled(pagingModel)\" [position]=\"1\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div *guiIf=\"infoPanelEnabled$\" gui-structure-info-panel></div>\n", dependencies: [{ kind: "directive", type: i13.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i13.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i14.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "directive", type: i15.GuiIfDirective, selector: "[guiIf]", inputs: ["guiIf"] }, { kind: "component", type: i16.PagingComponent, selector: "div[gui-paging][position]", inputs: ["position", "minimal"] }, { kind: "component", type: i17.StructureSummariesPanelComponent, selector: "div[gui-structure-summaries-panel][enabled]", inputs: ["enabled"] }, { kind: "component", type: i18.StructureInfoPanelComponent, selector: "div[gui-structure-info-panel]" }, { kind: "component", type: i19.StructureTopPanelComponent, selector: "div[gui-structure-top-panel]" }, { kind: "component", type: i20.EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: i21.StructureHeaderComponent, selector: "div[gui-structure-header]" }, { kind: "component", type: i22.StructureContainerComponent, selector: "div[gui-structure-container]" }, { kind: "component", type: i23.StructureTitlePanelComponent, selector: "div[gui-structure-title-panel]" }, { kind: "component", type: i24.StructureFooterPanelComponent, selector: "div[gui-structure-footer-panel]" }, { kind: "pipe", type: i25.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureBlueprintComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-blueprint]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!---------- TOP ---------->\n<div *guiIf=\"titlePanelEnabled$\" gui-structure-title-panel></div>\n\n<div *guiIf=\"searchEnabled$\" gui-structure-top-panel></div>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingTopEnabled(pagingModel)\" [position]=\"0\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"topSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"topHeaderEnabled$; let topHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderTopEnabled(topHeaderEnabled)\" [ngClass]=\"headerTopClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items$ | guiPush\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<ng-container *guiLet=\"bottomHeaderEnabled$; let bottomHeaderEnabled\">\n\t<div *ngIf=\"isColumnHeaderBottomEnabled(bottomHeaderEnabled)\" [ngClass]=\"headerBottomClasses\"\n\t\t gui-structure-header>\n\t</div>\n</ng-container>\n\n<div [enabled]=\"bottomSummariesPanelEnabled$ | guiPush\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<ng-container *guiLet=\"footerPanelEnabled$; let footerPanelEnabled\">\n\t<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n</ng-container>\n\n<ng-container *guiLet=\"pagingModel$; let pagingModel\">\n\t<div *ngIf=\"isPagingBottomEnabled(pagingModel)\" [position]=\"1\"\n\t\t gui-paging>\n\t</div>\n</ng-container>\n\n<div *guiIf=\"infoPanelEnabled$\" gui-structure-info-panel></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureDefinition }, { type: i2.StructureId }, { type: i3.StructureWarehouse }, { type: i4.StructureInfoPanelArchive }, { type: i5.PagingWarehouse }, { type: i6.SummariesWarehouse }, { type: i7.FilterWarehouse }, { type: i8.SearchWarehouse }, { type: i9.StructureHeaderTopEnabledArchive }, { type: i10.StructureHeaderBottomEnabledArchive }, { type: i11.StructureTitlePanelConfigArchive }, { type: i12.StructureFooterPanelConfigArchive }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [STRUCTURE_CSS_CLASS_NAME]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQVUxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVM5RCxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUE4QjlELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMseUJBQW9ELEVBQ3BELGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQyxnQ0FBa0UsRUFDbEUsbUNBQXdFLEVBQ3hFLGdDQUFrRSxFQUNsRSxpQ0FBb0UsRUFDM0MsU0FBaUI7UUFDN0QsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBZlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3Qyx3QkFBbUIs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LENBQUMsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRU8sc0JBQXNCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUMvQixFQUFFLEVBQUU7YUFDSixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsU0FBbUMsRUFBRSxFQUFFO1lBQ2pELE9BQU8sU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRU8sd0JBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGlDQUFpQzthQUN2QyxFQUFFLEVBQUU7YUFDSixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsV0FBdUMsRUFBRSxFQUFFO1lBQ3JELE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVPLFdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDN0MsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLFNBQWlDLEVBQUUsRUFBRTtZQUMvQyxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7eUhBL0dXLDJCQUEyQiw0aEJBNEM1Qix3QkFBd0I7NkdBNUN2QiwyQkFBMkIsMkZDOUJ4QywycERBb0RBOzRGRHRCYSwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0MsOEJBQThCLG1CQUV2Qix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkE4Q2pDLE1BQU07MkJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgUGFnaW5nTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9tb2RlbC9wYWdpbmcubW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGVmaW5pdGlvbiB9IGZyb20gJy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4vc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvYXBpL3N1bW1hcmllcy53YXJlaG91c2UnO1xuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1ibHVlcHJpbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cmVhZG9ubHkgYm90dG9tU3VtbWFyaWVzUGFuZWxFbmFibGVkJCA9IHRoaXMuc3VtbWFyaWVzV2FyZWhvdXNlLm9uQm90dG9tRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRyZWFkb25seSBjb250ZW50Q3NzQ2xhc3M6IHN0cmluZztcblxuXHRyZWFkb25seSBoZWFkZXJDc3NDbGFzczogc3RyaW5nO1xuXG5cdHJlYWRvbmx5IGhlYWRlclRvcENsYXNzZXM6IHN0cmluZztcblxuXHRyZWFkb25seSBoZWFkZXJCb3R0b21DbGFzc2VzOiBzdHJpbmc7XG5cblx0cmVhZG9ubHkgdG9wSGVhZGVyRW5hYmxlZCQgPSB0aGlzLnN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLm9uKCk7XG5cblx0cmVhZG9ubHkgYm90dG9tSGVhZGVyRW5hYmxlZCQgPSB0aGlzLnN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLm9uKCk7XG5cblx0cmVhZG9ubHkgZm9vdGVyUGFuZWxFbmFibGVkJCA9IHRoaXMuc2VsZWN0Rm9vdGVyUGFuZWxFbmFibGVkKCk7XG5cblx0cmVhZG9ubHkgaXRlbXMkID0gdGhpcy5zZWxlY3RJdGVtcygpO1xuXG5cdHJlYWRvbmx5IHRvcFN1bW1hcmllc1BhbmVsRW5hYmxlZCQgPSB0aGlzLnN1bW1hcmllc1dhcmVob3VzZS5vblRvcEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0cmVhZG9ubHkgc2VhcmNoRW5hYmxlZCQgPSB0aGlzLnNlYXJjaFdhcmVob3VzZS5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0cmVhZG9ubHkgdGl0bGVQYW5lbEVuYWJsZWQkID0gdGhpcy5zZWxlY3RUaXRsZVBhbmVsRW5hYmxlZCgpO1xuXG5cdHJlYWRvbmx5IGluZm9QYW5lbEVuYWJsZWQkID0gdGhpcy5zZWxlY3RJbmZvUGFuZWxFbmFibGVkKCk7XG5cblx0cmVhZG9ubHkgcGFnaW5nTW9kZWwkID0gdGhpcy5wYWdpbmdXYXJlaG91c2Uub25QYWdpbmcodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdXYXJlaG91c2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNXYXJlaG91c2U6IFN1bW1hcmllc1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0QEluamVjdChTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUpIHByaXZhdGUgY2xhc3NOYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmhlYWRlckNzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1oZWFkZXJgO1xuXHRcdHRoaXMuY29udGVudENzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1jb250ZW50YDtcblxuXHRcdHRoaXMuaGVhZGVyVG9wQ2xhc3NlcyA9IHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItdG9wJztcblx0XHR0aGlzLmhlYWRlckJvdHRvbUNsYXNzZXMgPSB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLWJvdHRvbSc7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlclRvcEVuYWJsZWQodG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdG9wSGVhZGVyRW5hYmxlZDtcblx0fVxuXG5cdGlzQ29sdW1uSGVhZGVyQm90dG9tRW5hYmxlZChib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiBib3R0b21IZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNQYWdpbmdUb3BFbmFibGVkKHBhZ2luZ01vZGVsOiBQYWdpbmdNb2RlbCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uZ2V0VG9wUGFnaW5nKCkuaXNFbmFibGVkKCkgJiYgcGFnaW5nTW9kZWwuaXNQYWdlclRvcCgpO1xuXHR9XG5cblx0aXNQYWdpbmdCb3R0b21FbmFibGVkKHBhZ2luZ01vZGVsOiBQYWdpbmdNb2RlbCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uZ2V0Qm90dG9tUGFnaW5nKCkuaXNFbmFibGVkKCkgJiYgcGFnaW5nTW9kZWwuaXNQYWdlckJvdHRvbSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1ibHVlcHJpbnQnO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RUaXRsZVBhbmVsRW5hYmxlZCgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZVxuXHRcdFx0XHQgICAub24oKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHRpdGxlUGFuZWw6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGl0bGVQYW5lbC5lbmFibGVkO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEluZm9QYW5lbEVuYWJsZWQoKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZVxuXHRcdFx0XHQgICAub24oKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGluZm9QYW5lbDogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gaW5mb1BhbmVsLmlzRW5hYmxlZCgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEZvb3RlclBhbmVsRW5hYmxlZCgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmVcblx0XHRcdFx0ICAgLm9uKClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChmb290ZXJQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBmb290ZXJQYW5lbC5lbmFibGVkO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEl0ZW1zKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVdhcmVob3VzZS5vbih0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHN0cnVjdHVyZS5nZXRFbnRpdGllcygpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIiwiPCEtLS0tLS0tLS0tIFRPUCAtLS0tLS0tLS0tPlxuPGRpdiAqZ3VpSWY9XCJ0aXRsZVBhbmVsRW5hYmxlZCRcIiBndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsPjwvZGl2PlxuXG48ZGl2ICpndWlJZj1cInNlYXJjaEVuYWJsZWQkXCIgZ3VpLXN0cnVjdHVyZS10b3AtcGFuZWw+PC9kaXY+XG5cbjxuZy1jb250YWluZXIgKmd1aUxldD1cInBhZ2luZ01vZGVsJDsgbGV0IHBhZ2luZ01vZGVsXCI+XG5cdDxkaXYgKm5nSWY9XCJpc1BhZ2luZ1RvcEVuYWJsZWQocGFnaW5nTW9kZWwpXCIgW3Bvc2l0aW9uXT1cIjBcIlxuXHRcdCBndWktcGFnaW5nPlxuXHQ8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48ZGl2IFtlbmFibGVkXT1cInRvcFN1bW1hcmllc1BhbmVsRW5hYmxlZCQgfCBndWlQdXNoXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbC10b3BcIlxuXHQgZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWw+XG48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwidG9wSGVhZGVyRW5hYmxlZCQ7IGxldCB0b3BIZWFkZXJFbmFibGVkXCI+XG5cdDxkaXYgKm5nSWY9XCJpc0NvbHVtbkhlYWRlclRvcEVuYWJsZWQodG9wSGVhZGVyRW5hYmxlZClcIiBbbmdDbGFzc109XCJoZWFkZXJUb3BDbGFzc2VzXCJcblx0XHQgZ3VpLXN0cnVjdHVyZS1oZWFkZXI+XG5cdDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cblxuPCEtLS0tLS0tLS0tIE1BSU4gLS0tLS0tLS0tLT5cbjxkaXYgW25nQ2xhc3NdPVwiY29udGVudENzc0NsYXNzXCIgZ3VpLXN0cnVjdHVyZS1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiBbaXRlbXNdPVwiaXRlbXMkIHwgZ3VpUHVzaFwiIGd1aS1lbXB0eS1zb3VyY2U+XG48L2Rpdj5cblxuXG48IS0tLS0tLS0tLS0gQk9UVE9NIC0tLS0tLS0tLS0+XG48bmctY29udGFpbmVyICpndWlMZXQ9XCJib3R0b21IZWFkZXJFbmFibGVkJDsgbGV0IGJvdHRvbUhlYWRlckVuYWJsZWRcIj5cblx0PGRpdiAqbmdJZj1cImlzQ29sdW1uSGVhZGVyQm90dG9tRW5hYmxlZChib3R0b21IZWFkZXJFbmFibGVkKVwiIFtuZ0NsYXNzXT1cImhlYWRlckJvdHRvbUNsYXNzZXNcIlxuXHRcdCBndWktc3RydWN0dXJlLWhlYWRlcj5cblx0PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPGRpdiBbZW5hYmxlZF09XCJib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQkIHwgZ3VpUHVzaFwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWwtYm90dG9tXCJcblx0IGd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsPlxuPC9kaXY+XG5cbjxuZy1jb250YWluZXIgKmd1aUxldD1cImZvb3RlclBhbmVsRW5hYmxlZCQ7IGxldCBmb290ZXJQYW5lbEVuYWJsZWRcIj5cblx0PGRpdiAqbmdJZj1cImZvb3RlclBhbmVsRW5hYmxlZFwiIGd1aS1zdHJ1Y3R1cmUtZm9vdGVyLXBhbmVsPjwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKmd1aUxldD1cInBhZ2luZ01vZGVsJDsgbGV0IHBhZ2luZ01vZGVsXCI+XG5cdDxkaXYgKm5nSWY9XCJpc1BhZ2luZ0JvdHRvbUVuYWJsZWQocGFnaW5nTW9kZWwpXCIgW3Bvc2l0aW9uXT1cIjFcIlxuXHRcdCBndWktcGFnaW5nPlxuXHQ8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48ZGl2ICpndWlJZj1cImluZm9QYW5lbEVuYWJsZWQkXCIgZ3VpLXN0cnVjdHVyZS1pbmZvLXBhbmVsPjwvZGl2PlxuIl19