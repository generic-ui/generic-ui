/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../../core/domain/structure.id';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { PagingWarehouse } from '../../../paging/core/api/paging.warehouse';
import { StructureInfoPanelArchive } from '../panel/info/structure.info-panel.archive';
import { StructureSummariesArchive } from '../panel/summaries/structure.summaries.archive';
import { FilterWarehouse } from '../../../filter/core/api/filter.warehouse';
import { SearchWarehouse } from '../../../search/core/api/search.warehouse';
import { STRUCTURE_CSS_CLASS_NAME } from '../../core/api/structure-tokens';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { StructureTitlePanelConfigArchive } from '../panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
import { StreamCloser } from '../../../../common/cdk/reactive/stream-closer';
var StructureBlueprintComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureBlueprintComponent, _super);
    function StructureBlueprintComponent(changeDetectorRef, elementRef, structureDefinition, structureId, structureWarehouse, structureInfoPanelArchive, pagingWarehouse, structureSummariesArchive, filterWarehouse, searchWarehouse, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, className) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureDefinition = structureDefinition;
        _this.structureId = structureId;
        _this.structureWarehouse = structureWarehouse;
        _this.structureInfoPanelArchive = structureInfoPanelArchive;
        _this.pagingWarehouse = pagingWarehouse;
        _this.structureSummariesArchive = structureSummariesArchive;
        _this.filterWarehouse = filterWarehouse;
        _this.searchWarehouse = searchWarehouse;
        _this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        _this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        _this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        _this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        _this.className = className;
        _this.searchEnabled = false;
        _this.topSummariesPanelEnabled = false;
        _this.bottomSummariesPanelEnabled = false;
        _this.quickFiltersEnabled = false;
        _this.infoPanelEnabled = false;
        _this.items = [];
        _this.localStreamCloser = new StreamCloser();
        _this.headerCssClass = "gui-" + _this.className + "-header";
        _this.contentCssClass = "gui-" + _this.className + "-content";
        return _this;
    }
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureHeaderTopEnabledArchive
            .on()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} topHeaderEnabled
         * @return {?}
         */
        function (topHeaderEnabled) {
            _this.topHeaderEnabled = topHeaderEnabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureHeaderBottomEnabledArchive
            .on()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} bottomHeaderEnabled
         * @return {?}
         */
        function (bottomHeaderEnabled) {
            _this.bottomHeaderEnabled = bottomHeaderEnabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureWarehouse
            .onStructure()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            _this.structure = structure;
            _this.items = structure.getEntities();
            _this.changeDetectorRef.detectChanges();
        }));
        this.pagingWarehouse
            .onPaging()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.pagingReadModel = paging;
            _this.changeDetectorRef.detectChanges();
        }));
        this.searchWarehouse
            .onSearchEnabled(this.structureId)
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.searchEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.filterWarehouse
            .onQuickFiltersEnabled(this.structureId)
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.quickFiltersEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureSummariesArchive
            .on()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.topSummariesPanelEnabled = config.itTopEnabled();
            _this.bottomSummariesPanelEnabled = config.itBottomEnabled();
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureInfoPanelArchive
            .on()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} infoPanel
         * @return {?}
         */
        function (infoPanel) {
            _this.infoPanelEnabled = infoPanel.isEnabled();
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureTitlePanelConfigArchive
            .on()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} titlePanel
         * @return {?}
         */
        function (titlePanel) {
            _this.titlePanelEnabled = titlePanel.enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureFooterPanelConfigArchive
            .on()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} footerPanel
         * @return {?}
         */
        function (footerPanel) {
            _this.footerPanelEnabled = footerPanel.enabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.localStreamCloser.unsubscribe();
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.getHeaderTopClasses = /**
     * @return {?}
     */
    function () {
        return this.headerCssClass + ' gui-header-top';
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.getHeaderBottomClasses = /**
     * @return {?}
     */
    function () {
        return this.headerCssClass + ' gui-header-bottom';
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isColumnHeaderTopEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.isHeaderEnabled() && this.topHeaderEnabled;
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isColumnHeaderBottomEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.isHeaderEnabled() && this.bottomHeaderEnabled;
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isPagingTopEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.getTopPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerTop();
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isPagingBottomEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.getBottomPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerBottom();
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isSourceEmpty = /**
     * @return {?}
     */
    function () {
        return this.structure && this.structure.getEntities().length === 0;
    };
    /**
     * @protected
     * @return {?}
     */
    StructureBlueprintComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-blueprint';
    };
    StructureBlueprintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-blueprint]',
                    template: "<!---------- TOP ---------->\n<div *ngIf=\"titlePanelEnabled\" gui-structure-title-panel></div>\n\n<div *ngIf=\"searchEnabled\" gui-structure-top-panel></div>\n\n<!--<div gui-structure-quick-filters *ngIf=\"quickFiltersEnabled\">-->\n<!--</div>-->\n\n<div *ngIf=\"isPagingTopEnabled()\" [position]=\"0\"\n\t gui-paging>\n</div>\n\n<div [enabled]=\"topSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"isColumnHeaderTopEnabled()\" [ngClass]=\"getHeaderTopClasses()\"\n\t gui-structure-header>\n</div>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<div *ngIf=\"isColumnHeaderBottomEnabled()\" [ngClass]=\"getHeaderBottomClasses()\"\n\t gui-structure-header>\n</div>\n\n<div [enabled]=\"bottomSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n\n<div *ngIf=\"isPagingBottomEnabled()\" [position]=\"1\"\n\t gui-paging>\n</div>\n\n<div *ngIf=\"infoPanelEnabled\" gui-structure-info-panel></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureBlueprintComponent.ctorParameters = function () { return [
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
    ]; };
    return StructureBlueprintComponent;
}(SmartComponent));
export { StructureBlueprintComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0gsT0FBTyxFQUFFLGlDQUFpQyxF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bkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkE5QmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQUtqRSxtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsa0JBQWtCO2dCQUVsQix5QkFBeUI7Z0JBRHpCLGVBQWU7Z0JBRWYseUJBQXlCO2dCQUN6QixlQUFlO2dCQUNmLGVBQWU7Z0JBR2YsZ0NBQWdDO2dCQUNoQyxtQ0FBbUM7Z0JBQ25DLGdDQUFnQztnQkFDaEMsaUNBQWlDOzZDQTJEckMsTUFBTSxTQUFDLHdCQUF3Qjs7SUErSXBDLGtDQUFDO0NBQUEsQUFuTUQsQ0FNaUQsY0FBYyxHQTZMOUQ7U0E3TFksMkJBQTJCOzs7SUFFdkMsZ0RBQWtDOztJQUVsQyxvREFBK0I7O0lBRS9CLCtEQUEwQzs7SUFFMUMsa0VBQTZDOztJQUU3QywwREFBcUM7O0lBRXJDLHVEQUFrQzs7SUFFbEMsc0RBQWlDOztJQUVqQyxxREFBZ0M7O0lBRWhDLHVEQUEwQjs7SUFFMUIsMERBQTZCOztJQUU3Qix3REFBMkI7O0lBRTNCLHlEQUE0Qjs7SUFFNUIsNENBQXVCOzs7OztJQUV2QixzREFBZ0M7Ozs7O0lBRWhDLHdEQUF3RDs7Ozs7SUFFNUMsd0RBQXFEOzs7OztJQUU5RCwwREFBeUQ7Ozs7O0lBQ3pELGtEQUF5Qzs7Ozs7SUFDekMseURBQXVEOzs7OztJQUN2RCxnRUFBcUU7Ozs7O0lBQ3JFLHNEQUFpRDs7Ozs7SUFDakQsZ0VBQXFFOzs7OztJQUNyRSxzREFBaUQ7Ozs7O0lBQ2pELHNEQUFpRDs7Ozs7SUFDakQsdUVBQW1GOzs7OztJQUNuRiwwRUFBeUY7Ozs7O0lBQ3pGLHVFQUFtRjs7Ozs7SUFDbkYsd0VBQXFGOzs7OztJQUNyRixnREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci10b3AtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1ibHVlcHJpbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0c3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290O1xuXG5cdHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRxdWlja0ZpbHRlcnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0aW5mb1BhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHJlYWRvbmx5IGNvbnRlbnRDc3NDbGFzczogc3RyaW5nO1xuXG5cdHJlYWRvbmx5IGhlYWRlckNzc0NsYXNzOiBzdHJpbmc7XG5cblx0dG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdHRpdGxlUGFuZWxFbmFibGVkOiBib29sZWFuO1xuXG5cdGZvb3RlclBhbmVsRW5hYmxlZDogYm9vbGVhbjtcblxuXHRpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsOiBQYWdpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2NhbFN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZWZpbml0aW9uOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmU6IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FKSBwcml2YXRlIGNsYXNzTmFtZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5oZWFkZXJDc3NDbGFzcyA9IGBndWktJHt0aGlzLmNsYXNzTmFtZX0taGVhZGVyYDtcblx0XHR0aGlzLmNvbnRlbnRDc3NDbGFzcyA9IGBndWktJHt0aGlzLmNsYXNzTmFtZX0tY29udGVudGA7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmVcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvcEhlYWRlckVuYWJsZWQgPSB0b3BIZWFkZXJFbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYm90dG9tSGVhZGVyRW5hYmxlZCA9IGJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVdhcmVob3VzZVxuXHRcdFx0Lm9uU3RydWN0dXJlKClcblx0XHRcdC5waXBlKHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmUgPSBzdHJ1Y3R1cmU7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nV2FyZWhvdXNlXG5cdFx0XHQub25QYWdpbmcoKVxuXHRcdFx0LnBpcGUodGhpcy5sb2NhbFN0cmVhbUNsb3Nlci50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nUmVhZE1vZGVsID0gcGFnaW5nO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Vcblx0XHRcdC5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25RdWlja0ZpbHRlcnNFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnF1aWNrRmlsdGVyc0VuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy50b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWQgPSBjb25maWcuaXRUb3BFbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuYm90dG9tU3VtbWFyaWVzUGFuZWxFbmFibGVkID0gY29uZmlnLml0Qm90dG9tRW5hYmxlZCgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGluZm9QYW5lbDogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5mb1BhbmVsRW5hYmxlZCA9IGluZm9QYW5lbC5pc0VuYWJsZWQoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmVcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGl0bGVQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy50aXRsZVBhbmVsRW5hYmxlZCA9IHRpdGxlUGFuZWwuZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGZvb3RlclBhbmVsOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmZvb3RlclBhbmVsRW5hYmxlZCA9IGZvb3RlclBhbmVsLmVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRnZXRIZWFkZXJUb3BDbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItdG9wJztcblx0fVxuXG5cdGdldEhlYWRlckJvdHRvbUNsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJDc3NDbGFzcyArICcgZ3VpLWhlYWRlci1ib3R0b20nO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJUb3BFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdGhpcy50b3BIZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdGhpcy5ib3R0b21IZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNQYWdpbmdUb3BFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uZ2V0VG9wUGFnaW5nKCkuaXNFbmFibGVkKCkgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwuaXNQYWdlclRvcCgpO1xuXHR9XG5cblx0aXNQYWdpbmdCb3R0b21FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uZ2V0Qm90dG9tUGFnaW5nKCkuaXNFbmFibGVkKCkgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwuaXNQYWdlckJvdHRvbSgpO1xuXHR9XG5cblx0aXNTb3VyY2VFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmUgJiYgdGhpcy5zdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKS5sZW5ndGggPT09IDA7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWJsdWVwcmludCc7XG5cdH1cblxufVxuIl19