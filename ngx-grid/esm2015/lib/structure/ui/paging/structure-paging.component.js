/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructurePagingWarehouse } from '../../ui-api/paging/structure-paging.warehouse';
import { StructurePagingCommandDispatcher } from '../../ui-api/paging/structure-paging.command-dispatcher';
import { StructureSourceWarehouse } from '../../ui-api/source/structure-source.warehouse';
import { StructurePagingDisplayModeArchive } from './mode/structure-paging.display-mode.archive';
import { PagingDisplayMode } from './mode/paging-display-mode';
export class StructurePagingComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} pagingReadModelService
     * @param {?} pagingCommandService
     * @param {?} sourceReadModelService
     * @param {?} structurePagingDisplayModeArchive
     */
    constructor(changeDetectorRef, pagingReadModelService, pagingCommandService, sourceReadModelService, structurePagingDisplayModeArchive) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.pagingReadModelService = pagingReadModelService;
        this.pagingCommandService = pagingCommandService;
        this.sourceReadModelService = sourceReadModelService;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.alternativeDisplay = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structurePagingDisplayModeArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
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
            this.paging = paging;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceReadModelService
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
                template: "<ng-container *ngIf=\"paging && !alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t[paging]=\"paging\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-paging-stats\n\t\t\t[paging]=\"paging\">\n\t</gui-structure-paging-stats>\n\n\t<gui-structure-paging-navigator\n\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\">\n\t</gui-structure-paging-navigator>\n\n</ng-container>\n\n<ng-container *ngIf=\"paging && alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t[paging]=\"paging\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-alternative-paging-navigator\n\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\">\n\n\t\t<gui-structure-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-structure-alternative-paging-pages>\n\n\t</gui-structure-alternative-paging-navigator>\n\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructurePagingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructurePagingWarehouse },
    { type: StructurePagingCommandDispatcher },
    { type: StructureSourceWarehouse },
    { type: StructurePagingDisplayModeArchive }
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
    StructurePagingComponent.prototype.pagingReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.structurePagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVEvRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7Ozs7SUFRM0QsWUFBb0IsaUJBQW9DLEVBQzdDLHNCQUFnRCxFQUNoRCxvQkFBc0QsRUFDdEQsc0JBQWdELEVBQ2hELGlDQUFvRTtRQUM5RSxLQUFLLEVBQUUsQ0FBQztRQUxXLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQUNoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWtDO1FBQ3RELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDaEQsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQU4vRSx1QkFBa0IsR0FBWSxLQUFLLENBQUM7SUFRcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsaUNBQWlDO2FBQ3BDLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsSUFBdUIsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEtBQUssaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUFuRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHNwQ0FBOEM7Z0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBaEJpQyxpQkFBaUI7WUFLMUMsd0JBQXdCO1lBQ3hCLGdDQUFnQztZQUNoQyx3QkFBd0I7WUFDeEIsaUNBQWlDOzs7O0lBV3pDLDhDQUFtQjs7SUFFbkIsMENBQWU7O0lBRWYsc0RBQW9DOzs7OztJQUV4QixxREFBNEM7Ozs7O0lBQ3JELDBEQUF3RDs7Ozs7SUFDeEQsd0RBQThEOzs7OztJQUM5RCwwREFBd0Q7Ozs7O0lBQ3hELHFFQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi8uLi91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vdWktYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9zdHJ1Y3R1cmUtcGFnaW5nLmRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcGFnaW5nJyxcblx0dGVtcGxhdGVVcmw6ICdzdHJ1Y3R1cmUtcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBwYWdpbmdSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogUGFnaW5nRGlzcGxheU1vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5hbHRlcm5hdGl2ZURpc3BsYXkgPSBtb2RlID09PSBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUGFnaW5nKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uT3JpZ2luU2l6ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5uZXh0UGFnZSgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5wcmV2UGFnZSgpO1xuXHR9XG5cbn1cbiJdfQ==