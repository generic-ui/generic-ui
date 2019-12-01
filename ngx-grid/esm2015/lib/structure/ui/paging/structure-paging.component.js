/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { PagingQueryService } from '../../app/paging/paging-query.service';
import { PagingCommandService } from '../../app/paging/paging-command.service';
import { SourceQueryService } from '../../app/source/source-query.service';
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
            .select()
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
            .selectOriginSize()
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
                template: "<ng-container *ngIf=\"paging && !alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t[paging]=\"paging\"\n\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-paging-stats\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\">\n\t</gui-structure-paging-stats>\n\n\t<gui-structure-paging-navigator\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t(nextPageChanged)=\"nextPage()\">\n\t</gui-structure-paging-navigator>\n\n</ng-container>\n\n<ng-container *ngIf=\"paging && alternativeDisplay\">\n\n\t\t<gui-structure-paging-select\n\t\t\t[paging]=\"paging\"\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t\t</gui-structure-paging-select>\n\n\t\t<gui-structure-alternative-paging-navigator\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t(nextPageChanged)=\"nextPage()\">\n\n\t\t\t<gui-structure-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t\t</gui-structure-alternative-paging-pages>\n\n\t\t</gui-structure-alternative-paging-navigator>\n\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructurePagingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: PagingQueryService },
    { type: PagingCommandService },
    { type: SourceQueryService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVEzRSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7OztJQVEzRCxZQUFvQixpQkFBb0MsRUFDN0Msa0JBQXNDLEVBQ3RDLG9CQUEwQyxFQUMxQyxrQkFBc0M7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFKVyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTGpELHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQU9wQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUF2REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHFyQ0FBOEM7Z0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBZGlDLGlCQUFpQjtZQUsxQyxrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGtCQUFrQjs7OztJQVUxQiw4Q0FBbUI7O0lBRW5CLDBDQUFlOztJQUVmLHNEQUFvQzs7Ozs7SUFFeEIscURBQTRDOzs7OztJQUNyRCxzREFBOEM7Ozs7O0lBQzlDLHdEQUFrRDs7Ozs7SUFDbEQsc0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9xdWVyeS9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL3BhZ2luZy9wYWdpbmctcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9wYWdpbmcvcGFnaW5nLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VRdWVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvc291cmNlL3NvdXJjZS1xdWVyeS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXBhZ2luZycsXG5cdHRlbXBsYXRlVXJsOiAnc3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0YWx0ZXJuYXRpdmVEaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nUXVlcnlTZXJ2aWNlOiBQYWdpbmdRdWVyeVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUXVlcnlTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucGFnaW5nUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0KClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHQuc2VsZWN0T3JpZ2luU2l6ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5uZXh0UGFnZSgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5wcmV2UGFnZSgpO1xuXHR9XG5cbn1cbiJdfQ==