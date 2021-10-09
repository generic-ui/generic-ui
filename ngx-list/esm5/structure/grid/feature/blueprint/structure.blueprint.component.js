/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        this.hermesSubscribe(this.structureHeaderTopEnabledArchive.on(), (/**
         * @param {?} topHeaderEnabled
         * @return {?}
         */
        function (topHeaderEnabled) {
            _this.topHeaderEnabled = topHeaderEnabled;
        }));
        this.hermesSubscribe(this.structureHeaderBottomEnabledArchive.on(), (/**
         * @param {?} bottomHeaderEnabled
         * @return {?}
         */
        function (bottomHeaderEnabled) {
            _this.bottomHeaderEnabled = bottomHeaderEnabled;
        }));
        this.hermesSubscribe(this.structureWarehouse.on(this.structureId), (/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            _this.structure = structure;
            _this.items = structure.getEntities();
        }));
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.pagingReadModel = paging;
        }));
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.pagingReadModel = paging;
        }));
        this.hermesSubscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.searchEnabled = enabled;
        }));
        this.hermesSubscribe(this.filterWarehouse.onQuickFiltersEnabled(this.structureId), (/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.quickFiltersEnabled = enabled;
        }));
        this.hermesSubscribe(this.structureSummariesArchive.on(), (/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.topSummariesPanelEnabled = config.itTopEnabled();
            _this.bottomSummariesPanelEnabled = config.itBottomEnabled();
        }));
        this.hermesSubscribe(this.structureInfoPanelArchive.on(), (/**
         * @param {?} infoPanel
         * @return {?}
         */
        function (infoPanel) {
            _this.infoPanelEnabled = infoPanel.isEnabled();
        }));
        this.hermesSubscribe(this.structureTitlePanelConfigArchive.on(), (/**
         * @param {?} titlePanel
         * @return {?}
         */
        function (titlePanel) {
            _this.titlePanelEnabled = titlePanel.enabled;
        }));
        this.hermesSubscribe(this.structureFooterPanelConfigArchive.on(), (/**
         * @param {?} footerPanel
         * @return {?}
         */
        function (footerPanel) {
            _this.footerPanelEnabled = footerPanel.enabled;
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
        _super.prototype.ngOnDestroy.call(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0gsT0FBTyxFQUFFLGlDQUFpQyxF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QXFFOzs7OztJQUNyRSxzREFBaUQ7Ozs7O0lBQ2pELGdFQUFxRTs7Ozs7SUFDckUsc0RBQWlEOzs7OztJQUNqRCxzREFBaUQ7Ozs7O0lBQ2pELHVFQUFtRjs7Ozs7SUFDbkYsMEVBQXlGOzs7OztJQUN6Rix1RUFBbUY7Ozs7O0lBQ25GLHdFQUFxRjs7Ozs7SUFDckYsZ0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvZmVhdHVyZS9zdHJ1Y3R1cmUuc3VtbWFyaWVzLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9mZWF0dXJlL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLWJvdHRvbS1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RyZWFtQ2xvc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vcGFuZWwvYmFubmVyLXBhbmVscy9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLmNvbmZpZyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtYmx1ZXByaW50XScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdDtcblxuXHRzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0dG9wU3VtbWFyaWVzUGFuZWxFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Ym90dG9tU3VtbWFyaWVzUGFuZWxFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cXVpY2tGaWx0ZXJzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGluZm9QYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRyZWFkb25seSBjb250ZW50Q3NzQ2xhc3M6IHN0cmluZztcblxuXHRyZWFkb25seSBoZWFkZXJDc3NDbGFzczogc3RyaW5nO1xuXG5cdHRvcEhlYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Ym90dG9tSGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHR0aXRsZVBhbmVsRW5hYmxlZDogYm9vbGVhbjtcblxuXHRmb290ZXJQYW5lbEVuYWJsZWQ6IGJvb2xlYW47XG5cblx0aXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRwcml2YXRlIHBhZ2luZ1JlYWRNb2RlbDogUGFnaW5nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9jYWxTdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdXYXJlaG91c2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSkgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuaGVhZGVyQ3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWhlYWRlcmA7XG5cdFx0dGhpcy5jb250ZW50Q3NzQ2xhc3MgPSBgZ3VpLSR7dGhpcy5jbGFzc05hbWV9LWNvbnRlbnRgO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUub24oKSxcblx0XHRcdCh0b3BIZWFkZXJFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudG9wSGVhZGVyRW5hYmxlZCA9IHRvcEhlYWRlckVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZS5vbigpLFxuXHRcdFx0KGJvdHRvbUhlYWRlckVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5ib3R0b21IZWFkZXJFbmFibGVkID0gYm90dG9tSGVhZGVyRW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVdhcmVob3VzZS5vbih0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmUgPSBzdHJ1Y3R1cmU7XG5cdFx0XHRcdHRoaXMuaXRlbXMgPSBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZS5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlYXJjaEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uUXVpY2tGaWx0ZXJzRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMucXVpY2tGaWx0ZXJzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNBcmNoaXZlLm9uKCksXG5cdFx0XHQoY29uZmlnOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLnRvcFN1bW1hcmllc1BhbmVsRW5hYmxlZCA9IGNvbmZpZy5pdFRvcEVuYWJsZWQoKTtcblx0XHRcdFx0dGhpcy5ib3R0b21TdW1tYXJpZXNQYW5lbEVuYWJsZWQgPSBjb25maWcuaXRCb3R0b21FbmFibGVkKCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLm9uKCksXG5cdFx0XHQoaW5mb1BhbmVsOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWxFbmFibGVkID0gaW5mb1BhbmVsLmlzRW5hYmxlZCgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUub24oKSxcblx0XHRcdCh0aXRsZVBhbmVsOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLnRpdGxlUGFuZWxFbmFibGVkID0gdGl0bGVQYW5lbC5lbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLm9uKCksXG5cdFx0XHQoZm9vdGVyUGFuZWw6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuZm9vdGVyUGFuZWxFbmFibGVkID0gZm9vdGVyUGFuZWwuZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRnZXRIZWFkZXJUb3BDbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItdG9wJztcblx0fVxuXG5cdGdldEhlYWRlckJvdHRvbUNsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJDc3NDbGFzcyArICcgZ3VpLWhlYWRlci1ib3R0b20nO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJUb3BFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdGhpcy50b3BIZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdGhpcy5ib3R0b21IZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNQYWdpbmdUb3BFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uZ2V0VG9wUGFnaW5nKCkuaXNFbmFibGVkKCkgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwuaXNQYWdlclRvcCgpO1xuXHR9XG5cblx0aXNQYWdpbmdCb3R0b21FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uZ2V0Qm90dG9tUGFnaW5nKCkuaXNFbmFibGVkKCkgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwgJiYgdGhpcy5wYWdpbmdSZWFkTW9kZWwuaXNQYWdlckJvdHRvbSgpO1xuXHR9XG5cblx0aXNTb3VyY2VFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmUgJiYgdGhpcy5zdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKS5sZW5ndGggPT09IDA7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWJsdWVwcmludCc7XG5cdH1cblxufVxuIl19