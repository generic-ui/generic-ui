/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
var AbstractSpinner = /** @class */ (function () {
    function AbstractSpinner(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.width = 5;
        this.diameter = 90;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractSpinner.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculateCircle();
        if (changes.primary) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass('gui-secondary');
            }
            else {
                this.removeClass('gui-secondary');
            }
        }
    };
    /**
     * @return {?}
     */
    AbstractSpinner.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateCircle();
    };
    /**
     * @private
     * @return {?}
     */
    AbstractSpinner.prototype.calculateCircle = /**
     * @private
     * @return {?}
     */
    function () {
        this.circumference = this.calculateCircumference(this.diameter);
        this.r = this.calculateR(this.diameter);
        this.croppedCircle = this.calculateDashes(this.circumference);
        this.circleSize = this.calculateSize(this.diameter, this.width);
    };
    /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    AbstractSpinner.prototype.calculateCircumference = /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    function (diameter) {
        return diameter * Math.PI;
    };
    /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    AbstractSpinner.prototype.calculateR = /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    function (diameter) {
        return diameter / 2;
    };
    /**
     * @private
     * @param {?} circumference
     * @return {?}
     */
    AbstractSpinner.prototype.calculateDashes = /**
     * @private
     * @param {?} circumference
     * @return {?}
     */
    function (circumference) {
        return circumference * 0.25;
    };
    /**
     * @private
     * @param {?} diameter
     * @param {?} width
     * @return {?}
     */
    AbstractSpinner.prototype.calculateSize = /**
     * @private
     * @param {?} diameter
     * @param {?} width
     * @return {?}
     */
    function (diameter, width) {
        return diameter + width;
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    AbstractSpinner.prototype.addClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    AbstractSpinner.prototype.removeClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    AbstractSpinner.propDecorators = {
        width: [{ type: Input }],
        diameter: [{ type: Input }],
        primary: [{ type: Input }],
        secondary: [{ type: Input }]
    };
    return AbstractSpinner;
}());
export { AbstractSpinner };
if (false) {
    /** @type {?} */
    AbstractSpinner.prototype.width;
    /** @type {?} */
    AbstractSpinner.prototype.diameter;
    /** @type {?} */
    AbstractSpinner.prototype.primary;
    /** @type {?} */
    AbstractSpinner.prototype.secondary;
    /** @type {?} */
    AbstractSpinner.prototype.r;
    /** @type {?} */
    AbstractSpinner.prototype.circumference;
    /** @type {?} */
    AbstractSpinner.prototype.croppedCircle;
    /** @type {?} */
    AbstractSpinner.prototype.circleSize;
    /**
     * @type {?}
     * @protected
     */
    AbstractSpinner.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    AbstractSpinner.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImJ1dHRvbnMtaW5kaWNhdG9ycy9zcGlubmVycy9hYnN0cmFjdC1zcGlubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUUvRjtJQXNCQyx5QkFBZ0MsVUFBc0IsRUFDckMsUUFBbUI7UUFESixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwQnBDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQWtCdEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDN0I7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoQztTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8seUNBQWU7Ozs7SUFBdkI7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTyxnREFBc0I7Ozs7O0lBQTlCLFVBQStCLFFBQWdCO1FBQzlDLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sb0NBQVU7Ozs7O0lBQWxCLFVBQW1CLFFBQWdCO1FBQ2xDLE9BQU8sUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyx5Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsYUFBcUI7UUFDNUMsT0FBTyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7SUFFTyx1Q0FBYTs7Ozs7O0lBQXJCLFVBQXNCLFFBQWdCLEVBQUUsS0FBYTtRQUNwRCxPQUFPLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRVMsa0NBQVE7Ozs7O0lBQWxCLFVBQW1CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVTLHFDQUFXOzs7OztJQUFyQixVQUFzQixTQUFpQjtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDOzt3QkE3RUEsS0FBSzsyQkFHTCxLQUFLOzBCQUdMLEtBQUs7NEJBR0wsS0FBSzs7SUFxRVAsc0JBQUM7Q0FBQSxBQWhGRCxJQWdGQztTQWhGcUIsZUFBZTs7O0lBRXBDLGdDQUNrQjs7SUFFbEIsbUNBQ3NCOztJQUV0QixrQ0FDaUI7O0lBRWpCLG9DQUNtQjs7SUFFbkIsNEJBQVU7O0lBRVYsd0NBQXNCOztJQUV0Qix3Q0FBc0I7O0lBRXRCLHFDQUFtQjs7Ozs7SUFFRyxxQ0FBZ0M7Ozs7O0lBQy9DLG1DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNwaW5uZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlciA9IDU7XG5cblx0QElucHV0KClcblx0ZGlhbWV0ZXI6IG51bWJlciA9IDkwO1xuXG5cdEBJbnB1dCgpXG5cdHByaW1hcnk6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2Vjb25kYXJ5OiBib29sZWFuO1xuXG5cdHI6IG51bWJlcjtcblxuXHRjaXJjdW1mZXJlbmNlOiBudW1iZXI7XG5cblx0Y3JvcHBlZENpcmNsZTogbnVtYmVyO1xuXG5cdGNpcmNsZVNpemU6IG51bWJlcjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDaXJjbGUoKTtcblxuXHRcdGlmIChjaGFuZ2VzLnByaW1hcnkpIHtcblx0XHRcdGlmICh0aGlzLnByaW1hcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXByaW1hcnknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1wcmltYXJ5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2Vjb25kYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5zZWNvbmRhcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ2lyY2xlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNpcmNsZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNpcmN1bWZlcmVuY2UgPSB0aGlzLmNhbGN1bGF0ZUNpcmN1bWZlcmVuY2UodGhpcy5kaWFtZXRlcik7XG5cdFx0dGhpcy5yID0gdGhpcy5jYWxjdWxhdGVSKHRoaXMuZGlhbWV0ZXIpO1xuXHRcdHRoaXMuY3JvcHBlZENpcmNsZSA9IHRoaXMuY2FsY3VsYXRlRGFzaGVzKHRoaXMuY2lyY3VtZmVyZW5jZSk7XG5cdFx0dGhpcy5jaXJjbGVTaXplID0gdGhpcy5jYWxjdWxhdGVTaXplKHRoaXMuZGlhbWV0ZXIsIHRoaXMud2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDaXJjdW1mZXJlbmNlKGRpYW1ldGVyOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciAqIE1hdGguUEk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVIoZGlhbWV0ZXI6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRpYW1ldGVyIC8gMjtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRGFzaGVzKGNpcmN1bWZlcmVuY2U6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGNpcmN1bWZlcmVuY2UgKiAwLjI1O1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTaXplKGRpYW1ldGVyOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciArIHdpZHRoO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFkZENsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==