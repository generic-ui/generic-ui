/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from '../../../../feature-api/paging/read/paging';
import { StructurePagingCommandDispatcher } from '../../../../feature-api/paging/structure-paging.command-dispatcher';
var StructureAlternativePagingNavigatorComponent = /** @class */ (function () {
    function StructureAlternativePagingNavigatorComponent(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.calculatePrev();
        this.calculateNext();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.prevPageChanged.emit();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.nextPageChanged.emit();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        this.pagingCommandService.goToPage(1, this.paging.getPage());
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.lastPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
        this.pagingCommandService.goToPage(numberOfPages, this.paging.getPage());
    };
    /**
     * @private
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.calculatePrev = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    };
    /**
     * @private
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.calculateNext = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    };
    StructureAlternativePagingNavigatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-alternative-paging-navigator',
                    template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-structure-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(5.77 10.351) rotate(180)\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-structure-paging-navigator-next\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(0.311 0.311)\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureAlternativePagingNavigatorComponent.ctorParameters = function () { return [
        { type: StructurePagingCommandDispatcher }
    ]; };
    StructureAlternativePagingNavigatorComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }],
        nextPageChanged: [{ type: Output }],
        prevPageChanged: [{ type: Output }]
    };
    return StructureAlternativePagingNavigatorComponent;
}());
export { StructureAlternativePagingNavigatorComponent };
if (false) {
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.nextDisabled;
    /**
     * @type {?}
     * @private
     */
    StructureAlternativePagingNavigatorComponent.prototype.pagingCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvcGFnaW5nL2FsdGVybmF0aXZlLXBhZ2luZy9uYXZpZ2F0b3Ivc3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUd0SDtJQXVCQyxzREFBb0Isb0JBQXNEO1FBQXRELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBa0M7UUFUMUUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUc5QixDQUFDOzs7O0lBRUQsa0VBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsK0RBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsK0RBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsZ0VBQVM7OztJQUFUO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFRCwrREFBUTs7O0lBQVI7O1lBQ0ssYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVPLG9FQUFhOzs7O0lBQXJCO1FBRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxvRUFBYTs7OztJQUFyQjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDOztnQkFoRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0Q0FBNEM7b0JBQ3RELDZyRUFBb0U7b0JBQ3BFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkFQUSxnQ0FBZ0M7Ozt5QkFVdkMsS0FBSzs2QkFHTCxLQUFLO2tDQUdMLE1BQU07a0NBR04sTUFBTTs7SUFrRFIsbURBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTdEWSw0Q0FBNEM7OztJQUV4RCw4REFDZTs7SUFFZixrRUFDbUI7O0lBRW5CLHVFQUNxQzs7SUFFckMsdUVBQ3FDOztJQUVyQyxvRUFBOEI7O0lBRTlCLG9FQUE4Qjs7Ozs7SUFFbEIsNEVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS1hcGkvcGFnaW5nL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3InLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRAT3V0cHV0KClcblx0bmV4dFBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwcmV2UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJldkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmV4dERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdDb21tYW5kU2VydmljZTogU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlUHJldigpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTmV4dCgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0Zmlyc3RQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuZ29Ub1BhZ2UoMSwgdGhpcy5wYWdpbmcuZ2V0UGFnZSgpKTtcblx0fVxuXG5cdGxhc3RQYWdlKCk6IHZvaWQge1xuXHRcdGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnaW5nLmdldFBhZ2VTaXplKCkpO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuZ29Ub1BhZ2UobnVtYmVyT2ZQYWdlcywgdGhpcy5wYWdpbmcuZ2V0UGFnZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUHJldigpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnByZXZEaXNhYmxlZCA9IHRoaXMucGFnaW5nLmlzUHJldlBhZ2VEaXNhYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVOZXh0KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnBhZ2luZyAmJiAhdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5uZXh0RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc05leHRQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG59XG4iXX0=