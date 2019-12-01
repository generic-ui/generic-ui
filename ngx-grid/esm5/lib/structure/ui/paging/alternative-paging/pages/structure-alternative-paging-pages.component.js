/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Paging } from '../../../../domain/paging/query/paging';
import { PagingCommandService } from '../../../../app/paging/paging-command.service';
var StructureAlternativePagingPagesComponent = /** @class */ (function () {
    function StructureAlternativePagingPagesComponent(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.sourceSize = 0;
        this.numberOfVisiblePages = 3;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculate();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.calculate = /**
     * @return {?}
     */
    function () {
        if (this.paging && this.sourceSize) {
            /** @type {?} */
            var numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
            this.currentPage = this.paging.getPage();
            this.pages = [];
            if (this.pages.length <= numberOfPages) {
                for (var i = 1; i <= numberOfPages; i++) {
                    this.pages.push(i);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.isSourceNotEmpty = /**
     * @return {?}
     */
    function () {
        return this.sourceSize > 0;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.goToPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var currentPage = this.paging.getPage();
        this.pagingCommandService.goToPage(pageNumber, currentPage);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.calculateVisiblePages = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.paging.calculateVisiblePages(this.currentPage, this.numberOfVisiblePages, page);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.activePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.currentPage === page;
    };
    StructureAlternativePagingPagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-alternative-paging-pages',
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t\t<div *ngFor=\"let page of pages\">\n\t\t\t<div [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\" >\n\t\t\t\t<div\n\t\t\t\t\t[class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t\t\t(click)=\"goToPage(page)\" class=\"gui-paging-page\">\n\t\t\t\t\t{{page}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-structure-paging-source-stats gui-structure-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureAlternativePagingPagesComponent.ctorParameters = function () { return [
        { type: PagingCommandService }
    ]; };
    StructureAlternativePagingPagesComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }]
    };
    return StructureAlternativePagingPagesComponent;
}());
export { StructureAlternativePagingPagesComponent };
if (false) {
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.paging;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.sourceSize;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.currentPage;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.pages;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.numberOfVisiblePages;
    /**
     * @type {?}
     * @private
     */
    StructureAlternativePagingPagesComponent.prototype.pagingCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL2FsdGVybmF0aXZlLXBhZ2luZy9wYWdlcy9zdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUdyRjtJQW1CQyxrREFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFSOUQsZUFBVSxHQUFXLENBQUMsQ0FBQztRQU12Qix5QkFBb0IsR0FBVyxDQUFDLENBQUM7SUFHakMsQ0FBQzs7Ozs7SUFFRCw4REFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw0REFBUzs7O0lBQVQ7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQy9CLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUUxRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUU7Z0JBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjthQUNEO1NBRUQ7SUFDRixDQUFDOzs7O0lBRUQsbUVBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsMkRBQVE7Ozs7SUFBUixVQUFTLFVBQWtCOztZQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCx3RUFBcUI7Ozs7SUFBckIsVUFBc0IsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFRCw2REFBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7O2dCQXpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsa2tCQUFnRTtvQkFDaEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQVBRLG9CQUFvQjs7O3lCQVUzQixLQUFLOzZCQUdMLEtBQUs7O0lBaURQLCtDQUFDO0NBQUEsQUEzREQsSUEyREM7U0F0RFksd0NBQXdDOzs7SUFFcEQsMERBQ2U7O0lBRWYsOERBQ3VCOztJQUV2QiwrREFBb0I7O0lBRXBCLHlEQUFxQjs7SUFFckIsd0VBQWlDOzs7OztJQUVyQix3RUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcXVlcnkvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBwL3BhZ2luZy9wYWdpbmctY29tbWFuZC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1wYWdlcycsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU6IG51bWJlciA9IDA7XG5cblx0Y3VycmVudFBhZ2U6IG51bWJlcjtcblxuXHRwYWdlczogQXJyYXk8bnVtYmVyPjtcblxuXHRudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyID0gMztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBQYWdpbmdDb21tYW5kU2VydmljZSkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nICYmIHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0bGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5zb3VyY2VTaXplIC8gdGhpcy5wYWdpbmcuZ2V0UGFnZVNpemUoKSk7XG5cblx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luZy5nZXRQYWdlKCk7XG5cblx0XHRcdHRoaXMucGFnZXMgPSBbXTtcblx0XHRcdGlmICh0aGlzLnBhZ2VzLmxlbmd0aCA8PSBudW1iZXJPZlBhZ2VzKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlck9mUGFnZXM7IGkrKykge1xuXHRcdFx0XHRcdHRoaXMucGFnZXMucHVzaChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdGdvVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmcuZ2V0UGFnZSgpO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuZ29Ub1BhZ2UocGFnZU51bWJlciwgY3VycmVudFBhZ2UpO1xuXHR9XG5cblx0Y2FsY3VsYXRlVmlzaWJsZVBhZ2VzKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZy5jYWxjdWxhdGVWaXNpYmxlUGFnZXModGhpcy5jdXJyZW50UGFnZSwgdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcywgcGFnZSk7XG5cdH1cblxuXHRhY3RpdmVQYWdlKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRQYWdlID09PSBwYWdlO1xuXHR9XG5cbn1cbiJdfQ==