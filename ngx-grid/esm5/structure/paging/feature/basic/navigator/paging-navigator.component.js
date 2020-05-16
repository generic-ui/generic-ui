/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Paging } from '../../../domain-api/read/paging';
var PagingNavigatorComponent = /** @class */ (function () {
    function PagingNavigatorComponent() {
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    PagingNavigatorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.calculatePrev();
        this.calculateNext();
    };
    /**
     * @return {?}
     */
    PagingNavigatorComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.prevPageChanged.emit();
    };
    /**
     * @return {?}
     */
    PagingNavigatorComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.nextPageChanged.emit();
    };
    /**
     * @private
     * @return {?}
     */
    PagingNavigatorComponent.prototype.calculatePrev = /**
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
    PagingNavigatorComponent.prototype.calculateNext = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    };
    PagingNavigatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-paging-navigator',
                    template: "<gui-button-group>\n\t<button (click)=\"prevPage()\"\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\tclass=\"gui-paging-navigator-prev\"\n\t\t\tgui-button>\n\t\tPrev\n\t</button>\n\n\t<button (click)=\"nextPage()\"\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\tclass=\"gui-paging-navigator-next\"\n\t\t\tgui-button>\n\t\tNext\n\t</button>\n</gui-button-group>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-paging-navigator]': "\"true\""
                    }
                }] }
    ];
    PagingNavigatorComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }],
        nextPageChanged: [{ type: Output }],
        prevPageChanged: [{ type: Output }]
    };
    return PagingNavigatorComponent;
}());
export { PagingNavigatorComponent };
if (false) {
    /** @type {?} */
    PagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    PagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    PagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    PagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    PagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    PagingNavigatorComponent.prototype.nextDisabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9iYXNpYy9uYXZpZ2F0b3IvcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3pEO0lBQUE7UUFrQkMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQWlDL0IsQ0FBQzs7OztJQS9CQSw4Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sZ0RBQWE7Ozs7SUFBckI7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLGdEQUFhOzs7O0lBQXJCO1FBRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7O2dCQXhERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsMldBQThDO29CQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCw4QkFBOEIsRUFBRSxVQUFRO3FCQUN4QztpQkFDRDs7O3lCQUdDLEtBQUs7NkJBR0wsS0FBSztrQ0FHTCxNQUFNO2tDQUdOLE1BQU07O0lBc0NSLCtCQUFDO0NBQUEsQUExREQsSUEwREM7U0FqRFksd0JBQXdCOzs7SUFFcEMsMENBQ2U7O0lBRWYsOENBQ21COztJQUVuQixtREFDcUM7O0lBRXJDLG1EQUNxQzs7SUFFckMsZ0RBQThCOztJQUU5QixnREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3BhZ2luZyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXBhZ2luZy1uYXZpZ2F0b3InLFxuXHR0ZW1wbGF0ZVVybDogYHBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXBhZ2luZy1uYXZpZ2F0b3JdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0QElucHV0KClcblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdEBPdXRwdXQoKVxuXHRuZXh0UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHByZXZQYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcmV2RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRuZXh0RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZVByZXYoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZU5leHQoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucHJldlBhZ2VDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dFBhZ2VDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUHJldigpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnByZXZEaXNhYmxlZCA9IHRoaXMucGFnaW5nLmlzUHJldlBhZ2VEaXNhYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVOZXh0KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnBhZ2luZyAmJiAhdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5uZXh0RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc05leHRQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG59XG4iXX0=