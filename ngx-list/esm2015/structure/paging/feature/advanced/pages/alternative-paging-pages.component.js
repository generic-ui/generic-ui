/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Paging } from '../../../domain-api/read/paging';
import { PagingCommandInvoker } from '../../../domain-api/paging.command-invoker';
export class AlternativePagingPagesComponent {
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
AlternativePagingPagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-alternative-paging-pages',
                template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\">\n\t\t\t<div\n\t\t\t\t\t(click)=\"goToPage(page)\"\n\t\t\t\t\tclass=\"gui-paging-page\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-alternative-paging-pages]': `"true"`
                }
            }] }
];
/** @nocollapse */
AlternativePagingPagesComponent.ctorParameters = () => [
    { type: PagingCommandInvoker }
];
AlternativePagingPagesComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.paging;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.sourceSize;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.currentPage;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.pages;
    /** @type {?} */
    AlternativePagingPagesComponent.prototype.numberOfVisiblePages;
    /**
     * @type {?}
     * @private
     */
    AlternativePagingPagesComponent.prototype.pagingCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFZbEYsTUFBTSxPQUFPLCtCQUErQjs7OztJQWMzQyxZQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVI5RCxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBTXZCLHlCQUFvQixHQUFXLENBQUMsQ0FBQztJQUdqQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQy9CLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUUxRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUU7Z0JBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjthQUNEO1NBRUQ7SUFDRixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQjs7Y0FDcEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7OztZQTdERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsdWlCQUFzRDtnQkFDdEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsc0NBQXNDLEVBQUUsUUFBUTtpQkFDaEQ7YUFDRDs7OztZQVhRLG9CQUFvQjs7O3FCQWMzQixLQUFLO3lCQUdMLEtBQUs7Ozs7SUFITixpREFDZTs7SUFFZixxREFDdUI7O0lBRXZCLHNEQUFvQjs7SUFFcEIsZ0RBQXFCOztJQUVyQiwrREFBaUM7Ozs7O0lBRXJCLCtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMnLFxuXHR0ZW1wbGF0ZVVybDogYGFsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzXSc6IGBcInRydWVcImBcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRASW5wdXQoKVxuXHRzb3VyY2VTaXplOiBudW1iZXIgPSAwO1xuXG5cdGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cblx0cGFnZXM6IEFycmF5PG51bWJlcj47XG5cblx0bnVtYmVyT2ZWaXNpYmxlUGFnZXM6IG51bWJlciA9IDM7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdDb21tYW5kU2VydmljZTogUGFnaW5nQ29tbWFuZEludm9rZXIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZSgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnBhZ2luZyAmJiB0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnaW5nLmdldFBhZ2VTaXplKCkpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmcuZ2V0UGFnZSgpO1xuXG5cdFx0XHR0aGlzLnBhZ2VzID0gW107XG5cdFx0XHRpZiAodGhpcy5wYWdlcy5sZW5ndGggPD0gbnVtYmVyT2ZQYWdlcykge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZlBhZ2VzOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VzLnB1c2goaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdGlzU291cmNlTm90RW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxuXHRnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcblx0XHRjb25zdCBjdXJyZW50UGFnZSA9IHRoaXMucGFnaW5nLmdldFBhZ2UoKTtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLmdvVG9QYWdlKHBhZ2VOdW1iZXIsIGN1cnJlbnRQYWdlKTtcblx0fVxuXG5cdGNhbGN1bGF0ZVZpc2libGVQYWdlcyhwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmcuY2FsY3VsYXRlVmlzaWJsZVBhZ2VzKHRoaXMuY3VycmVudFBhZ2UsIHRoaXMubnVtYmVyT2ZWaXNpYmxlUGFnZXMsIHBhZ2UpO1xuXHR9XG5cblx0YWN0aXZlUGFnZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UGFnZSA9PT0gcGFnZTtcblx0fVxuXG59XG4iXX0=