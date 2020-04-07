/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../domain/structure.id';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
import { StructurePagingReadModelWarehouse } from '../../ui-api/paging/structure-paging.read-model-warehouse';
import { StructureInfoPanelEnabledArchive } from '../panel/info/structure.info-panel-enabled.archive';
import { StructureAggregationArchive } from '../panel/aggregation/structure.aggregation.archive';
import { StructureFilterReadModelWarehouse } from '../../ui-api/structure/filter/structure-filter.read-model-warehouse';
import { StructureSearchReadModelRepository } from '../../ui-api/structure/search/structure-search.read-model.repository';
import { STRUCTURE_CSS_CLASS_NAME } from '../../ui-api/structure/structure-tokens';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
var StructureBlueprintComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureBlueprintComponent, _super);
    function StructureBlueprintComponent(changeDetectorRef, structureDefinition, structureId, structureReadModelService, pagingReadModelService, structureInfoPanelEnabledArchive, structureAggregationArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, className) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureDefinition = structureDefinition;
        _this.structureId = structureId;
        _this.structureReadModelService = structureReadModelService;
        _this.pagingReadModelService = pagingReadModelService;
        _this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        _this.structureAggregationArchive = structureAggregationArchive;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.structureSearchReadModelRepository = structureSearchReadModelRepository;
        _this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        _this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        _this.className = className;
        _this.searchEnabled = false;
        _this.topAggregationPanelEnabled = false;
        _this.bottomAggregationPanelEnabled = false;
        _this.quickFiltersEnabled = false;
        _this.infoPanelEnabled = false;
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
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} topHeaderEnabled
         * @return {?}
         */
        function (topHeaderEnabled) {
            _this.topHeaderEnabled = topHeaderEnabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureHeaderBottomEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} bottomHeaderEnabled
         * @return {?}
         */
        function (bottomHeaderEnabled) {
            _this.bottomHeaderEnabled = bottomHeaderEnabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onStructure()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            _this.structure = structure;
            _this.changeDetectorRef.detectChanges();
        }));
        this.pagingReadModelService
            .onPaging()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.pagingReadModel = paging;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureSearchReadModelRepository
            .onSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.searchEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureFilterReadModelRepository
            .onQuickFiltersEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.quickFiltersEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureAggregationArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.topAggregationPanelEnabled = config.itTopEnabled();
            _this.bottomAggregationPanelEnabled = config.itBottomEnabled();
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureInfoPanelEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.infoPanelEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
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
    StructureBlueprintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-blueprint',
                    template: "<!---------- TOP ---------->\n<gui-structure-top-panel *ngIf=\"searchEnabled\"></gui-structure-top-panel>\n\n<gui-structure-quick-fitlers *ngIf=\"quickFiltersEnabled\">\n</gui-structure-quick-fitlers>\n\n<gui-structure-paging *ngIf=\"isPagingTopEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-top\">\n</gui-structure-paging>\n\n<gui-structure-aggregation-panel [enabled]=\"topAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-top\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-header *ngIf=\"isColumnHeaderTopEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderTopClasses()\">\n</gui-structure-header>\n\n\n<!---------- MAIN ---------->\n<gui-structure-container [ngClass]=\"contentCssClass\">\n</gui-structure-container>\n\n<gui-structure-empty-source *ngIf=\"isSourceEmpty()\">\n</gui-structure-empty-source>\n\n\n<!---------- BOTTOM ---------->\n<gui-structure-header *ngIf=\"isColumnHeaderBottomEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderBottomClasses()\">\n</gui-structure-header>\n\n<gui-structure-aggregation-panel [enabled]=\"bottomAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-bottom\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-paging *ngIf=\"isPagingBottomEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-bottom\">\n</gui-structure-paging>\n\n<gui-structure-info-panel *ngIf=\"infoPanelEnabled\"></gui-structure-info-panel>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureBlueprintComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureDefinition },
        { type: StructureId },
        { type: StructureReadModelWarehouse },
        { type: StructurePagingReadModelWarehouse },
        { type: StructureInfoPanelEnabledArchive },
        { type: StructureAggregationArchive },
        { type: StructureFilterReadModelWarehouse },
        { type: StructureSearchReadModelRepository },
        { type: StructureHeaderTopEnabledArchive },
        { type: StructureHeaderBottomEnabledArchive },
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
    StructureBlueprintComponent.prototype.topAggregationPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.bottomAggregationPanelEnabled;
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
    StructureBlueprintComponent.prototype.pagingReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureInfoPanelEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureAggregationArchive;
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
    StructureBlueprintComponent.prototype.className;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVuRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUd4RztJQU1pRCx1REFBYztJQXdCOUQscUNBQTZCLGlCQUFvQyxFQUM3QyxtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIseUJBQXNELEVB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QTJCO2dCQUMzQixpQ0FBaUM7Z0JBQ2pDLGtDQUFrQztnQkFHbEMsZ0NBQWdDO2dCQUNoQyxtQ0FBbUM7NkNBNEN2QyxNQUFNLFNBQUMsd0JBQXdCOztJQWdIcEMsa0NBQUM7Q0FBQSxBQXpKRCxDQU1pRCxjQUFjLEdBbUo5RDtTQW5KWSwyQkFBMkI7OztJQUV2QyxnREFBa0M7O0lBRWxDLG9EQUErQjs7SUFFL0IsaUVBQTRDOztJQUU1QyxvRUFBK0M7O0lBRS9DLDBEQUFxQzs7SUFFckMsdURBQWtDOztJQUVsQyxzREFBaUM7O0lBRWpDLHFEQUFnQzs7SUFFaEMsdURBQTBCOztJQUUxQiwwREFBNkI7Ozs7O0lBRTdCLHNEQUFnQzs7Ozs7SUFFcEIsd0RBQXFEOzs7OztJQUM5RCwwREFBeUQ7Ozs7O0lBQ3pELGtEQUF5Qzs7Ozs7SUFDekMsZ0VBQXVFOzs7OztJQUN2RSw2REFBMEU7Ozs7O0lBQzFFLHVFQUFtRjs7Ozs7SUFDbkYsa0VBQXlFOzs7OztJQUN6RSx5RUFBc0Y7Ozs7O0lBQ3RGLHlFQUF1Rjs7Ozs7SUFDdkYsdUVBQW1GOzs7OztJQUNuRiwwRUFBeUY7Ozs7O0lBQ3pGLGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uL3JlYWQvc3RydWN0dXJlL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vcmVhZC9wYWdpbmcvcGFnaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC5yZWFkLW1vZGVsLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItdG9wLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLWJvdHRvbS1lbmFibGVkLmFyY2hpdmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYmx1ZXByaW50Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdDtcblxuXHRzZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0dG9wQWdncmVnYXRpb25QYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRib3R0b21BZ2dyZWdhdGlvblBhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHF1aWNrRmlsdGVyc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpbmZvUGFuZWxFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cmVhZG9ubHkgY29udGVudENzc0NsYXNzOiBzdHJpbmc7XG5cblx0cmVhZG9ubHkgaGVhZGVyQ3NzQ2xhc3M6IHN0cmluZztcblxuXHR0b3BIZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdGJvdHRvbUhlYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBwYWdpbmdSZWFkTW9kZWw6IFBhZ2luZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVEZWZpbml0aW9uOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmU6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSkgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhlYWRlckNzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1oZWFkZXJgO1xuXHRcdHRoaXMuY29udGVudENzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1jb250ZW50YDtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHRvcEhlYWRlckVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy50b3BIZWFkZXJFbmFibGVkID0gdG9wSGVhZGVyRW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYm90dG9tSGVhZGVyRW5hYmxlZCA9IGJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblN0cnVjdHVyZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlID0gc3RydWN0dXJlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5wYWdpbmdSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25QYWdpbmcoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nUmVhZE1vZGVsID0gcGFnaW5nO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25TZWFyY2hFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlYXJjaEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vblF1aWNrRmlsdGVyc0VuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMucXVpY2tGaWx0ZXJzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLnRvcEFnZ3JlZ2F0aW9uUGFuZWxFbmFibGVkID0gY29uZmlnLml0VG9wRW5hYmxlZCgpO1xuXHRcdFx0XHR0aGlzLmJvdHRvbUFnZ3JlZ2F0aW9uUGFuZWxFbmFibGVkID0gY29uZmlnLml0Qm90dG9tRW5hYmxlZCgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWxFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGdldEhlYWRlclRvcENsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJDc3NDbGFzcyArICcgZ3VpLWhlYWRlci10b3AnO1xuXHR9XG5cblx0Z2V0SGVhZGVyQm90dG9tQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLWJvdHRvbSc7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlclRvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLnRvcEhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc0NvbHVtbkhlYWRlckJvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0hlYWRlckVuYWJsZWQoKSAmJiB0aGlzLmJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxuXHRpc1NvdXJjZUVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSAmJiB0aGlzLnN0cnVjdHVyZS5nZXRFbnRpdGllcygpLmxlbmd0aCA9PT0gMDtcblx0fVxuXG59XG4iXX0=