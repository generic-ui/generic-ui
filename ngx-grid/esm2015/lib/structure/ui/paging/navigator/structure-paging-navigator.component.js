/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from '../../../read/paging/paging';
export class StructurePagingNavigatorComponent {
    constructor() {
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
StructurePagingNavigatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-paging-navigator',
                template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-structure-paging-navigator-prev\"\n\t\t\tgui-button>\n\t\tPrev\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-structure-paging-navigator-next\"\n\t\t\tgui-button>\n\t\tNext\n\t</button>\n</gui-button-group>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
StructurePagingNavigatorComponent.propDecorators = {
    paging: [{ type: Input }],
    sourceSize: [{ type: Input }],
    nextPageChanged: [{ type: Output }],
    prevPageChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.nextDisabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9uYXZpZ2F0b3Ivc3RydWN0dXJlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU9yRCxNQUFNLE9BQU8saUNBQWlDO0lBTDlDO1FBY0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQWlDL0IsQ0FBQzs7OztJQS9CQSxXQUFXO1FBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLGFBQWE7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7OztZQXBERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsK1hBQXdEO2dCQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7O3FCQUdDLEtBQUs7eUJBR0wsS0FBSzs4QkFHTCxNQUFNOzhCQUdOLE1BQU07Ozs7SUFUUCxtREFDZTs7SUFFZix1REFDbUI7O0lBRW5CLDREQUNxQzs7SUFFckMsNERBQ3FDOztJQUVyQyx5REFBOEI7O0lBRTlCLHlEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcGFnaW5nLW5hdmlnYXRvcicsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRAT3V0cHV0KClcblx0bmV4dFBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwcmV2UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJldkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmV4dERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVQcmV2KCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVOZXh0KCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5leHRQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVByZXYoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMucGFnaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wcmV2RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc1ByZXZQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTmV4dCgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcgJiYgIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubmV4dERpc2FibGVkID0gdGhpcy5wYWdpbmcuaXNOZXh0UGFnZURpc2FibGVkKCk7XG5cdH1cblxufVxuIl19