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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbInNwaW5uZXJzL2Fic3RyYWN0LXNwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRS9GO0lBc0JDLHlCQUFnQyxVQUFzQixFQUNyQyxRQUFtQjtRQURKLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXBCcEMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBa0J0QixDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbEM7U0FDRDtJQUNGLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTyx5Q0FBZTs7OztJQUF2QjtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVPLGdEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsUUFBZ0I7UUFDOUMsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFTyxvQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsUUFBZ0I7UUFDbEMsT0FBTyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLHlDQUFlOzs7OztJQUF2QixVQUF3QixhQUFxQjtRQUM1QyxPQUFPLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Ozs7OztJQUVPLHVDQUFhOzs7Ozs7SUFBckIsVUFBc0IsUUFBZ0IsRUFBRSxLQUFhO1FBQ3BELE9BQU8sUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFUyxrQ0FBUTs7Ozs7SUFBbEIsVUFBbUIsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRVMscUNBQVc7Ozs7O0lBQXJCLFVBQXNCLFNBQWlCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O3dCQTdFQSxLQUFLOzJCQUdMLEtBQUs7MEJBR0wsS0FBSzs0QkFHTCxLQUFLOztJQXFFUCxzQkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBaEZxQixlQUFlOzs7SUFFcEMsZ0NBQ2tCOztJQUVsQixtQ0FDc0I7O0lBRXRCLGtDQUNpQjs7SUFFakIsb0NBQ21COztJQUVuQiw0QkFBVTs7SUFFVix3Q0FBc0I7O0lBRXRCLHdDQUFzQjs7SUFFdEIscUNBQW1COzs7OztJQUVHLHFDQUFnQzs7Ozs7SUFDL0MsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0U3Bpbm5lciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyID0gNTtcblxuXHRASW5wdXQoKVxuXHRkaWFtZXRlcjogbnVtYmVyID0gOTA7XG5cblx0QElucHV0KClcblx0cHJpbWFyeTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWNvbmRhcnk6IGJvb2xlYW47XG5cblx0cjogbnVtYmVyO1xuXG5cdGNpcmN1bWZlcmVuY2U6IG51bWJlcjtcblxuXHRjcm9wcGVkQ2lyY2xlOiBudW1iZXI7XG5cblx0Y2lyY2xlU2l6ZTogbnVtYmVyO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZUNpcmNsZSgpO1xuXG5cdFx0aWYgKGNoYW5nZXMucHJpbWFyeSkge1xuXHRcdFx0aWYgKHRoaXMucHJpbWFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKCdndWktcHJpbWFyeScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXByaW1hcnknKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5zZWNvbmRhcnkpIHtcblx0XHRcdGlmICh0aGlzLnNlY29uZGFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVDaXJjbGUoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQ2lyY2xlKCk6IHZvaWQge1xuXHRcdHRoaXMuY2lyY3VtZmVyZW5jZSA9IHRoaXMuY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZSh0aGlzLmRpYW1ldGVyKTtcblx0XHR0aGlzLnIgPSB0aGlzLmNhbGN1bGF0ZVIodGhpcy5kaWFtZXRlcik7XG5cdFx0dGhpcy5jcm9wcGVkQ2lyY2xlID0gdGhpcy5jYWxjdWxhdGVEYXNoZXModGhpcy5jaXJjdW1mZXJlbmNlKTtcblx0XHR0aGlzLmNpcmNsZVNpemUgPSB0aGlzLmNhbGN1bGF0ZVNpemUodGhpcy5kaWFtZXRlciwgdGhpcy53aWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUNpcmN1bWZlcmVuY2UoZGlhbWV0ZXI6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRpYW1ldGVyICogTWF0aC5QSTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUihkaWFtZXRlcjogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGlhbWV0ZXIgLyAyO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVEYXNoZXMoY2lyY3VtZmVyZW5jZTogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gY2lyY3VtZmVyZW5jZSAqIDAuMjU7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNpemUoZGlhbWV0ZXI6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRpYW1ldGVyICsgd2lkdGg7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19