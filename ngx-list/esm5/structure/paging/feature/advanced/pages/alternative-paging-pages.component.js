/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Paging } from '../../../core/api/read/paging';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
var AlternativePagingPagesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AlternativePagingPagesComponent, _super);
    function AlternativePagingPagesComponent(changeDetectorRef, elRef, pagingCommandService) {
        var _this = _super.call(this, changeDetectorRef, elRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.pagingCommandService = pagingCommandService;
        _this.sourceSize = 0;
        _this.numberOfVisiblePages = 3;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AlternativePagingPagesComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculate();
    };
    /**
     * @return {?}
     */
    AlternativePagingPagesComponent.prototype.calculate = /**
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
    AlternativePagingPagesComponent.prototype.isSourceNotEmpty = /**
     * @return {?}
     */
    function () {
        return this.sourceSize > 0;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    AlternativePagingPagesComponent.prototype.goToPage = /**
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
    AlternativePagingPagesComponent.prototype.calculateVisiblePages = /**
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
    AlternativePagingPagesComponent.prototype.activePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.currentPage === page;
    };
    /**
     * @protected
     * @return {?}
     */
    AlternativePagingPagesComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-paging-alternative-pages';
    };
    AlternativePagingPagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-paging-alternative-pages][paging]',
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t<div *ngFor=\"let page of pages\">\n\t\t<div [class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\"\n\t\t\t class=\"relative\">\n\t\t\t<div (click)=\"goToPage(page)\"\n\t\t\t\t class=\"gui-paging-page gui-select-none gui-cursor-pointer gui-py-0 gui-px-6 gui-font-base\">\n\t\t\t\t{{page}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-paging-source-stats gui-paging-no-items\">\n\t\t{{'pagingNoItems' | guiTranslate}}\n\t</span>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    AlternativePagingPagesComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: PagingCommandInvoker }
    ]; };
    AlternativePagingPagesComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }]
    };
    return AlternativePagingPagesComponent;
}(SmartComponent));
export { AlternativePagingPagesComponent };
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
    AlternativePagingPagesComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    AlternativePagingPagesComponent.prototype.pagingCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUdyRjtJQU1xRCwyREFBYztJQWNsRSx5Q0FBNkIsaUJBQW9DLEVBQzlELEtBQWlCLEVBQ1Qsb0JBQTBDO1FBRnJELFlBR0Msa0JBQU0saUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQy9CO1FBSjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFdEQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVZyRCxnQkFBVSxHQUFZLENBQUMsQ0FBQztRQU14QiwwQkFBb0IsR0FBVyxDQUFDLENBQUM7O0lBTWpDLENBQUM7Ozs7O0lBRUQscURBQVc7Ozs7SUFBWCxVQUFZLE9BQW1EO1FBQzlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsbURBQVM7OztJQUFUO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2dCQUMvQixhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksYUFBYSxFQUFFO2dCQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7YUFDRDtTQUVEO0lBQ0YsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGtEQUFROzs7O0lBQVIsVUFBUyxVQUFrQjs7WUFDcEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsK0RBQXFCOzs7O0lBQXJCLFVBQXNCLElBQVk7UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVTLHlEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDOztnQkFqRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQ0FBMkM7b0JBQ3JELHlvQkFBd0Q7b0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBYmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQUdqRSxvQkFBb0I7Ozt5QkFhM0IsS0FBSzs2QkFHTCxLQUFLOztJQXdEUCxzQ0FBQztDQUFBLEFBbkVELENBTXFELGNBQWMsR0E2RGxFO1NBN0RZLCtCQUErQjs7O0lBRTNDLGlEQUNlOztJQUVmLHFEQUN3Qjs7SUFFeEIsc0RBQW9COztJQUVwQixnREFBcUI7O0lBRXJCLCtEQUFpQzs7Ozs7SUFFckIsNERBQXFEOzs7OztJQUU5RCwrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzXVtwYWdpbmddJyxcblx0dGVtcGxhdGVVcmw6IGAuL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZT86IG51bWJlciA9IDA7XG5cblx0Y3VycmVudFBhZ2U6IG51bWJlcjtcblxuXHRwYWdlczogQXJyYXk8bnVtYmVyPjtcblxuXHRudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyID0gMztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50Pikge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nICYmIHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0bGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5zb3VyY2VTaXplIC8gdGhpcy5wYWdpbmcuZ2V0UGFnZVNpemUoKSk7XG5cblx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luZy5nZXRQYWdlKCk7XG5cblx0XHRcdHRoaXMucGFnZXMgPSBbXTtcblx0XHRcdGlmICh0aGlzLnBhZ2VzLmxlbmd0aCA8PSBudW1iZXJPZlBhZ2VzKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlck9mUGFnZXM7IGkrKykge1xuXHRcdFx0XHRcdHRoaXMucGFnZXMucHVzaChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0aXNTb3VyY2VOb3RFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplID4gMDtcblx0fVxuXG5cdGdvVG9QYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmcuZ2V0UGFnZSgpO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuZ29Ub1BhZ2UocGFnZU51bWJlciwgY3VycmVudFBhZ2UpO1xuXHR9XG5cblx0Y2FsY3VsYXRlVmlzaWJsZVBhZ2VzKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZy5jYWxjdWxhdGVWaXNpYmxlUGFnZXModGhpcy5jdXJyZW50UGFnZSwgdGhpcy5udW1iZXJPZlZpc2libGVQYWdlcywgcGFnZSk7XG5cdH1cblxuXHRhY3RpdmVQYWdlKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRQYWdlID09PSBwYWdlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1wYWdlcyc7XG5cdH1cblxufVxuIl19