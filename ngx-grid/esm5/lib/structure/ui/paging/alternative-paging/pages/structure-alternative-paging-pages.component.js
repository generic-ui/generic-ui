/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Paging } from '../../../../domain/paging/read/paging';
import { PagingCommandService } from '../../../../ui-api/paging/paging-command.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL2FsdGVybmF0aXZlLXBhZ2luZy9wYWdlcy9zdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUd4RjtJQW1CQyxrREFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFSOUQsZUFBVSxHQUFXLENBQUMsQ0FBQztRQU12Qix5QkFBb0IsR0FBVyxDQUFDLENBQUM7SUFHakMsQ0FBQzs7Ozs7SUFFRCw4REFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw0REFBUzs7O0lBQVQ7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQy9CLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUUxRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUU7Z0JBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjthQUNEO1NBRUQ7SUFDRixDQUFDOzs7O0lBRUQsbUVBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsMkRBQVE7Ozs7SUFBUixVQUFTLFVBQWtCOztZQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCx3RUFBcUI7Ozs7SUFBckIsVUFBc0IsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFRCw2REFBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7O2dCQXpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsa2tCQUFnRTtvQkFDaEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQVBRLG9CQUFvQjs7O3lCQVUzQixLQUFLOzZCQUdMLEtBQUs7O0lBaURQLCtDQUFDO0NBQUEsQUEzREQsSUEyREM7U0F0RFksd0NBQXdDOzs7SUFFcEQsMERBQ2U7O0lBRWYsOERBQ3VCOztJQUV2QiwrREFBb0I7O0lBRXBCLHlEQUFxQjs7SUFFckIsd0VBQWlDOzs7OztJQUVyQix3RUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvcGFnaW5nL3BhZ2luZy1jb21tYW5kLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZTogbnVtYmVyID0gMDtcblxuXHRjdXJyZW50UGFnZTogbnVtYmVyO1xuXG5cdHBhZ2VzOiBBcnJheTxudW1iZXI+O1xuXG5cdG51bWJlck9mVmlzaWJsZVBhZ2VzOiBudW1iZXIgPSAzO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGUoKTtcblx0fVxuXG5cdGNhbGN1bGF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5wYWdpbmcgJiYgdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnaW5nLmdldFBhZ2UoKTtcblxuXHRcdFx0dGhpcy5wYWdlcyA9IFtdO1xuXHRcdFx0aWYgKHRoaXMucGFnZXMubGVuZ3RoIDw9IG51bWJlck9mUGFnZXMpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZQYWdlczsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlcy5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRpc1NvdXJjZU5vdEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luZy5nZXRQYWdlKCk7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5nb1RvUGFnZShwYWdlTnVtYmVyLCBjdXJyZW50UGFnZSk7XG5cdH1cblxuXHRjYWxjdWxhdGVWaXNpYmxlUGFnZXMocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nLmNhbGN1bGF0ZVZpc2libGVQYWdlcyh0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLm51bWJlck9mVmlzaWJsZVBhZ2VzLCBwYWdlKTtcblx0fVxuXG5cdGFjdGl2ZVBhZ2UocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgPT09IHBhZ2U7XG5cdH1cblxufVxuIl19