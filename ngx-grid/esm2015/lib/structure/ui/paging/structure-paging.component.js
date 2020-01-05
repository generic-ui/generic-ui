/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { PagingReadModelService } from '../../ui-api/paging/paging-read-model.service';
import { PagingCommandService } from '../../ui-api/paging/paging-command.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
export class StructurePagingComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} pagingQueryService
     * @param {?} pagingCommandService
     * @param {?} sourceQueryService
     */
    constructor(changeDetectorRef, pagingQueryService, pagingCommandService, sourceQueryService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.pagingQueryService = pagingQueryService;
        this.pagingCommandService = pagingCommandService;
        this.sourceQueryService = sourceQueryService;
        this.alternativeDisplay = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pagingQueryService
            .onPaging()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.paging = paging;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceQueryService
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.sourceSize = size;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.pagingCommandService.changePageSize(pageSize);
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandService.nextPage();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingCommandService.prevPage();
    }
}
StructurePagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-paging',
                template: "<ng-container *ngIf=\"paging && !alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t[paging]=\"paging\"\n\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-paging-stats\n\t\t[paging]=\"paging\">\n\t</gui-structure-paging-stats>\n\n\t<gui-structure-paging-navigator\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t(nextPageChanged)=\"nextPage()\">\n\t</gui-structure-paging-navigator>\n\n</ng-container>\n\n<ng-container *ngIf=\"paging && alternativeDisplay\">\n\n\t\t<gui-structure-paging-select\n\t\t\t[paging]=\"paging\"\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t\t</gui-structure-paging-select>\n\n\t\t<gui-structure-alternative-paging-navigator\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t(nextPageChanged)=\"nextPage()\">\n\n\t\t\t<gui-structure-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t\t</gui-structure-alternative-paging-pages>\n\n\t\t</gui-structure-alternative-paging-navigator>\n\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructurePagingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: PagingReadModelService },
    { type: PagingCommandService },
    { type: SourceReadModelService }
];
if (false) {
    /** @type {?} */
    StructurePagingComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingComponent.prototype.paging;
    /** @type {?} */
    StructurePagingComponent.prototype.alternativeDisplay;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingQueryService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.sourceQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQVF2RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7OztJQVEzRCxZQUFvQixpQkFBb0MsRUFDN0Msa0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyxrQkFBMEM7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFKVyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7UUFDMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXdCO1FBTHJELHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQU9wQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUF2REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG9wQ0FBOEM7Z0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBZGlDLGlCQUFpQjtZQUsxQyxzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjs7OztJQVU5Qiw4Q0FBbUI7O0lBRW5CLDBDQUFlOztJQUVmLHNEQUFvQzs7Ozs7SUFFeEIscURBQTRDOzs7OztJQUNyRCxzREFBa0Q7Ozs7O0lBQ2xELHdEQUFrRDs7Ozs7SUFDbEQsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdpbmdSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcGFnaW5nJyxcblx0dGVtcGxhdGVVcmw6ICdzdHJ1Y3R1cmUtcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBwYWdpbmdRdWVyeVNlcnZpY2U6IFBhZ2luZ1JlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnBhZ2luZ1F1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uUGFnaW5nKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLm5leHRQYWdlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLnByZXZQYWdlKCk7XG5cdH1cblxufVxuIl19