/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../domain/structure-id';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { PagingReadModelService } from '../../ui-api/paging/paging-read-model.service';
import { StructureInfoPanelEnabledArchive } from '../panel/info/structure.info-panel-enabled.archive';
import { StructureAggregationArchive } from '../panel/aggregation/structure.aggregation.archive';
import { StructureFilterReadModelRepository } from '../../ui-api/structure/filter/structure.filter.read-model.repository';
import { StructureSearchReadModelRepository } from '../../ui-api/structure/search/structure-search.read-model.repository';
import { STRUCTURE_CSS_CLASS_NAME } from '../../ui-api/structure/structure-tokens';
var StructureBlueprintComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureBlueprintComponent, _super);
    function StructureBlueprintComponent(changeDetectorRef, structureDefinition, structureId, structureQueryService, pagingQueryService, structureInfoPanelEnabledArchive, structureAggregationArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, className) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureDefinition = structureDefinition;
        _this.structureId = structureId;
        _this.structureQueryService = structureQueryService;
        _this.pagingQueryService = pagingQueryService;
        _this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        _this.structureAggregationArchive = structureAggregationArchive;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.structureSearchReadModelRepository = structureSearchReadModelRepository;
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
        this.structureQueryService
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
        this.pagingQueryService
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
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isTopHeaderEnabled();
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isColumnHeaderBottomEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isBottomHeaderEnabled();
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
        { type: StructureReadModelService },
        { type: PagingReadModelService },
        { type: StructureInfoPanelEnabledArchive },
        { type: StructureAggregationArchive },
        { type: StructureFilterReadModelRepository },
        { type: StructureSearchReadModelRepository },
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
    StructureBlueprintComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingQueryService;
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
    StructureBlueprintComponent.prototype.className;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUluRjtJQU1pRCx1REFBYztJQW9COUQscUNBQW9CLGlCQUFvQyxFQUM3QyxtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIscUJBQWdELEVBQ2hELGtCQUEwQyxFQUMxQyxnQ0FBa0UsRUFDbEUsMkJBQXdELEVBQ3hELGtDQUFzRSxFQUN0RSxrQ0FBc0UsRUFDcEMsU0FBaUI7UUFUOUQsWUFVQyxpQkFB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QUFFLENBQUM7SUFDL0gsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Z0JBaElELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQywwNkNBQWlEO29CQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQXRCaUMsaUJBQWlCO2dCQUsxQyxtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gseUJBQXlCO2dCQUN6QixzQkFBc0I7Z0JBQ3RCLGdDQUFnQztnQkFDaEMsMkJBQTJCO2dCQUMzQixrQ0FBa0M7Z0JBQ2xDLGtDQUFrQzs2Q0F3Q3RDLE1BQU0sU0FBQyx3QkFBd0I7O0lBK0ZwQyxrQ0FBQztDQUFBLEFBbElELENBTWlELGNBQWMsR0E0SDlEO1NBNUhZLDJCQUEyQjs7O0lBRXZDLGdEQUFxQjs7SUFFckIsb0RBQStCOztJQUUvQixpRUFBNEM7O0lBRTVDLG9FQUErQzs7SUFFL0MsMERBQXFDOztJQUVyQyx1REFBa0M7O0lBRWxDLHNEQUFpQzs7SUFFakMscURBQWdDOzs7OztJQUVoQyxzREFBZ0M7Ozs7O0lBRXBCLHdEQUE0Qzs7Ozs7SUFDckQsMERBQWdEOzs7OztJQUNoRCxrREFBZ0M7Ozs7O0lBQ2hDLDREQUF3RDs7Ozs7SUFDeEQseURBQWtEOzs7OztJQUNsRCx1RUFBMEU7Ozs7O0lBQzFFLGtFQUFnRTs7Ozs7SUFDaEUseUVBQThFOzs7OztJQUM5RSx5RUFBOEU7Ozs7O0lBQzlFLGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIucmVhZC1tb2RlbC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zdHJ1Y3R1cmUtc2VhcmNoLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZyB9IGZyb20gJy4uL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1wYW5lbC5jb25maWcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYmx1ZXByaW50Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHN0cnVjdHVyZTogU3RydWN0dXJlO1xuXG5cdHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0b3BBZ2dyZWdhdGlvblBhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGJvdHRvbUFnZ3JlZ2F0aW9uUGFuZWxFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cXVpY2tGaWx0ZXJzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGluZm9QYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRyZWFkb25seSBjb250ZW50Q3NzQ2xhc3M6IHN0cmluZztcblxuXHRyZWFkb25seSBoZWFkZXJDc3NDbGFzczogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsOiBQYWdpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHBhZ2luZ1F1ZXJ5U2VydmljZTogUGFnaW5nUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRASW5qZWN0KFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSkgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhlYWRlckNzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1oZWFkZXJgO1xuXHRcdHRoaXMuY29udGVudENzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1jb250ZW50YDtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25TdHJ1Y3R1cmUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlID0gc3RydWN0dXJlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5wYWdpbmdRdWVyeVNlcnZpY2Vcblx0XHRcdC5vblBhZ2luZygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnaW5nOiBQYWdpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmdSZWFkTW9kZWwgPSBwYWdpbmc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblxuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uUXVpY2tGaWx0ZXJzRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMudG9wQWdncmVnYXRpb25QYW5lbEVuYWJsZWQgPSBjb25maWcuaXRUb3BFbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuYm90dG9tQWdncmVnYXRpb25QYW5lbEVuYWJsZWQgPSBjb25maWcuaXRCb3R0b21FbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmluZm9QYW5lbEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Z2V0SGVhZGVyVG9wQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLXRvcCc7XG5cdH1cblxuXHRnZXRIZWFkZXJCb3R0b21DbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItYm90dG9tJztcblx0fVxuXG5cdGlzQ29sdW1uSGVhZGVyVG9wRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmlzSGVhZGVyRW5hYmxlZCgpICYmIHRoaXMuc3RydWN0dXJlICYmIHRoaXMuc3RydWN0dXJlLmlzVG9wSGVhZGVyRW5hYmxlZCgpO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdGhpcy5zdHJ1Y3R1cmUgJiYgdGhpcy5zdHJ1Y3R1cmUuaXNCb3R0b21IZWFkZXJFbmFibGVkKCk7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxuXHRpc1NvdXJjZUVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZSAmJiB0aGlzLnN0cnVjdHVyZS5nZXRFbnRpdGllcygpLmxlbmd0aCA9PT0gMDtcblx0fVxuXG59XG4iXX0=