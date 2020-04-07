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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImdlbmVyYWwvc3Bpbm5lcnMvYWJzdHJhY3Qtc3Bpbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7Ozs7QUFFL0Y7SUFzQkMseUJBQWdDLFVBQXNCLEVBQ3JDLFFBQW1CO1FBREosZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBcEJwQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFrQnRCLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEM7U0FDRDtRQUVELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVPLHlDQUFlOzs7O0lBQXZCO1FBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRU8sZ0RBQXNCOzs7OztJQUE5QixVQUErQixRQUFnQjtRQUM5QyxPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLG9DQUFVOzs7OztJQUFsQixVQUFtQixRQUFnQjtRQUNsQyxPQUFPLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8seUNBQWU7Ozs7O0lBQXZCLFVBQXdCLGFBQXFCO1FBQzVDLE9BQU8sYUFBYSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDOzs7Ozs7O0lBRU8sdUNBQWE7Ozs7OztJQUFyQixVQUFzQixRQUFnQixFQUFFLEtBQWE7UUFDcEQsT0FBTyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVTLGtDQUFROzs7OztJQUFsQixVQUFtQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFUyxxQ0FBVzs7Ozs7SUFBckIsVUFBc0IsU0FBaUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7d0JBN0VBLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxLQUFLOzRCQUdMLEtBQUs7O0lBcUVQLHNCQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0FoRnFCLGVBQWU7OztJQUVwQyxnQ0FDa0I7O0lBRWxCLG1DQUNzQjs7SUFFdEIsa0NBQ2lCOztJQUVqQixvQ0FDbUI7O0lBRW5CLDRCQUFVOztJQUVWLHdDQUFzQjs7SUFFdEIsd0NBQXNCOztJQUV0QixxQ0FBbUI7Ozs7O0lBRUcscUNBQWdDOzs7OztJQUMvQyxtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTcGlubmVyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXIgPSA1O1xuXG5cdEBJbnB1dCgpXG5cdGRpYW1ldGVyOiBudW1iZXIgPSA5MDtcblxuXHRASW5wdXQoKVxuXHRwcmltYXJ5OiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNlY29uZGFyeTogYm9vbGVhbjtcblxuXHRyOiBudW1iZXI7XG5cblx0Y2lyY3VtZmVyZW5jZTogbnVtYmVyO1xuXG5cdGNyb3BwZWRDaXJjbGU6IG51bWJlcjtcblxuXHRjaXJjbGVTaXplOiBudW1iZXI7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHRoaXMuY2FsY3VsYXRlQ2lyY2xlKCk7XG5cblx0XHRpZiAoY2hhbmdlcy5wcmltYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmltYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1wcmltYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktcHJpbWFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnNlY29uZGFyeSkge1xuXHRcdFx0aWYgKHRoaXMuc2Vjb25kYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1zZWNvbmRhcnknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2d1aS1zZWNvbmRhcnknKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNpcmNsZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVDaXJjbGUoKTogdm9pZCB7XG5cdFx0dGhpcy5jaXJjdW1mZXJlbmNlID0gdGhpcy5jYWxjdWxhdGVDaXJjdW1mZXJlbmNlKHRoaXMuZGlhbWV0ZXIpO1xuXHRcdHRoaXMuciA9IHRoaXMuY2FsY3VsYXRlUih0aGlzLmRpYW1ldGVyKTtcblx0XHR0aGlzLmNyb3BwZWRDaXJjbGUgPSB0aGlzLmNhbGN1bGF0ZURhc2hlcyh0aGlzLmNpcmN1bWZlcmVuY2UpO1xuXHRcdHRoaXMuY2lyY2xlU2l6ZSA9IHRoaXMuY2FsY3VsYXRlU2l6ZSh0aGlzLmRpYW1ldGVyLCB0aGlzLndpZHRoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZShkaWFtZXRlcjogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGlhbWV0ZXIgKiBNYXRoLlBJO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSKGRpYW1ldGVyOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBkaWFtZXRlciAvIDI7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZURhc2hlcyhjaXJjdW1mZXJlbmNlOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBjaXJjdW1mZXJlbmNlICogMC4yNTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU2l6ZShkaWFtZXRlcjogbnVtYmVyLCB3aWR0aDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGlhbWV0ZXIgKyB3aWR0aDtcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG59XG4iXX0=