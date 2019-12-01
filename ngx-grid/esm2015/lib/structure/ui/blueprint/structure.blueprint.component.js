/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StructureBlueprintComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureDefinition
     * @param {?} structureId
     * @param {?} structureQueryService
     * @param {?} pagingQueryService
     * @param {?} structureSummaryEnabledArchive
     * @param {?} structureAggregationArchive
     * @param {?} structureFilterReadModelRepository
     * @param {?} structureSearchReadModelRepository
     * @param {?} className
     */
    constructor(changeDetectorRef, structureDefinition, structureId, structureQueryService, pagingQueryService, structureSummaryEnabledArchive, structureAggregationArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, className) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureQueryService = structureQueryService;
        this.pagingQueryService = pagingQueryService;
        this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        this.structureAggregationArchive = structureAggregationArchive;
        this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        this.structureSearchReadModelRepository = structureSearchReadModelRepository;
        this.className = className;
        this.searchEnabled = false;
        this.topAggregationPanelEnabled = false;
        this.bottomAggregationPanelEnabled = false;
        this.quickFiltersEnabled = false;
        this.summaryPanelEnabled = false;
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureQueryService
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => {
            this.structure = structure;
            this.changeDetectorRef.detectChanges();
        }));
        this.pagingQueryService
            .select()
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
            .selectSearchEnabled(this.structureId)
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
            .selectQuickFiltersEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.quickFiltersEnabled = enabled;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureAggregationArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.topAggregationPanelEnabled = config.itTopEnabled();
            this.bottomAggregationPanelEnabled = config.itBottomEnabled();
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSummaryEnabledArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        (enabled) => {
            this.summaryPanelEnabled = enabled;
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
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isTopHeaderEnabled();
    }
    /**
     * @return {?}
     */
    isColumnHeaderBottomEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isBottomHeaderEnabled();
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
}
StructureBlueprintComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-blueprint',
                template: "<!---------- TOP ---------->\n<gui-structure-search-bar *ngIf=\"searchEnabled\">\n\n</gui-structure-search-bar>\n\n<gui-structure-quick-fitlers *ngIf=\"quickFiltersEnabled\">\n\n</gui-structure-quick-fitlers>\n\n<gui-structure-paging *ngIf=\"isPagingTopEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-top\">\n</gui-structure-paging>\n\n<gui-structure-aggregation-panel [enabled]=\"topAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-top\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-header *ngIf=\"isColumnHeaderTopEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderTopClasses()\">\n</gui-structure-header>\n\n\n<!---------- MAIN ---------->\n<gui-structure-container [ngClass]=\"contentCssClass\">\n</gui-structure-container>\n\n\n<!---------- BOTTOM ---------->\n<gui-structure-header *ngIf=\"isColumnHeaderBottomEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderBottomClasses()\">\n</gui-structure-header>\n\n<gui-structure-aggregation-panel [enabled]=\"bottomAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-bottom\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-paging *ngIf=\"isPagingBottomEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-bottom\">\n</gui-structure-paging>\n\n<gui-structure-summary *ngIf=\"summaryPanelEnabled\"></gui-structure-summary>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureBlueprintComponent.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzFILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBV3RFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxjQUFjOzs7Ozs7Ozs7Ozs7O0lBb0I5RCxZQUFvQixpQkFBb0MsRUFDN0MsbUJBQXdDLEVBQ3hDLFdBQXdCLEVBQ3hCLHFCQUE0QyxFQUM1QyxrQkFBc0MsRUFDdEMsOEJBQThELEVBQzlELDJCQUF3RCxFQUN4RCxrQ0FBc0UsRUFDdEUsa0NBQXNFLEVB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Q0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0gsQ0FBQzs7O1lBNUhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxzMUNBQWlEO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUF2QmlDLGlCQUFpQjtZQUsxQyxtQkFBbUI7WUFDbkIsV0FBVztZQUNYLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsOEJBQThCO1lBQzlCLDJCQUEyQjtZQUMzQixrQ0FBa0M7WUFDbEMsa0NBQWtDO3lDQXlDdEMsTUFBTSxTQUFDLHdCQUF3Qjs7OztJQTNCbkMsZ0RBQXFCOztJQUVyQixvREFBK0I7O0lBRS9CLGlFQUE0Qzs7SUFFNUMsb0VBQStDOztJQUUvQywwREFBcUM7O0lBRXJDLDBEQUFxQzs7SUFFckMsc0RBQWlDOztJQUVqQyxxREFBZ0M7Ozs7O0lBRWhDLHNEQUFnQzs7Ozs7SUFFcEIsd0RBQTRDOzs7OztJQUNyRCwwREFBZ0Q7Ozs7O0lBQ2hELGtEQUFnQzs7Ozs7SUFDaEMsNERBQW9EOzs7OztJQUNwRCx5REFBOEM7Ozs7O0lBQzlDLHFFQUFzRTs7Ozs7SUFDdEUsa0VBQWdFOzs7OztJQUNoRSx5RUFBOEU7Ozs7O0lBQzlFLHlFQUE4RTs7Ozs7SUFDOUUsZ0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3F1ZXJ5L3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9zdHJ1Y3R1cmUvc3RydWN0dXJlLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnaW5nUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL3BhZ2luZy9wYWdpbmctcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9zdW1tYXJ5L3N0cnVjdHVyZS5zdW1tYXJ5LWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5yZWFkLW1vZGVsLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS1zZWFyY2gucmVhZC1tb2RlbC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4uLy4uL2FwcC9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29uZmlnJztcblxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYmx1ZXByaW50Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHN0cnVjdHVyZTogU3RydWN0dXJlO1xuXG5cdHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR0b3BBZ2dyZWdhdGlvblBhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGJvdHRvbUFnZ3JlZ2F0aW9uUGFuZWxFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cXVpY2tGaWx0ZXJzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHN1bW1hcnlQYW5lbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRyZWFkb25seSBjb250ZW50Q3NzQ2xhc3M6IHN0cmluZztcblxuXHRyZWFkb25seSBoZWFkZXJDc3NDbGFzczogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsOiBQYWdpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUXVlcnlTZXJ2aWNlOiBTdHJ1Y3R1cmVRdWVyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nUXVlcnlTZXJ2aWNlOiBQYWdpbmdRdWVyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU3VtbWFyeUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeTogU3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRASW5qZWN0KFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSkgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhlYWRlckNzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1oZWFkZXJgO1xuXHRcdHRoaXMuY29udGVudENzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1jb250ZW50YDtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0KClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZSA9IHN0cnVjdHVyZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0KClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0LnNlbGVjdFNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblxuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0LnNlbGVjdFF1aWNrRmlsdGVyc0VuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMucXVpY2tGaWx0ZXJzRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMudG9wQWdncmVnYXRpb25QYW5lbEVuYWJsZWQgPSBjb25maWcuaXRUb3BFbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuYm90dG9tQWdncmVnYXRpb25QYW5lbEVuYWJsZWQgPSBjb25maWcuaXRCb3R0b21FbmFibGVkKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnN1bW1hcnlQYW5lbEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Z2V0SGVhZGVyVG9wQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLXRvcCc7XG5cdH1cblxuXHRnZXRIZWFkZXJCb3R0b21DbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItYm90dG9tJztcblx0fVxuXG5cdGlzQ29sdW1uSGVhZGVyVG9wRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmlzSGVhZGVyRW5hYmxlZCgpICYmIHRoaXMuc3RydWN0dXJlICYmIHRoaXMuc3RydWN0dXJlLmlzVG9wSGVhZGVyRW5hYmxlZCgpO1xuXHR9XG5cblx0aXNDb2x1bW5IZWFkZXJCb3R0b21FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZURlZmluaXRpb24uaXNIZWFkZXJFbmFibGVkKCkgJiYgdGhpcy5zdHJ1Y3R1cmUgJiYgdGhpcy5zdHJ1Y3R1cmUuaXNCb3R0b21IZWFkZXJFbmFibGVkKCk7XG5cdH1cblxuXHRpc1BhZ2luZ1RvcEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRUb3BQYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyVG9wKCk7XG5cdH1cblxuXHRpc1BhZ2luZ0JvdHRvbUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5nZXRCb3R0b21QYWdpbmcoKS5pc0VuYWJsZWQoKSAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbCAmJiB0aGlzLnBhZ2luZ1JlYWRNb2RlbC5pc1BhZ2VyQm90dG9tKCk7XG5cdH1cblxufVxuIl19