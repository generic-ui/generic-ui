/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Paging } from '../../../../domain/paging/read/paging';
import { PagingCommandService } from '../../../../ui-api/paging/paging-command.service';
export class StructureAlternativePagingPagesComponent {
    /**
     * @param {?} pagingCommandService
     */
    constructor(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.sourceSize = 0;
        this.numberOfVisiblePages = 3;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.calculate();
    }
    /**
     * @return {?}
     */
    calculate() {
        if (this.paging && this.sourceSize) {
            /** @type {?} */
            let numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
            this.currentPage = this.paging.getPage();
            this.pages = [];
            if (this.pages.length <= numberOfPages) {
                for (let i = 1; i <= numberOfPages; i++) {
                    this.pages.push(i);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    isSourceNotEmpty() {
        return this.sourceSize > 0;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    goToPage(pageNumber) {
        /** @type {?} */
        const currentPage = this.paging.getPage();
        this.pagingCommandService.goToPage(pageNumber, currentPage);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    calculateVisiblePages(page) {
        return this.paging.calculateVisiblePages(this.currentPage, this.numberOfVisiblePages, page);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    activePage(page) {
        return this.currentPage === page;
    }
}
StructureAlternativePagingPagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-alternative-paging-pages',
                template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\">\n\t\t\t<div\n\t\t\t\t(click)=\"goToPage(page)\"\n\t\t\t\t[class.gui-paging-active-page]=\"activePage(page)\" class=\"gui-paging-page\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-structure-paging-source-stats gui-structure-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructureAlternativePagingPagesComponent.ctorParameters = () => [
    { type: PagingCommandService }
];
StructureAlternativePagingPagesComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL2FsdGVybmF0aXZlLXBhZ2luZy9wYWdlcy9zdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQVF4RixNQUFNLE9BQU8sd0NBQXdDOzs7O0lBY3BELFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUjlELGVBQVUsR0FBVyxDQUFDLENBQUM7UUFNdkIseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO0lBR2pDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOztnQkFDL0IsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLGFBQWEsRUFBRTtnQkFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25CO2FBQ0Q7U0FFRDtJQUNGLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQWtCOztjQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxJQUFZO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7O1lBekRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCwraUJBQWdFO2dCQUNoRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQVBRLG9CQUFvQjs7O3FCQVUzQixLQUFLO3lCQUdMLEtBQUs7Ozs7SUFITiwwREFDZTs7SUFFZiw4REFDdUI7O0lBRXZCLCtEQUFvQjs7SUFFcEIseURBQXFCOztJQUVyQix3RUFBaUM7Ozs7O0lBRXJCLHdFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLWNvbW1hbmQuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHRzb3VyY2VTaXplOiBudW1iZXIgPSAwO1xuXG5cdGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cblx0cGFnZXM6IEFycmF5PG51bWJlcj47XG5cblx0bnVtYmVyT2ZWaXNpYmxlUGFnZXM6IG51bWJlciA9IDM7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdDb21tYW5kU2VydmljZTogUGFnaW5nQ29tbWFuZFNlcnZpY2UpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBhZ2luZyAmJiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnaW5nLmdldFBhZ2VTaXplKCkpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmcuZ2V0UGFnZSgpO1xuXG5cdFx0XHR0aGlzLnBhZ2VzID0gW107XG5cdFx0XHRpZiAodGhpcy5wYWdlcy5sZW5ndGggPD0gbnVtYmVyT2ZQYWdlcykge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZlBhZ2VzOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VzLnB1c2goaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdGlzU291cmNlTm90RW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxuXHRnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcblx0XHRjb25zdCBjdXJyZW50UGFnZSA9IHRoaXMucGFnaW5nLmdldFBhZ2UoKTtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLmdvVG9QYWdlKHBhZ2VOdW1iZXIsIGN1cnJlbnRQYWdlKTtcblx0fVxuXG5cdGNhbGN1bGF0ZVZpc2libGVQYWdlcyhwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmcuY2FsY3VsYXRlVmlzaWJsZVBhZ2VzKHRoaXMuY3VycmVudFBhZ2UsIHRoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXMsIHBhZ2UpO1xuXHR9XG5cblx0YWN0aXZlUGFnZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UGFnZSA9PT0gcGFnZTtcblx0fVxuXG59XG4iXX0=