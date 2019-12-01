/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../domain/structure-id';
import { StructureQueryService } from '../../app/structure/structure-query.service';
import { PagingQueryService } from '../../app/paging/paging-query.service';
import { StructureSummaryEnabledArchive } from '../panel/summary/structure.summary-enabled.archive';
import { StructureAggregationArchive } from '../panel/aggregation/structure.aggregation.archive';
import { StructureFilterReadModelRepository } from '../../ui-api/structure/filter/structure.filter.read-model.repository';
import { StructureSearchReadModelRepository } from '../../ui-api/structure/search/structure-search.read-model.repository';
import { STRUCTURE_CSS_CLASS_NAME } from '../../app/structure-tokens';
var StructureBlueprintComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureBlueprintComponent, _super);
    function StructureBlueprintComponent(changeDetectorRef, structureDefinition, structureId, structureQueryService, pagingQueryService, structureSummaryEnabledArchive, structureAggregationArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, className) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureDefinition = structureDefinition;
        _this.structureId = structureId;
        _this.structureQueryService = structureQueryService;
        _this.pagingQueryService = pagingQueryService;
        _this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        _this.structureAggregationArchive = structureAggregationArchive;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.structureSearchReadModelRepository = structureSearchReadModelRepository;
        _this.className = className;
        _this.searchEnabled = false;
        _this.topAggregationPanelEnabled = false;
        _this.bottomAggregationPanelEnabled = false;
        _this.quickFiltersEnabled = false;
        _this.summaryPanelEnabled = false;
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
            .select()
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
            .select()
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
            .selectSearchEnabled(this.structureId)
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
            .selectQuickFiltersEnabled(this.structureId)
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
            .select()
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
        this.structureSummaryEnabledArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.summaryPanelEnabled = enabled;
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
    StructureBlueprintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-blueprint',
                    template: "<!---------- TOP ---------->\n<gui-structure-search-bar *ngIf=\"searchEnabled\">\n\n</gui-structure-search-bar>\n\n<gui-structure-quick-fitlers *ngIf=\"quickFiltersEnabled\">\n\n</gui-structure-quick-fitlers>\n\n<gui-structure-paging *ngIf=\"isPagingTopEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-top\">\n</gui-structure-paging>\n\n<gui-structure-aggregation-panel [enabled]=\"topAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-top\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-header *ngIf=\"isColumnHeaderTopEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderTopClasses()\">\n</gui-structure-header>\n\n\n<!---------- MAIN ---------->\n<gui-structure-container [ngClass]=\"contentCssClass\">\n</gui-structure-container>\n\n\n<!---------- BOTTOM ---------->\n<gui-structure-header *ngIf=\"isColumnHeaderBottomEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderBottomClasses()\">\n</gui-structure-header>\n\n<gui-structure-aggregation-panel [enabled]=\"bottomAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-bottom\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-paging *ngIf=\"isPagingBottomEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-bottom\">\n</gui-structure-paging>\n\n<gui-structure-summary *ngIf=\"summaryPanelEnabled\"></gui-structure-summary>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureBlueprintComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureDefinition },
        { type: StructureId },
        { type: StructureQueryService },
        { type: PagingQueryService },
        { type: StructureSummaryEnabledArchive },
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
    StructureBlueprintComponent.prototype.summaryPanelEnabled;
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
    StructureBlueprintComponent.prototype.structureSummaryEnabledArchive;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUt0RTtJQU1pRCx1REFBYztJQW9COUQscUNBQW9CLGlCQUFvQyxFQUM3QyxtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLGtCQUFzQyxFQUN0Qyw4QkFBOEQsRUFDOUQsMkJBQXdELEVBQ3hELGtDQUFzRSxFQUN0RSxrQ0FBc0UsRUFDcEMsU0FBaUI7UUFUOUQsWUFVQyxpQkFB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LEVBQUUsQ0FBQztJQUMvSCxDQUFDOztnQkE1SEQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLHMxQ0FBaUQ7b0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBdkJpQyxpQkFBaUI7Z0JBSzFDLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxxQkFBcUI7Z0JBQ3JCLGtCQUFrQjtnQkFDbEIsOEJBQThCO2dCQUM5QiwyQkFBMkI7Z0JBQzNCLGtDQUFrQztnQkFDbEMsa0NBQWtDOzZDQXlDdEMsTUFBTSxTQUFDLHdCQUF3Qjs7SUEyRnBDLGtDQUFDO0NBQUEsQUE5SEQsQ0FNaUQsY0FBYyxHQXdIOUQ7U0F4SFksMkJBQTJCOzs7SUFFdkMsZ0RBQXFCOztJQUVyQixvREFBK0I7O0lBRS9CLGlFQUE0Qzs7SUFFNUMsb0VBQStDOztJQUUvQywwREFBcUM7O0lBRXJDLDBEQUFxQzs7SUFFckMsc0RBQWlDOztJQUVqQyxxREFBZ0M7Ozs7O0lBRWhDLHNEQUFnQzs7Ozs7SUFFcEIsd0RBQTRDOzs7OztJQUNyRCwwREFBZ0Q7Ozs7O0lBQ2hELGtEQUFnQzs7Ozs7SUFDaEMsNERBQW9EOzs7OztJQUNwRCx5REFBOEM7Ozs7O0lBQzlDLHFFQUFzRTs7Ozs7SUFDdEUsa0VBQWdFOzs7OztJQUNoRSx5RUFBOEU7Ozs7O0lBQzlFLHlFQUE4RTs7Ozs7SUFDOUUsZ0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3F1ZXJ5L3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9zdHJ1Y3R1cmUvc3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnaW5nUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL3BhZ2luZy9wYWdpbmctcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9zdW1tYXJ5L3N0cnVjdHVyZS5zdW1tYXJ5LWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS1zZWFyY2gucmVhZC1tb2RlbC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4uLy4uL2FwcC9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29uZmlnJztcblxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYmx1ZXByaW50Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHN0cnVjdHVyZTogU3RydWN0dXJlO1xuXG5cdHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0b3BBZ2dyZWdhdGlvblBhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGJvdHRvbUFnZ3JlZ2F0aW9uUGFuZWxFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cXVpY2tGaWx0ZXJzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHN1bW1hcnlQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRyZWFkb25seSBjb250ZW50Q3NzQ2xhc3M6IHN0cmluZztcblxuXHRyZWFkb25seSBoZWFkZXJDc3NDbGFzczogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsOiBQYWdpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVRdWVyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nUXVlcnlTZXJ2aWNlOiBQYWdpbmdRdWVyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU3VtbWFyeUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRASW5qZWN0KFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSkgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhlYWRlckNzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1oZWFkZXJgO1xuXHRcdHRoaXMuY29udGVudENzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1jb250ZW50YDtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0KClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZSA9IHN0cnVjdHVyZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0KClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0LnNlbGVjdFNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblxuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0LnNlbGVjdFF1aWNrRmlsdGVyc0VuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMucXVpY2tGaWx0ZXJzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMudG9wQWdncmVnYXRpb25QYW5lbEVuYWJsZWQgPSBjb25maWcuaXRUb3BFbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuYm90dG9tQWdncmVnYXRpb25QYW5lbEVuYWJsZWQgPSBjb25maWcuaXRCb3R0b21FbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnN1bW1hcnlQYW5lbEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Z2V0SGVhZGVyVG9wQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLXRvcCc7XG5cdH1cblxuXHRnZXRIZWFkZXJCb3R0b21DbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItYm90dG9tJztcblx0fVxuXG5cdGlzQ29sdW1uSGVhZGVyVG9wRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmlzSGVhZGVyRW5hYmxlZCgpICYmIHRoaXMuc3RydWN0dXJlICYmIHRoaXMuc3RydWN0dXJlLmlzVG9wSGVhZGVyRW5hYmxlZCgpO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdGhpcy5zdHJ1Y3R1cmUgJiYgdGhpcy5zdHJ1Y3R1cmUuaXNCb3R0b21IZWFkZXJFbmFibGVkKCk7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxufVxuIl19