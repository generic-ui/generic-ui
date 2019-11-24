/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
var Indicator = /** @class */ (function () {
    function Indicator(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.outline = false;
        this.PRIMARY_CLASS_NAME = 'gui-primary';
        this.SECONDARY_CLASS_NAME = 'gui-secondary';
        this.OUTLINE_CLASS_NAME = 'gui-outline';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    Indicator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.primary) {
            if (this.primary) {
                this.addClass(this.PRIMARY_CLASS_NAME);
            }
            else {
                this.removeClass(this.PRIMARY_CLASS_NAME);
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass(this.SECONDARY_CLASS_NAME);
            }
            else {
                this.removeClass(this.SECONDARY_CLASS_NAME);
            }
        }
        if (changes.outline) {
            if (this.outline) {
                this.addClass(this.OUTLINE_CLASS_NAME);
            }
            else {
                this.removeClass(this.OUTLINE_CLASS_NAME);
            }
        }
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    Indicator.prototype.addClass = /**
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
    Indicator.prototype.removeClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    Indicator.propDecorators = {
        primary: [{ type: Input }],
        secondary: [{ type: Input }],
        outline: [{ type: Input }]
    };
    return Indicator;
}());
export { Indicator };
if (false) {
    /** @type {?} */
    Indicator.prototype.primary;
    /** @type {?} */
    Indicator.prototype.secondary;
    /** @type {?} */
    Indicator.prototype.outline;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.PRIMARY_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.SECONDARY_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.OUTLINE_CLASS_NAME;
    /**
     * @type {?}
     * @protected
     */
    Indicator.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    Indicator.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiYnV0dG9ucy1pbmRpY2F0b3JzL2luZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7QUFFNUU7SUFlQyxtQkFBZ0MsVUFBc0IsRUFDckMsUUFBbUI7UUFESixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQcEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVSLHVCQUFrQixHQUFHLGFBQWEsQ0FBQztRQUNuQyx5QkFBb0IsR0FBRyxlQUFlLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsYUFBYSxDQUFDO0lBSXBELENBQUM7Ozs7O0lBRUQsK0JBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBRWpDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUMxQztTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQzVDO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDMUM7U0FDRDtJQUNGLENBQUM7Ozs7OztJQUVTLDRCQUFROzs7OztJQUFsQixVQUFtQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFUywrQkFBVzs7Ozs7SUFBckIsVUFBc0IsU0FBaUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7MEJBbERBLEtBQUs7NEJBR0wsS0FBSzswQkFHTCxLQUFLOztJQTZDUCxnQkFBQztDQUFBLEFBckRELElBcURDO1NBckRxQixTQUFTOzs7SUFFOUIsNEJBQ2lCOztJQUVqQiw4QkFDbUI7O0lBRW5CLDRCQUN5Qjs7Ozs7SUFFekIsdUNBQW9EOzs7OztJQUNwRCx5Q0FBd0Q7Ozs7O0lBQ3hELHVDQUFvRDs7Ozs7SUFFOUIsK0JBQWdDOzs7OztJQUMvQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbmRpY2F0b3Ige1xuXG5cdEBJbnB1dCgpXG5cdHByaW1hcnk6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2Vjb25kYXJ5OiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFBSSU1BUllfQ0xBU1NfTkFNRSA9ICdndWktcHJpbWFyeSc7XG5cdHByaXZhdGUgcmVhZG9ubHkgU0VDT05EQVJZX0NMQVNTX05BTUUgPSAnZ3VpLXNlY29uZGFyeSc7XG5cdHByaXZhdGUgcmVhZG9ubHkgT1VUTElORV9DTEFTU19OQU1FID0gJ2d1aS1vdXRsaW5lJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wcmltYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmltYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5QUklNQVJZX0NMQVNTX05BTUUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyh0aGlzLlBSSU1BUllfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuc2Vjb25kYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5zZWNvbmRhcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLlNFQ09OREFSWV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5TRUNPTkRBUllfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMub3V0bGluZSkge1xuXHRcdFx0aWYgKHRoaXMub3V0bGluZSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMuT1VUTElORV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3ModGhpcy5PVVRMSU5FX0NMQVNTX05BTUUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG59XG4iXX0=