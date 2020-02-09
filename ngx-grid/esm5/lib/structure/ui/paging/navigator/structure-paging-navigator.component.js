/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from '../../../domain/paging/read/paging';
var StructurePagingNavigatorComponent = /** @class */ (function () {
    function StructurePagingNavigatorComponent() {
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.calculatePrev();
        this.calculateNext();
    };
    /**
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.prevPageChanged.emit();
    };
    /**
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.nextPageChanged.emit();
    };
    /**
     * @private
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.calculatePrev = /**
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
    StructurePagingNavigatorComponent.prototype.calculateNext = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    };
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
    return StructurePagingNavigatorComponent;
}());
export { StructurePagingNavigatorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9uYXZpZ2F0b3Ivc3RydWN0dXJlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1RDtJQUFBO1FBY0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQWlDL0IsQ0FBQzs7OztJQS9CQSx1REFBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxvREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxvREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8seURBQWE7Ozs7SUFBckI7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLHlEQUFhOzs7O0lBQXJCO1FBRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsK1hBQXdEO29CQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozt5QkFHQyxLQUFLOzZCQUdMLEtBQUs7a0NBR0wsTUFBTTtrQ0FHTixNQUFNOztJQXNDUix3Q0FBQztDQUFBLEFBdERELElBc0RDO1NBakRZLGlDQUFpQzs7O0lBRTdDLG1EQUNlOztJQUVmLHVEQUNtQjs7SUFFbkIsNERBQ3FDOztJQUVyQyw0REFDcUM7O0lBRXJDLHlEQUE4Qjs7SUFFOUIseURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9yZWFkL3BhZ2luZyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcGFnaW5nLW5hdmlnYXRvcicsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRAT3V0cHV0KClcblx0bmV4dFBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwcmV2UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJldkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmV4dERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVQcmV2KCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVOZXh0KCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByZXZQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5leHRQYWdlQ2hhbmdlZC5lbWl0KCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVByZXYoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMucGFnaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wcmV2RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc1ByZXZQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlTmV4dCgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcgJiYgIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubmV4dERpc2FibGVkID0gdGhpcy5wYWdpbmcuaXNOZXh0UGFnZURpc2FibGVkKCk7XG5cdH1cblxufVxuIl19