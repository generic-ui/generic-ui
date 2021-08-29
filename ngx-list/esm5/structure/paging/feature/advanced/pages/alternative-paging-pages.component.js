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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLXBhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL2FkdmFuY2VkL3BhZ2VzL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUdyRjtJQU1xRCwyREFBYztJQWNsRSx5Q0FBNkIsaUJBQW9DLEVBQzlELEtBQWlCLEVBQ1Qsb0JBQTBDO1FBRnJELFlBR0Msa0JBQU0saUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQy9CO1FBSjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFdEQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVZyRCxnQkFBVSxHQUFZLENBQUMsQ0FBQztRQU14QiwwQkFBb0IsR0FBVyxDQUFDLENBQUM7O0lBTWpDLENBQUM7Ozs7O0lBRUQscURBQVc7Ozs7SUFBWCxVQUFZLE9BQW1EO1FBQzlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsbURBQVM7OztJQUFUO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2dCQUM3QixhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFNUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksYUFBYSxFQUFFO2dCQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7YUFDRDtTQUVEO0lBQ0YsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGtEQUFROzs7O0lBQVIsVUFBUyxVQUFrQjs7WUFDcEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsK0RBQXFCOzs7O0lBQXJCLFVBQXNCLElBQVk7UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVTLHlEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDOztnQkFqRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQ0FBMkM7b0JBQ3JELHlvQkFBd0Q7b0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBYmlDLGlCQUFpQjtnQkFBYSxVQUFVO2dCQUdqRSxvQkFBb0I7Ozt5QkFhM0IsS0FBSzs2QkFHTCxLQUFLOztJQXdEUCxzQ0FBQztDQUFBLEFBbkVELENBTXFELGNBQWMsR0E2RGxFO1NBN0RZLCtCQUErQjs7O0lBRTNDLGlEQUNlOztJQUVmLHFEQUN3Qjs7SUFFeEIsc0RBQW9COztJQUVwQixnREFBcUI7O0lBRXJCLCtEQUFpQzs7Ozs7SUFFckIsNERBQXFEOzs7OztJQUU5RCwrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzXVtwYWdpbmddJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FsdGVybmF0aXZlLXBhZ2luZy1wYWdlcy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlUGFnaW5nUGFnZXNDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZT86IG51bWJlciA9IDA7XG5cblx0Y3VycmVudFBhZ2U6IG51bWJlcjtcblxuXHRwYWdlczogQXJyYXk8bnVtYmVyPjtcblxuXHRudW1iZXJPZlZpc2libGVQYWdlczogbnVtYmVyID0gMztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50Pikge1xuXHRcdHRoaXMuY2FsY3VsYXRlKCk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucGFnaW5nICYmIHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0Y29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNvdXJjZVNpemUgLyB0aGlzLnBhZ2luZy5nZXRQYWdlU2l6ZSgpKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHRoaXMucGFnaW5nLmdldFBhZ2UoKTtcblxuXHRcdFx0dGhpcy5wYWdlcyA9IFtdO1xuXHRcdFx0aWYgKHRoaXMucGFnZXMubGVuZ3RoIDw9IG51bWJlck9mUGFnZXMpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZQYWdlczsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlcy5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRpc1NvdXJjZU5vdEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemUgPiAwO1xuXHR9XG5cblx0Z29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2luZy5nZXRQYWdlKCk7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5nb1RvUGFnZShwYWdlTnVtYmVyLCBjdXJyZW50UGFnZSk7XG5cdH1cblxuXHRjYWxjdWxhdGVWaXNpYmxlUGFnZXMocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nLmNhbGN1bGF0ZVZpc2libGVQYWdlcyh0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLm51bWJlck9mVmlzaWJsZVBhZ2VzLCBwYWdlKTtcblx0fVxuXG5cdGFjdGl2ZVBhZ2UocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgPT09IHBhZ2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nLWFsdGVybmF0aXZlLXBhZ2VzJztcblx0fVxuXG59XG4iXX0=