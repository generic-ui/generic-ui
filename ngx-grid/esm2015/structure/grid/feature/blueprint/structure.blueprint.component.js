/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../../core/api/structure.id';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { PagingWarehouse } from '../../../paging/core/api/paging.warehouse';
import { StructureInfoPanelArchive } from '../../core/api/panel/info/structure.info-panel.archive';
import { StructureSummariesArchive } from '../../../summaries/feature/structure.summaries.archive';
import { FilterWarehouse } from '../../../filter/core/api/filter.warehouse';
import { SearchWarehouse } from '../../../search/core/api/search.warehouse';
import { STRUCTURE_CSS_CLASS_NAME } from '../../core/api/structure-tokens';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { StructureTitlePanelConfigArchive } from '../panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
import { StreamCloser } from '../../../../common/cdk/reactive/stream-closer';
export class StructureBlueprintComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureDefinition
     * @param {?} structureId
     * @param {?} structureWarehouse
     * @param {?} structureInfoPanelArchive
     * @param {?} pagingWarehouse
     * @param {?} structureSummariesArchive
     * @param {?} filterWarehouse
     * @param {?} searchWarehouse
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} className
     */
    constructor(changeDetectorRef, elementRef, structureDefinition, structureId, structureWarehouse, structureInfoPanelArchive, pagingWarehouse, structureSummariesArchive, filterWarehouse, searchWarehouse, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, className) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureWarehouse = structureWarehouse;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.pagingWarehouse = pagingWarehouse;
        this.structureSummariesArchive = structureSummariesArchive;
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.structureHeaderTopEnabledArchive.on(), (/**
         * @param {?} topHeaderEnabled
         * @return {?}
         */
        (topHeaderEnabled) => {
            this.topHeaderEnabled = topHeaderEnabled;
        }));
        this.hermesSubscribe(this.structureHeaderBottomEnabledArchive.on(), (/**
         * @param {?} bottomHeaderEnabled
         * @return {?}
         */
        (bottomHeaderEnabled) => {
            this.bottomHeaderEnabled = bottomHeaderEnabled;
        }));
        this.hermesSubscribe(this.structureWarehouse.on(this.structureId), (/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            this.structure = structure;
            this.items = structure.getEntities();
        }));
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.pagingReadModel = paging;
        }));
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.pagingReadModel = paging;
        }));
        this.hermesSubscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.searchEnabled = enabled;
        }));
        this.hermesSubscribe(this.filterWarehouse.onQuickFiltersEnabled(this.structureId), (/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.quickFiltersEnabled = enabled;
        }));
        this.hermesSubscribe(this.structureSummariesArchive.on(), (/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.topSummariesPanelEnabled = config.itTopEnabled();
            this.bottomSummariesPanelEnabled = config.itBottomEnabled();
        }));
        this.hermesSubscribe(this.structureInfoPanelArchive.on(), (/**
         * @param {?} infoPanel
         * @return {?}
         */
        (infoPanel) => {
            this.infoPanelEnabled = infoPanel.isEnabled();
        }));
        this.hermesSubscribe(this.structureTitlePanelConfigArchive.on(), (/**
         * @param {?} titlePanel
         * @return {?}
         */
        (titlePanel) => {
            this.titlePanelEnabled = titlePanel.enabled;
        }));
        this.hermesSubscribe(this.structureFooterPanelConfigArchive.on(), (/**
         * @param {?} footerPanel
         * @return {?}
         */
        (footerPanel) => {
            this.footerPanelEnabled = footerPanel.enabled;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
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
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-blueprint';
    }
}
StructureBlueprintComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-blueprint]',
                template: "<!---------- TOP ---------->\n<div *ngIf=\"titlePanelEnabled\" gui-structure-title-panel></div>\n\n<div *ngIf=\"searchEnabled\" gui-structure-top-panel></div>\n\n<!--<div gui-structure-quick-filters *ngIf=\"quickFiltersEnabled\">-->\n<!--</div>-->\n\n<div *ngIf=\"isPagingTopEnabled()\" [position]=\"0\"\n\t gui-paging>\n</div>\n\n<div [enabled]=\"topSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"isColumnHeaderTopEnabled()\" [ngClass]=\"getHeaderTopClasses()\"\n\t gui-structure-header>\n</div>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<div *ngIf=\"isColumnHeaderBottomEnabled()\" [ngClass]=\"getHeaderBottomClasses()\"\n\t gui-structure-header>\n</div>\n\n<div [enabled]=\"bottomSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n\n<div *ngIf=\"isPagingBottomEnabled()\" [position]=\"1\"\n\t gui-paging>\n</div>\n\n<div *ngIf=\"infoPanelEnabled\" gui-structure-info-panel></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureBlueprintComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureDefinition },
    { type: StructureId },
    { type: StructureWarehouse },
    { type: StructureInfoPanelArchive },
    { type: PagingWarehouse },
    { type: StructureSummariesArchive },
    { type: FilterWarehouse },
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
    StructureBlueprintComponent.prototype.pagingReadModel;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.localStreamCloser;
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
    StructureBlueprintComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureInfoPanelArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureSummariesArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.searchWarehouse;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsaUNBQWlDLEVB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QUFpRDs7Ozs7SUFDakQsZ0VBQXFFOzs7OztJQUNyRSxzREFBaUQ7Ozs7O0lBQ2pELHNEQUFpRDs7Ozs7SUFDakQsdUVBQW1GOzs7OztJQUNuRiwwRUFBeUY7Ozs7O0lBQ3pGLHVFQUFtRjs7Ozs7SUFDbkYsd0VBQXFGOzs7OztJQUNyRixnREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9mZWF0dXJlL3N0cnVjdHVyZS5zdW1tYXJpZXMuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL2ZlYXR1cmUvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci10b3AtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1ibHVlcHJpbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290O1xuXG5cdHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0aW5mb1BhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHJlYWRvbmx5IGNvbnRlbnRDc3NDbGFzczogc3RyaW5nO1xuXG5cdHJlYWRvbmx5IGhlYWRlckNzc0NsYXNzOiBzdHJpbmc7XG5cblx0dG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdHRpdGxlUGFuZWxFbmFibGVkOiBib29sZWFuO1xuXG5cdGZvb3RlclBhbmVsRW5hYmxlZDogYm9vbGVhbjtcblxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2NhbFN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZWZpbml0aW9uOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmU6IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FKSBwcml2YXRlIGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5oZWFkZXJDc3NDbGFzcyA9IGBndWktJHt0aGlzLmNsYXNzTmFtZX0taGVhZGVyYDtcblx0XHR0aGlzLmNvbnRlbnRDc3NDbGFzcyA9IGBndWktJHt0aGlzLmNsYXNzTmFtZX0tY29udGVudGA7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHRvcEhlYWRlckVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy50b3BIZWFkZXJFbmFibGVkID0gdG9wSGVhZGVyRW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLm9uKCksXG5cdFx0XHQoYm90dG9tSGVhZGVyRW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmJvdHRvbUhlYWRlckVuYWJsZWQgPSBib3R0b21IZWFkZXJFbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlV2FyZWhvdXNlLm9uKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZSA9IHN0cnVjdHVyZTtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IHN0cnVjdHVyZS5nZXRFbnRpdGllcygpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMucGFnaW5nV2FyZWhvdXNlLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nUmVhZE1vZGVsID0gcGFnaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMucGFnaW5nV2FyZWhvdXNlLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nUmVhZE1vZGVsID0gcGFnaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uU2VhcmNoRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25RdWlja0ZpbHRlcnNFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUub24oKSxcblx0XHRcdChjb25maWc6IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMudG9wU3VtbWFyaWVzUGFuZWxFbmFibGVkID0gY29uZmlnLml0VG9wRW5hYmxlZCgpO1xuXHRcdFx0XHR0aGlzLmJvdHRvbVN1bW1hcmllc1BhbmVsRW5hYmxlZCA9IGNvbmZpZy5pdEJvdHRvbUVuYWJsZWQoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUub24oKSxcblx0XHRcdChpbmZvUGFuZWw6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmluZm9QYW5lbEVuYWJsZWQgPSBpbmZvUGFuZWwuaXNFbmFibGVkKCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZS5vbigpLFxuXHRcdFx0KHRpdGxlUGFuZWw6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMudGl0bGVQYW5lbEVuYWJsZWQgPSB0aXRsZVBhbmVsLmVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUub24oKSxcblx0XHRcdChmb290ZXJQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5mb290ZXJQYW5lbEVuYWJsZWQgPSBmb290ZXJQYW5lbC5lbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG5cdGdldEhlYWRlclRvcENsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJDc3NDbGFzcyArICcgZ3VpLWhlYWRlci10b3AnO1xuXHR9XG5cblx0Z2V0SGVhZGVyQm90dG9tQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLWJvdHRvbSc7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlclRvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLnRvcEhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlckJvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLmJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxuXHRpc1NvdXJjZUVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSAmJiB0aGlzLnN0cnVjdHVyZS5nZXRFbnRpdGllcygpLmxlbmd0aCA9PT0gMDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtYmx1ZXByaW50Jztcblx0fVxuXG59XG4iXX0=