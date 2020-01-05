/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from '../../../../domain/paging/read/paging';
import { PagingCommandService } from '../../../../ui-api/paging/paging-command.service';
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
                    template: "<button gui-button\n\t\t[disabled]=\"prevDisabled\"\n\t\t(click)=\"firstPage()\">\n\t<<\n</button>\n\n<button gui-button\n\t\t[disabled]=\"prevDisabled\"\n\t\t(click)=\"prevPage()\"\n\t\tclass=\"gui-structure-paging-navigator-prev\">\n\t< Prev\n</button>\n\n<ng-content></ng-content>\n\n<button gui-button\n\t\t[disabled]=\"nextDisabled\"\n\t\t(click)=\"nextPage()\"\n\t\tclass=\"gui-structure-paging-navigator-next\">\n\tNext >\n</button>\n\n<button gui-button\n\t\t[disabled]=\"nextDisabled\"\n\t\t(click)=\"lastPage()\">\n\t>>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureAlternativePagingNavigatorComponent.ctorParameters = function () { return [
        { type: PagingCommandService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9hbHRlcm5hdGl2ZS1wYWdpbmcvbmF2aWdhdG9yL3N0cnVjdHVyZS1hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHeEY7SUF1QkMsc0RBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVDlELG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFHOUIsQ0FBQzs7OztJQUVELGtFQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELCtEQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELCtEQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGdFQUFTOzs7SUFBVDtRQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsK0RBQVE7OztJQUFSOztZQUNLLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFTyxvRUFBYTs7OztJQUFyQjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU8sb0VBQWE7Ozs7SUFBckI7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Z0JBaEVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNENBQTRDO29CQUN0RCwwaUJBQW9FO29CQUNwRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBUFEsb0JBQW9COzs7eUJBVTNCLEtBQUs7NkJBR0wsS0FBSztrQ0FHTCxNQUFNO2tDQUdOLE1BQU07O0lBa0RSLG1EQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E3RFksNENBQTRDOzs7SUFFeEQsOERBQ2U7O0lBRWYsa0VBQ21COztJQUVuQix1RUFDcUM7O0lBRXJDLHVFQUNxQzs7SUFFckMsb0VBQThCOztJQUU5QixvRUFBOEI7Ozs7O0lBRWxCLDRFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvcGFnaW5nL3BhZ2luZy1jb21tYW5kLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvcicsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLWFsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdEBPdXRwdXQoKVxuXHRuZXh0UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHByZXZQYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcmV2RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRuZXh0RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBQYWdpbmdDb21tYW5kU2VydmljZSkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVQcmV2KCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVOZXh0KCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5leHRQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRmaXJzdFBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5nb1RvUGFnZSgxLCB0aGlzLnBhZ2luZy5nZXRQYWdlKCkpO1xuXHR9XG5cblx0bGFzdFBhZ2UoKTogdm9pZCB7XG5cdFx0bGV0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5zb3VyY2VTaXplIC8gdGhpcy5wYWdpbmcuZ2V0UGFnZVNpemUoKSk7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5nb1RvUGFnZShudW1iZXJPZlBhZ2VzLCB0aGlzLnBhZ2luZy5nZXRQYWdlKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVQcmV2KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnBhZ2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucHJldkRpc2FibGVkID0gdGhpcy5wYWdpbmcuaXNQcmV2UGFnZURpc2FibGVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZU5leHQoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMucGFnaW5nICYmICF0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLm5leHREaXNhYmxlZCA9IHRoaXMucGFnaW5nLmlzTmV4dFBhZ2VEaXNhYmxlZCgpO1xuXHR9XG5cbn1cbiJdfQ==