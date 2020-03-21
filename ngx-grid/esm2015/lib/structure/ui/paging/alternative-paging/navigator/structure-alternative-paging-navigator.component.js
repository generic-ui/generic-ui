/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from '../../../../domain/paging/read/paging';
import { PagingCommandService } from '../../../../ui-api/paging/paging-command.service';
export class StructureAlternativePagingNavigatorComponent {
    /**
     * @param {?} pagingCommandService
     */
    constructor(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.calculatePrev();
        this.calculateNext();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.prevPageChanged.emit();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.nextPageChanged.emit();
    }
    /**
     * @return {?}
     */
    firstPage() {
        this.pagingCommandService.goToPage(1, this.paging.getPage());
    }
    /**
     * @return {?}
     */
    lastPage() {
        /** @type {?} */
        let numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
        this.pagingCommandService.goToPage(numberOfPages, this.paging.getPage());
    }
    /**
     * @private
     * @return {?}
     */
    calculatePrev() {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    }
    /**
     * @private
     * @return {?}
     */
    calculateNext() {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    }
}
StructureAlternativePagingNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-alternative-paging-navigator',
                template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.081\" height=\"10.661\" viewBox=\"0 0 11.081 10.661\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" transform=\"translate(-533.75 659.25)\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" transform=\"translate(-528.75 659.25)\" fill=\"none\"\n\t\t\t\t  stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-structure-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6.081\" height=\"10.661\" viewBox=\"0 0 6.081 10.661\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" transform=\"translate(5.77 10.351) rotate(180)\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-structure-paging-navigator-next\"\n\t\tgui-button>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6.081\" height=\"10.661\" viewBox=\"0 0 6.081 10.661\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" transform=\"translate(0.311 0.311)\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.081\" height=\"10.661\" viewBox=\"0 0 11.081 10.661\">\n\t\t<g  transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" transform=\"translate(-533.75 659.25)\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" transform=\"translate(-528.75 659.25)\" fill=\"none\"\n\t\t\t\t  stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n\t\t</g>\n\t</svg>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructureAlternativePagingNavigatorComponent.ctorParameters = () => [
    { type: PagingCommandService }
];
StructureAlternativePagingNavigatorComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }],
    nextPageChanged: [{ type: Output }],
    prevPageChanged: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9hbHRlcm5hdGl2ZS1wYWdpbmcvbmF2aWdhdG9yL3N0cnVjdHVyZS1hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFReEYsTUFBTSxPQUFPLDRDQUE0Qzs7OztJQWtCeEQsWUFBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFUOUQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUc5QixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsUUFBUTs7WUFDSCxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLGFBQWE7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7OztZQWhFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsOHJFQUFvRTtnQkFDcEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUFQUSxvQkFBb0I7OztxQkFVM0IsS0FBSzt5QkFHTCxLQUFLOzhCQUdMLE1BQU07OEJBR04sTUFBTTs7OztJQVRQLDhEQUNlOztJQUVmLGtFQUNtQjs7SUFFbkIsdUVBQ3FDOztJQUVyQyx1RUFDcUM7O0lBRXJDLG9FQUE4Qjs7SUFFOUIsb0VBQThCOzs7OztJQUVsQiw0RUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vcGFnaW5nL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctY29tbWFuZC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3InLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRAT3V0cHV0KClcblx0bmV4dFBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwcmV2UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJldkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmV4dERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdDb21tYW5kU2VydmljZTogUGFnaW5nQ29tbWFuZFNlcnZpY2UpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlUHJldigpO1xuXHRcdHRoaXMuY2FsY3VsYXRlTmV4dCgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmV2UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0UGFnZUNoYW5nZWQuZW1pdCgpO1xuXHR9XG5cblx0Zmlyc3RQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuZ29Ub1BhZ2UoMSwgdGhpcy5wYWdpbmcuZ2V0UGFnZSgpKTtcblx0fVxuXG5cdGxhc3RQYWdlKCk6IHZvaWQge1xuXHRcdGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnaW5nLmdldFBhZ2VTaXplKCkpO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuZ29Ub1BhZ2UobnVtYmVyT2ZQYWdlcywgdGhpcy5wYWdpbmcuZ2V0UGFnZSgpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUHJldigpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnByZXZEaXNhYmxlZCA9IHRoaXMucGFnaW5nLmlzUHJldlBhZ2VEaXNhYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVOZXh0KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnBhZ2luZyAmJiAhdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5uZXh0RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc05leHRQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG59XG4iXX0=