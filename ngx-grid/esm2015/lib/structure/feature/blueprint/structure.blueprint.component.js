/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../domain/structure.id';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { PagingWarehouse } from '../../../../structure/paging/domain-api/paging.warehouse';
import { StructureInfoPanelArchive } from '../panel/info/structure.info-panel.archive';
import { StructureSummariesArchive } from '../panel/summaries/structure.summaries.archive';
import { StructureFilterWarehouse } from '../../domain-api/filter/structure-filter.warehouse';
import { SearchWarehouse } from '../../../../structure/search/domain-api/search.warehouse';
import { STRUCTURE_CSS_CLASS_NAME } from '../../domain-api/structure-tokens';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { StructureTitlePanelConfigArchive } from '../panel/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../panel/footer-panel/structure.footer-panel.config-archive';
export class StructureBlueprintComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureDefinition
     * @param {?} structureId
     * @param {?} structureReadModelService
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} pagingReadModelService
     * @param {?} structureSummariesArchive
     * @param {?} structureFilterReadModelRepository
     * @param {?} structureSearchReadModelRepository
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} className
     */
    constructor(changeDetectorRef, structureDefinition, structureId, structureReadModelService, structureInfoPanelEnabledArchive, pagingReadModelService, structureSummariesArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, className) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureReadModelService = structureReadModelService;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.pagingReadModelService = pagingReadModelService;
        this.structureSummariesArchive = structureSummariesArchive;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureSearchReadModelRepository = structureSearchReadModelRepository;
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
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureHeaderTopEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} topHeaderEnabled
         * @return {?}
         */
        (topHeaderEnabled) => {
            this.topHeaderEnabled = topHeaderEnabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureHeaderBottomEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} bottomHeaderEnabled
         * @return {?}
         */
        (bottomHeaderEnabled) => {
            this.bottomHeaderEnabled = bottomHeaderEnabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onStructure()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            this.structure = structure;
            this.items = structure.getEntities();
            this.changeDetectorRef.detectChanges();
        }));
        this.pagingReadModelService
            .onPaging()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.pagingReadModel = paging;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSearchReadModelRepository
            .onSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.searchEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureFilterReadModelRepository
            .onQuickFiltersEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.quickFiltersEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSummariesArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.topSummariesPanelEnabled = config.itTopEnabled();
            this.bottomSummariesPanelEnabled = config.itBottomEnabled();
            this.changeDetectorRef.detectChanges();
        }));
        this.structureInfoPanelEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} infoPanel
         * @return {?}
         */
        (infoPanel) => {
            this.infoPanelEnabled = infoPanel.isEnabled();
            this.changeDetectorRef.detectChanges();
        }));
        this.structureTitlePanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} titlePanel
         * @return {?}
         */
        (titlePanel) => {
            this.titlePanelEnabled = titlePanel.enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureFooterPanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} footerPanel
         * @return {?}
         */
        (footerPanel) => {
            this.footerPanelEnabled = footerPanel.enabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    getHeaderTopClasses() {
        return this.headerCssClass + ' gui-header-top';
    }
    /**
     * @return {?}
     */
    getHeaderBottomClasses() {
        return this.headerCssClass + ' gui-header-bottom';
    }
    /**
     * @return {?}
     */
    isColumnHeaderTopEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.topHeaderEnabled;
    }
    /**
     * @return {?}
     */
    isColumnHeaderBottomEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.bottomHeaderEnabled;
    }
    /**
     * @return {?}
     */
    isPagingTopEnabled() {
        return this.structureDefinition.getTopPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerTop();
    }
    /**
     * @return {?}
     */
    isPagingBottomEnabled() {
        return this.structureDefinition.getBottomPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerBottom();
    }
    /**
     * @return {?}
     */
    isSourceEmpty() {
        return this.structure && this.structure.getEntities().length === 0;
    }
}
StructureBlueprintComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-blueprint',
                template: "<!---------- TOP ---------->\n<gui-structure-title-panel *ngIf=\"titlePanelEnabled\"></gui-structure-title-panel>\n\n<gui-structure-top-panel *ngIf=\"searchEnabled\"></gui-structure-top-panel>\n\n<gui-structure-quick-fitlers *ngIf=\"quickFiltersEnabled\">\n</gui-structure-quick-fitlers>\n\n<gui-paging *ngIf=\"isPagingTopEnabled()\"\n\t\t\t[position]=\"0\">\n</gui-paging>\n\n<gui-structure-summaries-panel [enabled]=\"topSummariesPanelEnabled\"\n\t\t\t\t\t\t\t   class=\"gui-structure-summaries-panel-top\">\n</gui-structure-summaries-panel>\n\n<gui-structure-header *ngIf=\"isColumnHeaderTopEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderTopClasses()\">\n</gui-structure-header>\n\n\n<!---------- MAIN ---------->\n<gui-structure-container [ngClass]=\"contentCssClass\">\n</gui-structure-container>\n\n<gui-empty-source [items]=\"items\">\n</gui-empty-source>\n\n\n<!---------- BOTTOM ---------->\n<gui-structure-header *ngIf=\"isColumnHeaderBottomEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderBottomClasses()\">\n</gui-structure-header>\n\n<gui-structure-summaries-panel [enabled]=\"bottomSummariesPanelEnabled\"\n\t\t\t\t\t\t\t   class=\"gui-structure-summaries-panel-bottom\">\n</gui-structure-summaries-panel>\n\n<gui-structure-footer-panel *ngIf=\"footerPanelEnabled\"></gui-structure-footer-panel>\n\n<gui-paging *ngIf=\"isPagingBottomEnabled()\"\n\t\t\t[position]=\"1\">\n</gui-paging>\n\n<gui-structure-info-panel *ngIf=\"infoPanelEnabled\"></gui-structure-info-panel>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureBlueprintComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureDefinition },
    { type: StructureId },
    { type: StructureWarehouse },
    { type: StructureInfoPanelArchive },
    { type: PagingWarehouse },
    { type: StructureSummariesArchive },
    { type: StructureFilterWarehouse },
    { type: SearchWarehouse },
    { type: StructureHeaderTopEnabledArchive },
    { type: StructureHeaderBottomEnabledArchive },
    { type: StructureTitlePanelConfigArchive },
    { type: StructureFooterPanelConfigArchive },
    { type: String, decorators: [{ type: Inject, args: [STRUCTURE_CSS_CLASS_NAME,] }] }
];
if (false) {
    /** @type {?} */
    StructureBlueprintComponent.prototype.structure;
    /** @type {?} */
    StructureBlueprintComponent.prototype.searchEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.topSummariesPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.bottomSummariesPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.quickFiltersEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.infoPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.contentCssClass;
    /** @type {?} */
    StructureBlueprintComponent.prototype.headerCssClass;
    /** @type {?} */
    StructureBlueprintComponent.prototype.topHeaderEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.bottomHeaderEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingReadModel;
    /** @type {?} */
    StructureBlueprintComponent.prototype.titlePanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.footerPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureDefinition;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureInfoPanelEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureSummariesArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureFilterReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureSearchReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureHeaderTopEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureHeaderBottomEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureFooterPanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.className;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9ibHVlcHJpbnQvc3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2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K0RBQTBDOztJQUUxQyxrRUFBNkM7O0lBRTdDLDBEQUFxQzs7SUFFckMsdURBQWtDOztJQUVsQyxzREFBaUM7O0lBRWpDLHFEQUFnQzs7SUFFaEMsdURBQTBCOztJQUUxQiwwREFBNkI7Ozs7O0lBRTdCLHNEQUFnQzs7SUFFaEMsd0RBQTJCOztJQUUzQix5REFBNEI7O0lBRTVCLDRDQUF1Qjs7Ozs7SUFFWCx3REFBcUQ7Ozs7O0lBQzlELDBEQUF5RDs7Ozs7SUFDekQsa0RBQXlDOzs7OztJQUN6QyxnRUFBOEQ7Ozs7O0lBQzlELHVFQUE0RTs7Ozs7SUFDNUUsNkRBQXdEOzs7OztJQUN4RCxnRUFBcUU7Ozs7O0lBQ3JFLHlFQUE2RTs7Ozs7SUFDN0UseUVBQW9FOzs7OztJQUNwRSx1RUFBbUY7Ozs7O0lBQ25GLDBFQUF5Rjs7Ozs7SUFDekYsdUVBQW1GOzs7OztJQUNuRix3RUFBcUY7Ozs7O0lBQ3JGLGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyL3N0cnVjdHVyZS1maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4uL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci1ib3R0b20tZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFRpdGxlUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC90aXRsZS1wYW5lbC90aXRsZS1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgRm9vdGVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9mb290ZXItcGFuZWwvZm9vdGVyLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1ibHVlcHJpbnQnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0c3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290O1xuXG5cdHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0aW5mb1BhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHJlYWRvbmx5IGNvbnRlbnRDc3NDbGFzczogc3RyaW5nO1xuXG5cdHJlYWRvbmx5IGhlYWRlckNzc0NsYXNzOiBzdHJpbmc7XG5cblx0dG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsOiBQYWdpbmc7XG5cblx0dGl0bGVQYW5lbEVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Zm9vdGVyUGFuZWxFbmFibGVkOiBib29sZWFuO1xuXG5cdGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1JlYWRNb2RlbFNlcnZpY2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5OiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FKSBwcml2YXRlIGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuaGVhZGVyQ3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWhlYWRlcmA7XG5cdFx0dGhpcy5jb250ZW50Q3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWNvbnRlbnRgO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgodG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvcEhlYWRlckVuYWJsZWQgPSB0b3BIZWFkZXJFbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGJvdHRvbUhlYWRlckVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5ib3R0b21IZWFkZXJFbmFibGVkID0gYm90dG9tSGVhZGVyRW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uU3RydWN0dXJlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmUgPSBzdHJ1Y3R1cmU7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUGFnaW5nKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uU2VhcmNoRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25RdWlja0ZpbHRlcnNFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLnRvcFN1bW1hcmllc1BhbmVsRW5hYmxlZCA9IGNvbmZpZy5pdFRvcEVuYWJsZWQoKTtcblx0XHRcdFx0dGhpcy5ib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQgPSBjb25maWcuaXRCb3R0b21FbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaW5mb1BhbmVsOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWxFbmFibGVkID0gaW5mb1BhbmVsLmlzRW5hYmxlZCgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRpdGxlUGFuZWw6IFRpdGxlUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy50aXRsZVBhbmVsRW5hYmxlZCA9IHRpdGxlUGFuZWwuZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZm9vdGVyUGFuZWw6IEZvb3RlclBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuZm9vdGVyUGFuZWxFbmFibGVkID0gZm9vdGVyUGFuZWwuZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGdldEhlYWRlclRvcENsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJDc3NDbGFzcyArICcgZ3VpLWhlYWRlci10b3AnO1xuXHR9XG5cblx0Z2V0SGVhZGVyQm90dG9tQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLWJvdHRvbSc7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlclRvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLnRvcEhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlckJvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLmJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxuXHRpc1NvdXJjZUVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSAmJiB0aGlzLnN0cnVjdHVyZS5nZXRFbnRpdGllcygpLmxlbmd0aCA9PT0gMDtcblx0fVxuXG59XG4iXX0=